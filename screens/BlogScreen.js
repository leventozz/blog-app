import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'

export default function BlogScreen({ route }) {
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{blogPost.title}</Text>
      </View>
      <View style={styles.divider} />
      <View>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  container: {
    marginBottom:10,
  },
  title: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight:'bold'
  },
  content: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'black', 
    marginVertical: 8,
  }
})