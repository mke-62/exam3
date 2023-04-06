import './App.css';
import styled from 'styled-components';


import {Outlet, NavLink} from "react-router-dom";

const MenuStyleUl = styled.ul`
      display: flex;
      justify-content: space-evenly;
      list-style: none;
    `;


const Layout = ({QQQ}) => {

    const menus = [
        {
            name: 'Все автомобили',
            links: '/',
            id: 1,
        },
        {
            name: 'Конкретного производителя',
            links: 'label',
            id: 2,
        },

        {
            name: 'Год выпуска',
            links: 'year',
            id: 3,
        },
        {
            name: 'Указанного Цвета',
            links: 'color',
            id: 4,
        },
        {
            name: ' Указанного объема',
            links: 'power',
            id: 5,
        },
        {
            name: 'Ценового диапазона',
            links: 'prise',
            id: 6,
        }
    ];



    return (
        <>

            <div>
                <MenuStyleUl>
                    {menus.map((menus) => (
                        <li key={menus.id}>
                            <NavLink as={NavLink} to={menus.links}>
                                {menus.name}
                            </NavLink>
                        </li>
                    ))}
                </MenuStyleUl>

            </div>


            <Outlet/>



        </>


    );
}

export default Layout;
