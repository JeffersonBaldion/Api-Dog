import { Link } from 'react-router-dom'
import style from './Card.module.css'
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions/actions'

export default function Card(props){

    const dispatch = useDispatch();

    function handleClick(){
        dispatch(actions.getDogDetail(props.id))
    }

    function handleDelete(e){
        dispatch(actions.deleteDog(props.id))
        window.location.reload();
    }
   

    return(
        <div className={style.card}>
            <div className={style.flipCard}>
                <div className={style.front}>
                    
                        <img className={style.imagen} src={props.imagen}></img>
                    
                    <div className={style.name}>
                        <h3 className={style.nombre} >{props.nombre}</h3>
                    </div>
                </div>
                <div className={style.back}>
                    <h3 className={style.temperamento} >Temperaments: {props.temperamento}</h3>
                    <h3 className={style.peso}>Height: {props.peso}</h3>
                    <div className={style.buttons}>

                    {props.id.length==36 && <button onClick={handleDelete}>Delete</button>}
                        <Link className={style.info} onClick={handleClick} to={`/detail/${props.id}`}>
                            <h4 >More info</h4>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}