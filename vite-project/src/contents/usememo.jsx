import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Memoized() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState ('')

  const expensiveCalculation = (num1,num2) => {
    console.log('executando calculo complexo')
    for (let i = 0; i < 100000000;  i++) {}
    return num1 + num2
  }

  const inputNumber = parseInt(inputValue) || 0

  const memoizedValue = useMemo(() => {
    console.log('UseMemo: Calculando valor memoizado...')
    return expensiveCalculation(count, inputNumber)
  }, [count, inputNumber])

  const noMemoizedValue = expensiveCalculation(count, inputNumber)

  return (
    <>
      <h2>Com useMemo: </h2>
      <p>memoizedValue: {memoizedValue}</p>
      <h2>Sem useMemo: {noMemoizedValue}</h2>

      <button onClick={() => setCount(count + 1)}> Incrementar contador</button>

      <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}
      placeholder='Digite um número'/>
    </>
  )
}

export default Memoized
