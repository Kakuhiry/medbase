import Axios from "axios";
import React, { Component } from "react";

class consultHistoryResult extends React.Component {
  constructor() {
    super();
    this.state = {
      foundConsults: [],
    };
  }

  componentDidMount() {
    const { user } = this.props.auth;
    console.log(user.id)
    Axios.get(
      `http://localhost:3000/api/consults/search/${user.id}`
    ).then((res) =>
      this.setState({ ...this.state, foundConsults: res.data }, () =>
        console.log(this.state.foundConsults)
      )
    );
  }

  render() {
    return (
      <div>
      <h1>vamo a ve</h1>
      <h1>{this.state.foundConsults}</h1>
      </div>
    );
  }
}

export default consultHistoryResult;
