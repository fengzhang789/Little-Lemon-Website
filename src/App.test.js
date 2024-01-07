import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from "./components/Main";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Booking Details");
    expect(headingElement).toBeInTheDocument();
})


test('Tests the initialize times function', async () => {
  const initialTimes = await initializeTimes();
  expect(initialTimes).toEqual([]);
})


test('Tests the update times function', async () => {
  const date = "2024-01-10";
  const updatedTimes = await updateTimes('', date);
  expect(updatedTimes).toEqual(['10:00 AM', '12:00 PM', '2:00 PM']);
});