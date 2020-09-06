import React        from 'react';
import {observer}   from 'mobx-react'
import UserStore    from '../Stores/UserStore';
import LoginForm    from '../Components/LoginForm'
import InputField   from '../Components/InputField'
import SubmitButton from '../Components/SubmitButton'
import '../Styles/LoginStyle.css';

class Login extends React.Component {

  async componentDidMount(){
    try{

      let res = await fetch('/isLoggedIn', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      });

      let result = await res.json();

      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }

    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout(){
    try{

      let res = await fetch('/logout', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      });

      let result = await res.json();

      if (result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }

    catch(e){
      console.log(e)
    }
  }

  render(){

    if (UserStore.loading){
      return(
        <div className="App">
          <div className= "container">
            <div>
              oading, please wait...
            </div>
          </div>
        </div>
      );
    }

    else{

      if(UserStore.isLoggedIn){
        return(
          <div className="App">
            <div className= "container">
              <div>
                Welcome {UserStore.username}
                <SubmitButton
                  text = {'Log out'}
                  disabled = {false}
                  onClick = {() => this.doLogout()}
                />
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="App">
          <div className= "container">
            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

export default observer(Login);
