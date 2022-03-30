import React, { useState } from "react";
import { Form, Modal, Button, Toast } from "react-bootstrap";

function AddPlayer({ show, handleClose, setPlayers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("");
  const [lvl, setLvl] = useState("");

  const restForm = () => {
    setName("");
    setEmail("");
    setExp("");
    setLvl("");
  };

  const addNewContent = () => {
    if (!name) {
    } else if (!email) {
    } else if (!exp) {
    } else if (!lvl) {
    } else {
      // prev adalah nilai product yang sekarang
      setPlayers((prevPlayer) => {
        // check apakah product sudah ada datanya
        if (prevPlayer.length > 0) {
          let id = Number(prevPlayer[prevPlayer.length - 1].id) + 1;
          // cara 1 via copy array
          // let productListCopy = [...prevProduct];
          // productListCopy.push({ id: id, name, price });
          // cara 2 spread operator
          restForm();
          handleClose();
          return [...prevPlayer, { id: id, name, email, exp, lvl }];
        } else {
          let id = 1;
          restForm();
          handleClose();

          return [...prevPlayer, { id: id, name, email, exp, lvl }];
        }
      });
    }
  };

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
                type="text"
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
                type="text"
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
            <Button variant="primary" type="submit" onClick={addNewContent}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddPlayer;
