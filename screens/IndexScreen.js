import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>HomeScreen </Text>
      <Button
        title='Add'
        onPress={addBlogPost}
      />
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>
            {item.title}
          </Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})