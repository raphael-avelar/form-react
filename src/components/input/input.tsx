import React from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <input
      className="appearance-none block w-full border-2 placeholder-zinc-200 border-gray-400 text-white bg-zinc-900 rounded py-2 px-4 leading-tight focus:outline-none focus:border-purple-600"
      role={props.name}
      {...props}
    />
  )
}

export default Input
