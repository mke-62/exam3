import './App.css';
import styled from 'styled-components';
import All from "./pages/all"


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
    const cars = [
        {
            id: 1,
            label: 'AUDI',
            model: 'tt',
            power: 2,
            year: 2005,
            prise: 22000,
            color: 'red',
        },
        {
            id: 2,
            label: 'BMW',
            model: 'x6',
            power: 3,
            year: 2009,
            prise: 32000,
            color: 'white',
        },
        {
            id: 3,
            label: 'MAZDA',
            model: '3',
            power: 1.6,
            year: 2010,
            prise: 12000,
            color: 'blue',
        },
        {
            id: 4,
            label: 'OPEL',
            model: 'astra',
            power: 1.8,
            year: 2009,
            prise: 32000,
            color: 'green',
        },
        {
            id: 5,
            label: 'RENAUL',
            model: 'logan',
            power: 1.4,
            year: 2020,
            prise: 26000,
            color: 'white',
        },
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
            {/*<All arr={cars}/>*/}


        </>


    );
}

export default Layout;
