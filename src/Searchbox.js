import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
	return(
		<div className ="searchbar">
				<input type='search'
				placeholder='Search with 1st Attribute' autoComplete='off'
				onChange = {searchChange} />
		</div>
	);
}

export default SearchBox;