import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Announcement from "../Announcement";

test("renders announcement content", () => {
  render(
    <BrowserRouter>
      <Announcement />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Super Deal!/i);
  expect(linkElement).toBeInTheDocument();
});
