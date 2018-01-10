const initialState = {
  address: {
    name: '',
    coordinates: ''
  }
};

/**
 * Для того что бы при перезагрузке страничке на карте оно нормально отображало карту тут загружаться данные
 * из локал сторы с данными о последнем выбранном городе
 */
const getLocalStorage = localStorage.getItem('get_address');
const checkLocalStorage = (getLocalStorage !== null) ? JSON.parse(getLocalStorage) : undefined;

/**
 * Данные с выбраным городом, его кардинаты и value
 */
export default function selectAddress(state = checkLocalStorage || initialState, actions) {
  if (actions.type === 'SET_ADDRESS') return state = actions.address;

  return state
}