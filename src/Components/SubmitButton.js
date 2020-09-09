import React from 'react';
import '../Styles/UniversalStyling.css';

class SubmitButton extends React.Component {

  render(){
    return (
      <div className="submitButton">
        <button
            className= 'btn btn-one'
            id= "login-btn"
            disabled= {this.props.disabled}
            onClick= {() => this.props.onClick()}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default SubmitButton;
