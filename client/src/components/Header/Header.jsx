import {useEffect,useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import { TbSearch } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";

import Cart from "../Cart/Cart";

import {Context} from "../../utils/context";




import "./Header.scss";
const Header = () => {
    return <Header className="main-header">
        <div className="header-content">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
        </div>
    </Header>
};

export default Header;
