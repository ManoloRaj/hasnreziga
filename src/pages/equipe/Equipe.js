import "./assets/style.css"
import hasina from "./assets/images/hasina.jpg"
import manolo from "./assets/images/manolo.jpg"

export function Equipe() {
    return (
        <div className="equipe">
            <div className="ligne1">
                <div className="col1 fad1">
                    <div className="titre">
                        Hey, Je suis Hasina, CEO de HasnReziga,
                        avec plus de 15 ans d'éxpérience dans les technologies du IT
                    </div>
                    <div className="content">
                        J'ai monté Hasnreziga dans le but de réaliser
                        vos projets de développement,
                        de support, de réseau, de télecommunication.
                    </div>
                    <div className="b1">
                        Contactez moi 
                    </div>
                </div>
                <div className="col1 fad2">
                    <img src={hasina} />
                </div>
            </div>
            <div className="ligne2 l2">

                <div className="col1 fad2">
                    <img src={manolo} />
                </div>
                <div className="col1 fad1">
                    <div className="titre">
                        Je suis Manolo, Développeur WEB et Graphiste designer chez HasnReziga
                    </div>
                    <div className="content">
                        Etant consultant chez HasnReziga, on partage les mêmes principes, les mêmes valeurs,
                        "On va vite seule, mais on ira loin ensemble"
                    </div>

                </div>
            </div>
        </div>
    )
}