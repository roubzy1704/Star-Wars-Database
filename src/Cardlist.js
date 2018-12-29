import React from 'react';
import Card from './Card';

const Cardlist = ({chosenValue, chosenArray=[]}) => {

const displayCardList = () => {
	switch (chosenValue) {
	case 'planets':
		return (
			<div>
				{
					chosenArray.map((currentValue, index)  => {
						return(
							<Card
								key = {index}
								one = {'Name: ' + currentValue.name}
								two = {'Climate: ' + currentValue.climate}
								three = {'Terrain: ' + currentValue.terrain}
								four = {'Population: '+ currentValue.population}
							/>
						);
					})
				}
			</div>
		);


	case 'spaceships':
		return (
			<div>
				{
					chosenArray.map((currentValue, index)  => {
						return(
							<Card
								key = {index}
								one = {'Name: ' + currentValue.name}
								two = {'Model: ' + currentValue.model}
								three = {'Manufacturer: ' + currentValue.manufacturer}
								four = {'Cost: ' + currentValue.cost_in_credits}
							/>
						);
					})
				}
			</div>
		);


	case 'vehicles':
		return (
			<div>
				{
					chosenArray.map((currentValue, index)  => {
						return(
							<Card
								key = {index}
								one = {'Name: ' + currentValue.name}
								two = {'Model: ' + currentValue.model}
								three = {'Manufacturer: ' + currentValue.manufacturer}
								four = {'Cost: ' + currentValue.cost_in_credits}
							/>
						);
					})
				}
			</div>
		);


	case 'people':
		return (
			<div>
				{
					chosenArray.map((currentValue, index)  => {
						return(
							<Card
								key = {index}
								one = {'Name: ' + currentValue.name}
								two = {'Gender: ' + currentValue.gender}
								three = {'Birth Year: ' + currentValue.birth_year}
							/>
						);
					})
				}
			</div>
		);


	case 'films':
		return (
			<div>
				{
					chosenArray.map((currentValue, index)  => {
						return(
							<Card
								key = {index}
								one = {'Title: ' + currentValue.title}
								two = {'Director: ' + currentValue.director}
								three = {'Release Date: ' + currentValue.release_date}
							/>
						);
					})
				}
			</div>
		);


	case 'species':
		return (
			<div>
				{
					chosenArray.map((currentValue, index)  => {
						return(
							<Card
								key = {index}
								one = {'Name: ' + currentValue.name}
								two = {'Classification: ' + currentValue.classification}
								three = {'Language: ' + currentValue.language}
							/>
						);
					})
				}
			</div>
		);

	default:
	}
}

	return(
		<div>
			{displayCardList()}
		</div>
		);
}


export default Cardlist;