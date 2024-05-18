import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active-link" : "");

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/posts" className={activeLink}>
                        Посты
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/create-post" className={activeLink}>
                        Создать пост
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
