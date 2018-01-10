const initialState = {
  title: '',
  description: '',
  keywords: ''
};

/**
 * Тут храниться данные с городами и координатами в списке модального окна
 */
export default function data(state = initialState, actions) {
  if (actions.type === 'GET_DATA') return state = actions.data;

  return state
}