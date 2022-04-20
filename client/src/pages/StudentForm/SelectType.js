import React from "react";
import Select from 'react-select';

export default ({ onChange, options, value, className,error }) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
   
      <Select
        value={defaultValue(options, value)}
      
        onChange={(value) => {
          onChange(value);
          error={error}
        }}
        options={options}
      
      />
  
  );
};
