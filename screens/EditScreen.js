import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

export default function EditScreen({ route, navigation }) {
  const { state, updateBlogPost } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
  const id = route.params.id
  return (
    <BlogPostForm
    isEdit={true}
      initialValues={{
        title: blogPost.title,
        content: blogPost.content
      }}
      onSubmit={(title,content)=> {
        updateBlogPost(id,title,content, ()=>navigation.pop() )
      }}
    />
  )
}

const styles = StyleSheet.create({})