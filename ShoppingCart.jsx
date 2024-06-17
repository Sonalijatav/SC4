









// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cartItems, totalAmount, onBuyNow, onClearCart }) => {
    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalAmount}</p>
            {/* <button className="btn btn-primary" onClick={onBuyNow}>Buy Now</button> */}
            <button className="btn btn-danger" onClick={onClearCart}>Clear Form</button>
        </div>
    );
};

export default ShoppingCart;
