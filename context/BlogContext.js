import React, {useState} from "react";


const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

    const blogPosts =[{title:'React Native'},{title:'Javascript'}];
    const [posts, setPosts] = useState(blogPosts);
    const addBlogPost = ()=>{
        setPosts([...posts, {title: 'Vue Js'}]);
    }

    return <BlogContext.Provider value={{data:posts, addBlogPost}}>{children}</BlogContext.Provider>
};

export default BlogContext;