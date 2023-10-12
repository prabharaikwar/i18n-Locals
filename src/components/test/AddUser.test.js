// import React from 'react';
import AddUser from '../AddUser';
import { render, screen,fireEvent  } from '@testing-library/react';
// jest.mock('axios');
test('AddUser Component Input Testing', () => {
    render(<AddUser />);
    const idInput = screen.getByLabelText('ID');
    fireEvent.change(idInput, { target: { value: '123' } });
    // const linkElement = screen.getByText(/CRUD/i);
    // expect(linkElement).toBeInTheDocument();
    expect(idInput.value).toBe('123');
  });
 

