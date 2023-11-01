import Input from "."
import { render, screen, fireEvent } from '@testing-library/react'
import Chance from 'chance'

const chance = new Chance()
const fieldName = chance.word()

const setup = () => {
  render(<Input name={fieldName} />)
}

describe('Input Component', () => {
  test('Should render correctly', () => {
    setup()
    const input = screen.getByRole(fieldName)
    expect(input).toBeInTheDocument()
  })

  test('Should update value', () => {
    setup()
    const input = screen.getByRole(fieldName) as HTMLInputElement
    const randomWords = chance.sentence()
    fireEvent.input(input, { target: { value: randomWords } })
    expect(input.value).toBe(randomWords)
  })

  test('Should focus input on click', () => {
    setup()
    const input = screen.getByRole(fieldName)
    input.focus()
    expect(input).toHaveFocus()
  })
})
