/**
 * Закрывает модальное окно если нажать на потемневший фон или кнопку "Х"
 */
export default function (event) {
  const check = event.target.className;
  if (check === 'modal-window-overlay' || check === 'modal-window-btn-close') return this.props.onClose();
}