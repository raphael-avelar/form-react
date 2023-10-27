import Button, { ButtonType } from '.'
import { render, screen } from '@testing-library/react'
import Chance from 'chance'

const chance = new Chance()

const setup = (ButtonType: ButtonType) => {
  const label = chance.word()
  const callAction = jest.fn()
  const arg = chance.word()

  render(<Button variant={ButtonType} label={label} onClick={callAction(arg)} />)
  return { callAction, arg }
}

describe('Button Component', () => {
  test('Should render correctly', () => {
    setup(ButtonType.Success)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('Should call on click', () => {
    const { callAction, arg } = setup(ButtonType.Success)
    const button = screen.getByRole('button')
    button.click()
    expect(callAction).toHaveBeenCalledTimes(1)
    expect(callAction).toHaveBeenCalledWith(arg)
  })

  test('Should display only success variant', () => {
    setup(ButtonType.Success)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-purple-600 hover:bg-purple-700 border-purple-600')
    expect(button).not.toHaveClass('bg-yellow-500 hover:bg-yellow-600 border-yellow-500')
    expect(button).not.toHaveClass('bg-red-500 hover:bg-red-600 border-red-500')
  })

  test('Should display only alert variant', () => {
    setup(ButtonType.Alert)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-yellow-500 hover:bg-yellow-600 border-yellow-500')
    expect(button).not.toHaveClass('bg-purple-600 hover:bg-purple-700 border-purple-600')
    expect(button).not.toHaveClass('bg-red-500 hover:bg-red-600 border-red-500')
  })

  test('Should display only error variant', () => {
    setup(ButtonType.Error)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-red-500 hover:bg-red-600 border-red-500')
    expect(button).not.toHaveClass('bg-purple-600 hover:bg-purple-700 border-purple-600')
    expect(button).not.toHaveClass('bg-yellow-500 hover:bg-yellow-600 border-yellow-500')
  })
})
