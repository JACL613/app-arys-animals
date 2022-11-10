import { useEffect, useRef, useState } from "react";
import { CardMascotas } from "./components/card.mascota";
import { FormModalAdopcion } from "./components/form.modal.adopcion";
import { Modal } from "bootstrap";
import "./styles.css";

export default function App() {
  const [mascotaSelect, setMascotaSelect] = useState();
  const [modal, setModal] = useState(null);
  const exampleModal = useRef();

  useEffect(() => {
    setModal(new Modal(exampleModal.current));
  }, []);

  return (
    <div className="">
      <CardMascotas
        modal={modal}
        mascotaSelect={mascotaSelect}
        setMascotaSelect={setMascotaSelect}
      />
      {/* {!mascotaSelect || !modal  ? null : (
        <FormModalAdopcion
          modal={modal}
          setModal={(params)=>setModal(params)}
          formAdopModal={formAdopModal}
          mascotaSelect={mascotaSelect}
        />
      )} */}
      <>
        {/* show btn Modal */}

        {/* Modal */}
        <div
          className="modal fade"
          ref={exampleModal}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => modal.hide()}
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {!mascotaSelect || mascotaSelect === undefined ? null : (
                  <FormModalAdopcion mascotaSelect={mascotaSelect} />
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => modal.hide()}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
