import Select from "."
import { render, screen, fireEvent } from '@testing-library/react'
import Chance from 'chance'

const chance = new Chance()
const fieldName = chance.word()
const options = Array.from({ length: 5 }, () => chance.word())

const setup = () => {
  render(<Select name={fieldName} options={options} />)
}

describe('Select Component', () => {
  test('Should render correctly', () => {
    setup()
    const select = screen.getByRole(fieldName)
    expect(select).toBeInTheDocument()
  })

  test('Should update value', () => {
    setup()
    const select = screen.getByRole(fieldName) as HTMLSelectElement
    const randomValue = options[(Math.floor(Math.random() * options.length))]
    fireEvent.change(select, { target: { value: randomValue } })
    expect(select).toHaveValue(randomValue)
  })

  test('Should render all options', () => {
    setup()
    const options = screen.getAllByRole(`option-${fieldName}`)
    options.forEach(opt => expect(opt).toBeInTheDocument())
  })

  test('Should focus select on click', () => {
    setup()
    const select = screen.getByRole(fieldName)
    select.focus()
    expect(select).toHaveFocus()
  })
})
