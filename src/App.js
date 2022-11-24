import { useEffect, useRef, useState } from "react";
import { CardMascotas } from "./components/card.mascota";
import ModalComponent from "./components/modal";
import { FormAdopcion } from "./components/form.adopcion";
import { Modal } from "bootstrap";
import "./styles.css";
import { Navigator } from "./components/navigator";
import { Carrusel } from "./components/carrusel";

import logo1 from "./assets/svg/logo1.svg";
import img1 from "./assets/imgs/img5.jpg";
import img2 from "./assets/imgs/img7.jpg";
import img3 from "./assets/imgs/img8.jpg";

export default function App() {
  const [mascotas, setMascotas] = useState();
  const [mascotaSelect, setMascotaSelect] = useState();
  const [modalAdopcion, setModalAdopcion] = useState(null);
  const adopcionModal = useRef();

  useEffect(() => {
    setModalAdopcion(new Modal(adopcionModal.current));
  }, []);

  return (
    <div className="">
      <Navigator logo={logo1} title="Arys Animals" />
      <Carrusel>
        <div className="carousel-item active">
          <div
            id="cubre-carousel"
            className="container-fluid h-100 py-4 px-4  bg-black text-white">
            <img
              src={logo1}
              alt="logo"
              className="rounded float-end d-inline position-absoluted d-none d-md-block"
              style={{ maxWidth: "12rem" }}
            />
            <h4 className="text-center d-inline">
              Encuentre a su compañero en el refugio para mascotas
            </h4>
          </div>
          <img src={img1} className="edit-img d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <div
            id="cubre-carousel"
            className="container-fluid h-100 py-4 px-4  bg-black text-white">
            <h4 className="text-start">Soy afortunado, soy adoptado</h4>
          </div>
          <img src={img2} className="edit-img d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <div
            id="cubre-carousel"
            className="container-fluid h-100 py-4 px-4  bg-black text-white">
            <h4 className="text-end">Juguemos de nuevo, adóptelos</h4>
          </div>
          <img src={img3} className="edit-img d-block w-100" alt="..." />
        </div>
      </Carrusel>
      <CardMascotas
        id="mascotas"
        modal={modalAdopcion}
        mascotaSelect={mascotaSelect}
        setMascotaSelect={setMascotaSelect}
        mascotas={mascotas}
        setMascotas={setMascotas}
      />
      <ModalComponent
        nombre="Formulario Adopcion"
        exampleModal={adopcionModal}
        modal={modalAdopcion}>
        {!mascotaSelect || mascotaSelect === undefined ? null : (
          <FormAdopcion
            mascotas={mascotas}
            setMascotas={setMascotas}
            mascotaSelect={mascotaSelect}
          />
        )}
      </ModalComponent>
    </div>
  );
}
