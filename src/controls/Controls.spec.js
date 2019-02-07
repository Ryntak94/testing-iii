// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom';
import 'jest-dom/extend-expect';
import Display from '../display/Display';
import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

describe('Test to make sure Display functions properly',    ()  =>  {
    const display = render(<Display />)
    const controls = render(<Controls />)
    const dashboard = render(<Dashboard />)
    render(<Dashboard />);
    test('Controls renders properly',    ()  =>  {
        render(<Controls />)
    })

    test('Test to make sure Controls buttons default to lock gate and close gate', ()  =>  {
        const lockButton = display.getByText(/lock gate/i);
        const closeButton = display.getByText(/close gate/i);
        expect(lockButton).toHaveTextContent(/lock gate/i);
        expect(closeButton).toHaveTextContent(/close gate/i)
    })
})
