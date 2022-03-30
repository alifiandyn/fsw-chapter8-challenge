import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import { FaEdit, FaTrash } from "react-icons/fa";
import EditPlayer from "./Player/EditPlayer";
import DeletePlayer from "./Player/DeletePlayer";

function TableContent({ players, handleShow, setPlayers }) {
  const [currentId, setCurrentId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("");
  const [lvl, setLvl] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  const handleShowEditModal = (id, name, email, exp, lvl) => {
    setCurrentId(id);
    setName(name);
    setEmail(email);
    setExp(exp);
    setLvl(lvl);
    setShowEditModal(true);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleShowDeleteModal = (id) => {
    setCurrentId(id);
    setShowDeleteModal(true);
  };

  const editPlayer = () => {
    const playerList = [...players];
    const index = playerList.findIndex((item) => item.id === currentId);
    playerList[index].name = name;
    playerList[index].email = email;
    playerList[index].exp = exp;
    playerList[index].lvl = lvl;
    setPlayers(playerList);
    setShowEditModal(false);
  };

  const deletePlayer = () => {
    const playerDelete = players.filter((item) => item.id !== currentId);
    setPlayers(playerDelete);
    setShowDeleteModal(false);
  };
  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Username",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "exp",
      text: "Experience",
    },
    {
      dataField: "lvl",
      text: "Level",
    },
    // {
    //   dataField: "price",
    //   text: "Product Price",
    //   formatter: (cell, row) => {
    //     return currencyFormatter(cell);
    //   },
    // },
    {
      dataField: "",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div>
            <OverlayTrigger placement="top" overlay={<Tooltip>Edit Player</Tooltip>}>
              <Button
                variant="none"
                onClick={() => {
                  handleShowEditModal(row.id, row.name, row.email, row.exp, row.lvl);
                }}
              >
                <FaEdit color="orange" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip>Delete Player</Tooltip>}>
              <Button
                variant="none"
                onClick={() => {
                  handleShowDeleteModal(row.id);
                }}
              >
                <FaTrash color="red" />
              </Button>
            </OverlayTrigger>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mt-3">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          Player List
          <Button variant="primary" onClick={handleShow}>
            Add Player
          </Button>
        </Card.Header>
        <Card.Body>
          <BootstrapTable keyField="id" data={players} columns={columns} pagination={paginationFactory()} />
        </Card.Body>
      </Card>
      <EditPlayer show={showEditModal} handleClose={handleCloseEditModal} name={name} email={email} exp={exp} lvl={lvl} setName={setName} setEmail={setEmail} setExp={setExp} setLvl={setLvl} editPlayer={editPlayer} />

      <DeletePlayer show={showDeleteModal} handleClose={handleCloseDeleteModal} deletePlayer={deletePlayer} />
    </div>
  );
}

export default TableContent;
