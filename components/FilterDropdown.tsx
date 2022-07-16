import * as React from 'react';
import {
  Box, FormControl, MenuItem,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { IinputContent } from '../types';
import { setFilter } from '../redux/reducer/features/filters/filtersSlice';

interface IProps {
  items:string[]
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};
const SelectDisplayProps = {
  style: {
    padding: 0,
    paddingLeft: 14,
    border: 0,
  },
};

export default function FilterDropdown(props:IProps) {
  const { items } = props;
  const [ingredient, setIngredient] = React.useState('');

  const dispatch = useDispatch();

  const handleDispacht = (content:IinputContent) => {
    dispatch(setFilter({
      name: content.name,
      value: content.value,
    }));
  };

  const handleInputContent = (ingredientInput:string) => {
    const content = {
      name: 'ingredient',
      value: ingredientInput,
    };
    setIngredient(ingredientInput);
    handleDispacht(content);
    console.log(`onBlur dispacht ${ingredientInput}`);
  };

  const handleChange = (event: SelectChangeEvent) => {
    handleInputContent(event.target.value);
  };

  return (
    <Box mt={1}>
       <FormControl>
          <Select
            value={ingredient}
            onChange={handleChange}
            displayEmpty
            inputProps={{
              'aria-label': 'Without label',
            }}
            SelectDisplayProps={SelectDisplayProps}
            MenuProps={MenuProps}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              minWidth: 189,
              minHeight: 42,
              maxWidth: 297,
              maxHeight: 59,
              width: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 16,
              border: '1px solid #dfe1e5',
              fontSize: 12,
              lineHeight: 1,
              // boxShadow: '0px 3px 8px 4px rgba(0, 0, 0, 0.05)',
              p: 0,
              '& .MuiOutlinedInput-notchedOutline': {
                border: 0,
              },
            }}
          >
            <MenuItem
              value=""
            >
              <p>Selecione o Nutriente</p>
            </MenuItem>
            {
              items.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                >
                <p>
                  {item}
                </p>
                </MenuItem>
              ))
            }
          </Select>
      </FormControl>
    </Box>
  );
}
