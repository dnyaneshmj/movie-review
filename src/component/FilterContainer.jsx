const FilterContainer = ({ handleFilterChange, handleSortChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        {/* Release date and Rating */}
        <div className="grid">
          <select
            className=" w-full px-3 py-1.5 border-2 border-white rounded-full"
            onChange={handleFilterChange}
          >
            <option defaultValue value="none">
              Filter Movies By
            </option>
            <option value="date"> Release Date </option>
            <option value="rating"> Rating </option>
          </select>
        </div>
      </div>

      <div>
        <select
          className=" w-full px-3 py-1.5 border-2 border-white rounded-full"
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
export default FilterContainer;
