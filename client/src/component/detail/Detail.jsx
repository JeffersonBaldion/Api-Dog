import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";
import style from "./Detail.module.css";

export default function Detail() {
  const selector = useSelector((state) => state.detail);

  
  return (
    <div className={style.cardContainer}>
      {Array.isArray(selector) ? (
        <div className={style.card}>
          <div className={style.name}>
            <h3>{selector[0].name}</h3>
          </div>
          <div className={style.infoCard}>
            <div className={style.left}>
              <h3>{selector[0].id}</h3>
              <img className={style.image} src={selector[0].image.url}></img>
            </div>
            <div className={style.right}>
              <div>
                <h3>Height: {selector[0].height.metric}</h3>
                <h3>Weight: {selector[0].weight.metric}</h3>
                <h3>Temperaments: {selector[0].temperament}</h3>
                <h3>Life span: {selector[0].life_span}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        
        <div className={style.card}>
          <div className={style.name}>
            <h3>{selector.name}</h3>
          </div>  
          <div className={style.infoCard}>
            <div className={style.left}>
              {/* <h3>{selector.ID}</h3> */}
              <img className={style.image} src={selector.Imagen}></img>
            </div>
            <div className={style.right}>  
              <div>
                <h3>Height: {selector.Altura}</h3>
                <h3>Weight: {selector.Peso}</h3>
                <h3>Temperaments: {selector.temperamentos.join(', ')}</h3>
                <h3>Life span: {selector.AñosDeVida}</h3>
              </div>
            </div>  
          </div>  
        </div>
      )}
    </div>
  );
}
