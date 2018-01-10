import {browserHistory} from 'react-router';

/**
 * Переход на страничку с картой
 */
export default function () {
  if (this.state.name === '') return; // Если ничего не выборано то останавливает функцию

  this.props.onClose(); // Закрывает маодалку

  this.props.dispatch({type: 'SET_ADDRESS', address: this.state}); // Устанавливает данные с адрессом в selectAddress

  localStorage.setItem('get_address', JSON.stringify(this.state)); // Сохраняет те же данные в локал стору

  browserHistory.push(`/map/${this.state.name}`); // Сам переход на страничку с картой
}