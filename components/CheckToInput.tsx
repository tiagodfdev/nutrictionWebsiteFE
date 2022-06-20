import {
  Box, InputAdornment, OutlinedInput, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CheckboxCheck from '../assets/checkboxCheck';
import CheckboxCircle from '../assets/checkboxCircle';
import { setFilter } from '../redux/reducer/features/filters/filtersSlice';
import { IinputContent } from '../types';

interface ICheckToInput {
  id:string,
  label:string
}

function CheckToInput(props:ICheckToInput) {
  const [isCheck, setIsCheck] = useState(false);
  const [inputValue, setInputValue] = useState<string|number>('');
  const { id, label } = props;

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
        isActive: isCheck,
      };
      handleDispacht(content);
    } else {
      setIsCheck(true);
      const content = {
        name: id,
        value: inputValue,
        isActive: isCheck,
      };
      handleDispacht(content);
    }
  };
  const handleInputContent = () => {
    const content = {
      name: id,
      value: inputValue,
      isActive: isCheck,
    };
    handleDispacht(content);
    console.log(`onBlur dispacht ${inputValue}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minWidth: 189,
        minHeight: 42,
        maxWidth: 297,
        maxHeight: 59,
        width: '50%',
        background: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 16,
        boxShadow: '0px 3px 8px 4px rgba(0, 0, 0, 0.05)',
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
        endAdornment={<InputAdornment position="end">g</InputAdornment>}
        value={inputValue}
        sx={{
          px: '5px',
          transition: 'background-color 0.1s',
          borderRadius: 16,
          backgroundColor: `${isCheck ? 'rgba(255, 255, 255, 0.5)' : '#B8B8B8'}`,
          height: '32px',
          ml: '5px',
        }}
        onBlur = {handleInputContent}
        onChange = {handleInputChange}
      />
    </Box>
  );
}
export default CheckToInput;
