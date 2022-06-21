import AnimatedLetters from '../AnimatedLetters';
import './index.scss' ;
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Flowerbackground from '../../assets/images/Flowerbackground.png' 

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate') 
    const form = useRef()

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail =(e) => {
        e.preventDefault()

        emailjs.sendForm (
            'service_lsxhfme',
            'template_bkwl5jp',
            form.current,
            'VBpEj9COtXBbVcDBm'
        )
        .then (
            () => {
                alert('Message Succesfully Sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        ) 

    }


    return (
        <>
            <div className='container contact-page'>
                <div className='back-ground'>
                    <img src = {Flowerbackground} alt="flower"/>
                </div> 
                
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        idx = {15} 
                        />
                    </h1>
                    <p>
                       I check my email regularly, I'll usually get back to you within a day or two.
                       My phone number is 321-240-5418 and It is best if your text me before making any calls.  
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input 
                                    placeholder='Email'
                                    type='email'
                                    name='email'
                                    required
                                    />
                                </li>
                               <li>
                                    <input placeholder='Subject' 
                                    type='text' 
                                    name='subject' 
                                    required 
                                    />
                               </li>
                               <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                               </li>
                               <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                               </li>
                            </ul>
                        </form>

                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Contact