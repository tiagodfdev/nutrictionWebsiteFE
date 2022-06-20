import { createSlice } from '@reduxjs/toolkit';
import { IactionInput, IinputContent } from '../../../../types';

const initialState:IinputContent[] = [
  {
    name: 'ingredient',
    value: 'proteína',
    isActive: undefined,
  },
  {
    name: 'calorias',
    value: 0,
    isActive: false,
  },
  {
    name: 'gorduras',
    value: 0,
    isActive: false,
  },
];

// eslint-disable-next-line import/prefer-default-export
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action:IactionInput) {
      console.log('dentro do reducer');
      const { name, value, isActive } = action.payload;
      const indexOfFilter = state.map((filter) => filter.name)
        .indexOf(name);
      return (
        state.fill(
          {
            name,
            value,
            isActive,
          },
          indexOfFilter,
          indexOfFilter + 1,
        )
      );
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
