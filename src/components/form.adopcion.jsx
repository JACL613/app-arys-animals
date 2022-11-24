import { useEffect } from "react";
import swal from "sweetalert";
// import swal from "sweetalert";
import { postAdoptar } from "../services/adopcion.services";

export function FormAdopcion({ mascotaSelect, mascotas, setMascotas }) {
  const { nombre, id } = mascotaSelect;

  const handelAdopcion = async (e) => {
    e.preventDefault();
    const direccion = e.target.direccion.value;
    const documento = e.target.documento.value;
    const telefono = e.target.telefono.value;
    const registro = {
      direccion,
      documento,
      telefono,
      idMascota: id,
      nombreMascota: nombre
    };
    console.log(registro);

    const newMascota = await postAdoptar({ registro });
    if (newMascota) {
      const actualizacion = mascotas.map((mascota) => {
        if (registro.idMascota === mascota.id) {
          return { ...mascota, stateAdopcion: !mascota.stateAdopcion };
        }
        return mascota;
      });
      setMascotas(actualizacion);
      swal({
        title: "Genial!",
        text: "Registramos tu adopcion!",
        icon: "success"
      });
    }
    e.target.direccion.value = "";
    e.target.documento.value = "";
    e.target.telefono.value = "";
  };

  return (
    <form onSubmit={handelAdopcion}>
      <div className="mb-3">
        <label htmlFor="inputDireccion" className="form-label">
          Direccion
        </label>
        <input
          type="text"
          name="direccion"
          className="form-control"
          id="inputDireccion"
          aria-describedby="direccionHelps"
        />
        <div id="direccionHelps" className="form-text">
          Recuerde ingresar la direccion de residencia.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputDocumento" className="form-label">
          Documento
        </label>
        <input
          type="number"
          className="form-control"
          name="documento"
          id="inputDocumento"
          aria-describedby="documentoHelps"
        />
        <div id="documentoHelps" className="form-text">
          Recuerde ingresar el documento sin puntos (.), ni comás (,).
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputTelefono" className="form-label">
          Telefono
        </label>
        <input
          type="number"
          className="form-control"
          name="telefono"
          id="inputTelefono"
          aria-describedby="telefonoHelps"
        />
        <div id="telefonoHelps" className="form-text">
          Recuerde ingresar el telefono sin espacios.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputNombreMascota" className="form-label">
          Nombre de la mascota
        </label>
        <input
          type="text"
          className="form-control"
          name="nombreMascota"
          id="inputNombreMascota"
          aria-describedby="nombreMascotaHelps"
          value={nombre}
          disabled
        />
        <div id="nombreMascotaHelps" className="form-text">
          Este campo es auto asignado
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}
