'use client'

import { useState } from "react"

export const Content = () => {
  const [value, setValue] = useState<number>(1)

  const tambah = () => {
    setValue(value + 1)
  }

  const kurang = () => {
    setValue(value - 1)
  }

  return (
    <>
      <h1>{ value }</h1>  
      <div className="flex flex-row">
        <button className="pr-4" onClick={ () => { tambah() } }>Tambah</button>
        <button onClick={ () => { kurang() }}>kurang</button>
      </div>
    </>
  )
}