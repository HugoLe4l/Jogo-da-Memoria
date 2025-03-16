import "./home.css"
import { use, useEffect, useRef, useState } from "react";
// Components
import Card1 from "../../components/card1/Card1.jsx"
import Menu1 from "../../components/Menu1/Menu1.jsx"

import Figure_svg1 from "../../../public/Figures/1.svg";
import Figure_svg2 from "../../../public/Figures/2.svg";
import Figure_svg3 from "../../../public/Figures/3.svg";
import Figure_svg4 from "../../../public/Figures/4.svg";
import Figure_svg5 from "../../../public/Figures/5.svg";
import Figure_svg6 from "../../../public/Figures/6.svg";
import Figure_svg7 from "../../../public/Figures/7.svg";
import Figure_svg8 from "../../../public/Figures/8.svg";
import Figure_svg9 from "../../../public/Figures/9.svg";
import Figure_svg10 from "../../../public/Figures/10.svg";
import Figure_svg11 from "../../../public/Figures/11.svg";
import Figure_svg12 from "../../../public/Figures/12.svg";
import Figure_svg13 from "../../../public/Figures/13.svg";
import Figure_svg14 from "../../../public/Figures/14.svg";
import Figure_svg15 from "../../../public/Figures/15.svg";
import Figure_svg16 from "../../../public/Figures/16.svg";
import Figure_svg17 from "../../../public/Figures/17.svg";
import Figure_svg18 from "../../../public/Figures/18.svg";
import Figure_svg19 from "../../../public/Figures/19.svg";
import Figure_svg20 from "../../../public/Figures/20.svg";
import Figure_svg21 from "../../../public/Figures/21.svg";
import Figure_svg22 from "../../../public/Figures/22.svg";
import Figure_svg23 from "../../../public/Figures/23.svg";
import Figure_svg24 from "../../../public/Figures/24.svg";
import Figure_svg26 from "../../../public/Figures/26.svg";
import Figure_svg27 from "../../../public/Figures/27.svg";
import Figure_svg28 from "../../../public/Figures/28.svg";
import Figure_svg29 from "../../../public/Figures/29.svg";
import Figure_svg30 from "../../../public/Figures/30.svg";
import Figure_svg31 from "../../../public/Figures/31.svg";
import Figure_svg32 from "../../../public/Figures/32.svg";
import Figure_svg33 from "../../../public/Figures/33.svg";
import Figure_svg34 from "../../../public/Figures/34.svg";
import Figure_svg35 from "../../../public/Figures/35.svg";
import Figure_svg36 from "../../../public/Figures/36.svg";
import Figure_svg37 from "../../../public/Figures/37.svg";
import Figure_svg38 from "../../../public/Figures/38.svg";
import Figure_svg39 from "../../../public/Figures/39.svg";
import Figure_svg40 from "../../../public/Figures/40.svg";
import Figure_svg41 from "../../../public/Figures/41.svg";
import Figure_svg42 from "../../../public/Figures/42.svg";
import Figure_svg43 from "../../../public/Figures/43.svg";
import Figure_svg44 from "../../../public/Figures/44.svg";

import AudioAcertou from "../../../public/Audios/Acertou.wav"
import AudioErrou from "../../../public/Audios/Errou.mp3"

function HomePage() {

    class Figure {
        constructor(nome, codigo, endereco, estado) {
            this.nome = nome
            this.codigo = codigo
            this.endereco = endereco
            this.estado = estado
        }
    }
    const FiguresArrays = [
        new Figure("Figure_svg1", 1, Figure_svg1, true),
        new Figure("Figure_svg2", 2, Figure_svg2, true),
        new Figure("Figure_svg3", 3, Figure_svg3, true),
        new Figure("Figure_svg4", 4, Figure_svg4, true),
        new Figure("Figure_svg5", 5, Figure_svg5, true),
        new Figure("Figure_svg6", 6, Figure_svg6, true),
        new Figure("Figure_svg7", 7, Figure_svg7, true),
        new Figure("Figure_svg8", 8, Figure_svg8, true),
        new Figure("Figure_svg9", 9, Figure_svg9, true),
        new Figure("Figure_svg10", 10, Figure_svg10, false),
        new Figure("Figure_svg11", 11, Figure_svg11, false),
        new Figure("Figure_svg12", 12, Figure_svg12, false),
        new Figure("Figure_svg13", 13, Figure_svg13, false),
        new Figure("Figure_svg14", 14, Figure_svg14, false),
        new Figure("Figure_svg15", 15, Figure_svg15, false),
        new Figure("Figure_svg16", 16, Figure_svg16, false),
        new Figure("Figure_svg17", 17, Figure_svg17, false),
        new Figure("Figure_svg18", 18, Figure_svg18, false),
        new Figure("Figure_svg19", 19, Figure_svg19, false),
        new Figure("Figure_svg20", 20, Figure_svg20, false),
        new Figure("Figure_svg21", 21, Figure_svg21, false),
        new Figure("Figure_svg22", 22, Figure_svg22, false),
        new Figure("Figure_svg23", 23, Figure_svg23, false),
        new Figure("Figure_svg24", 24, Figure_svg24, false),
        new Figure("Figure_svg26", 26, Figure_svg26, false),
        new Figure("Figure_svg27", 27, Figure_svg27, false),
        new Figure("Figure_svg28", 28, Figure_svg28, false),
        new Figure("Figure_svg29", 29, Figure_svg29, false),
        new Figure("Figure_svg30", 30, Figure_svg30, false),
        new Figure("Figure_svg31", 31, Figure_svg31, false),
        new Figure("Figure_svg32", 32, Figure_svg32, false),
        new Figure("Figure_svg33", 33, Figure_svg33, false),
        new Figure("Figure_svg34", 34, Figure_svg34, false),
        new Figure("Figure_svg35", 35, Figure_svg35, false),
        new Figure("Figure_svg36", 36, Figure_svg36, false),
        new Figure("Figure_svg37", 37, Figure_svg37, false),
        new Figure("Figure_svg38", 38, Figure_svg38, false),
        new Figure("Figure_svg39", 39, Figure_svg39, false),
        new Figure("Figure_svg40", 40, Figure_svg40, false),
        new Figure("Figure_svg41", 41, Figure_svg41, false),
        new Figure("Figure_svg42", 42, Figure_svg42, false),
        new Figure("Figure_svg43", 43, Figure_svg43, false),
        new Figure("Figure_svg44", 44, Figure_svg44, false)

    ]

    const [FigureArrayState, setFigureArrayState] = useState(FiguresArrays)


    const [ Array_Figuras_Aleatorias, SetArray_Figuras_Aleatorias]  = useState()
    const [ArrayItensClicados, setArrayItensClicados] = useState([])
    const [AnimationStart, setAnimationStart] = useState(true)

    const [ContAcertos, setContAcertos] = useState(0)
    const [ConstErros, setConstErros] = useState(0)

    const RefCard = useRef(null)

    const RefAudioAcertou = useRef(null)
    const RefAudioErrou = useRef(null)

    useEffect(() => {
        Start()
    }, [])

    useEffect(() => {
       
        if(ArrayItensClicados.length === 2){
            if(ArrayItensClicados[0] === ArrayItensClicados[1]){
                console.log("> São iguais")
                RefAudioAcertou.current.play()
                console.log(ArrayItensClicados)
                setContAcertos(ContAcertos+1)
                setArrayItensClicados([])
            }else{
                console.log("> Não são iguais")
                RefAudioErrou.current.play()
                setConstErros(ConstErros+1)
                setArrayItensClicados([])
                console.log("Limpando Array Card Clicado")
            }
        }else{
            console.log("Selecione 1 um card")
            console.log(ArrayItensClicados)
               
        }
        console.log("--------")
        
    },[ArrayItensClicados])

    
    function Start () {
        const Array_Indices_Aleatorios = []
        const Array_Pares = []
        let x = 0
        while ( Array_Indices_Aleatorios.length < 18 ) {
            let IndiceAleatorio = Math.floor(Math.random() * FiguresArrays.length)
            const existe = Array_Indices_Aleatorios.includes(IndiceAleatorio)
            if (!existe ) {
                Array_Indices_Aleatorios.push(IndiceAleatorio)
                Array_Indices_Aleatorios.push(IndiceAleatorio)
            }
        }
        //console.log(Array_Indices_Aleatorios)
        const Array_Indices_Final = Array_Indices_Aleatorios.sort(() => Math.random() - 0.5)
        SetArray_Figuras_Aleatorias(Array_Indices_Final)
        
    }

    function handleRecomecar () {
        Start()
        setTimeout(() => {
            
        }, 1000);
        const x = document.querySelectorAll(".Card1_Content")
        x.forEach( item => {
            if ( item.classList.contains("CardEscondido")){
                item.classList.remove("CardEscondido")
                item.classList.add("CardVisivel")

                setInterval(() => {
                    item.classList.remove("CardVisivel")
                    item.classList.add("CardEscondido")
                }, 4000);
            }
            
        } )
    }

    return (
        <>
            <main className="Box_Home_Page">

                <div className="Jogo_da_Memoria">
                    <section className="Section_JM_Dados">
                        <div className="left">
                            <button onClick={handleRecomecar}>Recomecar</button>
                            <div className="Acertos_Errros">
                                <p>Acertos: {ContAcertos}</p>
                                <p>Erros: {ConstErros}</p>
                            </div>
                        </div>
                        <div className="right">
                            <p id="level_JM">Level 1</p>
                            <div className="time">
                                <p>Tempo</p>
                                <p>01:05</p>
                            </div>
                        </div>
                    </section>
                    <section className="Section_Card">
                        {
                           Array_Figuras_Aleatorias && Array_Figuras_Aleatorias.map( (item, index ) => {
                            const figureItem = FigureArrayState[item]
                                return(
                                    <Card1 key={index} ref={RefCard} index={index} ArrayItensClicados={ArrayItensClicados} figura={figureItem.endereco} codigo={figureItem.codigo} onClick={CardVisivel} />
                                )
                            })
                        }
                    </section>
                </div>
                <Menu1/>

                <audio ref={RefAudioAcertou} src={AudioAcertou}></audio>
                <audio ref={RefAudioErrou} src={AudioErrou}></audio>
            </main>
        </>
    )
    
    function CardVisivel (index, CodigoFigura){
       console.log(`Card clicado: ${CodigoFigura} no Index (${index})`)

       setArrayItensClicados(prevArray =>   [...prevArray, CodigoFigura])
       console.log(`${CodigoFigura} adiconado ao array`)
    }

}

export default HomePage