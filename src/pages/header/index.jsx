import React from 'react';
import './style.scss'
import logo from '../../assets/image/logo.png'
import icon from '../../assets/image/icon.png'

const HeaderComponent = () => {
    return (
        <div className='L-header-component'>
            <div className="G-container L-header-wrapper G-flex G-justify-around G-align-center">
                <div className='L-header-child '>
                    <div className="L-header-image" style={{backgroundImage: `url('${logo}')`}}/>
                </div>
                <div className='L-header-child'>
                    <ul className='L-header-list G-flex G-justify-evenly'>
                        <li className='L-header-link'>FAQ</li>
                        <li className='L-header-link'>Оплата и доставка</li>
                        <li className='L-header-link'>Возврат</li>
                        <li className='L-header-link'>Исследования</li>
                        <li className='L-header-link'>Личный кабинет</li>
                        <li className='L-header-link'>8 8 (800) 600-09-90</li>
                    </ul>
                </div>
                <div className=' L-header-child '>
                    <div className='L-header-image ' style={{backgroundImage: `url('${icon}')`}}>
                        <p className="L-circle-count">1</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeaderComponent;
