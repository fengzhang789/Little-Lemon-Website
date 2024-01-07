import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from "./components/Main";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Booking Details");
    expect(headingElement).toBeInTheDocument();
})


test('Tests the initialize times function', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(["17:00"]);
})


test('Tests the update times function', () => {
  const updatedTimes = updateTimes('', '');
  expect(updatedTimes).toEqual(['17:00', '18:00', '19:00']);
})