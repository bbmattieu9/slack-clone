import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                {/* avatar for loggin user */}
                <Avatar 
                    className='header__avatar'
                    alt='tizi Cerutti'
                    src=''
                />
                <AccessTimeIcon />
            </div>

            <div className="header__search">
                <SearchIcon />
                <input placeholder=' e.g. search for developer tizi cerutti' />
            </div>

            <div className="header_right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
