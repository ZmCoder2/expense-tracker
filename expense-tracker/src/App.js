import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"


function App() {
  return (
    <Container className="my-4">
      {/* This className give us margin spacing from the top for the header and buttons */}
      <Stack direction="horizontal" gap="2" className="mb-4">
        {/* gives the header and buttons to line up horizontally at the top of the page */}
        <h1 className="me-auto">Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
      </Stack>
    </Container>
    
  );
}

export default App;
