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
                My name is Andrew Pronek a University of Central Florida Junior. 
                Pursuing a Major in Legal Studies with a minor in Computer Science. 
                I enjoy the institution and the skills it lets me cultivate. 
                My interest in law has stemmed from my interests in clubs in high school. 
                While Computer Science stems from my constant tinkering with computers ever since I was young. 
                The move from physical components to the actual inner workings has been the greatest revelation to experience. 
                </p>

                <p>
                For the Computer Science skills that I have been cultivating, you are looking at one. 
                While this remains my first project that was fully completed using the React.js framework. 
                There are so many possibilities within it, from the control of text to the 3D elements that can be created using it. 
                Python and C are the software developing languages of choice. 
                I resort to Python out of instinct. 
                However, if the memory requirements are needed or complex data needs to be recorded C proves to be the workhorse on a majority of projects. 
                Finally Rounding it out would be SQL as manually constructing a backend for software information is always a Joy to see a system work in complete unison. 
                </p>

                <p>
                My current goals, for now, are to expand on my experience in these areas even more so. 
                I wish to take on an internship in any of these areas and learn more about the integral aspects of each. 
                In the past, I have been a Varsity Debate member as well as both a speech competition judge and competitor. 
                With a love for Animation and in the smallest of ways they have found themselves in my later works. 
                Either from the mock trial or the smallest animatics, I have compiled for websites. 
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
