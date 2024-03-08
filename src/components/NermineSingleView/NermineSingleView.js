import React from 'react'
import style from "./NermineSingleView.module.css"

function NermineSingleView({isNermine}) {
  return (
    <section className={`${!isNermine?style.wrapper:style.wrapperSpread}`}>
        <li className={`${!isNermine?style.topLeft:`${style.spread} ${style.leftTop}`}`}>I'm not gonna add a lot</li>
        <li className={`${!isNermine?style.top:`${style.spread} ${style.middleTop}`}`}>Thank you for guiding us through it all !</li>
        <li className={`${!isNermine?style.topRight:`${style.spread} ${style.rightTop}`}`}>Keep the place professional</li>
        <li className={`${!isNermine?style.right:`${style.spread} ${style.leftMiddle}`}`}>check your calendar</li>
        <li className={`${!isNermine?style.middle:`${style.spread} ${style.avatar}`}`}>
        </li>
        <li className={`${!isNermine?style.left:`${style.spread} ${style.rightMiddle}`}`}>I can hear arabic words downstairs</li>
        <li className={`${!isNermine?style.bottomLeft:`${style.spread} ${style.leftBottom}`}`}>I use mac</li>
        <li className={`${!isNermine?style.bottom:`${style.spread} ${style.middleBottom}`}`}>We Love You From The Bottom Of Our Hearts</li>
        <li className={`${!isNermine?style.bottomRight:`${style.spread} ${style.rightBottom}`}`}>I noticed some tardiness</li>

    </section>
  )
}

export default NermineSingleView