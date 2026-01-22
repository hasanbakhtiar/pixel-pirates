import { useEffect, useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import Users from "./components/Users"
import axios from "axios"

const App = () => {
  const [users, setUsers] = useState([]);
  const searchUser = (keyboard) => {
    axios.get(`https://api.github.com/search/users?q=${keyboard}`)
      .then(res => setUsers(res.data.items))
  };

  return (
    <>
      <Header />
      <Search sendKeyboard={searchUser } />
      <Users sendUsers={users} />
    </>
  )
}

export default App