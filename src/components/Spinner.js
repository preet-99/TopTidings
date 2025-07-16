/**
 * Spinner Component
 * 
 * A simple functional component that displays a loading spinner (GIF)
 * while data is being fetched or processed. Useful for showing
 * visual feedback during asynchronous operations.
 */


import React, { Component } from 'react'
import loading from './loading.gif'  // Spinner image 

/**
 * Functional Spinner component
 * Shows a centered loading GIF while content is loading
 */
const Spinner = () => {

  return (
    <div className='text-center'>
      <img width={60} src={loading} alt="loading" />
    </div>
  )

}

export default Spinner
