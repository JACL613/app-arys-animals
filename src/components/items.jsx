import { BsFillTrashFill, BsCheckCircle } from "react-icons/bs";
import { deleteAdop, putConfirm } from "../services/adopcion.services";
export function Items({ data, setAdopciones }) {
  const handelConfirm = async (item) => {
    await putConfirm(item);
    setAdopciones(null);
  };
  const handelDelete = async (Object) => {
    await deleteAdop(Object);
    setAdopciones(null);
  };

  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <tr key={item.id}>
                <td className="text-center">1</td>
                <td>{item.direccion}</td>
                <td>{item.documento}</td>
                <td>{item.telefono}</td>
                <td className="text-right">{item.nombreMascota}</td>
                <td className="text-right">
                  {item.confirm === false ? "Sin Confirmar" : "Confirmado"}
                </td>
                <td className="td-actions text-right">
                  <button
                    type="button"
                    rel="tooltip"
                    className="btn btn-success btn-just-icon btn-sm"
                    data-original-title=""
                    title=""
                    onClick={() => handelConfirm(item)}>
                    <BsCheckCircle />
                  </button>
                  <button
                    onClick={() => {
                      handelDelete({ idMascota: item.idMascota, id: item.id });
                    }}
                    type="button"
                    rel="tooltip"
                    className="btn btn-danger btn-just-icon btn-sm"
                    data-original-title=""
                    title="">
                    <BsFillTrashFill />
                  </button>
                </td>
              </tr>
            );
          })
        : null}
    </>
  );
}
