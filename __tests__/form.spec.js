import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/components/form';

describe('test form component', () => {
  it("shouldn't show a custom message on initialization.", () => {
    render(<Form />);
    const message = screen.getByTestId('custom-message');
    expect(message).toHaveClass('hidden');
  });

  it('should show a error message when the form is submitted with an invalid email ', () => {
    render(<Form />);
    const input = screen.getByLabelText('Email Address');
    const submit = screen.getByText('Request Access');
    userEvent.type(input, 'john#mail.com');
    userEvent.click(submit);

    const message = screen.getByTestId('custom-message');

    expect(message).not.toHaveClass('hidden');
    expect(message).toHaveTextContent('Oops! Please check your email');
  });
});
