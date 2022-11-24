export function Table({ categoria, children, title }) {
  return (
    <div className="table-responsive shadow p-3 mb-5 bg-body rounded my-3 mx-3">
      <h4 className="text-center">{title ? title : "Table Basic"}</h4>
      <table className="table" key={1}>
        <thead>
          <tr>
            <th className="text-center">#</th>
            {categoria
              ? categoria.map((item, i = 0) => {
                  return (
                    <th key={(i += 1)} className="text-center">
                      {item}
                    </th>
                  );
                })
              : null}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
