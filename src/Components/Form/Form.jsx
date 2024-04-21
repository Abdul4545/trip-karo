import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickdate: "",
    contact: "",
    personCount: 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let price = formData.personCount * props.costPerHead;
  console.log(formData);

  return (
    <div className="formContainer">
      <form>
        <div className = "nameContainer">
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className = "emailContainer">
          <label>
            Email
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="contactContainer">
          <label>
            Phone No
            <br />
            <input 
            type="tel"
            name="tel"
            value={formData.contact}
            onChange={handleInputChange}
            />
          </label>
        </div>


        <div className="dateContainer">
        <label>
          Pick Date :{" "}
          <input
            type="date"
            name="pickdate"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        </div>

        <div className="personCountConatiner">
        <label>
          Person Count :
          <input
            type="number"
            name="personCount"
            value={formData.personCount}
            onChange={handleInputChange}
            min={1}
          />
        </label>
        </div>

       <div className="costContainer">
          <span>cost per head : </span>
          <span>₹ {props.costPerHead}</span>
        </div>

        <div className="totalCost">
          <span>Total Cost : </span>
          <span>₹ {price}</span>
        </div>

        <button className="button">Book</button>
      </form>
    </div>
  );
}

export default Form;
