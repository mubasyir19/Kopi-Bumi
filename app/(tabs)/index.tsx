import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View style={styles.main}>
      <SafeAreaView>
        <View style={styles.hero}>
          <View style={styles.title}>
            <Text style={styles.welcome}>Selamat Datang, </Text>
            <Text style={styles.name}>Mahdy</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#046963',
  },
  hero: {
    padding: 20,
  },
  title: {
    flexDirection: 'row',
    gap: 8,
  },
  welcome: {
    color: 'white',
    fontSize: 24,
  },
  name: {
    color: 'white',
    fontWeight: 600,
  },
});
