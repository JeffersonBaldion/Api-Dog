import style from './Loading.module.css'

export default function Loading(){
    return(
        <div className={style.loading}>
            <img src="https://jesusgabrielortiz.files.wordpress.com/2015/05/dogrun13.gif"/>
            <p>Loading...</p>
        </div>
    )
}