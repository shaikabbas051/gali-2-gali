import React from "react";
import { Link } from "react-router-dom";

export const Fallback = () => {
  return <div>It seems you are lost, click to go to <Link to="/">home</Link> </div>
}