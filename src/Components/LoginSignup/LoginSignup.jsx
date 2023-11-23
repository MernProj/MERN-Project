import React, { useState } from 'react'
import './LoginSignup.css'
const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up")
    return (
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        
        <div className='inputs'>
           {action==="Login"?<div></div>:<div className="input">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfZJREFUaEPtmGtSQzEIhenK1JWpK1NXpoNTHIwJHB5pe53mj7fePM4HhEtyooO308H10x3g2h7c4YFHIno+g/Ezt3ci+jg/v3RCdwKIcBFt6XwlohaQLgAWI1ZHDdwC0QGQES+QZYgqwEo8xzyL47/cOKz03tBeelL9UO/99KsCfE5WtATNgBmSx6RaBWAmBgkJ9sTboDbthU4ARLzoZgCdrdJeqACMIiJWHL1wFYAx/qPGqI7/9mZ0UR26VQHV8WWAw4dQZSOOGSySAH4lsEoIZdNhNv1OvxMVAJ5w9AL/z7LmDLq0F6sAK0FSRuhSgou9WaWaDp8SufLnoYs54chAlCwvC1dDSG8sFGKsVFNF3A4A7Q1+flAxL3tBl9gl4TsBWoShk3SGELpma78qgJy0OFy4IQd67ichxTcV/Cy/w3BZgMgNBCoqlZWiADuEa8AwRARg9dVFLRzpBx+OUABLvOR1HdueWNk73G91nwRBoACz24fOD9LqI+hCIACt5a/hmtSViwdwKfFWTWV6wQMYQyecJbzNMHkfOulZALON6wEn9P4ZEjrpWYLazq0JqtELS89bAPAkCYHeEPjiKwLgpjRPVeB9C0DLxVNA9NgVWt/yADRBQaA3FFr/XwN4FrqJ95fI61tB7wBbzQtMfvcAYKStXb4AtFd1MQiCqk4AAAAASUVORK5CYII="/>
            <input type="text" placeholder='Name'/>
          </div>}
  
          <div className="input">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAY9JREFUaEPtmFsOwiAQRacrU1emrkx3ppmkGKTzAjpQlH6ZtIV77ryKCwx+LYPrhwnQO4IzAjMClQ78bAqdAeC6moO/e193ALhRIrgIvHorZva/AMAzvkcBIGlw/2gcKB4hPhcFcFT3UXQRQO9CTw390mOJAFtADfKLSudsADJ0zuJDF6Q6YBFA0NsiGij6IRhUBYDrekJYOmA1gBcEum4ZmtkA6Dg3FzaDpaA2pHyn9s4GwBek0NaklLRuMKe6jcbEXJhLIDjxOKxwvfDJsCsAZoi08deYZ9JJS5n0o213AAlCK3CpRXJRdAFAoblirCmTBs4NIGzECYsd5Wpn83FGpJ07gJZSKJLq79bCbwKgQaTG5syPZgBBpDRR0xZpmXvNAbhoWFOmeRFzLmJxn9ab8WCyuB4/0yUCuSKl5yfA8GfiCVBZEP9XA9ajXaWxxa+rJ7IjA2yGIVWg2t8axdbt8OJGr9RhLH9x7KBJXSIcLclp3rtFquq1ByaA5pD3/RkBb4e19WcENIe87w8fgTfiLW0xk58VHwAAAABJRU5ErkJggg=="/>
            <input type="email" placeholder='Email ID'/>
          </div>
  
          <div className="input">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWdJREFUaEPtmQEOwiAMRdnN9GTqydSTab6BhCBbW37dJCmJyYx0/PfbTtAlTT6WyfWnADg6g7/IwCmlhBfGJaX0yNfPfF3eu7B7AkA0BBfxawIBcKvAKBAvgGsWbxEDCMRRwwNgRHwRTUOwACiXe8dCCMMAXN0PvfI6M+XEAkB8K2rL1R4wegIQQ4MB6InRuNkrOU1cF5ABaIVYnGxjh3uBAWjLx+Li9AAoh1dTE0NmDgXlhVkBbPxHRgBUZWA1IzIQJUQ+RXYvIWbTZtkmlPOCasutaby1DZtF1OhcUZ84Ie82pUPKqEApTtxi/DuA+KDRALg0m2R19blpvQAwOKudGhlonTI5orV5Y55pvegBB8epjEcGIgPfDkQTU03lUFKRgcgAWUZRQlIJkQabwsUfjDXfxHsd5ntkLgC4cVuXJhuJyeIv3poMYP3yD2S5JjSpQsXDfLmLFkC16hGTAuAI1+s1p8/AG4CwXTEzdPxuAAAAAElFTkSuQmCC"/>
            <input type="password" placeholder='Password'/>
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
        <div className="submit-container">
        <div className={action === "login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
      </div>
    )
  }
  
  export default LoginSignup;
  