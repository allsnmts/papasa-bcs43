import React from "react";

const NewTableContainer = () => {
  // Define your table data here
  const tableData = [
    { id: 1, column1: "Value 1", column2: "Value A" },
    { id: 2, column1: "Value 2", column2: "Value B" },
    { id: 3, column1: "Value 3", column2: "Value C" },
    { id: 4, column1: "Value 4", column2: "Value D" },
    { id: 5, column1: "Value 5", column2: "Value E" },
    { id: 6, column1: "Value 6", column2: "Value F" },
    { id: 7, column1: "Value 7", column2: "Value G" },
    { id: 8, column1: "Value 8", column2: "Value H" },
    { id: 9, column1: "Value 9", column2: "Value I" },
    { id: 10, column1: "Value 10", column2: "Value J" },
  ];

  return (
    <div className="table-container bg-white mt-2 rounded-lg">
      <h3 className="flex justify-center my-3">Word Cloud</h3>
      <div className="table-wrapper max-h-72 overflow-y-auto">
        <table className="table w-full border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border"> Word </th>
              <th className="p-2 border"> Positive/Negative </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td className="p-2 border text-center">{row.column1}</td>
                <td className="p-2 border text-center">{row.column2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        {/* Content below the table */}
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default NewTableContainer;
