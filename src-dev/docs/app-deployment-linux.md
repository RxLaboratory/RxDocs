# Deploy linux applications

TODO:
virtual box for unbuntu 18.04
-> add user to vboxsf group to access shared folders `sudo adduser $USER vboxsf`
-> install C++ ccompiler `sudo apt install g++`
-> install xcb platform needed by qt: `sudo apt install libxcb-xinerama0`
-> install libgl-dev needed by qt: `sudo apt install libgl-dev`
-> install Qt (5.9.9)

At RxLaboratory, we deploy linux applications in two formats: *Deb* packages for *Debian/Ubuntu*, and *AppImage* files for other distributions.

Let's assume the application has already been built and consists in at least one executable binary. This is the procedure to follow to deploy the application.

!!! Warning
    To ensure a vast compatibility, apps have to be built and deployed at least on ***Ubuntu 18.04 Bionic Beaver*** **and not on any other more recent version**.

!!! Warning
    If the desktop file has issues, the Deb and AppImage won't be built, and for the Deb, dpkg will not warn about the issue. It may be easier to start with the AppImage to make sure the desktop file works, or have some info about what may be wrong.

## Install a virtual machine to build and test on older distros

- Download and install [*Virtual Box*](https://www.virtualbox.org/wiki/Linux_Downloads)  
    Note that it may be easier and better to follow the procedure to add their package repo.
- Download and install [*Ubuntu*](https://ubuntu.com/download/alternative-downloads) (or any other distro) on a VM.  
    Next steps are inside the VM.
- Add the user to the vboxsf group (needed to access shared folders): `sudo adduser $USER vboxsf`

If this machine is used for building applications

- Install a c++ compiler: `sudo apt install g++`
- Install libxcb needed by Qt: `sudo apt install libxcb-xinerama0`
- Install libgl-dev needed by qt: `sudo apt install libgl-dev`
- Install [Qt](http://qt.io) (*5.9.9* on Ubuntu 18.04 for best compatibility)

## Deb packages

When updating an existing package, you can just update the changelog and jump to the 4th section.

### 1. Create the file and folder structure

Example:

```
AppName-Deb
|- DEBIAN
   control
|- usr
  |- bin
     AppName
   |- share
      |- applications
         AppName.desktop
      |- doc
         |- AppName
            changelog
            copyright
      |- icons
         |- hicolor
            |- 24x24
               |- apps
                  AppName.png
            |- 32x32
               |- apps
                  AppName.png
            |- 48x48
               |- apps
                  AppName.png
            |- 128x128
               |- apps
                  AppName.png
            |- 256x256
               |- apps
                  AppName.png
```
An empty folder structure is available in `RAINBOX/ADMIN/DEV/00 - Docs/LINUX/Build Deb Package/Example-Package-Folder`

### 2. Edit the `usr/share/applications/*.desktop` file.

Example:
```
[Desktop Entry]
Type=Application
Name=AppName
GenericName=Media Encoder
Comment=The Duduf Media Encoder, a fast, easy-to-use, versatile media encoder.
Exec=AppName
Icon=AppName
MimeType=video/*;audio/*;image/*;
Categories=AudioVideo;Audio;Video;AudioVideoEditing;
```

[The list of Main Categories is available here](https://specifications.freedesktop.org/menu-spec/latest/apa.html), which can be completed by [the list of Additional Categories](https://specifications.freedesktop.org/menu-spec/latest/apas02.html).

The mime type is optional. A [list of mime types is available here](https://www.lifewire.com/file-extensions-and-mime-types-3469109).

### 3. Edit the `usr/share/doc/AppName/copyright` file

Example:

```
Format: https://www.debian.org/doc/packaging-manuals/copyright-format/1.0/
Upstream-Name: DuME The Duduf Media Encoder
Source: https://github.com/Rainbox-dev/DuME

Files: *
Copyright: 2017-2020 Nicolas Dufresne
License: GPL-3+
 This program is free software; you can redistribute them and/or modify them under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
 .
 This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY
 .
 On Debian systems, the full text of the GNU General Public License version 2 can be found in the file `/usr/share/common-licenses/GPL-2'.
```

### 4. Edit the `DEBIAN/control` file.

Example:
```
Package: DuME
Version: 0.1.2
Architecture: amd64
Essential: no
Section: video
Priority: optional
Depends: ffmpeg (>=4.0), qt5-default
Maintainer: Duduf
Installed-Size: 6900
Description: A fast, easy-to-use and versatile media encoder.
Homepage: https://rainboxlab.org/tools/dume/
```

The `section` can be one of: admin, cli-mono, comm, database, debug, devel, doc, editors, education, electronics, embedded, fonts, games, gnome, gnu-r, gnustep, graphics, hamradio, haskell, httpd, interpreters, introspection, java, javascript, kde, kernel, libdevel, libs, lisp, localization, mail, math, metapackages, misc, net, news, ocaml, oldlibs, otherosfs, perl, php, python, ruby, rust, science, shells, sound, tasks, tex, text, utils, vcs, video, web, x11, xfce, zope.  
The additional section debian-installer contains special packages used by the installer and is not used for normal Debian packages.

`Installed-Size` should be the size of the `usr` folder in the package, in kB. The disk space is given as the integer value of the estimated installed size in bytes, divided by 1024 and rounded up.

See [this page on debian.org](https://www.debian.org/doc/debian-policy/ch-controlfields.html) for more details.

### 5. Generate md5sums

Run this command from the root of the package folder:

```bash
find . -type f ! -regex '.*.hg.*' ! -regex '.*?debian-binary.*' ! -regex '.*?DEBIAN.*' -printf '%P ' | xargs md5sum > DEBIAN/md5sums
```

### 6. Build deb package

Run this command:

```bash
chmod 755 folder/DEBIAN
dpkg -b folder app-0.0.0-amd64.deb
```

!!! warning
    The `chmod` command won't work on NTFS file systems. Therefore, the *Deb* package can only be built on a linux file system.

    Here is a bash script to automate the last two steps:

```sh
#!/bin/bash

# usage: ./deploy-deb AppName
# The deb folder must be named "AppName-Deb" and located next to the script

# generate md5sums
cd "$1-Deb"
find . -type f ! -regex '.*.hg.*' ! -regex '.*?debian-binary.*' ! -regex '.*?DEBIAN.*' -printf '%P ' | xargs md5sum > DEBIAN/md5sums

# chmod 
chmod 755 DEBIAN
# build
cd ..
dpkg -b "$1-Deb" "$1.deb"
```

## AppImage

### 1. Create the file and folder structure

This is the same as for Deb packages, except the DEBIAN control folder is not needed.

### 2. Build using the `linuxdeployqt` utility

Run this command using a [`linuxdeployqt`](https://github.com/probonopd/linuxdeployqt/releases) appImage. Replace `desktopFile` with the path to the desktop file inside the Deb package.

```bash
./linuxdeployqt-6-x86_64.AppImage desktopFile -unsupported-allow-new-glibc -always-overwrite -appimage -no-translations -qmake=/home/duduf/Qt/5.9.9/gcc_64/bin/qmake -extra-plugins=iconengines,platformthemes/libqgtk3.so
```

!!! Note
    Make sure the application has been built with a version of Qt with an available `qmake` bin, and it's the correct one in the command above.
