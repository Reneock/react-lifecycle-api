import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

class UsersClass extends Component {
  constructor(props) {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        data.json().then((result) => {
          this.setState({ users: result });
          console.log(result);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Class API Users</h1>
        {this.state.users.map((user, index) => {
          return (

            <Row key={user.id}>
              <Col md="4" style={{ width: "18rem", marginBottom: "1rem" }}>
                <Card style={{ backgroundColor: "white", color: "purple", border: "2px solid purple", marginLeft: "20px", paddingLeft: "10px" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center", paddingTop: "3px" }}><strong>User Details</strong></Card.Subtitle>
                    <Card.Text>
                      <p>Name: {user.name}</p>
                      <p>Username: {user.username}</p>
                      <p>Email: {user.email}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          );
        })}

      </div>
    );
  }
}

export default UsersClass;
