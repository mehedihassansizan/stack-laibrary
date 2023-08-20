/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.b);
    const blength = props.b.length;
    const {blog_title} = props.b;

    return (
        <div className='b-cart'>
            <h1>{blog_title}</h1>
        </div>
    );
};

export default Cart;