import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(autofill, minmax(300px, 1fr))",
          gap: "rem1",
          alignItems: "flex-start"
        }}
      >
        <BudgetCard name="Entertainment" gray amount={100} max={1000} />
      </div>
    </Container>
  );
}

export default App;
