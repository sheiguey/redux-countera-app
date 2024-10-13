import {useSelector} from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';

function App() {
  const isAuthenticated = useSelector(state=>state.auth.isAuthenticate);

  return (
    <>
    {isAuthenticated && <Header/>} 
    {!isAuthenticated && <Auth/>} 
    {isAuthenticated && <Counter />}
    </>
   
  );
}

export default App;
