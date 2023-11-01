import Button, { BUTTON_TYPE } from '.'
import { render, screen } from '@testing-library/react'
import Chance from 'chance'

const chance = new Chance()
const label = chance.word()
const callAction = jest.fn()
const param = chance.word()

const setup = (BUTTON_TYPE: BUTTON_TYPE) => {
  render(<Button variant={BUTTON_TYPE} label={label} onClick={callAction(param)} />)
}

describe('Button Component', () => {
  test('Should call on click', () => {
    setup(BUTTON_TYPE.Success)
    const button = screen.getByRole('button')
    button.click()
    expect(callAction).toHaveBeenCalledTimes(1)
    expect(callAction).toHaveBeenCalledWith(param)
  })

  test('Should render correctly', () => {
    setup(BUTTON_TYPE.Success)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('Should display only success variant', () => {
    setup(BUTTON_TYPE.Success)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-purple-600 hover:bg-purple-700 border-purple-600')
    expect(button).not.toHaveClass('bg-yellow-500 hover:bg-yellow-600 border-yellow-500')
    expect(button).not.toHaveClass('bg-red-500 hover:bg-red-600 border-red-500')
  })

  test('Should display only alert variant', () => {
    setup(BUTTON_TYPE.Alert)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-yellow-500 hover:bg-yellow-600 border-yellow-500')
    expect(button).not.toHaveClass('bg-purple-600 hover:bg-purple-700 border-purple-600')
    expect(button).not.toHaveClass('bg-red-500 hover:bg-red-600 border-red-500')
  })

  test('Should display only error variant', () => {
    setup(BUTTON_TYPE.Error)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-red-500 hover:bg-red-600 border-red-500')
    expect(button).not.toHaveClass('bg-purple-600 hover:bg-purple-700 border-purple-600')
    expect(button).not.toHaveClass('bg-yellow-500 hover:bg-yellow-600 border-yellow-500')
  })
})
