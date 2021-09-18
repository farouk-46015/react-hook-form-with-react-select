import React, { useEffect, useState } from 'react';
import Select from '../Select';
import { Controller } from 'react-hook-form';
export default function SelectWrapper({
  options,
  name,
  error,
  value: val,
  label,
  control,
  unregister,
  rules,
  isVisible = true,
}) {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setVisible((prevValue) => {
      prevValue !== isVisible && !isVisible && unregister(name);
      return isVisible;
    });
  }, [isVisible]);

  return visible ? (
    <Controller
      render={({ field: { onChange, value } }) => (
        <Select
          value={value}
          label={label}
          placeholder={label}
          error={error}
          options={options}
          onChange={onChange}
        />
      )}
      name={name}
      defaultValue={val}
      control={control}
      rules={rules}
    />
  ) : null;
}
