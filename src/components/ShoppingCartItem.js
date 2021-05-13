import React from 'react';

const Item = props => {
	
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			{console.log(props.item)}


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeFromCart(props.item)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
