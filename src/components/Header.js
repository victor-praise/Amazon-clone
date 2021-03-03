import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles.scss/header.scss'
import { useStateValue } from './stateProvider';
import { auth } from '../firebase';

export function Header(props) {
    const [{ basket, user }, dispatch] = useStateValue();
    const [userEmail, setuserEmail] = useState('')

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            setuserEmail(authUser.email)
        })
    }, [])
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <>
            <div className="header">
                <Link to='/'>
                    <img className="header__logo" alt="amazon" src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817' />
                </Link>


                <div className='header__search'>
                    <input className='header__searchInput' type='text' />
                    <i className="fas fa-search header__searchIcon"></i>
                </div>
                <div className="header__nav">
                    <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                        <div className="header__option" onClick={handleAuthentication}>
                            <span className='header__optionLineOne'>{user ? 'Hello' + ' ' + userEmail : 'Hello Guest'}</span>
                            <span className='header__optionLineTwo'> {user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    <Link to='/orders' style={{ textDecoration: 'none' }}>
                        <div className="header__option">
                            <span className='header__optionLineOne'>Returns</span>
                            <span className='header__optionLineTwo'>Orders</span>
                        </div>
                    </Link>
                  
                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                    <div className="header__optionBasket">
                        <Link to='checkout' className="checkout-link">
                            <i className="fas fa-cart-plus"></i>
                            <span className="header_optionLineTwo header__basketCount">{basket.length}</span>
                        </Link>


                    </div>

                </div>
            </div>
        </>
    )
}
