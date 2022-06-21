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
        project: 'React web portfolio', 
        comment: 
        <p>
        This is my first react project, which was compiled from Slodobans React.js tutorial on youtube.
        Even without any experience with javascript, I can see its strengths with object-based coding. 
        The ability to reuse assets with minor tweaks due to the child parents relationship lends a lot of freedom for the creation of creative elements in react. 
        For example the ability to just create an SCSS file that would follow with every page for certain elements to exist there and have an ability to call the functions anywhere else in the project helps.
        This can be seen by the same background animation going throughout the entire project which could easily be placed by the introduction of a div.
        One thing I want more of would be better animations. While yes there is the rotating cube on my about page, the way it was done is limited by the use of icons rotated at an angle with a border to create the illusion of a cube.
        One bug I encountered was that the icons are from FontAwsome, they have an invisible border around each one that when rotated caused the screen to flicker. 
        This could be avoided in the future, as coming across the Framer motion package the amount of control is similar to the motion tweening available in flash animate and Maya 3D model construction.
        Coupled with the retractable changing elements offered by framer motions the next user UI's I create will have that much-needed flair and response to them. 
        I enjoy React.js and am grateful for taking the time to be a project over the summer. 
        </p>

    },

    {
        project: 'Python sorting method',
        comment: 
        <p>
        This was borne out of an interest in graph sorting algorithms and how they comb through the data the ones I used were selection, merge bubble, and insertion.
        Now the math behind selecting a single variable on a graph and displacing it in relation to the rest of the data is fairly easy. 
        Each sorting method has the math side of things available online. 
        I was more interested in the creation of the actual program which involved Tkinter.
        The creation of buttons from a Python file and how it appears on the grid format set out by Tkinter is interesting. 
        As well in the graphing functionality of Tkinter, while its strong suit is not in appearance the functionality to display numerical information in graph form with sliding X and Y planes to support it is a great help. 
        Especially when making programs that would use visuals to great effect. 
        My experience stayed with making a randomly generated assortment of numbers be sorted and then a small app that created a 30% blur effect on images.
        As well as fixing the small input issues, with how if a number is calculated and output to the screen if it has no refresh then it will simply persit
        like a ghost and your new number will be constantly generated over it. 
        </p> 
    },
    {
        project: 'Fighting game macro maker',
        comment: 
        <p>
        I came across the keyboard library for Python, this was also when I had gotten into fighting games. 
        A series of games where certain inputs need to be done correctly at a certain time. 
        A famous example would be the dragon punch input which is a common barrier newer players face when entering the genre. 
        In-game the motions your character would need to do are ( → ↓ ↘︎ ). These moves are usually how you reverse a bad situation. 
        This means that this has to be inputted in a quick manner that is correct otherwise it won't go through. 
        But with the Python keyboard library, I could bind the entire sequence of inputs to a single button. 
        This worked, but the interfacing of my Python program with the game created input lag. 
        So while mechanically the move was perfect it would lag if I had just done the move naturally. 
        However, I learned much more about the games I enjoy and the designs behind the motion inputs so it was a worthwhile project. 
        </p> 
    },
    {
        project: 'SQL address mailer',
        comment: 
        <p>
        This remains my small dive into SQL however it is definite that the tools provided are in-depth with conditional arrangements for data and the sorting of it. 
        As well as having an online connection from User input that can be recorded and then filtered by the site the ensure that what is saved on the backend meets the criteria or the certain format set by the creator. 
        Even something like an address has multiple components where it's something I've glossed over never having to make one. 
        [Area code] [Street name] [Blvd] if you own a standard house and then you can add [Apartment number] Which is conditional. 
        Sometimes if you send items or record addresses that need items it can be a postal pickup so [[Provider] postal ID] is a nested requirement. 
        However, the payout and functionality of a properly made backend make the control of data worth it. 
        SQL provides in these aspects the tools for the creator to do so. 
        </p>
    }
]

export default Project