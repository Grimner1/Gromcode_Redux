import React from "react";
import { useState, useEffect } from "react";
import { UseParams } from "react-router-dom";
import moment from "moment";
import ClassNames from "classnames";
import { createStore, combineReducers } from "redux";

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
