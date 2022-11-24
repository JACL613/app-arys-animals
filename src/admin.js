import { useEffect, useState } from "react";
import { CreateMascota } from "./components/form-create-mascota";
import { FormLoginUser } from "./components/form.login.user";
import { Items } from "./components/items";
import { Navigator } from "./components/navigator";
import { Table } from "./components/table";
import { Toggle } from "./components/toggle-component";
import { getAllAdop, setToken } from "./services/adopcion.services";

export function Admin() {
  const [user, setUser] = useState(undefined);
  const [adopciones, setAdopciones] = useState(undefined);
  const obtener = async () => {
    const datos = await getAllAdop();

    setAdopciones(datos);
  };
  const handelCloseSesion = () => {
    setUser(null);
    window.localStorage.removeItem("loggedAppUser");
    setToken("");
  };
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      setUser(JSON.parse(loggedUserJSON));
      if (user) {
        setToken(user.token);
        console.log("user:", user);
      }
    }
  }, [!user]);
  useEffect(() => {
    console.log("adopcion");

    obtener();
  }, [adopciones == null]);
  if (user !== undefined) {
    return (
      <div>
        <Navigator
          title="Panel Administrativo"
          user={user}
          functionCloseSesion={handelCloseSesion}
        />
        <Table
          title="Tabla de Clientes"
          categoria={[
            "Direccion",
            "Documento",
            "Teléfono",
            "Mascota",
            "Estado"
          ]}>
          <Items
            data={adopciones}
            setAdopciones={(elem) => setAdopciones(elem)}
          />
        </Table>
        <Toggle text="nueva mascota " title="Formulario Mascota">
          <CreateMascota />
        </Toggle>
      </div>
    );
  } else {
    return (
      <FormLoginUser
        handelSetUser={(newUser) => {
          setUser(newUser);
        }}
      />
    );
  }
}
