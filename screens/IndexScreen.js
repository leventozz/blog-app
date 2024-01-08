import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons';

export default function IndexScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);

  //one time request
  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('focus', () => 
    {
      getBlogPosts();
    });
    return () => { listener.remove(); }
  }, []);

  //everytime request
  //useEffect(() => {
  //  getBlogPosts();
  //})

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Blog', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title}
                </Text>
                <TouchableOpacity>
                  <AntDesign name="delete" size={24} color="black" onPress={() => deleteBlogPost(item.id)} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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