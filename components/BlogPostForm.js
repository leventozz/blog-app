import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (
        <View>
            <Text>Title:</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text>Tell us your story:</Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <TouchableOpacity>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})