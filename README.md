# electron-mas-video-bug

- Install Apple certificates in your keychain and generate a Development Provisioning profile and download it as `Dev.provisionprofile` in this folder
- Update with values from Apple:
  - [package.json](package.json) `build.appId`
  - [entitlements.mas.plist](entitlements.mas.plist) `com.apple.security.application-groups`

```bash
export MAS_IDENTITY='Your identity'

yarn

npx electron-builder --mac mas-dev -c.mas.provisioningProfile=Dev.provisionprofile -c.mas.identity="$MAS_IDENTITY"

open dist/mas-dev-arm64/Test.app
```

- Select `IMG_1052.MOV`
- Observe that the window goes blank, probably flashing if you move your mouse around in the window. Not only the `<video>` goes blank but the whole rendering blanks out, even chrome dev tools stops working. Once the video is hidden or removed from the DOM, the rendering recovers.

Compare it to running in dev, where it works as expected:

```bash
npx electron main.js
```
