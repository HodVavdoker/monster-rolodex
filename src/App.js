import React ,{Component} from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list';
import {SearchBox} from './component/serach-box/serach-box';
class App extends Component { 
  constructor(){
    super();

    this.state = {
      monsters: [] ,
      searchField : ''
    };
 
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({monsters:users}));
  }
  handleChange = (e) =>
  {
    this.setState({searchField :e.target.value });
  }
  render()
  {
    const {monsters , searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
        <div className="App">
          <h1 className='h1'>Monster Rololdex
          </h1>
          <SearchBox 
          placeholder = 'serach monster'
          handleChange = {this.handleChange}></SearchBox>
        <CardList monsters = {filterMonsters}>
        </CardList>
        </div>
  );
    }
  }
  export default App; 
