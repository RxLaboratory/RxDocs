# Deploy Mac applications

Mac Applications are deployed as a `.dmg` image.

[TOC]

## Create App Icon

Create an `name.iconset` folder, with these `png` icons:

```
name.iconset
├── icon_1024x1024.png
├── icon_128x128@2x.png
├── icon_16x16@2x.png
├── icon_256x256.png
├── icon_256x256@2x.png
├── icon_32x32.png
├── icon_32x32@2x.png
├── icon_512x512.png
├── icon_512x512@2x.png
└── icon_64x64.png
```

Run `iconutil -c icns name.iconset` which will generate the icon `name.icns`

### Add the icon to the build with qmake

Add this line to the `.pro` file and run `qmake`

`ICON = path/to/name.icns`

### Add the icon to an already packaged app

1. Copy the `name.icns` file to the `.app` package, in `Name.app/Contents/Resources/`

2. Add these to the `<dict>` in `Name.app/Info.plist`

```xml
<key>CFBundleIconFile</key>
<string>appIcon.icns</string>
```

## Deploy with Qt and create dmg

Let's assume the application has already been built and bundled (by Qt).

`path/to/Qt/bin/./macdeployqt path/to/AppName.app -dmg`
