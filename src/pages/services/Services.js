import "./assets/style.css"
import image1 from "./assets/images/image1.png"
import image2 from "./assets/images/image2.png"
import image3 from "./assets/images/image3.png"
import image4 from "./assets/images/image4.png"
import { Link } from "react-router-dom"

export function Services() {
    return (
        <div className="services">
            <div className="container_block">
                <div className="item top">
                    <img src={image1} />
                    <div className="text">
                        HEBERGEMENT A Madagascar
                        A BAS PRIX
                    </div>
                </div>
                <div className="item bottom">
                    <img src={image2} />
                    <div className="text">
                        Développement de sites WEB
                        Wordpress, Reactjs, PHP...
                    </div>

                </div>
                <div className="item top">
                    <img src={image3} />
                    <div className="text">
                        Installation de matériel réseaux informatique
                    </div>
                </div>
                <div className="item bottom">
                    <img src={image4} />
                    <div className="text">
                        Conseil et support client
                    </div>
                </div>

            </div>

            <Link to="/equipe">
                <div className="b1">
                    Notre équipe
                </div>
            </Link>
        </div>
    )
}