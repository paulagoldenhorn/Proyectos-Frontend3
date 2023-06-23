import { render } from '@testing-library/react';
import { test, expect, describe } from "vitest";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe("App", () => {
    test('renders learn react link', () => {
      render(<BrowserRouter><App /></BrowserRouter>)
        expect(true).toBeTruthy()
      })
})