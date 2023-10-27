import Input from "."
import { render, screen, fireEvent } from '@testing-library/react'
import Chance from 'chance'

const chance = new Chance()

const setup = () => {
  const fieldName = chance.word()
  render(<Input name={fieldName} />)

  return { fieldName }
}

describe('Input Component', () => {
  test('Should render correctly', () => {
    const { fieldName } = setup()
    const input = screen.getByRole(fieldName)
    expect(input).toBeInTheDocument()
  })

  test('Should update value', () => {
    const { fieldName } = setup()
    const input = screen.getByRole(fieldName) as HTMLInputElement
    const randomWords = chance.sentence()
    fireEvent.input(input, { target: { value: randomWords } })
    expect(input.value).toBe(randomWords)
  })

  test('Should focus input on click', () => {
    const { fieldName } = setup()
    const input = screen.getByRole(fieldName)
    input.focus()
    expect(input).toHaveFocus()
  })
})
