import { Button, Card } from "react-bootstrap";

function Deck({ deck }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{deck.name}</Card.Title>
          <Card.Text>{deck.description}</Card.Text>
          <Button variant="secondary">View</Button>
          <Button variant="primary">Study</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Deck;
