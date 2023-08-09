import { Input } from "@mui/material"
import "./assets/style.css"

export function Contact() {
    return (
        <div className="contact">
            <div className="contact_container">
                <div className="f1 item">
                    Contactez nous
                </div>
                <div className="f2 item">
                    Notre local se situe a Ambohipo
                    3H96+GQ5, Tanàna, Antananarivo
                </div>
                <div className="f3 item">
                    Télephone : +261 34 40 994 35
                </div>
                <div className="f4 item">
                    <form>
                        <input placeholder="Email" />
                        <input placeholder="Objet" />
                        <textarea rows="10" />
                        <div className="b1" >Envoyer</div>
                    </form>
                </div>
                <div className="f4 item">
                    Developped/Design by hasnreziga <a href="https://manolorajaonah.netlify.app">Manolo Rajaonah</a>
                    <br />Email : 
                    <a href="mailto:hasnreziga@gmail.com"> hasnreziga@gmail.com</a>
                </div>

            </div>
        </div>
    )
}