import { StatusBar } from 'expo-status-bar';
import { ChangeEvent, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View, ViewStyle, Linking } from 'react-native';


interface PostType{
  completed: boolean
  id: number
  title: string
  userId: number
}

export default function App() {
  const [ text, setText] = useState<string>("")
  const [ posts, setPosts ] = useState<PostType[]>([])
  const [ textInp, setTextInp ] = useState<{
    
    backgroundColor: string
  }>({
    backgroundColor: '#fff'
  })

  function onFocus() {
    setTextInp({
        backgroundColor: 'green'
    })
  }

  function onBlur() {
    setTextInp({
      backgroundColor: '#ededed'
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <TextInput style={{
          width: "290px",
          height: "24 px",
          margin: "48px",
          padding: 9,
          borderColor: 'gray',
          borderWidth: 1,
          ...textInp
          }} 
          editable
          multiline
          value={text}
          onChangeText={(text) => {
            setText(text);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        defaultValue="Привет!"/>
      </View>
      <View>
        {
          posts.map(item => {
            return(
              <View>
                <Text 
                style={{
                  borderColor: "#fff",
                  borderWidth: 2,
                  maxWidth: 230,
                  margin: 4,
                  padding: 8
                }}
              >
                {
                  item.title
                }
              </Text>
              {/* <TouchableHighlight onPress={() => {
                Linking.canOpenURL("https://reactnative.dev/docs/linking")
              }}>Learn more...</TouchableHighlight> */}
              </View>
            )
          })
        }
      </View>
      <View>
        <Button
          onPress={async() => {
            const a = await fetch('https://jsonplaceholder.typicode.com/todos')
              .then(response => response.json())
              setPosts(a);
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={async() => {
              console.log(posts);
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
