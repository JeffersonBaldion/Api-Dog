import style from './Footer.module.css'

export default function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.tecnologias} >
                <a href='https://react.dev/' target='_blank'><ion-icon name="logo-react"></ion-icon></a>
                <a href='https://developer.mozilla.org/es/docs/Web/JavaScript' target='_blank'><ion-icon name="logo-javascript"></ion-icon></a>
                <a href='https://developer.mozilla.org/es/docs/Web/CSS' target='_blank'><ion-icon name="logo-css3"></ion-icon></a>
            </div>
            <div className={style.redes}>
                <a href='https://github.com/JeffersonBaldion' target='_blank'><ion-icon name="logo-github"></ion-icon></a>
                <a href='https://www.linkedin.com/in/jefferson-baldi%C3%B3n-a6a92a158/' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href='mailto:jefferson.baldion.b@gmail.com'><ion-icon name="logo-google"></ion-icon></a>
                <a href='https://www.instagram.com/jeff_baldion/' target='_blank'><ion-icon name="logo-instagram"></ion-icon></a>
                <a href='https://api.whatsapp.com/send?phone=573224776601' target='_blank'><ion-icon name="logo-whatsapp"></ion-icon></a>
                
            </div>
            
        </div>
    )
}