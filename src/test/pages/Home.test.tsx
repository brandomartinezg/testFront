import { render, screen } from "@testing-library/react";
import Home from '../../pages/Home';

describe("Home", () => {
    test("Render Home", () => {
        render(<Home />);
        const element = screen.getByText(/de/i);
        expect(element).toBeInTheDocument();
    })
});