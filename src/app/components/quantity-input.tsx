type QuantityInputProps = {
  value: number
  onChange: (value: number) => void
}

export default function QuantityInput({ value, onChange }: QuantityInputProps) {
  const handleIncrease = (e: React.MouseEvent) => {
    onChange(value + 1)
    e.stopPropagation()
  }

  const handleDecrease = (e: React.MouseEvent) => {
    onChange(Math.max(0, value - 1))
    e.stopPropagation()
  }

  return (
    <div>
      <button className="w-[32px]" onClick={handleDecrease}>
        -
      </button>
      <span className="inline-flex w-[2rem] justify-center">{value}</span>
      <button className="w-[32px]" onClick={handleIncrease}>
        +
      </button>
    </div>
  )
}
