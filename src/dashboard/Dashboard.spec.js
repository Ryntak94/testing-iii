import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from '../controls/Controls.js';
import Display from '../display/Display.js';
import Dashboard from './Dashboard'

afterEach(cleanup);

describe('Test to make sure Display and Controls click events work properly',   ()  =>  {
    test('Display and Controls render properly',    ()  =>  {
        render(<Display />)
        render(<Controls />)
    })
    test('Test to make sure close/open button changes when clicked',    ()  =>  {
        const controls = render(<Dashboard />)
        const closeButton = controls.getByTestId(/close/i);
        fireEvent.click(closeButton);
        expect(closeButton).toHaveTextContent(/open gate/i);
    })

    test('Test to make sure Display shows unlocked and close when close gate button is clicked', ()  =>  {
        const display = render(<Display />)
        const controls = render(<Dashboard />)
        const unlocked = display.getByText(/unlocked/i);
        const closeButton = controls.getByTestId(/close/i);
        fireEvent.click(closeButton);
        const closed = display.getByText(/closed/i)
        expect(closeButton).toHaveTextContent(/open gate/i)
        expect(closed).toHaveTextContent(/closed/i);
        expect(unlocked).toHaveTextContent(/unlocked/i)
    })

    test('Test to make sure Display shows unlocked and open when close gate button is clicked twice',  ()  =>  {
        const display = render(<Display />)
        const controls = render(<Dashboard />)
        const unlocked = display.getByText(/unlocked/i);
        const closeButton = controls.getByTestId(/close/i);
        fireEvent.click(closeButton);
        fireEvent.click(closeButton);
        const open = display.getByText(/open/i)
        expect(closeButton).toHaveTextContent(/close gate/i)
        expect(open).toHaveTextContent(/open/i);
        expect(unlocked).toHaveTextContent(/unlocked/i)
    })

    test('Test to make sure Display shows locked and closed when close gate and lock gate buttons are clicked', ()  =>  {
        const display = render(<Display />);
        const controls = render(<Dashboard />)
        const closeButton = controls.getByText(/close gate/i);
        const lockButton = controls.getByText(/lock gate/i);
        fireEvent.click(closeButton);
        fireEvent.click(lockButton);
        const closed = display.getByText(/closed/i);
        const locked = display.getByText(/locked/i);
        expect(closeButton).toHaveTextContent(/open gate/i);
        expect(lockButton).toHaveTextContent(/unlock gate/i);
        expect(closed).toHaveTextContent(/closed/i);
        expect(locked).toHaveTextContent(/locked/)
    })

    test('Test to make sure displays are green when unlocked and open', ()  =>  {
        const display = render(<Display />);
        const controls = render(<Dashboard />)
        const open = display.getByText(/open/i)
        const unlocked = display.getByText(/unlocked/i)
        expect(unlocked).toHaveClass('green-led');
        expect(open).toHaveClass('green-led');
    })
    test('Test to make sure displays are red when locked and closed', ()  =>  {
        const display = render(<Display closed={true} locked={true}/>);
        const controls = render(<Dashboard />)
        render(<Controls />)
        // const closeButton = controls.getByText(/close gate/i);
        // const lockButton = controls.getByText(/lock gate/i);
        // fireEvent.click(closeButton);
        // fireEvent.click(lockButton);
        const closed = display.getByText(/closed/i)
        const locked = display.getByText(/locked/i)
        // expect(closeButton).toHaveTextContent(/open gate/i);
        // expect(lockButton).toHaveTextContent(/unlock gate/i);
        expect(closed).toHaveTextContent(/closed/i)
        expect(locked).toHaveTextContent(/locked/i)
        expect(locked).toHaveClass('red-led');
        expect(closed).toHaveClass('red-led');
    })
})
