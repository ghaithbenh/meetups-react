import{Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return(
<header className={classes.header} >
    <div className={classes.logo}>React Meetups</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>All Meetups</Link>
                </li>
            <li>
                <Link to='/New-Meetups'>Add New Meetups</Link>
                </li>
             <li>
                <Link to='/Favorites'>My Favorites</Link>
                </li>
        </ul>
    </nav>
</header>
    );
}
export default MainNavigation;