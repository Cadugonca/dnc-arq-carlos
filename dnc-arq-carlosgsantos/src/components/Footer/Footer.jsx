import { Link } from 'react-router-dom'
import { useContext } from 'react'

// ASSETS
import './Footer.css'
import brazil from "../../assets/brazil.svg"
import usa from "../../assets/usa.svg"
import Logo from "../../assets/dnc-logo 2.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"

// COMPONENT
import Button from '../Button/Button'

// Context
import { AppContext } from '../../contexts/AppContext'

function Footer () {
    const appContext = useContext(AppContext)

    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    

    return (
        <footer>
                <div className="container">
                    <div className="d-flex jc-space-between mobile-fd-column">
                        <div className="footer-logo-col"> 
                            <img src={Logo} className="footer-logo"/>
                            <p className="gray-1-color"> {appContext.languages[appContext.language].general.footerLogoText} </p>
                            <div className="d-flex social-links">

                                <a href="https://facebook.com" target="_blank">
                                    <img src={facebook}/>
                                </a>
                                <a href="https://instagram.com" target="_blank">
                                    <img src={instagram}/>
                                </a>
                                <a href="https://linkedin.com" target="_blank">
                                    <img src={linkedin}/>
                                </a>
                                <a href="https://x.com" target="_blank">
                                    <img src={twitter}/>
                                </a>          
                            </div>
                             </div>
                          <div className="d-flex">
                                    <div className="footer-col mobile-fd-column">
                                    <h3>{appContext.languages[appContext.language].general.pages}</h3>
                                        <ul >
                                        <li><Link to="/" >{appContext.languages[appContext.language].menu.home}</Link></li>
                                        <li><Link to="/Projects" >{appContext.languages[appContext.language].menu.projects}</Link></li>
                                        <li><Link to="/About" >{appContext.languages[appContext.language].menu.about}</Link></li>
                                        <li><Link to="/Contact" >{appContext.languages[appContext.language].menu.contact}</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                        <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                                        <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                                        <p className="grey-1-color">suporte@escoladnc.com.br</p>
                                        <p className="grey-1-color">(19) 99187-4342</p>
                                    </div>
                                </div>                     
                      </div>
                    <div className="d-flex jc-space-between footer-copy">
                        <p className="grey-1-color">Copyright © DNC - 2024</p>
                        <div className="langs-area d-flex">
                          <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={brazil} height="29px"/>
                            </Button>
                            <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={usa} height="29px"/>
                            </Button>

                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer