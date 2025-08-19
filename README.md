# electron-mas-video-bug

## Setup

```bash
yarn
yarn package
open out/electron-mas-video-bug-forge-mas-arm64/electron-mas-video-bug-forge.app
```

Download one of the below videos. Now using the file selector, select the video. It's reproducible with HEVC 4K 10-bit videos from iPhone. Examples (from [kodi](https://kodi.wiki/view/Samples)):
- [iPhone11_4K-recorder_59.940DV+HLG.mov](https://drive.google.com/file/d/1cTRNwacsV-8J8PtcYNVDXBmGZF1SOynj/view)
- [iPhone11_4K-recorder_59.940HDR10.mov](https://drive.google.com/file/d/1Ic9DZXMSo07EJMqCFaQRKSSrSw6y1mYv/view)

Here's a similar file which does **not** reproduce the problem:
- [4K HEVC 59.940 Broadcast Capture Sample.mkv](https://drive.google.com/file/d/0BwxFVkl63-lEdVBuZkltckdZZ0k/view?resourcekey=0-k91iv2m3Plumc5jdKCbxdQ)

## Bug

Observe that the window goes completely blank (background color is still visible). It's sometimes flashing if you move your mouse around in the window. Not only the `<video>` goes blank but the whole rendering of the window content blanks out, even chrome dev tools stops working. Once the video is hidden or removed from the DOM, the rendering recovers and all content re-appears. It does not crash the app in any way, the app is still interactive, even the UI that is not being rendered is still interactive, and the video can be played back (with audio). Once the `<video>` element is removed, or the `src` is set to a different video, the rendering instantly recovers.

Compare it to running in dev, where it works as expected:

```bash
npx electron src/index.js
```
