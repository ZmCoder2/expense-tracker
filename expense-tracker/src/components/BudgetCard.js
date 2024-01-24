import { Card, CardTitle, ProgressBar, Stack, Button } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export default function BudgetCard({ name, amount, max, gray }) {
    const classNames = []
    if (amount > max) {
        classNames.push("bg-danger", "bg-opacity-10")
        // gives the card a red background when the amount is over the max
    } else if (gray) {
        classNames.push("bg-light")
        // gives the card a grey background
    }

    return (
        <Card className={classNames.join(" ")}>
            <Card.Body>
                <CardTitle className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    {/* space between the titles and the numbers for the cards */}
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)}
                        <span className="text-muted fs-6 ms-1">
                            {/* grays out the larger number and makes it smaller than the other number and puts margin in between the / and numbers*/}
                            / {currencyFormatter.format(max)}
                        </span>
                        {/* gives us a dollar sign ($) amount */}
                    </div>
                </CardTitle>
                <ProgressBar className="rounded-pill" variant={getProgressBarVariant(amount, max)} 
                min={0}
                max={max}
                now={amount}
                />
                <Stack direction="horizontal" gap="2" className="mt-4">
                    <Button variant="outline-primary" className="ms-auto">Add Expense</Button>
                    {/* makes the first button blue */}
                    <Button variant="outline-secondary">View Expenses</Button>
                    {/* grays out the second button */}
                </Stack>
                {/* buttons for the cards */}
            </Card.Body>
        </Card>
    );
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < .5) return "primary"
    // primary color is blue
    if (ratio < .75) return "warning"
    // warning color for the progress bar will turn yellow if it is 75% filled
    return "danger"
    // Will turn red if the progress bar is more than 75%
}