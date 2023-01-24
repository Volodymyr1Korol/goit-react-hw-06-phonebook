import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/FilterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <div className={css.filterSection}>
      <input
        className={css.inputField}
        onChange={handleFilterChange}
        placeholder="Filter Contacts"
      />
    </div>
  );
};

