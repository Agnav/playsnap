// Set to track already processed API URLs
const processedUrls = new Set();
let passTitle = "";
let playlist = [];
let isPlaylist = true;

function transformURL(url) {
  const urlObj = new URL(url);
  urlObj.hostname = 'aac.saavncdn.com';
  urlObj.search = ''; // Remove query parameters by setting search to an empty string
  return urlObj.toString();
}

function downloadFullFile(url, title) {
  fetch(url, { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.blob(); // Get the file as a Blob
    })
    .then((blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result;
        chrome.downloads.download({
          url: base64data,
          filename: `Saavn-auto-media-downloaded-music/${title}.mp3`, 
          conflictAction: "overwrite", // Handle conflicts
        });
      };
      reader.readAsDataURL(blob); // Convert Blob to Data URL
    })
    .catch((error) => console.error("Error downloading file:", error));
}

chrome.webRequest.onCompleted.addListener(
  (details) => {
    const { url, responseHeaders } = details;
    let contentType = null;
    if (responseHeaders) {
      const contentTypeHeader = responseHeaders.find(
        (header) => header.name.toLowerCase() === "content-type"
      );
      if (contentTypeHeader) contentType = contentTypeHeader.value;
    }

    if (
      (details.url.includes("https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails") || 
       details.url.includes("https://www.jiosaavn.com/api.php?__call=playlist.getDetails")) && 
      !processedUrls.has(details.url))
     {
      processedUrls.clear();
      processedUrls.add(details.url);
      isPlaylist = true;
      fetch(details.url)
        .then(response => response.json())
        .then(data => {
          playlist = data.list;  // Extract playlist details from the response
          console.log("Playlist fetched:", playlist);
        })
        .catch(error => {
          console.error("Error fetching JioSaavn API response: ", error);
        });
    } 
    else if (details.url.includes("https://www.jiosaavn.com/api.php?__call=song.getDetails") && !processedUrls.has(details.url)) {
      processedUrls.clear();
      processedUrls.add(details.url);
      isPlaylist = false;
      fetch(details.url)
        .then(response => response.json())
        .then(data => {
          passTitle = data.songs[0].title; // Extract title from the response
        })
        .catch(error => {
          console.error("Error fetching JioSaavn API response: ", error);
        });
    }

    if (details.url.includes("https://www.jiosaavn.com/api.php?__call=song.generateAuthToken") && !processedUrls.has(details.url)) {
      processedUrls.add(details.url);
      fetch(details.url)
        .then(response => response.json())
        .then(data => {
          const authURL = data.auth_url;  // Extract authentication url from the response
          const searchURL = transformURL(authURL);
          if (!isPlaylist) {
            downloadFullFile(searchURL, passTitle);
            console.log("Passtitle", passTitle); // Log after downloading the song
          } else {
            const urlObj = new URL(details.url);
            const params = new URLSearchParams(urlObj.search);
            const encryptedUrl = params.get("url");

            // Ensure playlist is populated before looping through it
            if (playlist.length > 0){
            playlist.forEach(songs => {
              const encryptedMediaUrl = songs.more_info.encrypted_media_url;
              if (encryptedMediaUrl === encryptedUrl) {
                passTitle = songs.title;
                downloadFullFile(searchURL, passTitle);
                console.log("Passtitle", passTitle); // Log after finding the correct song in the playlist
              }
            });
          }
        }
      })
        .catch(error => {
          console.error("Error fetching JioSaavn API response: ", error);
        });
    }
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);
