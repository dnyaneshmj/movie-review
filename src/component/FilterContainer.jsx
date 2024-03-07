import React, { memo } from "react";
const FilterContainer = ({ handleFilterChange, handleSortChange }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
       {/* Release date and Rating */}

      <div className="w-4/5 mx-auto sm:w-full 2xl:w-4/5">
          <select
            className=" w-full px-3 py-1.5 border-2 border-white rounded-full font-Oxanium "
            onChange={handleFilterChange}
          >
            <option defaultValue value="none">
              Filter Movies By
            </option>
            <option value="date"> Release Date </option>
            <option value="rating"> Rating </option>
          </select>
      </div>

      <div className="w-4/5 mx-auto sm:w-full 2xl:w-4/5">
        <select
          className=" w-full px-3 py-1.5 border-2 border-white rounded-full font-Oxanium"
          onChange={handleSortChange}
        >
          <option defaultValue value="none">
            Sort Result By
          </option>
          <option value="atoz"> {"A -> Z (Alphabetical Order)"}</option>
          <option value="ztoa">{"Z -> A (Reverse Alphabetical Order)"}</option>
        </select>
      </div>

    </div>
  );
};
export default memo(FilterContainer);
