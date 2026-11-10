<img src="assets/audio-waves.png" width="200" />

# 🎶 Play Snap 🎶

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=google-chrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-green?logo=google-chrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Play Snap** is a Chrome browser extension that automatically downloads songs as you stream them on JioSaavn. It listens for specific JioSaavn API calls and downloads the media directly to your system in MP3/M4A format — no manual downloading required.

---

## 📚 Project Overview

Play Snap is designed to make it easier for users to download songs while streaming them on JioSaavn. It automates the process by listening to JioSaavn's API calls (album/playlist details, song details, and auth token generation) and triggering the download when a song is being streamed.

---

## 💡 Features

- **🎧 Automatic Download** — Listens to JioSaavn API calls and automatically triggers song downloads when available.
- **🎶 Playlist Support** — Supports both individual songs and playlist-based music downloads.
- **📂 Download Management** — Downloads songs in MP3 format and handles overwrites if a file already exists.
- **🔒 Secure API Handling** — Fetches authentication tokens and handles song download securely via the Chrome Downloads API.
- **🖥️ Popup UI** — Simple extension popup with logs for tracking downloads.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Background processing**: JavaScript (Chrome Extension service worker)
- **APIs**: Chrome Extensions API (`webRequest`, `downloads`, `scripting`), JioSaavn API
- **Manifest**: Manifest V3

---

## 🚀 How to Install

1. **Clone this repository** to your local machine or download the ZIP file:
   ```bash
   git clone https://github.com/<your-username>/playsnap.git
   ```

2. **Open Chrome** and navigate to `chrome://extensions`.

3. **Enable Developer mode** by toggling the switch in the top right corner.

4. Click **Load unpacked** and select the folder where you cloned the project.

5. Once loaded, the **Play Snap** extension icon will appear in your Chrome toolbar.

6. Go to [JioSaavn](https://www.jiosaavn.com), play a song or playlist, and the extension will automatically download the media.

> 💡 See the `assets/` folder for installation screenshots.

---

## 🎯 How It Works

The extension listens for certain API calls from JioSaavn via `chrome.webRequest.onCompleted`:

| API Call | Purpose |
|----------|---------|
| `content.getAlbumDetails` / `playlist.getDetails` | Retrieves the list of songs in an album or playlist |
| `song.getDetails` | Prepares an individual song for download and extracts its title |
| `song.generateAuthToken` | Fetches an authentication token to initiate the actual media download |

Once the auth token is obtained, the encrypted media URL is transformed to the `aac.saavncdn.com` host and downloaded via `chrome.downloads.download` into the `Saavn-auto-media-downloaded-music/` folder.

---

## 🐞 Known Issues

- The extension only works with **JioSaavn** and may not work with other music streaming platforms.
- Occasional issues may arise if playlist or song details are not properly fetched. If so, restart the extension and/or refresh the JioSaavn website.

---

## 🤝 Contributing

Feel free to fork the repository and submit pull requests. If you find any issues, please open an issue in the GitHub repository.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌟 Future Enhancements

- **🔗 Multiple Platform Support** — Extend functionality to support other music streaming platforms.
- **🎵 Batch Downloading** — Add support for batch downloading of songs from playlists.
- **⚡ Download Speed Optimization** — Improve download speed and handling of larger files.

---

## 🙌 Acknowledgments

- Thanks to the open-source community for providing the tools and resources to build this project.
- Sound waves icons created by Arkinasi — [Flaticon](https://www.flaticon.com/free-icon/audio-waves_10181172?term=sound+waves&page=1&position=10&origin=tag&related_id=10181172)

Feel free to suggest improvements or contribute to this project! 😊