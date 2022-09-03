import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Row, Col, Card} from 'react-bootstrap';

function UsersFunction() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((results) => {
			setUsers(results.data);
			console.log(results.data);
		});
	}, []);

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Axios Function API Users</h1>
			{users.map((user, index) => {
				return (
					<Row key={user.id}>
              <Col md="4" style={{ width: "18rem", marginBottom: "1rem" }}>
                <Card style={{ backgroundColor: "white", color: "green", border: "2px solid green", marginLeft: "20px", paddingLeft: "10px" }}>
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

export default UsersFunction;