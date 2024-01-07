import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons';

export default function IndexScreen() {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Button
        title='Add New Blog Post'
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <TouchableOpacity>
                <AntDesign name="delete" size={24} color="black" onPress={() => deleteBlogPost(item.id)} />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  }
})