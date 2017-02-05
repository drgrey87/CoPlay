## Table of Contents

- [Install](#install)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Install

```
1) npm install -g react-native-cli
2) Download and install [Android Studio](https://developer.android.com/studio/install.html)
3) Choose Custom installation when running Android Studio for the first time. Make sure the boxes next to all of the following are checked:

  * Android SDK
  * Android SDK Platform
  * Android Virtual Device
  * Click "Next" to install all of these components, then [configure VM acceleration](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linuxhttps://developer.android.com/studio/run/emulator-acceleration.html#vm-linux) on your system.

4) Click Options → System Settings → Android SDK:
  * Select "SDK Platforms" and check:
    - Google APIs
    - Intel x86 Atom System Image
    - Intel x86 Atom_64 System Image
    - Google APIs Intel x86 Atom_64 System Image
  * Select "SDK Tools" and check:
  - Android SDK Build-Tools 23.0.1
5) click "Apply";
6) Set up the ANDROID_HOME environment:
  * export ANDROID_HOME=${HOME}/Android/Sdk
  * export PATH=${PATH}:${ANDROID_HOME}/tools
  * export PATH=${PATH}:${ANDROID_HOME}/platform-tools
7) Install Prerequisites:
  * sudo apt-get install automake
  * sudo apt-get install autoconf
  * sudo apt-get install python-dev
8) Install watchman in folder with project:
  * git clone https://github.com/facebook/watchman.git
  * cd watchman
  * git checkout v4.7.0
  * ./autogen.sh
  * ./configure
  * make
  * sudo make install
9) npm i;
10) react-native link
11) react-native run-android
```

## Troubleshooting

```
Execution failed for task ':app:compileDebugJavaWithJavac'. Could not find tools.jar:

`sudo apt-get install default-jdk`
```

## License

This project is licenced under the [MIT License](https://opensource.org/licenses/mit-license.html).