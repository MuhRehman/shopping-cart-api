import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

const DemoModal = (props) => {
  return (
    <div style={props.style}>
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{props.content}</Modal.Body>

        <Modal.Footer>{props.footer}</Modal.Footer>
      </Modal>
    </div>
  );
};

export default DemoModal;
