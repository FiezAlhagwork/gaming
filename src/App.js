import './App.css'
import Container from './components/Container/Container';
// import GamingLibraary from './Sections/GamingLibraary/GamingLibraary';

import Footer from './Sections/Footer/Footer';
import Header from './Sections/Header/Header';
// import Hero from './Sections/Hero/Hero'
// import MostPoupular from './Sections/MostPoupular/MostPoupular';
import Home from './components/pages/home/Home';
import { Route,Routes } from 'react-router-dom';
import Profile from './components/pages/profile/Profile';


const App = () =>{
  return(
    <>
      <Header main="fiez"/>
        <Container >
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </Container>
      <Footer/>
    </>
  )
}

export default App;
