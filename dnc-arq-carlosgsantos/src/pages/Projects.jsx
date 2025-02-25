import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import Hero from "../components/Hero/Hero"
import List from "../components/ProjectsList/List"
import {useContext} from 'react'

// Context
import { AppContext } from '../contexts/AppContext'


function  Projects(){
const appContext = useContext(AppContext)

    return (
        <>
              <Header/>
              <Banner title={appContext.languages[appContext.language].menu.projects} image="Projects.svg"/>
        <div className="container">
       
        <List/>
        </div>
        
        <Footer/>
        </>
    )
}

export default Projects