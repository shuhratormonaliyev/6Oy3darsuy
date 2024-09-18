import React, { useRef, useState } from "react";
import "./App.css";
function App() {
  const nameRef = useRef("");
  const surNameRef = useRef("");
  const emailRef = useRef("");
  const [userInfo, setUserInfo] = useState([]);
  const [message, setMessage] = useState('');
  function handleclick(e) {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      surname: surNameRef.current.value,
      email: emailRef.current.value,
    };
    setUserInfo((prevUserInfo) => [...prevUserInfo, user]);
    const copied = JSON.parse(JSON.stringify([...userInfo, user]));
    
    setMessage('Saqlandi!');
    setTimeout(() => setMessage(''), 3000); 
  
  }
  return (
    <div>
      <form action="">
        <input ref={nameRef} type="text" placeholder="Enter name ..." />
        <input ref={surNameRef} type="text" placeholder="Enter surname ..." />
        <input ref={emailRef} type="email" placeholder="Enter email ..." />
        <button onClick={handleclick}>save</button>
      </form>
      {message && <p className="notification">{message}</p>}
      {userInfo.length > 0 && (
        <div className="card-container">
        {userInfo.map((user, index) => (
          <div className="card" key={index}>
            <h3>{user.name}</h3>
            <p>Surname: {user.surname}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default App;
