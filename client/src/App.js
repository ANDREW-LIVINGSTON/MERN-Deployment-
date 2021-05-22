import logo from './logo.svg';
import './App.css';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
      <AllPets path="/"></AllPets>
      <OnePet path="/pets/:id"></OnePet>
      <NewPet path="/pets/new"></NewPet>
      <EditPet path="pets/edit/:id"></EditPet>
      </Router>
    </div>
  );
}

export default App;
