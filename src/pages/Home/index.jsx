import { useEffect, useState, useRef } from "react"; // Reacts Hooks
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api.js";

function Home() {
  //let users = [];
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const inputCourse = useRef();

  async function getUsers() {
    const usersApi = await api.get("/users");
    //users = usersApi.data;
    setUsers(usersApi.data); //setUser é a responsável para alterar o users
  }
  async function createUsers() {
    await api.post("/users", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
      course: inputCourse.current.value
    });
    getUsers();
  }
  async function deleteUsers(id) {
    await api.delete(`/users/${id}`);
    getUsers();
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Register Student</h1>
        <input
          name="name"
          type="text"
          placeholder="Name"
          ref={inputName}
        ></input>
        <input
          name="age"
          type="number"
          placeholder="Age"
          ref={inputAge}
        ></input>
        <input
          name="email"
          type="email"
          placeholder="Email"
          ref={inputEmail}
        ></input>
        <input
          name="course"
          type="text"
          placeholder="Course"
          ref={inputCourse}
        ></input>
        <button type="button" onClick={createUsers}>
          Submit
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Name: <span>{user.name}</span>
            </p>
            <p>
              Age: <span>{user.age}</span>
            </p>
            <p>
              Course: <span>{user.course}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Trash" className="trash" />
            Trash
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
