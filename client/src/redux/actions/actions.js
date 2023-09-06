import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const POST_DOGS = "POST_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_SEARCH = "GET_SEARCH";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const FILTER_DOGS = "FILTER_DOGS";
export const DELETE_DOG = 'DELETE_DOG'
export const GET_ENERGETIC = 'GET_ENERGETIC'

export function getDogs() {
  const endpoint = `https://exampledeploy-as65.onrender.com/dogs`;

  return (dispatch) => {
    axios(endpoint).then(({ data }) => {
      return dispatch({
        type: GET_DOGS,
        payload: data,
      });
    });
  };
}
export function postDogs(dog) {
  const endpoint = `https://exampledeploy-as65.onrender.com/dogs`;

  return (dispatch) => {
    axios
      .post(endpoint, dog)
      .then(({ data }) => {
        alert(data)
        return dispatch({
          type: POST_DOGS,
          payload: data,
        });
      })
      .catch((error) => {
        alert('Already exist a dog with the same name');
      });
  };
}
export function deleteDog(id){
  const endpoint = `https://exampledeploy-as65.onrender.com/dogs/${id}`;

  return(dispatch) => {
    axios.delete(endpoint).then(({data}) => {
      alert(data)
      return dispatch({
        type: DELETE_DOG,
        payload: data
      })
    }).catch((error) => {
      alert(error)
    })
  }
}
export function getTemperaments() {
  const endpoint = `https://exampledeploy-as65.onrender.com/temperaments`;

  return (dispatch) => {
    axios(endpoint).then(({ data }) => {
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
      });
    });
  };
}
export function getSearch(name) {
  const endpoint = `https://exampledeploy-as65.onrender.com/dogs/name?name=${name}`;

  return (dispatch) => {
    axios(endpoint).then(({ data }) => {
      return dispatch({
        type: GET_SEARCH,
        payload: data,
      });
    });
  };
}
export function getDogDetail(id) {
  const endpoint = `https://exampledeploy-as65.onrender.com/dogs/${id}`;

  return (dispatch) => {
    axios(endpoint).then(({ data }) => {
      return dispatch({
        type: GET_DETAIL,
        payload: data,
      });
    });
  };
}
export function cleanDetail() {
  return (dispatch) => {
      return dispatch({
        type: CLEAN_DETAIL,
        payload: {},
      });
    
  };
}
export function filterDogs(filter) {
  const endpoint = `https://exampledeploy-as65.onrender.com/dogs`;
  function sort_name(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  return (dispatch) => {
    axios(endpoint).then(({ data }) => {
      if (filter.origen) {
        if (filter.origen == "Api") {
          var filtroOrigen = data.filter((ele) => {
            return ele.hasOwnProperty("image");
          });
        } else if (filter.origen == "Base de datos") {
          var filtroOrigen = data.filter((ele) => {
            return ele.hasOwnProperty("Imagen");
          });
        } else {
          var filtroOrigen = data;
        }
      }
      if (filter.temperamento) {
        if (filter.temperamento == "All") {
          var filtroTemperamento = filtroOrigen;
        } else {
          var filtroTemperamento = filtroOrigen.filter((ele) => {
            if (ele.temperament) {
              return ele.temperament.includes(filter.temperamento);
            }
          });
        }
      }
      if (filter.orden) {
        if (filter.orden == "Ascendente") {
          var filtroOrden = filtroTemperamento.sort(sort_name);
        } else if (filter.orden == "Descendente") {
          var filtroOrden = filtroTemperamento.reverse(sort_name);
        } else if (filter.orden == "Any") {
          var filtroOrden = filtroTemperamento;
        }
      }

      return dispatch({
        type: FILTER_DOGS,
        payload: filtroOrden,
      });
    });
  };
}

