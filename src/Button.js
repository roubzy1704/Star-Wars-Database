import React, { Component } from 'react';
import './Button.css';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';

class Button extends Component {
	
	constructor(){
	    super();
	     this.state = {
	      planets:[],
	      spaceships:[],
	      vehicles:[],
	      people:[],
	      films:[],
	      species:[],
	      chosenValue:'',
	      chosenArray:[],
	      searchField:''
    	}
  	}

	handleBtnEvent(choice){
		switch (choice){
			case 'planets':
				fetch('https://swapi.co/api/planets/')
	 			.then(response => response.json())
		    	.then(swapiPlanets =>  
		    	this.setState({planets: swapiPlanets.results}));
		    	this.setState({chosenValue: choice});
				this.setState({chosenArray : this.state.planets});
			break;

			case 'spaceships':
				fetch('https://swapi.co/api/starships/')
			    .then(response => response.json())
			    .then(swapiShips =>  
			    this.setState({spaceships: swapiShips.results}));
			    this.setState({chosenValue: choice});
				this.setState({chosenArray : this.state.spaceships});
			break;

			case 'vehicles':
				fetch('https://swapi.co/api/vehicles/')
			     .then(response => response.json())
			     .then(swapiVehicles =>  
			     this.setState({vehicles: swapiVehicles.results}));
 		    	this.setState({chosenValue: choice});
				this.setState({chosenArray : this.state.vehicles});
			break;

			case 'people':
				fetch('https://swapi.co/api/people/')
			     .then(response => response.json())
			     .then(swapiPeople =>  
			     this.setState({people: swapiPeople.results}));
 		    	this.setState({chosenValue: choice});
				this.setState({chosenArray : this.state.people});
			break;

			case 'films':
				fetch('https://swapi.co/api/films/')
			     .then(response => response.json())
			     .then(swapiFilms =>  
			     this.setState({films: swapiFilms.results}));
 		    	this.setState({chosenValue: choice});
				this.setState({chosenArray : this.state.films});
			break;

			case 'species':
				fetch('https://swapi.co/api/species/')
			     .then(response => response.json())
			     .then(swapiSpecies=>  
			     this.setState({species: swapiSpecies.results}));
 		    	this.setState({chosenValue: choice});
				this.setState({chosenArray : this.state.species});
			break;

			default:
				alert("Something went terrible wrong");
		}
	}

	onSearchChange = (event) =>{
		this.setState({searchField: event.target.value})
	}


	render() {

		const filteredSearch = this.state.chosenArray.filter(chosenValue => {
			if (this.state.chosenValue === 'films'){
				return (
					chosenValue.title.toLowerCase().includes(
					this.state.searchField.toLowerCase())
				)
			}
			else
				return(
			 		chosenValue.name.toLowerCase().includes(
					this.state.searchField.toLowerCase())
					)
		})

		return(
			<div className = 'tc justify-center'>
				<button onClick ={(event) => this.handleBtnEvent('planets')} className="b1"> Planets </button>
				<button onClick ={(event) => this.handleBtnEvent('spaceships')}className="b1"> Spaceships </button>
				<button onClick ={(event) => this.handleBtnEvent('vehicles')} className="b1"> Vehicles </button>
				<button onClick ={(event) => this.handleBtnEvent('people')} className="b1"> People </button>
				<button onClick ={(event) => this.handleBtnEvent('films')} className="b1"> Films </button>
				<button onClick ={(event) => this.handleBtnEvent('species')}className="b1"> Species </button>
				<div className = 'pb3 pt3'>
					<Searchbox searchChange={this.onSearchChange}/>
				</div>
				<Scroll className = 'pt3'>
					<div className = 'pt1'>
						<Cardlist chosenValue = {this.state.chosenValue} chosenArray = {filteredSearch}/>
					</div>
				</Scroll>
			</div>
			);
	}

}

export default Button;