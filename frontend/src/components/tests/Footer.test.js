import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("renders footer content", () => {
  render(<Footer />);
  const phone = screen.getByText(/123-456-7890/i);
  const address = screen.getByText(/123 Main St, Anytown, USA/i);

  expect(phone).toBeInTheDocument();
  expect(address).toBeInTheDocument();
});
