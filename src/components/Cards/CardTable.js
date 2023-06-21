import React from 'react';
import Table from '../Tables/Table';

export default function CardTable({ feedbackObjByCategory }) {
  const headerTitlesArr = ['Category', 'Students', 'Percentage'];

  return (
    <Table headerTitlesArr={headerTitlesArr}>
      {Object.entries(feedbackObjByCategory).map(([category, count], i) => {
        const stPerCat = count;
        const stTotal = feedbackObjByCategory.total;
        const percentage = (100 * stPerCat) / stTotal;

        return (
          <tr
            key={i}
            className={`border-b text-dark dark:text-light dark:border-gray-700 cursor-pointer bg-lightComponents dark:bg-darkComponents`}
          >
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
              {category.toUpperCase()}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {stPerCat}
            </td>
            <td className="w-[60%] border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <span className="mr-2">{percentage}%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${percentage}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${category}`}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </Table>
  );
}
