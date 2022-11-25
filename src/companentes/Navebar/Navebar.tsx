import React from "react"
import "./Navebar.css";

function Navebar() {
    return (


        <body>
            <nav>
            
                <ul className="menu">
                <p className="logo">STORE</p>
                    <li><a >Inicio</a></li>
                    <li><a >Sobre</a></li>
                    <li><a >O que fazemos?</a>
                        <ul>
                            <li><a >Moda Masculina</a></li>
                            <li><a >Moda Feminina</a></li>
                            <li><a >Moda infantil</a></li>
                        </ul>
                    </li>
                    <li><a >Parcerias</a>
                        <ul>
                            <li><a target='_blank' href="https://gruposouth.com.br">South</a></li>
                            <li><a target='_blank' href="https://www.redley.com.br">Redley</a></li>
                            <li><a target='_blank' href="https://www.usereserva.com">Reserva</a></li>
                        </ul>
                    </li>
                    <li><a >Contatos</a></li>

                </ul>
                
            </nav>
        </body>
    )
}
export { Navebar };