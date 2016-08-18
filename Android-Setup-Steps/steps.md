Steps

**Create and Configure Project**

-run react-native init <ProjectName>

-open project in text editor

-open `android/local.properties`. Specify path to Android SDK: `sdk.dir=/Users/<yourUsername>/Library/Android/sdk`

**Install all the things**

-Install Java (`brew install Caskroom/versions/java7`)

-Install Android Studio.

-Open SDK Manager on Android Studio (Tools > Android > SDK Manager). 

-Run the Standalone SDK Manager using the link below the list of SDKs.

-Install your preferred Android version (for us, it was Android 6.0 API 23). WARNING: These files are HUGE. DO NOT install wearable or TV packages.

-Install ALL BUILD TOOLS for whatever Android version you're using. 


ERROR AT THIS POINT: * What went wrong:
Execution failed for task ':app:installDebug'.
> com.android.builder.testing.api.DeviceException: No connected devices!

-Install Virtual Box (virtualbox.org) and Genymotion (genymotion.com). Genymotion creates a virtual Android emulator. Virtual Box allows you to run Android OS on your Mac.

**Run all the things**

-After installing genymotion, go to Settings and select the ADB tab. Select 'Use custom Android SDK tools' and enter the path specified in your local.properties file.

-Add the actual virtual device that runs the version of Android the you have installed. (For us, Android API 23).

-Double click that device to run the emulator.

-Finally, run react-native run-android. The build should succeed. If it failed, you're in for a long day. If the installation of the virtual box freezes anywhere, restart your system and start again.
