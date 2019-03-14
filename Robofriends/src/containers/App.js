import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


// creiamo classe
class App extends Component {

	constructor() {
		super() //chiama il costruttore di Component
		//state descrive la nostra App
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		//sorgente esterna
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> {this.setState({robots: users})});
	}

	onSearchChange = (event) => {
		//ogni volta che voglio cambiare lo state uso this.setState(...)
		this.setState({searchfield: event.target.value}) 

	}

	render () {
		// destrutturo state
		const { robots, searchfield } = this.state; 
		// confronto con .includes() i Robots con cosa ho cercato in state.searchfield
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
			//tutto minuscolo così da non dover controllare ongi volta
		})

		return !robots.length ? 
			<h1 className='f1'>Loading</h1> : 
			(
				<div className='tc'> 
					<h1 className='f1'>RoboFriend</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
	}
}

export default App;