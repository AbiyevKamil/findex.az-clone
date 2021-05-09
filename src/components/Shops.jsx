import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {Container} from "../styled-components/ShopsComponents";
import dataShops from '../api/data.json';

export const Shops = () => {
    /*
    const [fixed, setFixed] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    });
    */
    return (
        <Container>
            <div className="left">
                <div className={`categories_container`}>
                    <div className="categories_header">
                        <h1 className="categories_head">Kateqoriyalar</h1>
                    </div>
                    <div className="category-container">
                        <h2 className="category">Geyim</h2>
                    </div>
                    <div className="category-container">
                        <h2 className="category">Ayaqqabı və çanta</h2>
                    </div>
                    <div className="category-container">
                        <h2 className="category">Uşaq</h2>
                    </div>
                    <div className="category-container">
                        <h2 className="category">Aksesuar</h2>
                    </div>
                    <div className="category-container">
                        <h2 className="category">İdman</h2>
                    </div>
                    <div className="category-container">
                        <h2 className="category">Sağlamlıq və gözəllik</h2>
                    </div>
                    <div className="category-container">
                        <h2 className="category">Ev və ofis</h2>
                    </div>
                    <div className="category-container">
                        <h2 className="category">Elektronika</h2>
                    </div>
                    <div className="category-container">
                        <h2 className="category">Bütün</h2>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="search-container">
                    <div className="input-field">
                        <input type="text" placeholder={"Buradan axtarın..."}/>
                        <div className="icon-container">
                            <FaSearch/>
                        </div>
                    </div>
                </div>
                <div className="shops">
                    {dataShops.links.map(shop => (
                        <div key={shop.name} className="image-container">
                            <img src={shop.link} alt={shop.name}/>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};


/*
  const links = [
    {
      name: "trendyol.com",
      link:
        "https://api.findex.az/storage/shop/e766907d7ebed3cbe2d04f6369587d3b.png",
      type: "clothing",
    },
    {
      name: "hepsiburada.com",
      link:
        "https://api.findex.az/storage/shop/db72fa8e032dd0223d2519d5365ec9ad.png",
      type: "clothing",
    },
    {
      name: "inantesbih.com",
      link:
        "https://api.findex.az/storage/shop/f8594af1602d2561c77a8362b61b44b0.jpeg",
      type: "accesory",
    },
    {
      name: "nursace.com",
      link:
        "https://api.findex.az/storage/shop/23baa103d6ee7969e046d12851754575.jpeg",
      type: "shoes",
    },
    {
      name: "mango.com",
      link:
        "https://api.findex.az/storage/shop/d350d9a9f73f027346b73f905ec9bc99.png",
      type: "shoes",
    },
    {
      name: "dsdamat.com",
      link:
        "https://api.findex.az/storage/shop/44eb65221a6cab4c39272e7efef30020.jpeg",
      type: "clothing",
    },
    {
      name: "brandys.com.tr",
      link:
        "https://api.findex.az/storage/shop/f577439ba32270dc77a9619d27fbddf4.jpeg",
      type: "clothing",
    },
    {
      name: "aldoshoes.com.tr",
      link:
        "https://api.findex.az/storage/shop/052995d2ffb869d7d5b21f78f8c311d8.jpeg",
      type: "shoes",
    },
    {
      name: "loccitane.com.tr",
      link:
        "https://api.findex.az/storage/shop/e6dd25a6df4a492cbe86359fdbf3c688.jpeg",
      type: "health",
    },
    {
      name: "bobbibrown.com.tr",
      link:
        "https://api.findex.az/storage/shop/bc1da7f9cf5a1496f30e308d169cd2b9.jpeg",
      type: "health",
    },
    {
      name: "sephora.com.tr",
      link:
        "https://api.findex.az/storage/shop/99a521b58f0e3dcd3a40b9bc3cae6d02.jpeg",
      type: "health",
    },
    {
      name: "inglottr.com",
      link:
        "https://api.findex.az/storage/shop/047fd7ec9cb25acfe921a417d00816fa.jpeg",
      type: "health",
    },
    {
      name: "thebodyshop.com.tr",
      link:
        "https://api.findex.az/storage/shop/ff916b262b01cae59c0e1bc60229d4e3.jpeg",
      type: "health",
    },
    {
      name: "nyxcosmetics.com.tr",
      link:
        "https://api.findex.az/storage/shop/edfb1ce78753012bc67c6f15ac03b259.jpeg",
      type: "health",
    },
    {
      name: "maccosmetics.com.tr",
      link:
        "https://api.findex.az/storage/shop/5bb8ba8493009dc99acf555f5ffb9146.jpeg",
      type: "health",
    },
    {
      name: "kikocosmetics.com",
      link:
        "https://api.findex.az/storage/shop/2d8244b0e4b57e86733234ea9a57a414.jpeg",
      type: "health",
    },
    {
      name: "lcwaikiki.com",
      link:
        "https://api.findex.az/storage/shop/ec1e2ad803f7a9d39591290138f8f073.jpeg",
      type: "clothing",
    },
    {
      name: "mavi.com",
      link:
        "https://api.findex.az/storage/shop/cacf0c5c75973552cbf11485ef67245e.jpeg",
      type: "clothing",
    },
    {
      name: "ltbjeans.com",
      link:
        "https://api.findex.az/storage/shop/d05dd6e242faa600e6163587bac7ab5f.jpeg",
      type: "clothing",
    },
    {
      name: "loft.com.tr",
      link:
        "https://api.findex.az/storage/shop/3a977fecab0b6c5bc479ff40c68c4011.jpeg",
      type: "clothing",
    },
    {
      name: "lewis.com.tr",
      link:
        "https://api.findex.az/storage/shop/90d2364de0a78ac4aed7e7a799d00c07.jpeg",
      type: "clothing",
    },
    {
      name: "bershka.com",
      link:
        "https://api.findex.az/storage/shop/83466a19392d34165311d1c910a1c1b8.jpeg",
      type: "clothing",
    },
    {
      name: "hm.com",
      link:
        "https://api.findex.az/storage/shop/cf13c5823e6d8ff69dfdb29f88110bda.jpeg",
      type: "clothing",
    },
    {
      name: "puma.com",
      link:
        "https://api.findex.az/storage/shop/b756592391a285170cde0f5e9bfb07bb.jpeg",
      type: "sport",
    },
    {
      name: "nike.com",
      link:
        "https://api.findex.az/storage/shop/044937a7e4c7e13d81ad256b9b5d114e.jpeg",
      type: "sport",
    },
    {
      name: "gsstore.org",
      link:
        "https://api.findex.az/storage/shop/7bfe27351560dbfe0bba95e002ccb89d.jpeg",
      type: "sport",
    },
    {
      name: "adidas.com.tr",
      link:
        "https://api.findex.az/storage/shop/76d4a2a1dc79631fe3a78fd5fa75000e.jpeg",
      type: "sport",
    },
  ];
  */
