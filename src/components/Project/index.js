import './index.scss' 
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Flowerbackground from '../../assets/images/Flowerbackground.png' 


const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate') 

    const[selected, setselected]  = useState(null) 

    const toggle = i => { 
        if(selected === i ) {
            return setselected(null) 
        }

        setselected(i) 
    }

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])


    return (
        
        <div className='container projects-page'>
                <div className='back-ground'>
                    <img src = {Flowerbackground} alt="flower"/>
                </div> 
            <div className='text-zone'> 

                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray = {['P','r','o','j','e','c','t','s']}/>

                </h1>

                <div className='wrapper'>
                    <div className='accordian'>
                        {data.map((item, i) => (
                            <div className='item'>
                                    <div className='title' onClick={() => toggle(i)}>

                                        <h2>{item.project}</h2>

                                        <h3>{selected === i ? '-' : '+' }</h3>
                                    </div>
                                <div className={selected === i ? 'content show' : 'content' }>{item.comment}</div>

                            </div>                             
                        ))}
                    </div>
                 </div>

            </div>


        </div>
    )

}

const data = [
    {
        project: 'name', 
        comment: 
        <p>
        [your project here] 
        </p>

    },

    {
        project: 'name',
        comment: 
        <p>
        [your project here]  
        </p> 
    },
    {
        project: 'name',
        comment: 
        <p>
        [your project here] 
        </p> 
    },
    {
        project: 'name',
        comment: 
        <p>
        [your project here]
        </p>
    }
]

export default Project
