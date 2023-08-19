/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Bookmark_cart.css';

const Bookmark_cart = (props) => {
    const {length} =props.Nblog;
    const blog = props.Nblog;

    let readTime = 0;
    for (const b of blog) {
        readTime += b.read_time;
    }

    // console.log(readTime);
    return (
        <div className='bookmark-cart'>
            <div className='spent-time'>
                <h2>Spent time on read : {readTime} min</h2>
            </div>
            <div className='cart'>
                <h2 className='cart-tittle'>Bookmarked Blogs :{}</h2>
            </div>
        </div>
    );
};

export default Bookmark_cart;