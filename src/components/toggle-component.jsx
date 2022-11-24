import React, { useState } from "react";
import { BsFillXCircleFill, BsFillPatchPlusFill } from "react-icons/bs";
import "../assets/css/animate.css";
export function Toggle({ children, title, text }) {
  const [showComponent, setShowComponent] = useState(false);

  const handelAnimations = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div>
      {showComponent ? (
        <div
          id="componentModel"
          className="shadow-lg  py-2 mb-5 bg-body rounded mostrar">
          <div className="border-bottom px-3 py-2">
            <div className="d-inline float-end ">
              <button
                className="btn  btn-danger mb-3"
                onClick={handelAnimations}>
                <BsFillXCircleFill />
              </button>
            </div>
            <div className="text-center d-inline ">
              <h5>{title}</h5>
            </div>
          </div>
          <div className="px-3">{children}</div>
        </div>
      ) : (
        <button className="btn" onClick={handelAnimations}>
          {text}
          <BsFillPatchPlusFill />
        </button>
      )}
    </div>
  );
}
