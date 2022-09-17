import {
  Box, InputAdornment, OutlinedInput, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxCheck from '../assets/checkboxCheck';
import CheckboxCircle from '../assets/checkboxCircle';
import { setFilter } from '../redux/reducer/features/filters/filtersSlice';
import { RootState } from '../redux/store';
import { IIngredients, IinputContent } from '../types';

interface ICheckToInput {
  id:IIngredients,
  label:string
}

function CheckToInput(props:ICheckToInput) {
  const { id, label } = props;
  const filters = useSelector((state: RootState) => state.filterStates);
  const identifyFilterByIndex = filters.findIndex((item) => (
    item.name === id));
  const defValue = filters[identifyFilterByIndex].value!;
  const [isCheck, setIsCheck] = useState(filters[identifyFilterByIndex].isActive);
  const [inputValue, setInputValue] = useState<string|number>(
    ((defValue! === undefined) || defValue! === 0) ? '' : defValue!,
  );

  const dispatch = useDispatch();

  const handleDispacht = (content:IinputContent) => {
    dispatch(setFilter({
      name: content.name,
      value: content.value,
      isActive: content.isActive,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleCheckChange = () => {
    if (isCheck) {
      setIsCheck(false);
      const content = {
        name: id,
        value: '',
        isActive: false,
      };
      handleDispacht(content);
    } else {
      setIsCheck(true);
      const content = {
        name: id,
        value: inputValue,
        isActive: true,
      };
      handleDispacht(content);
    }
  };
  const handleInputContent = () => {
    const content = {
      name: id,
      value: inputValue,
      isActive: true,
    };
    handleDispacht(content);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minWidth: 189,
        minHeight: 42,
        maxWidth: 189,
        maxHeight: 42,
        width: '50%',
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #dfe1e5',
        borderRadius: 16,
        // boxShadow: '0px 3px 8px 4px rgba(0, 0, 0, 0.05)',
        px: '10px',
      }}
    >
      <Box onClick={handleCheckChange}
        sx={{
          position: 'relative',
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          width: '10.6%',
          mr: '10px',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {isCheck ? <CheckboxCheck width='100%' height='100%' stroke='#E8871E'/> : null}
        </Box>
        <CheckboxCircle stroke='#204907' />
      </Box>
    <Box width='30.4%' display='flex' flexDirection='column' >
      <Typography align='center' lineHeight={1} fontSize={12} >
          { label }
      </Typography>
    </Box>
      <OutlinedInput
        id={id}
        disabled={!isCheck}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        endAdornment={<InputAdornment position="end">{(id === 'Calorias') ? 'Kcal' : 'g'}</InputAdornment>}
        value={inputValue}
        sx={{
          px: '5px',
          transition: 'background-color 0.1s',
          borderRadius: 16,
          backgroundColor: `${isCheck ? 'rgba(255, 255, 255, 0.5)' : '#B8B8B8'}`,
          height: '32px',
          ml: '5px',
        }}
        onKeyDown = {(e) => {
          if (e.key === 'Enter') {
            handleInputContent();
          }
        }}
        onBlur = {handleInputContent}
        onChange = {handleInputChange}
      />
    </Box>
  );
}
export default CheckToInput;
