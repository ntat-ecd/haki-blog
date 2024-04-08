import { useState } from 'react';

import useFetch from './useFetch';
import BlogList from './BlogList';
const Home = () => {
  
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    return (

        <div className="Home">
            <h2>Homepage</h2>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs'/>}
        </div>

    );
}

export default Home;