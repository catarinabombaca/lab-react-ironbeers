import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return <div className='header-container'>
            <Link to='/'><img className='header-image' src='/home.png' alt='home'/></Link>
        </div>
    }
}

export default Header;