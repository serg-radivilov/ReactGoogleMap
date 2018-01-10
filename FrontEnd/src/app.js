import React, {Component} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';

import {getData} from "./Moduls/actions/getData"; // экшен с запросом на сервер
import './Moduls/style/index.css';

class App extends Component {
  constructor(props, state) {
    super(props, state);

    this.props.onGetData(); // посылает запрос на сервер
  }

  render() {
    const {title, description, keywords} = this.props.data;

    const meta = {
      title: title,
      description: description,
      meta: {
        charset: 'utf-8',
        name: {
          keywords: keywords
        }
      }
    };

    return (
      <div className="app-content">
        <DocumentMeta {...meta}/>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.data
  }),
  dispatch => ({
    onGetData: () => dispatch(getData())
  })
)(App)