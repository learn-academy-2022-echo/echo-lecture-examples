import React, { useState } from 'react'

const IpAddress = () => {
  const [ipAddress, setIpAddress] = useState(null)

  // create a function getIp that returns my current IP address
  // use fetch to make a GET request to IP API
  // use .then to take the fullfilled promise and log it
  const getIp = () => {
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(payload => setIpAddress(payload))
      .catch(errors => console.log(errors))
  }

  return (
    <div>
      <button onClick={getIp}> Click for IP address</button>
      {ipAddress &&
        <h1>My IP Address is {ipAddress.ip}</h1>}
    </div>

  )
}

export default IpAddress