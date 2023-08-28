"use client"

import React, { useState } from "react"

const Searchbox = () => {

  const [search, setSearch] = useState("");
  return (
    <form className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"/>
      <button type="submit" className="text-amber-500 disabled:text-gray-400">Search</button>
    </form>
  )
}

export default Searchbox