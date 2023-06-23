import { fireEvent, render, screen } from '@testing-library/react';
import { test, expect, describe } from "vitest";
import { BrowserRouter } from 'react-router-dom';
import Clase18 from './Clase18';

describe("App test", () => {
    test('La app debe tener un titulo que diga "Cookie Clicker"', () => {
        render(<BrowserRouter><Clase18 /></BrowserRouter>);
        const result = screen.getByText("Cookie Clicker");
        expect(result).toBeTruthy();
    })
    test('La app debe tener un boton que diga Click me!', () => {
        render(<BrowserRouter><Clase18 /></BrowserRouter>);
        const result = screen.getByRole('button', {name: 'Click me!'})
        expect(result).toBeTruthy()
    })
    test('La app debe tener un boton que diga Ascend', () => {
        render(<BrowserRouter><Clase18 /></BrowserRouter>);
        const result = screen.getByRole('button', {name: 'Ascend'})
        expect(result).toBeTruthy()
    })
})

describe('Buttons functionalities test', () => {
    test('El contador aumenta en uno cuando se hace click en el boton', () => {
        render(<BrowserRouter><Clase18 /></BrowserRouter>);
        const button = screen.getByRole('button', {name: 'Click me!'})
        const result = screen.getByText('0')
        fireEvent.click(button)
        expect(result.textContent).toBe('1')
    })
    test('El boton Ascend esta deshabilitado si el contador es < 10', () => {
        render(<BrowserRouter><Clase18 /></BrowserRouter>);
        const result = screen.getByRole('button', {name: 'Ascend'})
        expect(result).toHaveProperty('disabled', true)
    })
})