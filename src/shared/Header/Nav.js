import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
            <div className='container'>
                <Link className='navbar-brand text-uppercase' to='/pads'>Crash Pads</Link>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav ml-auto'>
                        <a className='nav-item nav-link active' href='/pads'>Login<span className='sr-only'>(current)</span></a>
                        <a className='nav-item nav-link' href='/pads'>Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}