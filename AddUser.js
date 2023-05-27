import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import React from "react";
import Wrapper from "../Helpers/Wrapper";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  // const changeAgeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };
  // const changeNameHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };
  const errorHandler = () => {
    setError(null);
  };
  const addNewUSerHAndler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Wrong Inputs", msg: "Enter valid Name and Age" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Wrong Age", msg: "Enter valid Age" });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredAge("");
    // setEnteredName("");
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal title={error.title} msg={error.msg} onOkay={errorHandler} />
      )}
      <Card className="input">
        <form onSubmit={addNewUSerHAndler}>
          <label className="input_label" htmlFor="uname">
            {" "}
            Enter UserName
          </label>
          <input
            className="input_input"
            type="text"
            id="uname"
            ref={nameInputRef}
            // value={enteredName}
            // onChange={changeNameHandler}
          ></input>
          <label className="input_label" htmlFor="age">
            {" "}
            Enter Age
          </label>
          <input
            className="input_input"
            type="number"
            id="age"
            ref={ageInputRef}
            // value={enteredAge}
            // onChange={changeAgeHandler}
          ></input>
          <Button type="submit">Add New User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
