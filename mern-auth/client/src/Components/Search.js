import { use } from "passport";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";
const express = require("express");
const User = require("../../../models/User");
const Doctor = require("../../../models/Doctor");

function Search() {
  

  User.find({}, function(err, response){
    console.log(response)
  })

  
  return <div></div>;
}

export default Search;
