import './App.css';
import Cards from './components/Cards/Cards';
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import axios from 'axios'
import { Routes , Route} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters, setCharacters] = useState([]);
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "camilocabezasg@gmail.com";
   const PASSWORD = "Camilo123";
   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFilter = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFilter)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/' element={<Form login={login}/>}/> 
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>  
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>

   );//{id: Rick.id, name:Rick.name}
   // const id = Rick.id
}

export default App;
