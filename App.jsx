// import { useState } from 'react'

// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.jsx'
import Card from './Cart.jsx';
import {CartProvider}  from "react-use-cart";
import CheckOutForm from './CheckOutForm.jsx';

// function App() {


//   return (
//     <>
//       <CartProvider>
//         <Home/>
//         <Card/>


        
//         <CheckoutForm/>
//         {/* <FormData/> */}
//       </CartProvider>
//     </>
//   )
// }

// export default App





import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './ShoppingCart';
import Cart from './Cart';
import CheckoutForm from './CheckOutForm';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleBuyNow = () => {
        setShowForm(true);
    };

    const handleClearCart = () => {
        setCartItems([]);
        setShowForm(false); // Hide the form when clearing the cart
    };

    const handleFormSubmit = (formData) => {
        console.log('Form submitted from CheckoutForm:', formData);
        // Implement logic to handle form submission, e.g., send data to backend
        setShowForm(false); // Hide the form after submission
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (

        <div className="App">
            <div className="container">


            <CartProvider>
               <Home/>
               <Cart   onBuyNow={handleBuyNow}/>
                 {/* <Card/> */}
         </CartProvider>
                <ShoppingCart
                    cartItems={cartItems}
                    totalAmount={totalAmount}
                    onBuyNow={handleBuyNow}
                    onClearCart={handleClearCart}

                />
                
                
                {showForm && (
                    <CheckoutForm
                        totalAmount={totalAmount}
                        onHideForm={() => setShowForm(false)}
                        onSubmitForm={handleFormSubmit}
                    />

                )}
            </div>
        </div>
    );
};

export default App;







