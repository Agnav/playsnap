<img src="assets/audio-waves.png" width="200" />


# 🎶 Play Snap 🎶

**Play Snap** is a browser extension that automatically downloads songs as you stream them on JioSaavn. The extension listens for specific API calls and downloads the media directly to your system in MP3 format.

---

## 📚 Project Overview

Play Snap is designed to make it easier for users to download songs while streaming them on JioSaavn. It automates the process of downloading the songs by listening to JioSaavn's API calls and triggering the download when a song is being streamed.

---

## 💡 Features

- **🎧 Automatic Download**: The extension listens to JioSaavn API calls and automatically triggers song downloads when available.
- **🎶 Playlist Support**: Supports both individual songs and playlist-based music downloads.
- **📂 Download Management**: Downloads songs in M4A format and handles overwrites if a file already exists.
- **🔒 Secure API Handling**: Fetches authentication tokens and handles song download securely.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: JavaScript (for background processing)
- **Other Tools**: Chrome Extensions API, Web Requests, API Handling

---

## 🚀 How to Install

1. Clone this repository to your local machine or download the zip file:
   ```bash
   git clone https://github.com/Agnav/playsnap.git
   ```

2. Open Chrome and navigate to `chrome://extensions`.

3. Enable **Developer mode** by toggling the switch in the top right corner.

4. Click **Load unpacked** and select the folder where you cloned the project.

5. Once loaded, the extension icon will appear in your Chrome toolbar.

- view [assets](assets) for installation images 
---

## 🎯 How It Works

The extension listens for certain API calls from JioSaavn, specifically:

- **📀 Album/Playlist Details**: When a playlist or album is accessed, the extension retrieves the list of songs.
- **🎶 Song Details**: When the details of a song are accessed, it prepares the song for download.
- **🔑 Auth Token Generation**: Once an authentication token is fetched, it will use that to initiate the song download and save it in the MP3 format.

---

## 🐞 Known Issues

- The extension only works with JioSaavn and may not work with other music streaming platforms.
- There may be occasional issues if the playlist or song details are not properly fetched.If so just restart the extension as well as the JioSaavn website.

---

## 🤝 Contributing

Feel free to fork the repository and submit pull requests. If you find any issues, please open an issue in the GitHub repository.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌟 Future Enhancements

- **🔗 Multiple Platform Support**: Extend functionality to support other music streaming platforms.
- **🎵 Batch Downloading**: Add support for batch downloading of songs from playlists.
- **⚡ Download Speed Optimization**: Work on improving the download speed and handling larger files.

---

## 🙌 Acknowledgments

- Thanks to the open-source community for providing the tools and resources to build this project.
- Sound waves icons created by Arkinasi - [Flaticon](https://www.flaticon.com/free-icon/audio-waves_10181172?term=sound+waves&page=1&position=10&origin=tag&related_id=10181172)

---

Feel free to suggest improvements or contribute to this project! 😊

