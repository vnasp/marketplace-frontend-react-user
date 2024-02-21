import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";

import { ProductContext } from "../context/ProductContext";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const { emptyCart } = useContext(ProductContext);

    return (
        <Navbar className="navigation">
            <section className="navLinks">
                <NavLink className={activeClass} to="/">
                    {" "}
                    Tienda
                </NavLink>
                <div>
                    <NavLink className={activeClass} to="/register">
                        Crear Cuenta
                    </NavLink>
                    <NavLink className={activeClass} to="/login">
                        Ingresar
                    </NavLink>
                    <NavLink className={activeClass} to="/cart">
                        Carrito: {emptyCart}
                    </NavLink>
                </div>
            </section>
        </Navbar>
    );
};

export default Navigation;
