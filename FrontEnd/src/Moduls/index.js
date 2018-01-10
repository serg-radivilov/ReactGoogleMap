import React, {Component} from 'react';
import {connect} from 'react-redux';

import ModalWindow from './modalWindow'; // Модуль модального окна
import './style/home.css';

class Home extends Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      isModalOpen: false // статус открытия модального окна
    }
  }

  /**
   * Метод открытия и закрытие модального окна
   */
  openModalWindow() {
    this.setState(state => ({isModalOpen: !state.isModalOpen}));
  };

  render() {
    const {title, description} = this.props.data; // данные полученные с сервера

    return (
      <div className="component-home-overlay">
        <div className="component-home">
          <div className="home-title">{title}</div>
          <div className="home-description">{description}</div>
          <button className="home-button" onClick={this.openModalWindow.bind(this)}>Построить маршрут</button>

          {this.state.isModalOpen &&
          <ModalWindow
            onClose={this.openModalWindow.bind(this)}
            title="Введите адрес конечной точки"
          />
          }
        </div>
      </div>
    )
  }
}

/**
 * Ну тут по классике)
 */
export default connect(
  state => ({
    data: state.data
  })
)(Home)