import React from 'react';

const Input = ({
  adornment,
  variant = 'solid',
  size = null,
  type = 'text',
  focusColor = 'secondary',
  placeholder,
  disabled,
  error,
  ...rest
}) => {
  const darkMode = false;
  const labelColors = error
    ? 'bg-error-50 dark:bg-darkerror-300 text-darkerror-300 font-bold'
    : 'bg-white dark:bg-primary-200 text-neutrals-500 dark:text-darkprimary-700 border-1 border border-neutrals-100 font-bold dark:border-primary-300 dark:border-opacity-50';

  const inputBoxColors = error
    ? darkMode
      ? 'dark:bg-darkerror-300 dark:border-darkerror-300'
      : 'bg-error-100 border-error-100'
    : darkMode
    ? 'dark:bg-primary-200 dark:border-primary-200'
    : 'bg-white border-neutrals-100';

  const inputColors = error
    ? darkMode
      ? 'dark:placeholder-darkerror-800 dark:focus:placeholder-darkerror-300'
      : 'placeholder-error-800 focus:placeholder-error-100'
    : darkMode
    ? 'dark:placeholder-primary-500 dark:focus:placeholder-primary-200'
    : 'placeholder-neutrals-300 focus:placeholder-white';

  return (
    <div
      className={
        'relative border border-1  label-floating rounded-lg ' + inputBoxColors
      }>
      <input
        {...rest}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={
          'w-full px-7 py-5 bg-transparent font-bold dark:text-primary-800 text-neutrals-700 outline-none ' +
          inputColors
        }
      />
      {placeholder && (
        <label
          className={
            'input-label hidden absolute -top-3 pointer-events-none py-0.5 mb-0 rounded-md left-4 px-2 text-xs ' +
            labelColors
          }>
          {placeholder}
        </label>
      )}

      {adornment && (
        <div
          className={
            'absolute transform -translate-y-1/2 right-6 text-sm top-1/2 pointer-events-none rounded-md px-2 ' +
            (error
              ? 'bg-error-50 dark:bg-darkerror-400 font-bold'
              : 'dark:bg-primary-600 bg-info-300 text-white dark:text-primary-200 font-bold') +
            (disabled ? ' opacity-50' : '')
          }>
          {adornment}
        </div>
      )}
      {error && (
        <span className="absolute bottom-1 text-xs text-error-300 dark:text-error-50 left-7">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
