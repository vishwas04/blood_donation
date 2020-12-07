import './App.css';

function App() {
  return (
          //fetch
<div className="App">
      <br/><br/>
    <div class="absolute">
      <h1>LOGIN</h1>
          <form method="POST" action="http://localhost:8000/login">
              <lable>EMAIL</lable>  <input type="email" name="email"/>
              <br/>
              <br/>
              <lable>PASSWORD</lable>  <input type="password" name="pass1"/>
              <br/>
              <br/>
              
              <button type="sumbit" value="0">CONFIRM</button>
              
          </form>
    </div>
    <div class="absolute1">
          <h2>NEW USER</h2>
          <form method="GET" action="http://localhost:8000/signup">
            <button type="sumbit" value="0">SIGN UP</button>
          </form>
    </div>
</div>

  );
}

export default App;
