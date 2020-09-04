import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  const container = render(<CheckoutForm />);
  const fName = container.getByLabelText(/first name/i);
  const lName = container.getByLabelText(/last name/i);
  const address = container.getByLabelText(/address/i);
  const city = container.getByLabelText(/city/i);
  const state = container.getByLabelText(/state/i);
  const zip = container.getByLabelText(/zip/i);
  const submit = container.getByRole('button', { name: /checkout/i });

  fireEvent.change(fName, { target: { value: 'foo' } } );
  fireEvent.change(lName, { target: { value: 'bar' } } );
  fireEvent.change(address, { target: { value: '12 baz st' } } );
  fireEvent.change(city, { target: { value: 'hamsterdam' } } );
  fireEvent.change(state, { target: { value: 'GN' } } );
  fireEvent.change(zip, { target: { value: '77777' } } );
  fireEvent.click(submit);

  container.getByText(/ordered.*plants/i);
  container.getByText(/shipped/i);
  container.getByText(/foo.*bar/i);
  container.getByText(/12.baz.st/i);
  container.getByText(/hamsterdam, gn 77777/i);
});

