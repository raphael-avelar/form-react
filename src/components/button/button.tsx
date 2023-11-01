import BUTTON_TYPE from './types'

const variants = {
  [BUTTON_TYPE.Success]: 'bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 active:bg-opacity-80',
  [BUTTON_TYPE.Alert]: 'bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 active:bg-opacity-80',
  [BUTTON_TYPE.Error]: 'bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 active:bg-opacity-60'
}

interface Props {
  variant: BUTTON_TYPE
  label: string
  onClick: () => void
}

const Button = ({variant, label, ...props}: Props) => {
  const variantClasses = variants[variant]

  return (
    <button
      className={`font-bold text-md text-white py-2 px-5 rounded-full ${variantClasses}`}
      role="button"
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
