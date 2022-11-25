import React from 'react';
import ginger from '../../assets/image/ginger2.png'
import nootris from '../../assets/image/nootris2.png'
import virus from '../../assets/image/vorus.png'
import './style.scss'

const FooterComponent = () => {
    return (
        <div className='L-footer'>
            <div className="G-container L-footer-wrapper">
                <div className="L-footer-title-block">
                    <p className='L-footer-title'>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</p>
                    <p className='L-footer-title'> СО СКИДКОЙ -15% ПЕРВЫМ!</p>
                </div>
                <div className="L-footer-price-block G-flex">
                    <p className='L-footer-price'>750₽</p>
                    <p className='L-footer-price'>690₽</p>
                </div>
                <div className="L-footer-content G-flex ">
                    <div className="L-footer-cube">
                        <img className='L-footer-image' src={ginger} alt="ginger"/>
                        <p className='L-footer-cube-desc'>Содержит <span
                            className='L-footer-cube-desc-yellow'>имбирь</span></p>
                    </div>
                    <div className="L-footer-cube-big">
                        <img className='L-footer-image' src={nootris} alt="ginger"/>
                        <p className='L-footer-cube-desc'>+ Бесплатная доставка <span
                            className='L-footer-cube-desc-yellow'>Специальная цена</span></p>
                    </div>
                    <div className="L-footer-cube">
                        <img className='L-footer-image' src={virus} alt="ginger"/>
                        <p className='L-footer-cube-desc'>Нейтрализует
                            <span
                                className='L-footer-cube-desc-yellow'>вирусы</span></p>
                    </div>
                </div>
                <div className="L-buy-btn">
                    <button className="L-buy-button">
                        Оформить заказ!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
