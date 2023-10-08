import { Button, ButtonType } from '.'
import { render, screen } from '@testing-library/react'
import Chance from 'chance'
const chance = new Chance()

const setup = () => {
  const label = chance.word()
  const callAction = jest.fn()

  render(<Button variant={ButtonType.Success} label={label} onClick={callAction} />)
  return { callAction }
}

describe('Button Component', () => {
  test('Should render correctly', () => {
    setup()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('Should call on click', () => {
    const { callAction } = setup()
    const button = screen.getByRole('button')
    button.click()
    expect(callAction).toHaveBeenCalledTimes(1)
  })
})
