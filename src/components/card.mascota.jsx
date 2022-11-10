import { useEffect, useState } from "react";
import { getAllM } from "../services/mascots.services";
import img_1 from "../assets/imgs/img1.jpg";
import img_2 from "../assets/imgs/img2.jpg";

export function CardMascotas({ modal, setMascotaSelect }) {
  const arrays = [img_1, img_2];
  const [mascotas, setMascotas] = useState();
  const actionAdoptar = ({ mascota }) => {
    // console.log("adoptado", mascota);
    const { nombre, id } = mascota;
    console.log(nombre);
    console.log(id);

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
    <div>
      {!mascotas
        ? null
        : mascotas.map((mascota) => {
            return (
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={arrays[mascota.refImg - 1]}
                  className="card-img-top"
                  alt="..."
                  style={{ maxHeight: "15rem" }}
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
