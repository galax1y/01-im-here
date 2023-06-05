import { styles } from './styles'
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'


export function Home() {
  const participants = ['Lucas', 'Vitor', 'Pablo', 'Alisson', 'John', 'Alyssa', 'Leana']

  function handleAddParticipant() {
    console.log('novo participante')
    if (participants.includes("Lucas")) {
      return Alert.alert('Deu ruim')
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          Alert.alert('Deletado.')
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])

    console.log('remover participante', name)
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
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
          )}
        ListEmptyComponent={() => {
          return (
          <Text style={styles.emptyListText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.  
          </Text>
          )
        }}
      />
    </View>
  )
}