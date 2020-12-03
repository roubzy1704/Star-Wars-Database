(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(7),c=n.n(r);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(1),l=n(2),o=n(4),u=n(3),h=n(5),p=(n(16),n(18),function(e){return s.a.createElement("div",{className:"tile hvr-grow pt3"},s.a.createElement("h1",null," ",e.one," "),s.a.createElement("h2",null," ",e.two," "),s.a.createElement("h2",null," ",e.three," "),s.a.createElement("h3",null," ",e.four," "))}),m=function(e){var t=e.chosenValue,n=e.chosenArray,a=void 0===n?[]:n;return s.a.createElement("div",null,function(){switch(t){case"planets":return s.a.createElement("div",null,a.map(function(e,t){return s.a.createElement(p,{key:t,one:"Name: "+e.name,two:"Climate: "+e.climate,three:"Terrain: "+e.terrain,four:"Population: "+e.population})}));case"spaceships":case"vehicles":return s.a.createElement("div",null,a.map(function(e,t){return s.a.createElement(p,{key:t,one:"Name: "+e.name,two:"Model: "+e.model,three:"Manufacturer: "+e.manufacturer,four:"Cost: "+e.cost_in_credits})}));case"people":return s.a.createElement("div",null,a.map(function(e,t){return s.a.createElement(p,{key:t,one:"Name: "+e.name,two:"Gender: "+e.gender,three:"Birth Year: "+e.birth_year})}));case"films":return s.a.createElement("div",null,a.map(function(e,t){return s.a.createElement(p,{key:t,one:"Title: "+e.title,two:"Director: "+e.director,three:"Release Date: "+e.release_date})}));case"species":return s.a.createElement("div",null,a.map(function(e,t){return s.a.createElement(p,{key:t,one:"Name: "+e.name,two:"Classification: "+e.classification,three:"Language: "+e.language})}))}}())},f=(n(20),function(e){var t=e.searchChange;return s.a.createElement("div",{className:"searchbar"},s.a.createElement("input",{type:"search",placeholder:"Search with 1st Attribute",autoComplete:"off",onChange:t}))}),d=function(e){return s.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"600px"}},e.children)},v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={planets:[],spaceships:[],vehicles:[],people:[],films:[],species:[],chosenValue:"",chosenArray:[],searchField:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleBtnEvent",value:function(e){var t=this;switch(e){case"planets":fetch("https://swapi.dev/api/planets/").then(function(e){return e.json()}).then(function(e){return t.setState({planets:e.results})}),this.setState({chosenValue:e}),this.setState({chosenArray:this.state.planets});break;case"spaceships":fetch("https://swapi.dev/api/starships/").then(function(e){return e.json()}).then(function(e){return t.setState({spaceships:e.results})}),this.setState({chosenValue:e}),this.setState({chosenArray:this.state.spaceships});break;case"vehicles":fetch("https://swapi.dev/api/vehicles/").then(function(e){return e.json()}).then(function(e){return t.setState({vehicles:e.results})}),this.setState({chosenValue:e}),this.setState({chosenArray:this.state.vehicles});break;case"people":fetch("https://swapi.dev/api/people/").then(function(e){return e.json()}).then(function(e){return t.setState({people:e.results})}),this.setState({chosenValue:e}),this.setState({chosenArray:this.state.people});break;case"films":fetch("https://swapi.dev/api/films/").then(function(e){return e.json()}).then(function(e){return t.setState({films:e.results})}),this.setState({chosenValue:e}),this.setState({chosenArray:this.state.films});break;case"species":fetch("https://swapi.dev/api/species/").then(function(e){return e.json()}).then(function(e){return t.setState({species:e.results})}),this.setState({chosenValue:e}),this.setState({chosenArray:this.state.species});break;default:alert("Something went terrible wrong")}}},{key:"render",value:function(){var e=this,t=this.state.chosenArray.filter(function(t){return"films"===e.state.chosenValue?t.title.toLowerCase().includes(e.state.searchField.toLowerCase()):t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return s.a.createElement("div",{className:"tc justify-center"},s.a.createElement("button",{onClick:function(t){return e.handleBtnEvent("planets")},className:"b1"}," ","Planets"," "),s.a.createElement("button",{onClick:function(t){return e.handleBtnEvent("spaceships")},className:"b1"}," ","Spaceships"," "),s.a.createElement("button",{onClick:function(t){return e.handleBtnEvent("vehicles")},className:"b1"}," ","Vehicles"," "),s.a.createElement("button",{onClick:function(t){return e.handleBtnEvent("people")},className:"b1"}," ","People"," "),s.a.createElement("button",{onClick:function(t){return e.handleBtnEvent("films")},className:"b1"}," ","Films"," "),s.a.createElement("button",{onClick:function(t){return e.handleBtnEvent("species")},className:"b1"}," ","Species"," "),s.a.createElement("div",{className:"pb3 pt3"},s.a.createElement(f,{searchChange:this.onSearchChange})),s.a.createElement(d,{className:"pt3"},s.a.createElement("div",{className:"pt1"},s.a.createElement(m,{chosenValue:this.state.chosenValue,chosenArray:t}))))}}]),t}(a.Component),E=(n(22),n(24),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"body"},s.a.createElement("div",{className:"db tc"},s.a.createElement("div",{className:"title"},s.a.createElement("h1",null," Star Wars Database ")),s.a.createElement(v,null)))}}]),t}(a.Component));c.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(26)}},[[8,2,1]]]);
//# sourceMappingURL=main.b12b53ff.chunk.js.map