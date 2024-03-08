import React from 'react'
import style from "./T04SingleView.module.css"

function T04SingleView({isT04}) {
  return (
    <section className={`${!isT04?style.wrapper:style.wrapperSpread}`}>
        <li className={`${!isT04?style.topLeft:`${style.spread} ${style.leftBottom}`}`}>Fuad Abu Heit</li>
        <li className={`${!isT04?style.topRight:`${style.spread} ${style.leftBottom}`}`}>Hasan Deeb</li>
        <li className={`${!isT04?style.right:`${style.spread} ${style.leftBottom}`}`}>Sabah Al Mel</li>
        <li className={`${!isT04?style.bottomLeft:`${style.spread} ${style.leftBottom}`}`}>Rayan ALi</li>
        <li className={`${!isT04?style.left:`${style.spread} ${style.leftBottom}`}`}>Abdul Aziz Cherkawi</li>
        <li className={`${!isT04?style.right:`${style.spread} ${style.leftBottom}`}`}>Anwar Khawli</li>
        <li className={`${!isT04?style.bottomLeft:`${style.spread} ${style.leftBottom}`}`}>Issa Abd Al Rahman</li>
        <li className={`${!isT04?style.bottomLeft:`${style.spread} ${style.leftBottom}`}`}>Louai Baghdadi</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Rachwan Harb</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Wouroud Al Khaldi</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Souhad Moussa</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Mohamad Salloumi</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Marwa Kassha</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Rayan Al Hassan</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Mariam Suleiman</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Souheir Al Jamal</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Layla Hammoud</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Yahya Nashar</li>
        <li className={`${!isT04?style.bottomRight:`${style.spread} ${style.leftBottom}`}`}>Abd Al Rahman Ghassa</li>
    </section>
  )
}

export default T04SingleView