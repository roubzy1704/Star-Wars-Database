import React from 'react';


//using props and props.children we have access to cardlist component
//we then add styles to the div tag, we can create a scroll.css
//but the styles are done in here to create a box that has the overflowY
//which is the scrollable component  
const Scroll = (props) => {
	return (
		<div style ={{ overflowY: 'scroll', border: '3px solid black', 
		height: '600px'}}>
			{props.children}
		</div>
	);
};

export default Scroll; 