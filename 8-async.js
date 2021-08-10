"use strict";

const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts/1";
const getData = async (url) => {
  try {
    //object destructuring
    console.log(url);
    const { data } = await axios.get(url);
    const { status } = await axios.get(url);
    console.log(` ${data} ${status}`);
  } catch (err) {
    console.log(err);
  }
  // your code here
};
getData(url);
