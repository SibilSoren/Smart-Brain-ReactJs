import React from "react";
import { Button, Form, Card } from "react-bootstrap";
function Signin({ onRouteChange }) {
  return (
    <div className="d-flex justify-content-center align-items-start mt-5 ">
      <Card
        className="px-3 border border-4 rounded-3"
        style={{ width: "25rem", background: "none" }}
      >
        <Form>
          <h2 className="mt-3">Sign In</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button
            onClick={onRouteChange}
            className="mb-4"
            variant="primary"
            type="submit"
          >
            Signin
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Signin;
