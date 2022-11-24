import axios from "axios";
import React, { useState } from "react";

export function CreateMascota({ handelUrl }) {
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [edad, setEdad] = useState();
  const [raza, setRaza] = useState();
  const [categoria, setCategoria] = useState();
  const changeFile = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const archivo = e.target.files[0];
    setFile(archivo);
  };
  const changeName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const changeEdad = (e) => {
    const { value } = e.target;
    setEdad(value);
  };
  const changeRaza = (e) => {
    const { value } = e.target;
    setRaza(value);
  };
  const changeCategoria = (e) => {
    const { value } = e.target;
    setCategoria(value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", name);
    data.append("file", file);
    data.append("raza", raza);
    data.append("edad", edad);
    data.append("categoria", categoria);
    // console.log(data);

    axios
      .post("http://localhost:3008/api/mascotas", data)
      .then((res) => handelUrl(res.data))
      .catch((err) => console.log(err));

    setName("");
    setFile("");
    setEdad("");
    setRaza("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        className="form-control mb-3"
        type="text"
        name="nombre"
        placeholder="ingrese su nombre mascota"
        onChange={changeName}
      />
      <input
        className="form-control mb-3"
        type="text"
        name="raza"
        placeholder="ingrese su raza"
        onChange={changeRaza}
      />
      <input
        className="form-control mb-3"
        type="number"
        name="edad"
        placeholder="ingrese su edad"
        onChange={changeEdad}
      />
      <input
        className="form-control mb-3"
        type="file"
        name="file"
        id="file"
        onChange={changeFile}
      />
      <div className="form-check">
        <input
          onChange={changeCategoria}
          type="radio"
          id="perro"
          name="fav_language"
          value="perro"
          className="form-check-input"
        />
        <label className="form-check-label" for="perro">
          Perro
        </label>
      </div>
      <div className="form-check">
        <input
          onChange={changeCategoria}
          type="radio"
          id="gatos"
          name="fav_language"
          value="gatos"
          className="form-check-input"
        />
        <label className="form-check-label" for="gatos">
          Gatos
        </label>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" type="submit">
          enviar
        </button>
      </div>
    </form>
  );
}
