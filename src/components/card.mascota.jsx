import { useEffect } from "react";
import { getAllM } from "../services/mascots.services";

export function CardMascotas({
  mascotas,
  setMascotas,
  modal,
  setMascotaSelect
}) {
  const actionAdoptar = ({ mascota }) => {
    const { nombre, id } = mascota;
    setMascotaSelect({ nombre, id });
    modal.show();
  };
  const obtener = async () => {
    const mascotas = await getAllM();

    setMascotas(mascotas);
  };
  useEffect(() => {
    obtener();
  }, []);
  return (
    <div
      className="d-flex overflow-auto my-2  corrouselo"
      style={{ maxWidth: "100vw" }}>
      {!mascotas
        ? null
        : mascotas.map((mascota) => {
            return (
              <div
                key={mascota.id}
                className="card mx-1"
                style={{ width: "18rem" , minWidth: "18rem" }}>
                <img
                  src={`${process.env.REACT_APP_BASE_URL_IMG}${mascota.refImg}`}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ maxHeight: "11rem", minHeight: "11rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">nombre: {mascota.nombre}</h5>
                  <h5>raza: {mascota.raza}</h5>
                  <h5>edad: {mascota.edad} años </h5>
                  <button
                    type="button"
                    onClick={() => actionAdoptar({ mascota })}
                    className={`btn btn-primary ${
                      mascota.stateAdopcion === true ? "disabled" : null
                    }`}>
                    Adoptar
                  </button>
                </div>
              </div>
            );
          })}

      {/*  */}
    </div>
  );
}
