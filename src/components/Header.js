import { useDispatch } from 'react-redux';
import {actionsAuth} from '../store/auth';
import classes from './Header.module.css';


const Header = () => {
  const dispatch = useDispatch();
  const logout =()=>{dispatch(actionsAuth.Logout())} ;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
