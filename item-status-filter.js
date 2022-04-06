import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = (onFilterAll, onFilterDone, onFilterActive) => {
  return (
    <div className="btn-group">
      <button
          onClick={onFilterAll}
          type="button"
          className="btn btn-info"
      >
          All
      </button>

      <button
          onClick={onFilterActive}
          type="button"
          className="btn btn-outline-secondary"
      >
          Active
      </button>

      <button
          onClick={onFilterDone}
          type="button"
          className="btn btn-outline-secondary"
      >
          Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
