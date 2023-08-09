import { Link } from "react-router-dom"
import "./assets/style.css"
export function Home() {
    return (
        <div className="home">

            <div className="container_home">
                <div className="t1">
                    Nous vous offrons :
                </div>
                <div className="t2">
                    Design, WEB, DevOps,
                    Hebergeur, Conseils
                </div>
                <div className="t3">
                    Leader dans les technologies de l'information, nous visons le meilleur pour nos clients
                    Tout en restant humble
                </div>
                <Link to="services">
                    <div className="b1">
                        Nos services
                    </div>
                </Link>
            </div>
        </div>
    )
}