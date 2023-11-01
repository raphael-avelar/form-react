interface Props {
  name: string
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({name, ...props}: Props) => {
  return (
    <input
      className="appearance-none block w-full border-2 placeholder-zinc-200 border-gray-400 text-white bg-zinc-900 rounded py-2 px-4 leading-tight focus:outline-none focus:border-purple-600"
      role={name}
      {...props}
    />
  )
}

export default Input
