import "./App.css";
import React, { useEffect, useState } from "react";
import { v4 as ID } from "uuid";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Lists from "./components/Lists";
import axios from "axios";

function App() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios("http://localhost:8080/todo", {
          method: "GET",
        });
        setItem(data.data.todos);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const addItem = async (text) => {
    try {
      const postData = await axios("http://localhost:8080/todo", {
        method: "POST",
        data: { name: text, status: true },
      });
      const newItem = [...item];
      newItem.unshift(postData.data.todo);
      setItem(newItem);
      // console.log(postData.data.todo.id);
    } catch (err) {
      console.log(err);
    }
  };

  const Delete = async (id) => {
    try {
      const delItem = await axios(`http://localhost:8080/todo/${id}`, {
        method: "DELETE",
      });
      const getData = await axios("http://localhost:8080/todo", {
        method: "GET",
      });
      setItem(getData.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  const Edit = async (id, text) => {
    try {
      await axios(`http"//localhost:8080/todo/${id}`, { method: "GET" });
      await axios(`http://localhost:8080/todo/${id}`, {
        method: "PUT",
        data: { name: text, status: `` },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Header />
      <AddForm addItem={addItem} />
      <Lists list={item} Delete={Delete} Edit={Edit} />
    </div>
  );
}

export default App;
