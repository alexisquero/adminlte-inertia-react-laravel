import React, {useCallback} from 'react';
import { Link, Head } from '@inertiajs/react';
//import {useTranslation} from 'react-i18next';
import {toggleControlSidebar, toggleSidebarMenu} from '@/store/reducers/ui';
import {useDispatch, useSelector} from 'react-redux';
import UserDropdown from './UserDropdown/UserDropdown';

const Header = () => {
    //const [t] = useTranslation();
    const dispatch = useDispatch();
    const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);
    const headerBorder = useSelector((state: any) => state.ui.headerBorder);
  
    const handleToggleMenuSidebar = () => {
      console.log('ajaaa')
      dispatch(toggleSidebarMenu());
    };
  
    const handleToggleControlSidebar = () => {
      dispatch(toggleControlSidebar());
    };
  
    const getContainerClasses = useCallback(() => {
      let classes = `main-header navbar navbar-expand ${navbarVariant}`;
      if (headerBorder) {
        classes = `${classes} border-bottom-0`;
      }
      return classes;
    }, [navbarVariant, headerBorder]);
  
    return (
      <nav className={getContainerClasses()}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              onClick={handleToggleMenuSidebar}
              type="button"
              className="nav-link"
            >
              <i className="fas fa-bars" />
            </button>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/" className="nav-link">
            Incio
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link href="/"  className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {/* <MessagesDropdown />
          <NotificationsDropdown />
          <LanguagesDropdown />*/
          <UserDropdown /> }
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              onClick={handleToggleControlSidebar}
            >
              <i className="fas fa-th-large" />
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Header;