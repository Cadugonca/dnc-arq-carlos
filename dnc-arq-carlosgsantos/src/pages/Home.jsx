import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import {useContext} from 'react'
import Hero from "../components/Hero/Hero"
import List from "../components/ProjectsList/List"

// Context
import { AppContext } from '../contexts/AppContext'

function  Home(){
const appContext = useContext(AppContext)

    return (
        <>
        <Header/>
        <div className="container">
        <Hero/>
        <List/>
        </div>
        
        <Footer/>
        </>
    )
}

export default Home