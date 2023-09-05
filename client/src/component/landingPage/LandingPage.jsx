import {Link} from 'react-router-dom'
import style from './LandingPage.module.css'

export default function LandingPage(){

    
    return(
        <div className={style.home}>
           
            <div className={style.textContainer}>
                <div className={style.logoContainer}>   
                    <h2>Welcome to</h2>
                    <h1>DOGGY WORLD</h1>
                    <h3>All dogs around the world!</h3>
                </div>     
                <div className={style.buttonContainer}>
                    <Link to='/home'><button className={style.buttonEnter}>Enter</button></Link>
                    <a href='mailto:jefferson.baldion.b@gmail.com'><button className={style.buttonContact}>Contact me</button></a>
                </div>

            </div>

        </div>
    )
}