import style from "./Create.module.css";
import React from "react";
import Validation from "./validation/validation";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/actions";

export default function Create() {
  const dispatch = useDispatch();
  const temperament = useSelector((state) => state.temperaments);

  const [newDog, setNewDog] = React.useState({
    nombre: "",
    altura_min: "",
    altura_max: "",
    peso_min: "",
    peso_max: "",
    años_vida: "",
    temperamento: "",
  });



  const [errors, setErrors] = React.useState({})

  function handleChange(e) {
    const { name, value } = e.target;
    if (name !== "temperamento") {
      setNewDog({
        ...newDog,
        [name]: value,
      });
    } else {
      setNewDog({
        ...newDog,
        [name]: [...newDog.temperamento, value],
      });
    }
    
    setErrors(Validation({
      ...newDog, [name] : value
  }))
  }


  function handleReset(e) {
    e.preventDefault();
    setNewDog({
      nombre: "",
      altura_min: "",
      altura_max: "",
      peso_min: "",
      peso_max: "",
      años_vida: "",
      temperamento: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation({
      ...newDog
  }))
  
    if (Object.keys(errors).length === 0) {
      if(newDog.temperamento.length > 0){
      dispatch(actions.postDogs(newDog));
    }} else {
      alert("Missing or incorrect information");
    }
  }

  function handleBox(e){
    const {value} = e.target
    const filtered = (newDog.temperamento).filter((element)=>{return element !== value})
    setNewDog({
      ...newDog,
      temperamento:filtered
    })
  }

  

  return (
    <div className={style.formContainer}>
      
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>Create your own doggy</h1>
        <label>Name</label>
        <input
          className={style.name}
          type="text"
          name="nombre"
          onChange={handleChange}
          value={newDog.nombre}
        ></input>
        <p>{errors.nombre? `❌ ${errors.nombre}` : null}</p>

        <label>Height (Cm)</label>
        <div>
          <input
            type="number"
            name="altura_min"
            onChange={handleChange}
            className={style.min_max}
            value={newDog.altura_min}
          ></input>
          <label>min</label>
          <input
            type="number"
            name="altura_max"
            onChange={handleChange}
            className={style.min_max}
            value={newDog.altura_max}
          ></input>
          <label>max</label>

          <p>{errors.altura? `❌ ${errors.altura}` : null}</p>
        </div>

        <label>Weight (Kg)</label>
        <div>
          <input
            type="number"
            name="peso_min"
            onChange={handleChange}
            className={style.min_max}
            value={newDog.peso_min}
          ></input>
          <label>min</label>
          <input
            type="number"
            name="peso_max"
            onChange={handleChange}
            className={style.min_max}
            value={newDog.peso_max}
          ></input>
          <label>max</label>
          <p>{errors.peso? `❌ ${errors.peso}` : null}</p>
        </div>

        <label>Life span (Years)</label>
        <input
          className={style.life}
          type="number"
          name="años_vida"
          onChange={handleChange}
          value={newDog.años_vida}
        ></input>
        <p>{errors.añosVida? `❌ ${errors.añosVida}` : null}</p>
        <label>Temperaments</label>
        <select className={style.temperamentos} name="temperamento" onChange={handleChange} size="5" multiple>
          <option disabled>---</option>
          {temperament.map((item, index) => {
            return <option key={index} value={item.Nombre}>{item.Nombre}</option>;
          })}
        </select>

        <div className={style.temperamentContainer}>
          {newDog.temperamento?newDog.temperamento.map((element, index) => {
            return <input  key={index} type="button" value={element} onClick={handleBox}/>;
          }):<input type='hidden'/>}
        </div>

        <p>{errors.temperamento? `❌ ${errors.temperamento}` : null}</p>

        <button>Create</button>
        <button onClick={handleReset}>Clean</button>
      </form>
      
    </div>
  );
}
