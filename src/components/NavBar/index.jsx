import { useRef } from 'react';
import style from '@/components/NavBar/style.module.css';
import logo from '@/assets/img/dark-theme/dark-theme-logo.svg';

const NavBar = () => {
  const refHeader = useRef('hidden');
  const refMenu = useRef('hidden');
  const refToggleMenu = useRef('hidden');
  const refNavLink = useRef('hidden');

  const navLinks = ['home', 'about', 'projects', 'contact'];

  // Show menu if hamburger menu is clicked
  const toggleOnClick = () => {
    refMenu.current.classList.toggle(`${style.active}`);
    refToggleMenu.current.classList.toggle(`${style.active}`);
    document.body.classList.toggle(`${style.active}`);
  };

  // Hide menu if close is clicked
  const removeStyle = () => {
    refMenu.current.classList.remove(`${style.active}`);
    refToggleMenu.current.classList.remove(`${style.active}`);
    document.body.classList.remove(`${style.active}`);
  };

  return (
    <header className={style.container} ref={refHeader}>
      <div className={style.subContainer}>
        <a href='#home' className={style.logo}>
          <img src={logo} alt='Logo' />
        </a>
        <nav>
          <ul className={`${style.menu}`} ref={refMenu}>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={style.navLink}
                  ref={refNavLink}
                  onClick={removeStyle}
                >
                  {link}
                </a>
              </li>
            ))}
            <a
              href='https://drive.google.com/file/d/1i7r7lKf0YWqzSbio0UwgsTShQX1Vj7CC/view?usp=share_link'
              className={`${style.ctaButton} ${style.mobile}`}
              onClick={removeStyle}
              target='_blank'
              download
            >
              Resume
            </a>
          </ul>
        </nav>
        <a
          href='https://drive.google.com/file/d/1i7r7lKf0YWqzSbio0UwgsTShQX1Vj7CC/view?usp=share_link'
          className={`${style.ctaButton} ${style.desktop}`}
          target='_blank'
          download
        >
          Resume
        </a>
        <div
          className={style.toggleMenu}
          onClick={toggleOnClick}
          ref={refToggleMenu}
        >
          <div className={`${style.bar} ${style.bar1}`}></div>
          <div className={`${style.bar} ${style.bar2}`}></div>
          <div className={`${style.bar} ${style.bar3}`}></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
