import { createContext, useEffect, useState } from "react";
import { getApiData } from "../services/apiServices"

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const savedLanguage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(savedLanguage ?? 'br')
    const [languages, setLanguages] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetcLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext')
                    setLanguages(getTexts)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        fetcLanguages()
    }, [])

    useEffect(() => {
        localStorage.setItem('lang', language)
    }, [language])
    
    return (
        <AppContext.Provider value={{language, setLanguage, languages, loading}}>
            {children}
        </AppContext.Provider>
    )

}

