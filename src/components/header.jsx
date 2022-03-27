import React from "react"
import { useState } from "react"

const Header = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>click this button</p>
      <button onClick={() => setCount(count + 1)}>button</button>
      <div>current count: {count}</div>
    </div>
  )
}

export { Header }
