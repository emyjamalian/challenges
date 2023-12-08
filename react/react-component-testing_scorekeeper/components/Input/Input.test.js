import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

describe("Input tests", () => {
  //   let labelElement;
  //   let inputElement;
  //   let handleOnChange;

  //   beforeEach(() => {
  //     const labelText = "Username";
  //     const placeholder = "Enter your username";
  //     const name = "username";
  //     const value = "testuser";
  //     handleOnChange = jest.fn();

  //     render(
  //       <Input
  //         labelText={labelText}
  //         placeholder={placeholder}
  //         name={name}
  //         value={value}
  //         onChange={handleOnChange}
  //         required={true}
  //       />
  //     );
  //     labelElement = screen.getByLabelText(labelText);
  //     inputElement = screen.getByRole("textbox");
  //   });

  test("renders a label and an input with the correct attributes", () => {
    const labelText = "Username";
    const placeholder = "Enter your username";
    const name = "username";
    const value = "testuser";
    const handleOnChange = jest.fn();

    render(
      <Input
        labelText={labelText}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
        required={true}
      />
    );
    const labelElement = screen.getByLabelText(labelText);
    const inputElement = screen.getByRole("textbox");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", name);
    expect(inputElement).toHaveAttribute("name", name);
    expect(inputElement).toHaveAttribute("placeholder", placeholder);
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("value", value);
    expect(inputElement).toBeRequired;
  });

  test("calls callback on every user input", async () => {
    const labelText = "Username";
    const placeholder = "Enter your username";
    const name = "username";
    const value = "testuser";
    const handleOnChange = jest.fn();

    render(
      <Input
        labelText={labelText}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
        required={true}
      />
    );
    const labelElement = screen.getByLabelText(labelText);
    const inputElement = screen.getByRole("textbox");
    const user = userEvent.setup();
    await user.type(inputElement, "emy");

    expect(handleOnChange).toHaveBeenCalledTimes(3);
  });
});

describe("Input tests", () => {
  //   let labelElement;
  //   let inputElement;
  //   let handleOnChange;

  //   beforeEach(() => {
  //     const labelText = "Username";
  //     const placeholder = "Enter your username";
  //     const name = "username";
  //     const value = "testuser";
  //     handleOnChange = jest.fn();

  //     render(
  //       <Input
  //         labelText={labelText}
  //         placeholder={placeholder}
  //         name={name}
  //         value={value}
  //         onChange={handleOnChange}
  //         required={true}
  //       />
  //     );
  //     labelElement = screen.getByLabelText(labelText);
  //     inputElement = screen.getByRole("textbox");
  //   });

  test("renders a label and an input with the correct attributes", () => {
    const labelText = "Username";
    const placeholder = "Enter your username";
    const name = "username";
    const value = "testuser";
    const handleOnChange = jest.fn();

    render(
      <Input
        labelText={labelText}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
        required={true}
      />
    );
    const labelElement = screen.getByLabelText(labelText);
    const inputElement = screen.getByRole("textbox");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", name);
    expect(inputElement).toHaveAttribute("name", name);
    expect(inputElement).toHaveAttribute("placeholder", placeholder);
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("value", value);
    expect(inputElement).toBeRequired;
  });

  test("calls callback on every user input", async () => {
    const labelText = "Username";
    const placeholder = "Enter your username";
    const name = "username";
    const value = "testuser";
    const handleOnChange = jest.fn();

    render(
      <Input
        labelText={labelText}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleOnChange}
        required={true}
      />
    );
    const inputElement = screen.getByRole("textbox");
    const user = userEvent.setup();
    await user.type(inputElement, "emy");

    expect(handleOnChange).toHaveBeenCalledTimes(3);
  });
});
