import React from "react";
import style from '../styles/Services.module.css';

const Services = () => {
    return (
        <div className={style.services}>
            <div className={style.header}>
                <div className={style.header_left}>
                    <h1>HANSI</h1>
                    <h1>XİDMƏTLƏRİ</h1>
                    <h1>GÖSTƏRİRİK?</h1>
                </div>
                <div className={style.header_right}>
                    <img className={style.right_img} src="https://findex.az/images/services.svg" alt=""/>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.service_container}>
                    <div className={style.service_header}>
                        <div className={style.service_header_left}>
                            <img className={style.header_left_img} src="https://findex.az/images/seo.jpg" alt=""/>
                        </div>
                        <div className={style.service_header_right}>
                            <h4>Köməkçi</h4>
                            <h4>xidməti</h4>
                        </div>
                    </div>
                    <div className={style.service_desc}>
                        <p className={style.desc}>
                            “Find Express” MMC məhsulları satın almaqda çətinlik çəkən istifadəçilərinə bu xidməti
                            təklif edir. “Find Express MMC” əməkdaşları bu xidmətlə istifadəçilərə online sifariş vermə
                            prosesində köməklik göstərir və bağlamaların satış firmasından Azərbaycanda birbaşa ünvana
                            çatdırılmasına qədər olan bütün mərhələləri öz üzərinə götürmüş olur. Xidmət ödənişsizdir.
                        </p>
                    </div>
                </div>
                <div className={style.service_container}>
                    <div className={style.service_header}>
                        <div className={style.service_header_left}>
                            <img className={style.header_left_img} src="https://findex.az/images/istanbul.jpg" alt=""/>
                        </div>
                        <div className={style.service_header_right}>
                            <h4>Türkiyədən</h4>
                            <h4>çatdırılma</h4>
                        </div>
                    </div>
                    <div className={style.service_desc}>
                        <p className={style.desc}>
                            “Find Express” MMC Türkiyədə yerləşən mağazalardan online sifarişi verilən məhsulların
                            sürətli çatdırılmasını reallaşdırır. Türkiyədən sifariş olunmuş mallar 2-3 gün müddətində
                            Bakı anbarımıza çatır. Normal sifarişlər növbəli olaraq verildiyi üçün sifarişin verilmə
                            müddəti Təcili sifariş növbəsindən asılı olaraq dəyişə bilir.
                        </p>
                    </div>
                </div>
                <div className={style.service_container}>
                    <div className={style.service_header}>
                        <div className={style.service_header_left}>
                            <img className={style.header_left_img} src="https://findex.az/images/courier.jpeg" alt=""/>
                        </div>
                        <div className={style.service_header_right}>
                            <h4>Kuryer</h4>
                            <h4>xidməti</h4>
                        </div>
                    </div>
                    <div className={style.service_desc}>
                        <p className={style.desc}>
                            “Find Express” MMC Bakı anbarına daxil olmuş bağlamanızı istədiyiniz ünvana çatdırma
                            xidmətini təklif edir. Siz vaxt itirmədən məhsulunuzu əldə etmiş olursunuz. Bu xidmətin
                            ödənişi haqqında məlumatı tariflər bölməsindən əldə edə bilərsiniz.
                        </p>
                    </div>
                </div>
                <div className={style.service_container}>
                    <div className={style.service_header}>
                        <div className={style.service_header_left}>
                            <img className={style.header_left_img} src="https://findex.az/images/logistic.svg" alt=""/>
                        </div>
                        <div className={style.service_header_right}>
                            <h4>Kütləvi</h4>
                            <h4>göndərişlərin</h4>
                            <h4>çatdırılması</h4>
                        </div>
                    </div>
                    <div className={style.service_desc}>
                        <p className={style.desc}>
                            “Find Express” MMC Türkiyədə yerləşən mağazalardan online sifarişi verilən məhsulların
                            sürətli çatdırılmasını reallaşdırır. Türkiyədən sifariş olunmuş mallar 2-3 gün müddətində
                            Bakı anbarımıza çatır. Normal sifarişlər növbəli olaraq verildiyi üçün sifarişin verilmə
                            müddəti Təcili sifariş növbəsindən asılı olaraq dəyişə bilir.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
