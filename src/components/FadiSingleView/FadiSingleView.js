import React from 'react'
import style from "./FadiSingleView.module.css"

function FadiSingleView({isFadi}) {
  return (
    <section className={`${!isFadi?style.wrapper:style.wrapperSpread}`}>
        <li className={`${!isFadi?style.topLeft:`${style.spread} ${style.leftTop}`}`}>Light Weight</li>
        <li className={`${!isFadi?style.top:`${style.spread} ${style.middleTop}`}`}>Thank you for teaching us all these amazing technologies !</li>
        <li className={`${!isFadi?style.topRight:`${style.spread} ${style.rightTop}`}`}>Super bad practice</li>
        <li className={`${!isFadi?style.right:`${style.spread} ${style.leftMiddle}`}`}>is it responsive ?</li>
        <li className={`${!isFadi?style.middle:`${style.spread} ${style.avatar}`}`}>
        </li>
        <li className={`${!isFadi?style.left:`${style.spread} ${style.rightMiddle}`}`}>I'm counting the arabic words</li>
        <li className={`${!isFadi?style.left:`${style.spread} ${style.rightMiddle}`}`}>consistency</li>
        <li className={`${!isFadi?style.bottomLeft:`${style.spread} ${style.leftBottom}`}`}>Not aligned</li>
        <li className={`${!isFadi?style.bottomLeft:`${style.spread} ${style.leftMiddle}`}`}>Warning sheet updated</li>
        <li className={`${!isFadi?style.bottom:`${style.spread} ${style.middleBottom}`}`}>We Love You From The Bottom Of Our Hearts</li>
        <li className={`${!isFadi?style.bottomRight:`${style.spread} ${style.rightBottom}`}`}>How many times are we gonne speak about this</li>

    </section>
  )
}

export default FadiSingleView