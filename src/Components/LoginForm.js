import React        from 'react';
import UserStore    from '../Stores/UserStore';
import InputField   from '../Components/InputField'
import SubmitButton from '../Components/SubmitButton'
import '../Styles/LoginStyle.css';
import '../Styles/UniversalStyling.css';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state= {
          username: '',
          password: '',
          buttonDisabled: false
    }
  }

  setInputValue(property, val){
    val = val.trim();
    if (val.length > 14){
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm(){
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
  }

  async doLogin(){

    if(!this.state.username){
      return;
    }

    if (!this.state.password){
      return;
    }

    this.setState({
      buttonDisabled: true
    })

    try{

      let res = await fetch('/login',{

        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'  
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });

      let result = await res.json();
      if (result&& result.success){
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else if(result && result.success === false){
        this.resetForm();
        alert(result.msg);
      } 
    }

    catch(e){
      console.log(e);
      this.resetForm();
    }

  }

  render(){
    return (
      <div className="loginForm">
        
        <div className= "upperText">
            <h2 className= "healthText">Health everywhere</h2>
        </div>

        <div className= 'form-sec'>
          <div className= 'usernameF'>
            <InputField
              type = 'text'
              placeholder= 'Username'
              value= {this.state.username ? this.state.username : ''}
              onChange= { (val) => this.setInputValue('username', val)} 
            />
          </div>
          <div className= 'passwordF'>
            <InputField
              type = 'password'
              placeholder= 'Password'
              value= {this.state.password ? this.state.password : ''}
              onChange= { (val) => this.setInputValue('password', val)} 
            />
          </div>
          <div className= 'login-btn'>
            <SubmitButton
              className= 'btn btn-one'
              text = 'Login'
              disabled= {this.state.buttonDisabled}
              onClick={()=> this.doLogin()}
            />
          </div>  
        </div>
      </div>
    );
  }
}

export default LoginForm;
