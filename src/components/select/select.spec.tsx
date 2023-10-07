import Select from "./select"
import { render, screen, fireEvent } from '@testing-library/react'
import { faker } from '@faker-js/faker'

const setup = () => {
  const fieldName = faker.database.column()
  const options: Array<string> = Array.from({ length: 5 }, () => faker.lorem.word())
  render(<Select name={fieldName} options={options} />)

  return { fieldName, options }
}

describe('Select Component', () => {
  test('Should render correctly', () => {
    const { fieldName } = setup()
    const select = screen.getByRole(fieldName)
    expect(select).toBeInTheDocument()
  })

  test('Should update value', () => {
    const { fieldName, options } = setup()
    const select = screen.getByRole(fieldName) as HTMLSelectElement
    const randomValue = options[(Math.floor(Math.random() * options.length))]
    fireEvent.change(select, { target: { value: randomValue } })
    expect(select).toHaveValue(randomValue)
  })

  test('Should render all options', () => {
    const { fieldName } = setup()
    const options = screen.getAllByRole('option-' + fieldName)
    options.forEach(opt => expect(opt).toBeInTheDocument())
  })

  test('Should focus select on click', () => {
    const { fieldName } = setup()
    const select = screen.getByRole(fieldName)
    select.focus()
    expect(select).toHaveFocus()
  })
})
