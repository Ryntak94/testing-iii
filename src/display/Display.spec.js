// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom';
import 'jest-dom/extend-expect';
import Display from './Display';
import Controls from '../controls/Controls';
import Dashboard from '../dashboard/Dashboard';

describe('Test to make sure Display functions properly',    ()  =>  {
    const display = render(<Display />)
    const controls = render(<Controls />)
    const dashboard = render(<Dashboard />)
    render(<Dashboard />);
    test('Display renders properly',    ()  =>  {
        render(<Display />)
    })

    test('Test to make sure Display defaults to unlocked and open', ()  =>  {
        const unlocked = display.getByText(/unlocked/i);
        const open = display.getByText(/open/i);
        expect(open).toHaveTextContent(/open/i);
        expect(unlocked).toHaveTextContent(/unlocked/i)
    })
})
