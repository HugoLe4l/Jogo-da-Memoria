import "./Card1.css"
import { useEffect, useRef, useState } from "react"
import Interrogacao_Icon from "../../../public/Icons/ponto-de-interrogacao.png"



function Card1({ index, ArrayItensClicados, figura, codigo, onClick, AnimationStart }) {

    const Ref_Card1 = useRef(null)
    const Card1_Content = useRef(null)
    const Ref_EffectCHeckOkCard = useRef(null)

    const [ClassCard1Content, setClassCard1Content] = useState("CardEscondido")
    const [FoiAchado, setFoiAchado] = useState(false)

    const [AnimationStartState, setAAnimationStartState] = useState(AnimationStart)

    function AnimacaoStart () {
        setTimeout(() => {
            setClassCard1Content("CardVisivel")
        }, 1000);   
        setTimeout(() => {
            setClassCard1Content("CardEscondido")
        }, 4000);
    }

    useEffect(() => {
        AnimacaoStart()
    },[])



    useEffect(() => {
        if (!FoiAchado){
            if (ArrayItensClicados.length  === 2){
                if(ArrayItensClicados[0] && ArrayItensClicados[1]){

                    if(ArrayItensClicados[0] === ArrayItensClicados[1] && ArrayItensClicados[0] === codigo){
                        Card1_Content.current.classList.add("CardCheckParOk")
                        Ref_Card1.current.style.pointerEvents = "none"
                        Ref_Card1.current.style.scale = 1.1
                        setTimeout(() => {
                            Ref_Card1.current.style.scale = 1
                        }, 1000);
                        Ref_EffectCHeckOkCard.current.classList.add("EffectCHeckOkCard")
                        setFoiAchado(true)
                    }else{
                        Ref_Card1.current.style.pointerEvents = "none"
                        setTimeout(() => {
                            setClassCard1Content("CardEscondido")
                            Ref_Card1.current.style.pointerEvents = "auto"
                        }, 2000); 
                    }
                }
               
            }
        }
    },[ArrayItensClicados])
    return (
        <div className="Card1" ref={Ref_Card1} onClick={ () => EnviarCodigo(index, codigo, AnimationStartState)  } >
            <div className={`Card1_Content ${ClassCard1Content}`} ref={Card1_Content}>

                <div className="Card_Front">
                    <img id="imageBack" className="Card_image" src={Interrogacao_Icon} alt="" />
                    
                </div>

                <div className="Card_Back">
                    <img id="imageFront" className="Card_image" src={figura} />
                   
                </div>
                <div ref={Ref_EffectCHeckOkCard}>

                </div>
            </div>
        </div>
    )

    function EnviarCodigo(index, codigo, AnimationStartState) {
        Ref_Card1.current.style.pointerEvents = "none"

        onClick(index, codigo, AnimationStartState)
        if (ClassCard1Content === "CardVisivel") {
            setClassCard1Content("CardEscondido")
        }
        if (ClassCard1Content === "CardEscondido") {
            setClassCard1Content("CardVisivel")
        }
    }
}

export default Card1