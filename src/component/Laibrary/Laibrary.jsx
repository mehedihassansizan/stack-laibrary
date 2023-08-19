/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Laibrary.css';
import Blog from '../Blog/Blog';
import Bookmark_cart from '../Bookmark_cart/Bookmark_cart';


const Laibrary = () => {
    const [blogs, setBlogs] = useState([]);
    const [Nblog, setBlog] = useState([]);

    useEffect(() => {
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const markAsRead = (blog, id) =>{
        const newBlog = [...Nblog, blog];
        // console.log(newBlog);
        setBlog(newBlog);
        const btn = document.getElementById(id)
        btn.style.display = "none";
    }
    return (
        <div className='laibrary-container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} markAsRead={markAsRead}></Blog>)
                }
            </div>
            <div className="bookmark-container">
                <Bookmark_cart Nblog={Nblog}></Bookmark_cart>
            </div>         
        </div>
    );
};

export default Laibrary;