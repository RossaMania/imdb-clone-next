"use client";

import React, { useEffect } from "react"

const Error = ({ error, reset }) => {

  useEffect(() => {
    console.log(error);
  }, [error])
  return (
    <div className="text-center mt-10">
      <h2>Something went wrong!</h2>
      <button className="hover:text-amber-600 underline underline-offset-6 decoration-2" onClick={() => reset()}>
        Try Again!
      </button>
    </div>
  );
}

export default Error