import React, { Component } from "react";
import Button from "../../../Component/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../Component/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: { street: "", postalCode: "" },
    loading: false,
  };
  //   input = { display: "block" };
  orderHendler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);
    this.setState({ loading: true });
    let order = {
      ingredient: this.props.ingredients,
      price: this.props.price,
      customerInfo: {
        name: "Abraham",
        age: "23",
        address: {
          street: 24 + "test",
          village: "taragarh ajmer",
          pinCode: "312432",
        },
        mobile: 9109201111,
      },
    };
    axios
      .post("/order.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  div = {
    margin: "20px auto",
    width: "80%",
    textAlign: "center",
    boxShadow: " 0 2px 3px #ccc",
    border: "1px solid #eee",
    padding: "10px",
    boxSizing: "border-box",
  };
  render() {
    let form = (
      <form>
        <input type="text" placeholder="Your Name" name="name" />
        <br />
        <input type="text" placeholder="Your Email" name="email" />
        <br />
        <input type="text" placeholder="Street" name="street" />
        <br />
        <input type="text" placeholder="Postal Code" name="postalCode" />
        <br />
        <Button btnType="Success" clicked={this.orderHendler}>
          Order
        </Button>
      </form>
    );

    return (
      <div className={classes.ContactData} style={this.div}>
        <h4>Enter your contact data</h4>
        {this.state.loading ? <Spinner /> : form}
      </div>
    );
  }
}
export default ContactData;
