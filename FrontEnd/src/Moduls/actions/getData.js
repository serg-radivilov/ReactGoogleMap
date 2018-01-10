import axios from 'axios';

/**
 *  Для работы с запросами я обычно юзаю модуль 'Axios' для удобства
 *  В целом тут простой get запрос на сервер, который получает данные и диспачит их в redux
 */
export const getData = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/data')
      .then(res => res.data)
      .then(data => {
        dispatch({type: 'GET_DATA', data})
      })
      .catch(err => console.error(err));
  }
};