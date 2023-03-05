import React, { useState } from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import { BsCart4 } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'

const Header = () => {

    const [ShowMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu((ShowMenu) => !ShowMenu)
    }

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>SHOOOP</span>
            </div>

            <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars />
                </div>
                <ul className={css.menu} style={{ display: ShowMenu ? 'inherit' : 'none' }}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New Arrivals</li>
                    <li>Sales</li>
                    <li>English</li>
                </ul>

                <input type="text" className={css.search} placeholder="Search" />

                <BsCart4 className={css.cart} />
            </div>
        </div>
    )
}

export default Header