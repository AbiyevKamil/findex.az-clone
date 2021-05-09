import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import HeaderStyle from "../styles/Header.module.css";
import StyledBtnSignIn from "../styled-components/StyledBtnSignIn";
import NavbarStyle from "../styles/Navbar.module.css";
import {Home} from "./Home";
import {News} from "./News";
import Costs from "./Costs";
import Services from "./Services";
import Contact from "./Contact";
import {Shops} from "./Shops";
import StyledBtnRegister from "../styled-components/StyledBtnRegister";
import FAQ from "./FAQ";
import FooterStyle from "../styles/Footer.module.css";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {AiOutlineUser} from "react-icons/ai";
import {SiMailDotRu} from "react-icons/si";
import {RiMessageFill} from "react-icons/ri";
import {GoLocation} from "react-icons/go";
import Transportation from "./conditions/Transportation";
import Login from "./Login";
import Register from "./Register";

const Layout = ({children}) => {
    const [fixed, setFixed] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 46) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    });
    return (
        <Router>
            <div>
                <div className={HeaderStyle.header_top}>
                    <div className={HeaderStyle.header_top_left}>
                        <div className={HeaderStyle.header_social_icon}>
                            <a href="https">
                                <img
                                    src="https://findex.az/icons/facebook.svg"
                                    alt="facebook"
                                    width="20"
                                    height="20"
                                />
                            </a>
                        </div>
                        <div className="header_social_icon">
                            <a href="https">
                                <img
                                    src="https://findex.az/icons/instagram.svg"
                                    alt="instagram"
                                    width="20"
                                    height="20"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={HeaderStyle.header_top_middle}>
                        <Link to="/faq" className={HeaderStyle.desc}>
                            Tez-tez verilən suallar
                        </Link>
                        <Link to="/conditions/transportation" className={HeaderStyle.desc}>
                            Daşınma Şərtləri
                        </Link>
                        <form className={HeaderStyle.search_field}>
                            <input
                                placeholder="Buradan axtarın..."
                                type="text"
                                className={HeaderStyle.search_input}
                            />
                            <button className={HeaderStyle.search_btn} type="submit">
                                <FaSearch className={HeaderStyle.search_icon}/>
                            </button>
                        </form>
                    </div>
                    <div className={HeaderStyle.header_top_right}>
                        <Link to="/login">
                            <StyledBtnSignIn>Daxil ol</StyledBtnSignIn>
                        </Link>
                    </div>
                </div>
                <div
                    className={`${NavbarStyle.navbar} ${fixed ? NavbarStyle.navber_fixed : ""
                    }`}
                >
                    <Link to="/" className={NavbarStyle.logo_link}>
                        <img
                            src="https://findex.az/logo-next.svg"
                            alt="Findex.az"
                            className={NavbarStyle.logo}
                        />
                    </Link>
                    <div className={NavbarStyle.links_container}>
                        <NavLink
                            exact
                            to="/"
                            activeClassName={NavbarStyle.link_active}
                            className={NavbarStyle.link}
                        >
                            Ana səhifə
                        </NavLink>
                        <NavLink
                            to="/news"
                            activeClassName={NavbarStyle.link_active}
                            className={NavbarStyle.link}
                        >
                            Xəbərlər
                        </NavLink>
                        <NavLink
                            to="/costs"
                            activeClassName={NavbarStyle.link_active}
                            className={NavbarStyle.link}
                        >
                            Tariflər
                        </NavLink>
                        <NavLink
                            to="/services"
                            activeClassName={NavbarStyle.link_active}
                            className={NavbarStyle.link}
                        >
                            Xidmətlər
                        </NavLink>
                        <NavLink
                            exact
                            to="/shops"
                            activeClassName={NavbarStyle.link_active}
                            className={NavbarStyle.link}
                        >
                            Mağazalar
                        </NavLink>
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName={NavbarStyle.link_active}
                            className={NavbarStyle.link}
                        >
                            Əlaqə
                        </NavLink>
                    </div>
                    <div className={NavbarStyle.register_btn_container}>
                        <Link to={"/register"}>
                            <StyledBtnRegister className={NavbarStyle.register_btn}>
                                Qeydiyyat
                            </StyledBtnRegister>
                        </Link>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/news">
                        <News/>
                    </Route>
                    <Route exact path="/costs">
                        <Costs/>
                    </Route>
                    <Route exact path="/services">
                        <Services/>
                    </Route>
                    <Route exact path="/shops">
                        <Shops/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/faq">
                        <FAQ/>
                    </Route>
                    <Route exact path="/conditions/transportation">
                        <Transportation/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                </Switch>
                {children}
                <div className={FooterStyle.footer}>
                    <div className={FooterStyle.footer_top}>
                        <div className={FooterStyle.footer_top_left}>
                            <div className={FooterStyle.logo_container}>
                                <img
                                    className={FooterStyle.logo}
                                    src="https://findex.az/logo-next-light.svg"
                                    alt="Findex.az"
                                />
                            </div>

                            <p className={FooterStyle.description}>
                                “Find Express” MMC Azərbaycanda fəaliyyət göstərən express
                                logistika şirkətidir. Təklif və iradlarınız üçün bizimlə əlaqə
                                saxlaya bilərsiniz.
                            </p>
                            <div className={FooterStyle.phone_field}>
                                <FaPhoneAlt className={FooterStyle.footer_icons}/>
                                <p>(111) 111-11-11</p>
                            </div>
                            <div className={FooterStyle.adress_field}>
                                <GoLocation className={FooterStyle.footer_icons_unregular}/>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className={FooterStyle.email_field}>
                                <MdEmail className={FooterStyle.footer_icons}/>
                                <p>random@mail.ru</p>
                            </div>
                            <div className={FooterStyle.app_recommend_field}>
                                <a href="https">
                                    <img
                                        className={FooterStyle.app_recommend}
                                        src="https://findex.az/images/play-store.png"
                                        alt="Play Market"
                                    />
                                </a>
                                <a href="https">
                                    <img
                                        className={FooterStyle.app_recommend}
                                        src="https://findex.az/images/app-store.png"
                                        alt="Apple Store"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className={FooterStyle.footer_top_middle}>
                            <h2 className={FooterStyle.footer_middle_head}>Bizimlə əlaqə</h2>
                            <form action="https">
                                <div className={FooterStyle.input_field}>
                                    <input
                                        className={FooterStyle.input}
                                        type="text"
                                        placeholder="Ad soyad"
                                    />
                                    <AiOutlineUser className={FooterStyle.icon}/>
                                </div>
                                <div className={FooterStyle.input_field}>
                                    <input
                                        className={FooterStyle.input}
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <SiMailDotRu className={FooterStyle.icon}/>
                                </div>
                                <div className={FooterStyle.input_field}>
                                    <input
                                        type="number"
                                        className={`${FooterStyle.input} ${FooterStyle.phone_input}`}
                                        placeholder="Telefon"
                                    />
                                    <FaPhoneAlt className={FooterStyle.icon}/>
                                </div>
                                <div className={FooterStyle.form_bottom}>
                                    <div className={FooterStyle.text_field}>
                    <textarea
                        className={FooterStyle.textarea}
                        cols="30"
                        rows="10"
                        placeholder="Məzmun"
                    ></textarea>
                                        <RiMessageFill className={FooterStyle.message_icon}/>
                                    </div>
                                    <button className={FooterStyle.submit_btn} type="submit">
                                        Göndər
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className={FooterStyle.footer_top_right}>
                            <h2 className={FooterStyle.footer_right_head}>Keçidlər</h2>
                            <li className={FooterStyle.link_container}>
                                <Link to="/" className={FooterStyle.link}>
                                    - Ana səhifə
                                </Link>
                            </li>
                            <li className={FooterStyle.link_container}>
                                <Link to="/login" className={FooterStyle.link}>
                                    - Şəxsi kabinet
                                </Link>
                            </li>
                            <li className={FooterStyle.link_container}>
                                <Link to="/services" className={FooterStyle.link}>
                                    - Xidmətlər
                                </Link>
                            </li>
                            <li className={FooterStyle.link_container}>
                                <Link to="/news" className={FooterStyle.link}>
                                    - Xəbərlər
                                </Link>
                            </li>
                            <li className={FooterStyle.link_container}>
                                <Link to="/shops" className={FooterStyle.link}>
                                    - Mağazalar
                                </Link>
                            </li>
                            <li className={FooterStyle.link_container}>
                                <Link to="/faq" href="https" className={FooterStyle.link}>
                                    - Tez-tez verilən suallar
                                </Link>
                            </li>
                            <li className={FooterStyle.link_container}>
                                <Link to="/contact" className={FooterStyle.link}>
                                    - Bizimlə əlaqə
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className={FooterStyle.footer_bottom}>
                        <p className={FooterStyle.footer_copyright}>
                            FİND EXPRESS MMC - 2020{" "}
                            <span style={{color: "red", marginLeft: "15px"}}>
                THIS IS A CLONE!!!
              </span>
                        </p>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Layout;
