import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value.trim()));
  };

  return (
    <>
      <label>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={changeFilter}
        ></InputFilter>
      </label>
    </>
  );
};
