import React, { useContext } from 'react';
import { View, Text, Style, StyleSheet, FlatList } from 'react-native';
import BlogContext, { BlogProvider } from '../context/BlogContext';

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
