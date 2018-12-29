import React from 'react';
import './Card.css';

const Card = (props) => {

	return(
		<div className = 'tile hvr-grow pt3'>
			<h1> {props.one} </h1>
			<h2> {props.two} </h2>
			<h2> {props.three} </h2>
			<h3> {props.four} </h3>
		</div>

		);
}

export default Card;