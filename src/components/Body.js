import React from "react";
import './stylesBody.css'

const Body = () => {

    return(
        <section className="principal"> 
            <div className="slider">
                <p>Servicio de licores todos los días de 4pm a 12pm</p>
                <ul>
                    <li><img src="./IMG/licores3.jpg"></img></li>
                    <li><img src="./IMG/licores2.jpg"></img></li>
                    <li><img src="./IMG/licores1.jpeg"></img></li>
                    <li><img src="./IMG/fotoLicores.jpeg"></img></li>
                </ul>
            </div>
            <section className="sedes">
                <b><i className="principal">Sede Principal</i></b>
                <nav className="medellin" id="medellin">
                    <div>
                        <h1>Sede Medellin</h1>
                        <p>Disfruta de nuestra sede principal ubicada en la ciudad de Medellin</p>
                    </div>
                    <img src="./IMG/tiendaLicores.jpg"></img>
                </nav>
                <b><i className="disfruta">Disfruta</i></b>
                <br></br>
                <b><i className="conNosotros">Con Nosotros</i></b>
                <nav className="bello" id="bello">
                    <div>
                        <h1>Sede Bello</h1>
                        <p>Disfruta de nuestra sede de Bello, sera una experiencia incomparable</p>
                    </div>
                    <img src="./IMG/tiendaLicores2.jpg"></img>
                </nav>
                <b><i className="nueva">Nueva Sede</i></b>
                <nav className="itagui" id="itagui">
                    <div>
                        <h1>Sede Itagui</h1>
                        <p>Disfruta de nuestra nueva sede ubicada en itagui, cerca a la estaciòn del metro</p>
                    </div>
                    <img src="./IMG/tiendaLicores3.jpg"></img>
                </nav>
            </section>
            <section className="opcionesLicores">
                <section className="guaro" id="guaro">
                    <nav className="tiposGuaro"><h1>Aguardiente: </h1></nav>
                    <nav className="guaroAzul">
                        <img src="./IMG/guaroAzul.jpg"></img>
                        <h2>Tapa Azul</h2>
                        <p>375ml (media): 22.000$
                            <br></br>
                            1000ml (litro): 47.000$
                            <br></br>
                            2000ml (Garrafa): 85.000$
                        </p>
                    </nav>
                    <nav className="guaroRojo">
                        <img src="./IMG/guaroRojo.jpg"></img>
                        <h2>Tapa Roja</h2>
                        <p>375ml (media): 19.000$
                            <br></br>
                            1000ml (litro): 43.000$
                            <br></br>
                            2000ml (Garrafa): 80.000$
                        </p>
                    </nav>
                    <nav className="guaroVerde">
                        <img src="./IMG/guaroVerde.jpg"></img>
                        <h2>Tapa Verde</h2>
                        <p>375ml (media): 20.000$
                            <br></br>
                            1000ml (litro): 45.000$
                            <br></br>
                            2000ml (Garrafa): 82.000$
                        </p>
                    </nav>
                </section>
                <section className="ron" id="ron">
                    <nav className="tiposRon"><h1>Ron: </h1></nav>
                    <nav className="ronCaldas">
                        <img src="./IMG/ronCaldas.jpg"></img>
                        <h2>Ron Caldas</h2>
                        <p>375ml (media): 28.000$
                            <br></br>
                            1000ml (litro): 58.000$
                            <br></br>
                            2000ml (Garrafa): 98.000$
                        </p>
                    </nav>
                    <nav className="ronMedellin">
                        <img src="./IMG/ronMedellin.jpg"></img>
                        <h2>Ron Medellín</h2>
                        <p>375ml (media): 25.000$
                            <br></br>
                            1000ml (litro): 53.000$
                            <br></br>
                            2000ml (Garrafa): 94.000$
                        </p>
                    </nav>
                    <nav className="ronDictador">
                        <img src="./IMG/ronDictador.jpg"></img>
                        <h2>Ron Dictador</h2>
                        <p>375ml (media): 45.000$
                            <br></br>
                            1000ml (litro): 90.000$
                            <br></br>
                            2000ml (Garrafa): 190.000$
                        </p>
                    </nav>
                </section>
                <section className="tequila" id="tequila">
                    <nav className="tiposTequila"><h1>Tequila: </h1></nav>
                    <nav className="joseCuervo">
                        <img src="./IMG/joseCuervo.jpg"></img>
                        <h2>Tequila Jose Cuervo</h2>
                        <p>375ml : 44.900$
                            <br></br>
                            750ml : 76.500$
                            <br></br>
                            990ml : 96.000$
                        </p>
                    </nav>
                    <nav className="donJulio">
                        <img src="./IMG/donJulio.jpg"></img>
                        <h2>Tequila Don julio</h2>
                        <p>700ml: 355.000$ </p>
                    </nav>
                    <nav className="tequila1800">
                        <img src="./IMG/1800.jpg"></img>
                        <h2>Tequila 1800</h2>
                        <p>750ml: 198.000$</p>
                    </nav>
                </section>
                <section className="vodka" id="vodka">
                    <nav className="tiposVodka"><h1>Vodka: </h1></nav>
                    <nav className="absolut">
                        <img src="./IMG/absolut.jpg"></img>
                        <h2>Vodka Absolut</h2>
                        <p>700ml : 79.990$
                        </p>
                    </nav>
                    <nav className="molotoff">
                        <img src="./IMG/molotoff.jpg"></img>
                        <h2>Vodka Sasha Molotoff</h2>
                        <p>1000ml: 269.000$ </p>
                    </nav>
                    <nav className="vodkahead">
                        <img src="./IMG/head.jpg"></img>
                        <h2>Vodka Crystal Head</h2>
                        <p>700ml: 300.000$</p>
                    </nav>
                </section>
                <section className="whisky" id="whisky">
                    <nav className="tiposWhisky"><h1>Whisky: </h1></nav>
                    <nav className="buchanans">
                        <img src="./IMG/buchanans.jpg"></img>
                        <h2>Whisky Buchanan's Deluxe</h2>
                        <p>750ml : 154.000$
                        </p>
                    </nav>
                    <nav className="oldparr">
                        <img src="./IMG/oldparr.jpg"></img>
                        <h2>Whisky Old Parr</h2>
                        <p>750ml: 140.000$ </p>
                    </nav>
                    <nav className="blacklabel">
                        <img src="./IMG/label.jpg"></img>
                        <h2>Whisky Black Label</h2>
                        <p>700ml: 137.500$</p>
                    </nav>
                </section>
                <section className="vino" id="vino">
                    <nav className="tiposVino"><h1>Vino: </h1></nav>
                    <nav className="mardefrades">
                        <img src="./IMG/mardefrades.jpg"></img>
                        <h2>Vino Blanco Mar De Frades Albariño</h2>
                        <p>750ml : 109.900$
                        </p>
                    </nav>
                    <nav className="emilio">
                        <img src="./IMG/emilio.jpg"></img>
                        <h2>Vino Tinto Emilio Moro Malleolus Tempranillo</h2>
                        <p>750ml: 280.900$ </p>
                    </nav>
                    <nav className="rivarose">
                        <img src="./IMG/rivarose.jpg"></img>
                        <h2>Vino Espumoso Rivarose Rosado Brut</h2>
                        <p>750ml: 93.900$</p>
                    </nav>
                </section>
            </section>
            <section className="opcionescocteles" id="opcionescocteles">
                <nav className="cocteles1">
                    <nav className="tiposCocteles"><h1>Cocteles: </h1></nav>
                    <nav className="longcoctel">
                        <img src="./IMG/longcoctel.jpg"></img>
                        <h2>Long Island Iced Tea Coctel</h2>
                        <p>20.000$
                        </p>
                    </nav>
                    <nav className="margarita">
                        <img src="./IMG/margarita.jpg"></img>
                        <h2>Margarita Coctel</h2>
                        <p>18.000$ </p>
                    </nav>
                    <nav className="mimosa">
                        <img src="./IMG/mimosa.jpg"></img>
                        <h2>Mimosa Coctel</h2>
                        <p>20.000$</p>
                    </nav>
                </nav>
                <nav className="cocteles2">
                    <nav className="bloody">
                        <img src="./IMG/bloody.jpg"></img>
                        <h2>Bloody Mary Coctel</h2>
                        <p>22.000$
                        </p>
                    </nav>
                    <nav className="mojito">
                        <img src="./IMG/mojito.jpg"></img>
                        <h2>Mojito Coctel</h2>
                        <p>17.000$ </p>
                    </nav>
                    <nav className="cosmopolitan">
                        <img src="./IMG/cosmopolitan.jpg"></img>
                        <h2>Cosmopolitan Coctel</h2>
                        <p>20.000$</p>
                    </nav>
                </nav>
            </section>
        </section>
    )
}

export default Body;