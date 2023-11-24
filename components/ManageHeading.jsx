import React from "react";

const ManageHeading = ({ table }) => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-gray-50 px-8 py-2 dark:bg-gray-700">
      <h1 className="font-medium capitalize text-gray-700 dark:text-gray-50">
        Manage {table}
      </h1>
      <p className="text-xs font-medium capitalize text-blue-500">
        Admin Dashboard / <span className="text-gray-700 dark:text-gray-50">{table}</span>
      </p>
    </div>
  );
};

export default ManageHeading;
