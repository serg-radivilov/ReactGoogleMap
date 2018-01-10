import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import MapSearchBox from './elementMapSearchBox';
import eventOnClickCloseModals from './eventOnClickCloseModals';
import eventOnChangeAddress from './eventOnChangeAddress';
import eventOnClickGoToLink from './eventOnClickGoToLink';
import './style/index.css';

class ModalWindow extends Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      name: '',
      coordinates: ''
    }
  }

  render() {
    const {title} = this.props;

    return ReactDOM.createPortal(
      <div className="modal-window-overlay" onClick={eventOnClickCloseModals.bind(this)}>
        <div className="modal-window">

          <button className="modal-window-btn-close">Х</button>

          <div className="modal-window-title">{title}</div>

          <MapSearchBox
            onSelectAddress={eventOnChangeAddress.bind(this)}
          />

          <button className="modal-window-btn-finish" onClick={eventOnClickGoToLink.bind(this)}>Готово</button>
        </div>
      </div>
      , document.getElementById('modal-root')
    )
  }
}

export default connect(
  dispatch => ({dispatch})
)(ModalWindow)