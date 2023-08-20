/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Bookmark_cart.css';
import Cart from '../Cart/Cart';

const Bookmark_cart = (props) => {
    const {length} =props.Nblog;
    const blog = props.Nblog;

    const Bblog = props.Bblog;
    // console.log(Bblog)
    const Blength = props.Bblog.length;

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
                <h2 className='cart-tittle'>Bookmarked Blogs : {Blength}</h2>
                <div id='add-cart' className='add-cart'>
                    {
                        Bblog.map(b => <Cart key={b.id} b={b}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmark_cart;