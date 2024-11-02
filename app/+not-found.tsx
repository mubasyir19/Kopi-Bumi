import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>This screen doesn't exist.</View>
    </>
  );
}

const styles = StyleSheet.create({});
