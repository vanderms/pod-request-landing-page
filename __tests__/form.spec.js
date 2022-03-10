import { render, screen, fireEvent, waitFor } from '@testing-library/react';

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
    fireEvent.change(input, { target: { value: 'john#mail.com' } });
    fireEvent.click(submit);

    const message = screen.getByTestId('custom-message');

    // This case cannot be properly tested with react testing library.
    // The reason for that is the jsdom submits the form
    // even when there is an invalid value, then the onInvalid callback is never called.
    // See issue: https://github.com/jsdom/jsdom/issues/2898,

    //expect(message).not.toHaveClass('hidden');
    //expect(message).toHaveTextContent('Oops! Please check your email');
  });

  it('should show a success message when the form is correctly submitted', () => {
    render(<Form />);
    
    const input = screen.getByLabelText('Email Address');
    const submit = screen.getByText('Request Access');
    
    fireEvent.change(input, { target: { value: 'john@mail.com' } });
    fireEvent.click(submit);
    
    const message = screen.getByTestId('custom-message');

    expect(message).not.toHaveClass('hidden');
    expect(message).toHaveClass('success');
    expect(message).toHaveTextContent('Thanks');
  });
});
