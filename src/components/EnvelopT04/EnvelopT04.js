import React, { useState } from "react";
import style from "./EnvelopT04.module.css";

function EnvelopT04({isT04, isFadi, isOmar, isNermine, setIsT04}) {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <section className={`
                          ${style.wrapper}
                          ${isOmar || isNermine || isFadi ? style.hiddenEnvelop:""}
                          ${isT04?style.singleView:""}
                          `}>
      <div className={style.envelopeWrapper}>
        <div
          className={`${style.envelope} ${
            !isAnimated ? style.closeEnvelope : style.openEnvelope
          }`}
        >
          <p className={!isAnimated?style.name:style.hiddenName}>T04</p>
          <div className={`${style.front} ${style.flap}`}></div>
          <div className={`${style.front} ${style.pocket}`}></div>
          <div className={style.letter}>
            <div className={`${style.words} ${style.line1}`}></div>
            <div className={`${style.words} ${style.line2}`}></div>
            <div className={`${style.words} ${style.line3}`}></div>
            <div className={`${style.words} ${style.line4}`}></div>
          </div>
          <div className={style.hearts}>
            <div className={`${style.heart} ${style.a1}`}></div>
            <div className={`${style.heart} ${style.a2}`}></div>
            <div className={`${style.heart} ${style.a3}`}></div>
          </div>
        </div>
      </div>
      <div className={style.reset}>
        <button
          className={style.open}
          onClick={() => {setIsAnimated(!isAnimated);setIsT04(!isT04)}}
        >
          {!isAnimated?
          'Open'
        :
        'Close'
        }
        </button>
      </div>
    </section>
  );
}

export default EnvelopT04;
