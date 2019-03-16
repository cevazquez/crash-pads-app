import React from 'react';
import './Header.css';

export function BannerInfo() {
    return (
        <div className="container banner">
                <div className="bannerInfo">
                    <h1>This is the title.</h1>
                    <p>This app will eventually be something.</p>
                    <form className='form-inline'>
                        <input className='form-control search-bar' type='search' placeholder='ex. New York City' aria-label='Search'></input>
                        <button className='btn btn-outline-success my-2 my-sm-0 btn-search' type='submit'>Search</button>
                    </form>
            </div>
        </div>
    )
}