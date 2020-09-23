import React from "react";
import { classes } from "../colleges/colleges.module.css";

export default function Colleges(props) {
  return (
    <React.Fragment>
      {props.data.colleges.map((param, index) => (
        <div key={index} className={classes.container}>
          {param.college_name}
        </div>
      ))}
    </React.Fragment>
  );
}
