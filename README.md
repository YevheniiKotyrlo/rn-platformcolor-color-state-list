# rn-platformcolor-color-state-list

On Android, `PlatformColor('?attr/textColorPrimary')` paints nothing: the attribute resolves to a ColorStateList, and `ColorPropConverter` returns the resolved `TypedValue`'s `data` as if it were a colour. This repository is [React Native's reproducer template](https://github.com/react-native-community/reproducer-react-native) (React Native 0.88.1, its `AppTheme` a `Theme.AppCompat.DayNight.NoActionBar`) with one change, `ReproducerApp/App.tsx`: two 96×96 boxes on a grey (`#808080`) screen, the first painted with `PlatformColor('?attr/textColorPrimary')`, a ColorStateList, and the second with `PlatformColor('?attr/colorAccent')`, a colour.

## Steps

1. Clone and install:
   ```sh
   git clone https://github.com/YevheniiKotyrlo/rn-platformcolor-color-state-list
   cd rn-platformcolor-color-state-list/ReproducerApp
   yarn install
   ```
2. Build and install the app on an Android device: `yarn android`, or `cd android && ./gradlew assembleRelease` and `adb install -r app/build/outputs/apk/release/app-release.apk`.
3. Open it and look at the two boxes.

Expected: the first box in the theme's primary text colour (white in dark mode, near-black in light mode), the second in its accent.

What I see on a Galaxy S23 (Android 14): the second box is the theme's accent (`#80cbc4` dark, `#008577` light), and the first box shows the grey screen through it in both modes.
