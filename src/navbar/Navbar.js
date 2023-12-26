import "./assets/style.css"
import logo from "./assets/images/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const [open_responsive, setOpen_responsive] = useState(true);
    const location = useLocation();
    const [isactive, setisactive] = useState({
        services: "",
        equipe: "",
        portfolio: "",
        contact: ""
    })

    useEffect(() => {
        switch (location.pathname) {
            case ("/"):
                console.log("HOME")
                break;
            case ("/services"):
                setisactive({
                    services: "active"
                })
                console.log("HOME")
                break;
            case ("/portfolio"):
                setisactive({
                    portfolio: "active"
                })
                console.log("HOME")
                break;
            case ("/equipe"):
                setisactive({
                    equipe: "active"
                })
                console.log("HOME")
                break;
            case ("/contact"):
                setisactive({
                    contact: "active"
                })
                console.log("HOME")
                break;
        }
    }, [location.pathname])




    return (
        <>
            <div className={"navbar " + (open_responsive ? "" : " slice")}>
                <div className="title" onClick={() => setOpen_responsive(!open_responsive)}>
                    <Link to="">
                        <img src={logo} width={70} height={70} />
                    </Link>
                </div>

                <div className="menu ">
                    <ul>
                        <Link to="/services">
                            <li
                                className={isactive.services}
                                onClick={() => setOpen_responsive(!open_responsive)}>

                                Services


                            </li>
                        </Link>

                        <Link to="/equipe">
                            <li
                                className={isactive.equipe}
                                onClick={() => setOpen_responsive(!open_responsive)}>
                                Notre equipe
                            </li>
                        </Link>
                        <Link to="/portfolio">
                        <li
                            className={isactive.portfolio}
                            onClick={() => setOpen_responsive(!open_responsive)}>
                            Portfolio
                        </li>
                        </Link>
                        <Link to="contact">
                            <li
                                className={isactive.contact}
                                onClick={() => setOpen_responsive(!open_responsive)}>
                                Nous contacter
                            </li>
                        </Link>
                        <li
                            className="talk " onClick={() => setOpen_responsive(!open_responsive)}>
                            Talk
                        </li>
                    </ul>
                </div>



            </div>
            <div
                className="menu_button "
                onClick={() => setOpen_responsive(!open_responsive)}
            >
                <MenuIcon fontSize="large" />
            </div>
        </>

    )
}