import { styles } from './styles'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'


export function Home() {
  function handleNewParticipant() {
    console.log('novo participante')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleNewParticipant}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />


      {/* <View>
        {participants.map((participant) => {
          return (
            <Text key={participant}>
              {participant}
            </Text>
          )
        })}
      </View> */}
    </View>
  )
}