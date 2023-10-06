import React from 'react'
import { ButtonType } from '../constants/button-types'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: ButtonType
  label: string
}

const Button: React.FC<Props> = (props: Props) => {
  const { variant, label } = props
  const commomClasses: string = "font-bold text-md text-white py-2 px-5 rounded-full "

  return (
    <>
      {variant === ButtonType.Success &&
        <button
          className={commomClasses + "bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 active:bg-opacity-80"}
          {...props}
        >
          {label}
        </button>
      }

      {variant === ButtonType.Alert &&
        <button
          className={commomClasses + "bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 active:bg-opacity-80"}
          {...props}
        >
          {label}
        </button>
      }

      {variant === ButtonType.Erro &&
        <button
          className={commomClasses + "bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 active:bg-opacity-60"}
          {...props}
        >
          {label}
        </button>
      }
    </>
  )
}

export default Button
