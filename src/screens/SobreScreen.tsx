import { View, Text } from 'react-native';

import styles from '../styles';

export default function SobreScreen() {
  return (
    <View style={styles.containerSobre}>
      <Text style={styles.icon}>ℹ️</Text>
      <Text style={styles.titleSobre}>🌏 Países</Text>
      <Text style={styles.description}>
        Este é o aplicativo desenvolvido consumindo a API real do CountriesNow.
      </Text>
    </View>
  )
}
