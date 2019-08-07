import React, { Component } from 'react';
import InitForm from './../components/InitForm'

class App extends Component{

  onClick = (e) => {
    e.preventDefault();
    console.log('Click in redux form');
  }

  onChangeName = ({ target }) => {
    const { name, value } = target;
    console.log('Target Input', name, value);
  }
  render(){
    return (
      <div className="col">
        <p>
          <div className="card">
            <div className="card-header">
              Redux Form
            </div>
            <div className="card-body">
              <div className="card-title">My form</div>
              <InitForm
                onClick={this.onClick}
                onChangeName={this.onChangeName}
              />
            </div>
            <div className="card-footer">
              <p>Card Footer</p>
            </div>
          </div>
        </p>        
      </div>
    );
  }
}

export default App;
