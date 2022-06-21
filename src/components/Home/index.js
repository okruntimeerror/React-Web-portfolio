import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'; 
import Flowerbackground from '../../assets/images/Flowerbackground.png' 
import AnimatedLetters from '../AnimatedLetters'; 


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 
    const introArray = ['H','i',' ','I',"'",'m']
    const nameArray = ['R','e','d','a','c','t','e','d']
    const jobArray = ['J','r','.',' ','S','o','f','t','w','a','r','e',' ','D','e','v']


    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])



    return (
     <div className = "home-page" >
        <div className='back-ground'>
            <img src = {Flowerbackground} alt="flower"/>
        </div>     

                <div className="text-zone">
                    <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={introArray}
                    idx ={14} /> 
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx ={15} /> 
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx ={22} /> 
                    <h2>Frontend Developer / Python user / Database organizer </h2>
                    <Link to= '/contact' className= 'flat-button'> Contact me</Link>
                    <br/> 
                    </h1>
             </div>


                
    </div>   

         
    )
}



export default Home;
