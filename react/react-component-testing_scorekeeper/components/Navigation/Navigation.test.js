import { render, screen } from "@testing-library/react";
import Navigation from ".";
import { execOnce } from "next/dist/shared/lib/utils";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const links = screen.getAllByRole("link");

  expect(links).toHaveLength(2);
  expect(links[0]).toHaveAccessibleName("Play");
  expect(links[1]).toHaveAccessibleName("History");
});
