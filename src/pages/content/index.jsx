import React from 'react';
import './style.scss'
import background from '../../assets/image/bg.png'
import lemon from '../../assets/image/Lemon.png'
import ginger from '../../assets/image/ginger.png'
import nootris from '../../assets/image/nootris.png'

const ContentComponent = () => {
    return (
        <div className='L-content'style={{backgroundImage: `url('${background}')`}}>
            <div className="G-container L-content-wrapper" >
                <div className="L-content-child">
                    <h1 className='L-content-title'>АКТИВИРУЙ
                        ИММУНИТЕТ!</h1>
                    <p className='L-content-paragraph'>Всего пять секунд в день помогут укрепить иммунитет
                        и повысить защитные силы организма</p>
                    <b className='L-content-about'>NOOTRIS ПОМОГАЕТ</b>
                    <p className='L-content-about-paragraph'>Вашему организму во время пандемии
                        и сезонных простуд</p>
                </div>
                <div className='L-content-images L-lemon' style={{backgroundImage: `url('${lemon}')`}}/>
                <div className='L-content-images L-nootris ' style={{backgroundImage: `url('${nootris}')`}}/>
                <div className='L-content-images L-ginger ' style={{backgroundImage: `url('${ginger}')`}}/>

            </div>
        </div>
    );
};

export default ContentComponent;
