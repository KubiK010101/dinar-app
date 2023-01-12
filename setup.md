Installation instructions:

1. Make sure you have set up React Native on your machine correctly via this guide: https://reactnative.dev/docs/environment-setup
2. Run the following command in the project's root directory: "npm install" , also run "npx-pod install" for iOS
3. go to ./node_modules/react-native-pdf/index.js and then replace import ReactNativeBlobUtil from "react-native-blob-util" To import ReactNativeBlobUtil from "rn-fetch-blob"

4. Now you can run the project via npx react-native run-ios or -android
