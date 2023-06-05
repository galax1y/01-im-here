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