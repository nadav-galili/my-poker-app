import MaterialTable from "material-table";
import React from "react";
import { apiUrl } from "../config/config.json";

const LastGame = () => {
  return (
    <div className="container">
      <MaterialTable
        title="last game"
        columns={[
          { title: "rank", field: "rank" },
          {
            title: "avatar",
            field: "image",
            render: (rowData) => (
              <img
                style={{ height: 36, borderRadius: "50%" }}
                src={rowData.image}
                alt={rowData.name}
              />
            ),
          },
          { title: "name", field: "name" },
          { title: "profit", field: "profit" },
          { title: "pritot", field: "num_of_pritot" },
        ]}
        data={(query) =>
          new Promise((resolve, reject) => {
            let url = `${apiUrl}/games/lastgame`;
            fetch(url)
              .then((response) => response.json())
              .then((result) => {
                resolve({
                  data: result,
                  page: 1,
                  totalCount: 10,
                });
              });
          })
        }
      />
    </div>
  );
};
export default LastGame;
