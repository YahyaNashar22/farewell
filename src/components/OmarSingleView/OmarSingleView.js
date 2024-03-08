import React from 'react'
import style from "./OmarSingleView.module.css"

function OmarSingleView({isOmar}) {
  return (
    <section className={`${!isOmar?style.wrapper:style.wrapperSpread}`}>
        <li className={`${!isOmar?style.topLeft:`${style.spread} ${style.leftTop}`}`}>Design WISE !</li>
        <li className={`${!isOmar?style.top:`${style.spread} ${style.middleTop}`}`}>Thank you for your continuous support !</li>
        <li className={`${!isOmar?style.topRight:`${style.spread} ${style.rightTop}`}`}>I'm Trilingual</li>
        <li className={`${!isOmar?style.right:`${style.spread} ${style.leftMiddle}`}`}>Let's watch a movie</li>
        <li className={`${!isOmar?style.bottomLeft:`${style.spread} ${style.leftBottom}`}`}>Nammal wejje !</li>
        <li className={`${!isOmar?style.left:`${style.spread} ${style.leftMiddle}`}`}>Guys ! BUSUU !</li>
        <li className={`${!isOmar?style.right:`${style.spread} ${style.leftMiddle}`}`}>Mnet5atta</li>
        <li className={`${!isOmar?style.middle:`${style.spread} ${style.avatar}`}`}>
        </li>
        <li className={`${!isOmar?style.bottomLeft:`${style.spread} ${style.leftBottom}`}`}>We can book a 1 on 1</li>
        <li className={`${!isOmar?style.bottomLeft:`${style.spread} ${style.leftBottom}`}`}>Tonalityyyy</li>
        <li className={`${!isOmar?style.bottom:`${style.spread} ${style.middleBottom}`}`}>We Love You From The Bottom Of Our Hearts</li>
        <li className={`${!isOmar?style.bottomRight:`${style.spread} ${style.rightBottom}`}`}>I want to go to bekaa</li>

    </section>
  )
}

export default OmarSingleView