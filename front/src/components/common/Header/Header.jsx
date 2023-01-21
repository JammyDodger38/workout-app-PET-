import React from 'react'
import styles from './Header.module.scss'

import userImage from '../../../images/header/user.svg'
import Hamburger from './Hamburger/Hamburger'
import arrowImage from '../../../images/header/arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const history = useNavigate()

  return (
    <header className={styles.header}>
      {location.pathname !== '/' ? (
        <button type="button" onClick={() => history(-1)}>
          <img src={arrowImage} alt="back" />
        </button>
      ) : (
        <button type="button">
          <img src={userImage} alt="Auth" />
        </button>
      )}

      <Hamburger />
    </header>
  )
}

export default Header
