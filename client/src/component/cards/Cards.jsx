import Card from "./card/Card";
import React from "react";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";
export default function Cards(props) {

  const selector = useSelector(state => state.razas)
  const { dog } = props;
  const [currentPage, setCurrentPage] = React.useState(1);



  React.useEffect(()=>{
    setCurrentPage(1)
  },[selector])

  const numPages = Math.ceil(dog.length / 8);
  const lastItem = currentPage * 8;
  const firstItem = lastItem - 8;
  let pages = [];

  for (let i = 0; i < numPages; i++) {
    pages.push(i);
  }

  function prevPage(e) {
    e.preventDefault();
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }
  }
  function nextPage(e) {
    e.preventDefault();
    if (currentPage != numPages) {
      setCurrentPage(currentPage + 1);
    } else {
      return;
    }
  }
  function setPage(e) {
    const num = Number(e.target.value);
    setCurrentPage(num);
  }

  return (
    <div className={style.container}>
      <div className={style.cards}>
        {dog.map((dog, index) => {
          if (index >= firstItem && index < lastItem) {
            if (dog.hasOwnProperty("id")) {
              return (
                <Card
                  key={dog.id}
                  id={dog.id}
                  imagen={dog.image.url}
                  nombre={dog.name}
                  temperamento={dog.temperament}
                  peso={dog.weight.metric}
                />
              );
            } else {
              return (
                <Card
                  key={dog.ID}
                  id={dog.ID}
                  imagen={dog.Imagen}
                  nombre={dog.name}
                  temperamento={dog.temperaments.map((ele) => {
                    return `${ele.Nombre}, `;
                  })}
                  peso={dog.Peso}
                />
              );
            }
          }
        })}
      </div>
      <div className={style.buttons}>
        <button className={style.prev} onClick={prevPage}>
          Previous
        </button>
        {pages.map((i) => {
          if (i + 2 == currentPage || i + 1 == currentPage || i == currentPage)
            if(i+1==currentPage){
                return (            
                    <button
                      className={style.selected}
                      key={i}
                      value={i + 1}
                      onClick={setPage}>
                      {i + 1}
                    </button>
                   
                  );
            }else  
          return (            
              <button
                className={style.page}
                key={i}
                value={i + 1}
                onClick={setPage}>
                {i + 1}
              </button>
             
            );
        })}
        <button className={style.next} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}
