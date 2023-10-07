import Button from "./button"
import { ButtonType } from '../constants/button-types'
import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

describe('Button Component', () => {
  test('Should render correctly', () => {
    render(<Button variant={ButtonType.Success} label={faker.lorem.word()} />)
    const button = screen.getByRole('button-' + ButtonType.Success)
    expect(button).toBeInTheDocument()
  })

  test('Should call on click', () => {
    const actionClicked = jest.fn()
    render(<Button variant={ButtonType.Success} label={faker.lorem.word()} onClick={actionClicked} />)
    const button = screen.getByRole('button-' + ButtonType.Success)
    button.click()
    expect(actionClicked).toHaveBeenCalledTimes(1)
  })

  test('Should display only one variant', () => {
    render(<Button variant={ButtonType.Success} label={faker.lorem.word()} />)
    const buttonSuccess = screen.queryByRole('button-' + ButtonType.Success)
    expect(buttonSuccess).toBeInTheDocument()

    const buttonAlert = screen.queryByRole('button-' + ButtonType.Alert)
    expect(buttonAlert).not.toBeInTheDocument()
    const buttonErro = screen.queryByRole('button-' + ButtonType.Erro)
    expect(buttonErro).not.toBeInTheDocument()
  })
})
