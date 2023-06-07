import { styles } from './styles'
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'
import { useState } from 'react'


export function Home() {
  const [participants, setParticipants] = useState<string[]>(['John'])
  const [participantName, setParticipantName] = useState<string>('')

  function handleAddParticipant() {  
    if (participants.includes(participantName)) {
      return Alert.alert('Esse nome já está na lista.')
    }

    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((prevState) => prevState.filter(item => item !== name))
          Alert.alert('Deletado.')
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])

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
          onChangeText={setParticipantName}
          value={participantName}
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