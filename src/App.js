import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
//import logo from './logo.svg';
import './App.css';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => setMonsters(users));
  }, []); //callback, deps (dependencies) in this case we aren't interesting to past some 'cuse we just want that runs once (componentDidMount)

  useEffect(() => {
    const monsFiltered = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
     });  

     setFilterMonsters(monsFiltered);
  }, [monsters, searchField]); //this case we are indicating to trigger this side effect when monsters or searchField change

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  }


  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox 
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='search-box'
      />
      <CardList monsters = {filteredMonsters} />
    </div>
  );
};

/*class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //lifecycle method
  //first time React renders this component onto the page
  componentDidMount(){
    //here we can call apis to get data
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => this.setState(
      () => {
      return {monsters: users}
      }));
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return {searchField: event.target.value.toLocaleLowerCase()};
    });
  }

  render(){
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    var monstersFiltered = monsters.filter(monster => {
       return monster.name.toLocaleLowerCase().includes(searchField);
      });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='search-box'
        />
        <CardList monsters = {monstersFiltered} />
      </div>
    );
  }
}*/

export default App;
