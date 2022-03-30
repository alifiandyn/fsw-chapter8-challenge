import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

function EditPlayer({ show, handleClose, name, email, exp, lvl, setName, setEmail, setExp, setLvl, editPlayer }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Player Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Player Name"
                autoFocus
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Player Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Player Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Player Exp</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Insert Player Exp"
                required
                value={exp}
                onChange={(e) => {
                  setExp(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Player Lvl</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Insert Player Lvl"
                required
                value={lvl}
                onChange={(e) => {
                  setLvl(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={editPlayer}>
              Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditPlayer;
