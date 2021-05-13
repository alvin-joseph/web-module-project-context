import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import useLocalStorage from './hooks/useLocalStorage';

//Context
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage("books", []);

	const addItem = item => {
		setCart([...cart, item]);
		//console.log(item);
	};

	const removeFromCart = (book) => {
		setCart(cart.filter((b) => b.id !== book.id));
	};

	return (
		<div className="App">
			<CartContext.Provider value={{cart, removeFromCart}}>
				<Navigation />

					{/* Routes */}
				<ProductContext.Provider value={{products, addItem }}>
					<Route exact path="/">
						<Products />
					</Route>
				</ProductContext.Provider>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
