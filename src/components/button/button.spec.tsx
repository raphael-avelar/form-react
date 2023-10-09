import { Button, ButtonType } from '.'
import { render, screen } from '@testing-library/react'
import Chance from 'chance'
const chance = new Chance()

const setup = () => {
  const label = chance.word()
  const callAction = jest.fn()
  const arg = chance.word()

  render(<Button variant={ButtonType.Success} label={label} onClick={callAction(arg)} />)
  return { callAction, arg }
}

describe('Button Component', () => {
  test('Should render correctly', () => {
    setup()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('Should call on click', () => {
    const { callAction, arg } = setup()
    const button = screen.getByRole('button')
    button.click()
    expect(callAction).toHaveBeenCalledTimes(1)
    expect(callAction).toHaveBeenCalledWith(arg)
  })
})
