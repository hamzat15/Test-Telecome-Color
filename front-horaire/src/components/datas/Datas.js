import React from "react";
import axios from "axios";
import "./data.css";
import { useState, useEffect } from "react";
import { Button} from "react-bootstrap";


const Datas = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:3002/post").then((res) => setData(res.data));
  }, [data]);

  const delet = (e) => {
    setId(e)
    if(id){
    axios
      .delete(`http://127.0.0.1:3002/post/${id}`);
    }
  };


  function addStr(str, index, stringToAdd){
    if(str.length === 4){
      index = 2;
    }
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }
  let stre = "h-";
  return (
    <div className="post">
       <table className='table table-striped'>
        <thead className="headee">
          <tr>
            <th scope='col'>Fuseau</th>
            <th scope='col'>JOURS</th>
            <th scope='col'>Horaire</th>
          </tr>
        </thead>
        <tbody >
          { data.map((post) => (
            <tr key={post.id} className="body">
              <th scope='row'>{post.fuseau}</th>
              <td>{post.jours}</td>
              <td>
              <input value="" />{addStr(post.horaire.toString(),1,stre)}h
              </td>
              <td>
              <Button >Modifier</Button>
              </td>
              <td>
              <Button variant="danger" id={post.id} onClick={(e) => delet(e.target.id)}>Supprimer avec un double click</Button>
              </td>
            </tr>
          ))}
            </tbody>
      </table>
    </div>
  );
};

export default Datas;
