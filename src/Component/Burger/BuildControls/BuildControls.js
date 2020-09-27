import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Tomato", type: "tomato" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className="BuildControls">
    <p>
      Current Price : <strong>{props.price.toFixed(2)}$</strong>
    </p>
    {controls.map((element) => (
      <BuildControl
        key={element.label}
        label={element.label}
        added={() => props.ingredientAdded(element.type)}
        removed={() => props.ingredientRemoved(element.type)}
        disabled={props.disabled[element.type]}
      />
    ))}
    <button
      className="OrderButton"
      disabled={props.disableOrder}
      onClick={props.ordered}
    >
      Order Now
    </button>
  </div>
);
export default buildControls;
