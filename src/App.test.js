import { render, screen, fireEvent } from "@testing-library/react";
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


test('disables submit button when form is not valid', () => {
  render(<BookingForm dispatch={() => {}} submitForm={() => {}} availableTimes={Promise.resolve([])} />);
  
  // Submit button should be initially disabled
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeDisabled();

  // Update form values
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2022-01-10' } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '11:00 PM' } });
  fireEvent.change(screen.getByLabelText(/# of Guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });

  // Submit button should now be enabled
  expect(submitButton).not.toBeDisabled();
});