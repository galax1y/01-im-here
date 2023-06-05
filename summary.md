# React Native

O React Native centraliza as ferramentas pra desenvolvimento de ambas plataformas (Android e IOS) em uma única base código.

`<View>` é equivalente a uma `<div>`

No Android ela é o `<ViewGroup>`
No iOS ela é a `<UIView>`

O **React Native** centraliza esses elementos com o mesmo propósito, e quando é hora de fazer o build, empacota tudo o necessário e mapeia os elementos para funcionarem de maneira correspondente em ambos sistemas.

Todos os textos em React Native são mapeados com `<Text>`

No ReactNative, o **`flexbox`** já vem ativado.

## Estilização de componentes

**1. In-line**
```tsx
import { Text, View } from 'react-native'

<View style={{
  backgroundColor: '#121214',
  padding: 24,
}}>
  <Text style={{
    fontWeight: 'bold',
    fontSize: 24,
    color: '#cdcda2',
  }}>
    Hello World!
  </Text>
</View>
```

**2. Stylesheet**
```tsx
import { Text, View, StyleSheet } from 'react-native'

<View style={styles.customizedView}>
  <Text style={styles.customizedText}>
    Hello World!
  </Text>
</View>

const styles = StyleSheet.create({
  customizedView: {
    backgroundColor: '#121214',
    padding: 24,
  },
  customizedText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#cdcda2',
  }
})
```

## Componentização

Assim como no React pra web, a componentização no React Native também é importante e ajuda nos seguintes pontos:

* Reutilização de código
* Isolamento de contexto
* Legibilidade do código
* Redução da complexidade
* Padronização do projeto
* Arquivos menores
* Produtividade

## Touchables e TextInput

São alguns componentes core do React Native para interação com o usuário, segue a forma de lidar com eventos

```tsx

import { useState } from 'react'

...

function doSomething() {
  ...
}

...
  <TouchableOpacity onPress={doSomething}>

  const [text, setText] = useState<string>('')
  <TextInput onChangeText={(text) => setText(text)}}>
...
```

## ScrollView e FlatList

A **`ScrollView`** adiciona rolagem na tela quando não há espaço suficiente para renderizar os componentes.

Ela também **renderiza imediatamente todos os componentes, mesmo que não estejam na tela.**

```tsx
import { ScrollView } from 'react-native'

<ScrollView>
  {participants.map(item => {
    return (
      <Participant
        key={item}
        name={item}
        onRemove={() => handleRemoveParticipant(item)}
      />
    )
  })}
</ScrollView>
```

A **`FlatList`** também adiciona rolagem quando os componentes excedem a região demarcada.

Como contraponto essa listagem, **renderiza somente a quantidade de elementos que cabem na tela, renderiza os elementos que entram e remove itens que saem da tela.**

```tsx
import { FlatList } from 'react-native'

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
```

Assim, cabe ao desenvolvedor determinar quando usar cada uma, sendo que a **`FlatList`** é melhor opção em questão de performance para grandes listas.

Já a **`ScrollView`** é mais recomendada para menus e outras partes da aplicação com menos 'cards'. 

## Hooks (igual React da web)

Hooks encapsulam funcionalidades.

Os principais hooks são:

1. **`useState`** é um hook para criar e manipular estados.
2. **`useEffect`** é um hook para disparar lógica quando um certo evento acontecer ou um estado mudar.

Quando manipulamos variáveis no corpo do código, é necessário que seja disparado um evento para realizar re-renderização dos componentes, caso contrário, nada vai acontecer na interface visual. Então existe o hook **`useState`** que 'assiste' o valor de uma variável e quando esse valor muda, esse evento de re-renderização é disparado.