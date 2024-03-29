"use client";
import React from "react";

import { store } from "./store";
/* Core */
import { Provider } from "react-redux";

/* Instruments */

export const ReduxProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
