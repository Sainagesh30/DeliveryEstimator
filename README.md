# DeliveryEstimator


Here are the setup instructions for your React Native application, including all necessary steps to configure your development environment, clone your project from GitHub, and run it on both Android and iOS devices.

## Setup Instructions for React Native App

### Prerequisites

1. **Install Node.js and npm**:
   - Download and install Node.js from [Node.js official website](https://nodejs.org/). This will also install npm (Node Package Manager).

2. **Install Watchman (macOS only)**:
   - If you're using macOS, install Watchman to monitor changes in the filesystem:

     ```bash
     brew install watchman
     ```

3. **Install Git**:
   - Download and install Git from [Git's official website](https://git-scm.com/).

### Step 1: Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to store the project.
3. Clone your repository (replace `<username>` and `<repo-name>` with your GitHub details):

   ```bash
   git clone https://github.com/<username>/<repo-name>.git
   cd <repo-name>
   ```

### Step 2: Install Required Dependencies

1. Inside your project directory, run the following command to install dependencies:

   ```bash
   npm install
   ```

2. If you encounter any issues, you can fix them with:

   ```bash
   npm audit fix
   ```

### Step 3: Set Up Development Environment

#### For Android:

1. **Install Android Studio**:
   - Download and install [Android Studio](https://developer.android.com/studio).

2. **Configure Android SDK**:
   - Open Android Studio, go to **SDK Manager**, and ensure you have the following installed:
     - Android SDK Platform-Tools
     - Android SDK Build-Tools
     - Android Emulator
     - Android 13 Tiramisu SDK (or latest version)

3. **Set Environment Variables**:
   - Add the following lines to your `.bash_profile` or `.zshrc` file (depending on your shell):

     ```bash
     export ANDROID_HOME=$HOME/Android/Sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     ```

4. **Enable Virtualization**:
   - Make sure that virtualization is enabled in your BIOS settings.

#### For iOS (macOS only):

1. **Install Xcode**:
   - Download and install Xcode from the Mac App Store.

2. **Install Xcode Command Line Tools**:
   - Run this command in Terminal:

     ```bash
     xcode-select --install
     ```

3. **Install CocoaPods**:
   - If CocoaPods is not installed, run:

     ```bash
     sudo gem install cocoapods
     ```

4. **Open Your Project in Xcode**:
   - Navigate to the `ios` folder in your project directory and open the `.xcworkspace` file.

5. **Set Bundle Identifier**:
   - In Xcode, set a unique Bundle Identifier under the project's settings.

### Step 4: Run Your Application

#### For Android:

1. Start an emulator or connect a physical device.
2. Run the following command in your terminal:

   ```bash
   npx react-native run-android
   ```

#### For iOS (macOS only):

1. Open the iOS simulator or connect a physical device.
2. Run the following command:

   ```bash
   npx react-native run-ios
   ```

### Step 5: Start Metro Bundler

In case it doesn't start automatically, you can start Metro Bundler manually by running:

```bash
npx react-native start
```

### Conclusion

You should now have your React Native application set up and running on both Android and iOS devices! Make sure to check for any specific instructions or configurations in your project's README file if available. Happy coding!
"""
Citations:
[1] https://getstream.io/blog/react-native-android-ios-setup/
[2] https://www.educative.io/answers/how-to-create-a-new-react-native-project
[3] https://www.geeksforgeeks.org/how-to-download-a-react-project-from-github-and-run-in-my-pc/
[4] https://github.com/herrkraatz/react-native-setup
[5] https://www.tutorialspoint.com/react_native/react_native_environment_setup.htm
[6] https://docs.github.com/en/get-started/start-your-journey/uploading-a-project-to-github
[7] https://www.youtube.com/watch?v=eGaImwD8fPQ
[8] https://github.blog/developer-skills/github/beginners-guide-to-github-uploading-files-and-folders-to-github/
"""
