import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <>
      <center><h1>AI Chat App</h1></center>
      <div class="chatbox">
        <img src="https://www.ppimusic.ie/images/loading_anim.gif" id="loading_gif"/>
          <strong id="chatbox"></strong>
      </div>
      <div id="forums">
        <input type="text" id="message" placeholder="Type your message here..."/>
          <button id="clickme">Send</button>
      </div>
    </>
  )
}

export default Dashboard
