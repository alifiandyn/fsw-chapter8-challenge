import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FilterContent from "./FilterContent";
import TableContent from "./TableContent";
import AddPlayer from "./Player/AddPlayer";

function Content() {
  const [players, setPlayers] = useState(
    new Array(2).fill(null).map((data, index) => {
      const key = index + 1;
      return {
        id: key,
        name: `Username ${key}`,
        email: `Email ${key}`,
        exp: key * 10000,
        lvl: key * 100,
        // price: key * 10000,
      };
    })
  );

  // untuk modal add product
  const [showAddModal, setShowAddModal] = useState(false);
  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const [filter, setFilter] = useState({
    name: "",
    email: "",
    exp: "",
    lvl: "",
  });

  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const filteredSearch = () => {
    if (filter.name && filter.email && filter.exp && filter.lvl) {
      setFilteredPlayers(players.filter((item) => item.name == filter.name && item.email == filter.email && item.exp == filter.exp && item.lvl == filter.lvl));
    } else if (filter.name) {
      setFilteredPlayers(players.filter((item) => item.name == filter.name));
    } else if (filter.email) {
      setFilteredPlayers(players.filter((item) => item.email == filter.email));
    } else if (filter.exp) {
      setFilteredPlayers(players.filter((item) => item.exp == filter.exp));
    } else if (filter.lvl) {
      setFilteredPlayers(players.filter((item) => item.lvl == filter.lvl));
    } else {
      setFilteredPlayers(players);
    }
  };

  useEffect(() => {
    filteredSearch();
  }, [filter, players]);

  return (
    <div>
      <Container fluid="md">
        <FilterContent setFilter={setFilter} filter={filter} />
        <TableContent players={filteredPlayers} handleShow={handleShowAddModal} setPlayers={setPlayers} />
      </Container>
      <AddPlayer show={showAddModal} handleClose={handleCloseAddModal} setPlayers={setPlayers} />
    </div>
  );
}

export default Content;
