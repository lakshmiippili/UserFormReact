import ReactDOM from "react-dom";
import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onOkay}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2> {props.title}</h2>
      </header>
      <div className="content">
        <p>{props.msg}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onOkay}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          onOkay={props.onOkay}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
