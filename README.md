## FilmApp

####Requirements:

- uninstall the legacy react-native-cli

```sh
$ npm uninstall -g react-native-cli
$ npm i -g @react-native-community/cli
```

#### Adding project dependencies

```sh
$ npm install
```

#### Adding ios dependencies

```sh
$ cd ios
$ pod install
```

#### Adding React Native Paper

```sh
$ npm install react-native-paper
$ npm install react-native-vector-icons
```

#### Link React Native Paper

then link the react native vector icons

```sh
$ react-native link react-native-vector-icons
```

#### Run App

To run the app

```sh
$ npm run android
```

or

```sh
$ npm run ios
```
