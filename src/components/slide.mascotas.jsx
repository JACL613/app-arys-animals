import img1 from "../assets/imgs/img5.jpg";
import img2 from "../assets/imgs/img7.jpg";
import img3 from "../assets/imgs/img8.jpg";
export function SlideMasctas() {
  return (
    <div>
      <div className="carousel-item active">
        <div
          id="cubre-carousel"
          className="container-fluid h-100 py-4 px-4  bg-black text-white">
          <h4 className="text-center">
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
    </div>
  );
}
