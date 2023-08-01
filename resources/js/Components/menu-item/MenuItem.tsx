/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/core';
//import {NavLink, useNavigate, useLocation, Location} from 'react-router-dom';
import useRoute from '@/Hooks/useRoute';
//import {useTranslation} from 'react-i18next';
import { IMenuItem } from '@/Modules/menu-sidebar/MenuSidebar';
import NavLink from '../NavLink';

const MenuItem = ({ menuItem }: { menuItem: IMenuItem }) => {
  //const [t] = useTranslation();
  const [isMenuExtended, setIsMenuExtended] = useState(false);
  const [isExpandable, setIsExpandable] = useState(false);
  const [isMainActive, setIsMainActive] = useState(false);
  const [isOneOfChildrenActive, setIsOneOfChildrenActive] = useState(false);
  const navigate = useRoute();
  const location = navigate().current();

  const toggleMenu = () => {
    setIsMenuExtended(!isMenuExtended);
  };

  const handleMainMenuAction = () => {
    if (isExpandable) {
      toggleMenu();
      return;
    }
    console.log(menuItem.path);
    router.get(navigate(menuItem.path ? menuItem.path : '/'));
  };

  const calculateIsActive = (url: string) => {
    setIsMainActive(false);
    setIsOneOfChildrenActive(false);
    if (isExpandable && menuItem && menuItem.children) {
      menuItem.children.forEach(item => {
        if (item.path === url) {
          setIsOneOfChildrenActive(true);
          setIsMenuExtended(true);
        }
      });
    } else if (menuItem.path === url) {
      setIsMainActive(true);
    }
  };

  useEffect(() => {
    if (location) {
      calculateIsActive(location);
    }
  }, [location, isExpandable, menuItem]);

  useEffect(() => {
    if (!isMainActive && !isOneOfChildrenActive) {
      setIsMenuExtended(false);
    }
  }, [isMainActive, isOneOfChildrenActive]);

  useEffect(() => {
    setIsExpandable(
      Boolean(menuItem && menuItem.children && menuItem.children.length > 0),
    );
  }, [menuItem]);

  return (
    <li className={`nav-item${isMenuExtended ? ' menu-open' : ''}`}>
      <a
        className={`nav-link${
          isMainActive || isOneOfChildrenActive ? ' active' : ''
        }`}
        role="link"
        onClick={handleMainMenuAction}
        style={{ cursor: 'pointer' }}
      >
        <i className={`${menuItem.icon}`} />
        <p>{menuItem.name}</p>
        {isExpandable ? <i className="right fas fa-angle-left" /> : null}
      </a>

      {isExpandable &&
        menuItem &&
        menuItem.children &&
        menuItem.children.map(item => (
          <ul key={item.name} className="nav nav-treeview">
            <li className="nav-item">
              <NavLink href={`${item.path}`}>
                <i className={`${item.icon}`} />
                <p>{item.name}</p>
              </NavLink>
            </li>
          </ul>
        ))}
    </li>
  );
};

export default MenuItem;
