# React Native WyreSDK support

This is a demo app to showcase the usage of the Wyre SDK on React Native.

## How to use 

### Update your WyreSDK API key

Edit the App.js file and update the apiKey value at line 34.

### Start Ganache

The WyreSDK needs to communicate to a Web3 provider, for that purpose one can use the ganache-cli tool (https://github.com/trufflesuite/ganache-cli). Install ganache-cli and start as follow:
```
$ ganache-cli
```

### Run React Native app

```
$ git clone https://github.com/ademcan/react-native-wyre-sdk-demo
$ cd react-native-wyre-sdk-demo
$ npm i
$ react-native start
$ react-native run-ios
```

## Useful resources

- https://github.com/brunobar79/react-native-web3-webview
- https://gist.github.com/dougbacelar/29e60920d8fa1982535247563eb63766
- https://hackernoon.com/bringing-the-blockchain-to-react-native-98b76e15d44d