import React from 'react'

interface Props extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: Array<string>
}

const Select: React.FC<Props> = (props: Props) => {
  const { options } = props

  return (
    <div className="inline-block relative w-64">
      <select
        className="block appearance-none w-full bg-zinc-900 text-white border-2 border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-purple-600"
        role={props.name}
        {...props}
      >
        {options.map((option, i) => (
          <option
            key={i}
            role={'option-' + props.name}
          >
            {option}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  )
}

export default Select
