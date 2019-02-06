import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from '../controls/Controls.js';
import Display from '../display/Display.js';

test('Display and Controls render properly',    ()  =>  {
    render(<Display />)
    render(<Controls />)
})
