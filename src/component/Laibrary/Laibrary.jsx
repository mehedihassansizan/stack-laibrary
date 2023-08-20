/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Laibrary.css';
import Blog from '../Blog/Blog';
import Bookmark_cart from '../Bookmark_cart/Bookmark_cart';
import toast from 'react-hot-toast';


const Laibrary = () => {
    const [blogs, setBlogs] = useState([]);
    const [Nblog, setBlog] = useState([]);
    const [Bblog, setBblog] = useState([]);

    useEffect(() => {
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const markAsRead = (blog) =>{
        const newBlog = [...Nblog, blog];
        setBlog(newBlog);
    };

   
    const addToBookCart = (b) =>{
        // const addCart = [...Bblog, b];
        // setBblog(addCart);
        let newcart =[];
        const exist = Bblog.find(bg => bg.id === b.id);
        if (exist) {
            toast.error('This is already Exist!');
        }
        else{
            newcart = [...Bblog, b];
            setBblog(newcart)
        }
    }
    return (
        <div className='laibrary-container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} markAsRead={markAsRead}
                    addToBookCart={addToBookCart}></Blog>)
                }
            </div>
            <div className="bookmark-container">
                <Bookmark_cart Nblog={Nblog} Bblog={Bblog}></Bookmark_cart>
            </div>         
        </div>
    );
};

export default Laibrary;