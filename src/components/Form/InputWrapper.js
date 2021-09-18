import React, { useEffect, useState } from 'react';
import Input from '../Input';
import { Controller } from 'react-hook-form';
export default function SelectWrapper({
  name,
  error,
  value: val,
  label,
  control,
  unregister,
  rules,
  isVisible = true,
  ...rest
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
        <Input
          error={error}
          placeholder={label}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
      name={name}
      defaultValue={val || ''}
      control={control}
      rules={rules}
    />
  ) : null;
}
