import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Participant() {
  function handleNewParticipant(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Lucas Galaxy
      </Text>

      <TouchableOpacity
          style={styles.button}
          onPress={handleNewParticipant}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}