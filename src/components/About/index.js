import './index.scss' 
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faWrench } from '@fortawesome/free-solid-svg-icons';
import { SiMysql } from '/node_modules/react-icons/si/index.js';
import Flowerbackground from '../../assets/images/Flowerbackground.png' 



const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate') 

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <div className='container about-page'>

        <div className='back-ground'>
            <img src = {Flowerbackground} alt="flower"/>
        </div> 

            <div className='text-zone'>

                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray = {['A','b','o','u','t','','M','e']}
                    />
                </h1>

                <p>
                [REDACTED] 
                </p>

                <p>
                [REDACTED]  
                </p>

                <p>
                [REDACTED] 
                </p>

            </div>

            <div className='stage-cube-cont'>

                
                <div className='cubespinner'>
                    
                    <div className='face1'>
                     <FontAwesomeIcon icon={faReact}  color='#108790' /> 
                    </div>
                    
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython}  color= "#4682B4" /> 
                    </div>
                    
                    <div className='face3'> 
                        <FontAwesomeIcon icon={faC}  color= '#ffffff' /> 
                    </div>
                     <div className='face4'>
                        <SiMysql color = "#FF7F50" /> 
                    </div>

                    <div2 className='face5'>
                        <div2>
                            <FontAwesomeIcon icon={faWrench} color = "#FFD700" />
                        </div2>
                    </div2>
                    
                    

                </div>

            </div>

        </div>
    )
}




export default About
