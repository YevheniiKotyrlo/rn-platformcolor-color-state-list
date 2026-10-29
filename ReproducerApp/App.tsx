import { PlatformColor, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>?attr/textColorPrimary, a ColorStateList</Text>
      <View
        testID="text-color-primary"
        style={[styles.box, { backgroundColor: PlatformColor('?attr/textColorPrimary') }]}
      />
      <Text style={styles.label}>?attr/colorAccent, a colour</Text>
      <View
        testID="color-accent"
        style={[styles.box, { backgroundColor: PlatformColor('?attr/colorAccent') }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
    gap: 12,
    backgroundColor: '#808080',
  },
  label: {
    color: '#000000',
  },
  box: {
    width: 96,
    height: 96,
  },
});

export default App;
