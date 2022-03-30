import React from "react";
import { Card, Button, Form, Container } from "react-bootstrap";

function FilterContent({ setFilter, filter }) {
  return (
    <Container className="p-0">
      <div className="mt-3">
        <Card>
          <Card.Header>Filter Player List</Card.Header>
          <Card.Body>
            <Form>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Search By Username"
                      onChange={(e) => {
                        setFilter({ ...filter, name: e.target.value });
                      }}
                    />
                    <Form.Text className="text-muted">Search By Username</Form.Text>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Search By Player Email"
                      onChange={(e) => {
                        setFilter({ ...filter, email: e.target.value });
                      }}
                    />
                    <Form.Text className="text-muted">Search By Player Email</Form.Text>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Exp</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Search By Player Exp"
                      onChange={(e) => {
                        setFilter({ ...filter, exp: e.target.value });
                      }}
                    />
                    <Form.Text className="text-muted">Search By Player Exp</Form.Text>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Lvl</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Search By Player Lvl"
                      onChange={(e) => {
                        setFilter({ ...filter, lvl: e.target.value });
                      }}
                    />
                    <Form.Text className="text-muted">Search By Player Lvl</Form.Text>
                  </Form.Group>
                </div>
              </div>
              <Button className="float-end">Search</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default FilterContent;
