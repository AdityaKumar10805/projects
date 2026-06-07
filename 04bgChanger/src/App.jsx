import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button
          className="px-4 py-2 mx-2 bg-red-500 text-white rounded"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="px-4 py-2 mx-2 bg-green-500 text-white rounded"
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="px-4 py-2 mx-2 bg-yellow-500 text-black rounded"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
      </div>
    </div>
  )
}

export default App