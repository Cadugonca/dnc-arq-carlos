import './ContactForm.css'
import { useState, useEffect, useContext } from 'react'

//Components
import Button from '../Button/Button'

// Context
import { AppContext } from '../../contexts/AppContext'
function  ContactForm(){
        const [formData, setFormData] = useState({
                name: '',
                email: '',
                message: ''
        })

        const [isFormValid, setIsFormValid] = useState(false)
        const [formSubmitLoading, setFormSubmitLoading] = useState(false)
        const [formSubmitted, setFormSubmitted] = useState(false)
        const appContext = useContext(AppContext)

        const handleSubmit = async (e) => {
                e.preventDefault()
                if (isFormValid) {
                        setFormSubmitLoading(true)
                        try{
                                const response = await fetch('https://api.web3forms.com/submit',{
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({...formData, access_key: "df4e04f1-0c51-476b-a64b-351237609b20"})
                        })
                        

                        if (response.ok) {
                                setFormSubmitted(true)
                        } else {
                                alert('Error')
                        }
                           } catch (e) {
                        alert('Error: ', e) 
                            } finally {
                        setFormSubmitLoading(false)
                       }
                } 
        }
   

        useEffect(() => {
                const isValidEmail = (email) => {	
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        return emailRegex.test(email)
                }
                const isValid = formData.name.trim()  && 
                formData.email.trim() && 
                isValidEmail(formData.email) && 
                formData.message.trim()

                setIsFormValid(isValid)
        }, [formData])

                const handleChange = (e) => {
                        const {name,value} = e.target;
                        setFormData({
                                ...formData,
                                [name]: value
                        })
                }

    return (
     
      <div className="container">
            <div className="contact-form d-flex fd-column al-center"> 
                <h2>{appContext.languages[appContext.language].contact.title} </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex form-group">
                                <input 
                                className="form-input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder={appContext.languages[appContext.language].contact.pl1}
                                onChange={handleChange}
                                required
                                />
                               
                                <input 
                                className="form-input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder={appContext.languages[appContext.language].contact.pl2}
                                onChange={handleChange}
                                required
                                />    
                        </div>
                        <div className="d-flex form-group">
                        <textarea
                                className="form-input"
                                id="message"
                                name="message"
                                placeholder={appContext.languages[appContext.language].contact.pl3}
                                rows="4"
                                onChange={handleChange}
                                required
                                />
                        </div>
                                 <div className="al-center d-flex jc-center form-group">
                                        {formSubmitted && <p className="text-primary">{appContext.languages[appContext.language].contact.successMsg}</p>}
                                        <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading} >
                                        {appContext.languages[appContext.language].general.send}
                                        </Button>
                                </div>
                    </form>
            </div>        
    </div>
    )
}

export default ContactForm