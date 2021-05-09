import React from 'react';
import style from '../styles/Costs.module.css';

const Costs = () => {
    return (
        <div className={style.costs}>
            <h1 className={style.costs_header}>TARİFLƏR</h1>
            <div className={style.costs_top}>
                <h3 className={style.costs_top_header_1}>TÜRKİYƏDƏN YERLİ ANBARIMIZA</h3>
                <h3 className={style.costs_top_header_2}>ÇATDIRILMA QİYMƏTLƏRİ</h3>
                <div className={style.container_top}>
                    <div className={style.costs_normal}>
                        <h3 className={style.head}>ADİ MƏHSULLAR</h3>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    0.01 kq-dan 0.2 kq-a qədər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$1.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    0.21 kq-dan 0.50 kq-a qədər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$2.50</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    0.51 kq-dan 0.75 kq-a qədər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$3.50</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    0.76 kq-dan 1 kq-a qədər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$4.50</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    1.01 kq-dan 10 kq-a qədər hər kq-a
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$4.50</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    10 kq-dan yuxarı hər kq-a
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$4.00</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.costs_liquid}>
                        <h3 className={style.head}>MAYE MƏHSULLAR</h3>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    0.01 kq-dan 0.25 kq-a qədər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$2.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    0.26 kq-dan 0.50 kq-a qədər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    0.51 kq-dan 0.75 kq-a qədər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$6.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    0.76 kq-dan 1 kq-a qədər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$7.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    1.01 kq-dan yuxarı hər kq-a
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>$7.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.costs_bottom}>
                <h3 className={style.costs_bottom_header_1}>YERLİ ANBARIMIZDAN RAYONLARA</h3>
                <h3 className={style.costs_bottom_header_2}>KURYER TARİFLƏRİ</h3>
                <div className={style.container_bottom}>
                    <div className={style.costs_bottom_left}>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Nəsimi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼2.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Sabunçu
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼3.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Suraxanı
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Xəzər
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Lənkəran
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼5.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Pirallahı
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼6.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Nizami
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼1.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Sumqayıt
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼5.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Sabunçu(Şuşa qəsəbəsi)
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼5.00</p>
                            </div>
                        </div>

                    </div>

                    <div className={style.costs_bottom_right}>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>
                        <div className={style.cost}>
                            <div className={style.desc_container}>
                                <p className={style.desc}>
                                    Binəqədi
                                </p>
                            </div>
                            <div className={style.value_container}>
                                <p className={style.value}>₼4.00</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Costs;
