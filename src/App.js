import "./App.css";
import { Button } from "reactstrap";

function App(props) {
  return (
    <div className='app'>
      <h1>Users Dashboard</h1>
      <div className='btn-group'>
        <Button color='primary' onClick={() => props.history.push("/users")}>
          All Users
        </Button>
        <Button color='primary' onClick={() => props.history.push("/form")}>
          Add User
        </Button>
      </div>
    </div>
  );
}

export default App;
