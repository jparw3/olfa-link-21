import React from 'react'

function ErrorPage() {
  return (
    <div className="p-text-center">
      <div className="flex-column">
        <img src='/olfalogo.png' alt="image" style={{ width: '150px' }}/>
        <h1>Profile not found.</h1>
        <h1>If you are a new user, please consider registering at Olfa.</h1>
        <h2>Read the documendation <a href="https://github.com/jparw/olfa-link-21#readme" target="_blank" rel="noreferrer">here</a>.</h2>
      </div>
    </div>
  )
}

export default ErrorPage
