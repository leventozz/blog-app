import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm({onSubmit, initialValues}) {

    const [title, setTitle] = useState(initialValues ? initialValues.title : '')
    const [content, setContent] = useState(initialValues ? initialValues.content : '')
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Tell us your story:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
                multiline
                numberOfLines={8}
            />
            <TouchableOpacity
                style={styles.buttonMain}
                onPress={()=> onSubmit(title, content) }
            >
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Save</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    label: {
        fontSize: 25,
        marginLeft: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        marginBottom: 15,
        padding: 5,
        fontSize: 18,
        textAlignVertical: 'top',
    },
    buttonMain: {
        padding: 20
    },
    buttonView: {
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
})