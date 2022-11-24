export default function Modal({ nombre, exampleModal, modal, children }) {
  return (
    <>
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
                {!nombre ? "Modal Basic" : nombre}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => modal.hide()}
                aria-label="Close"></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <h5 className="form-text text-center">
                Recuende que tiene un plazo maximo de 10 días para confirmar a
                adopción
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
