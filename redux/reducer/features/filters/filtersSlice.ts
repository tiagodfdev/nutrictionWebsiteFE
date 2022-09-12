import { createSlice } from '@reduxjs/toolkit';
import { IactionInput, IinputContent } from '../../../../types';
import { DEFAULT_INGREDIENT } from '../../../../utils/consts';

const initialState:IinputContent[] = [
  {
    name: 'ingredient',
    value: DEFAULT_INGREDIENT,
    isActive: undefined,
  },
  {
    name: 'Calorias',
    value: 0,
    isActive: false,
  },
  {
    name: 'Lipídios Totais',
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
