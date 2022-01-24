import ReactSelect from 'react-select';

const Select = ({ name, isMulti = false, options, onChange }) => {
  const onSelectChange = currentSelection => {
    if (isMulti) {
      const selectedValues = currentSelection;
      onChange(selectedValues.map(({ value }) => value) || []);
    } else {
      const selectedValue = currentSelection;
      onChange(selectedValue?.value);
    }
  };

  return (
    <ReactSelect
      classNamePrefix={`${name}-select`}
      isMulti={isMulti}
      name={name}
      options={options}
      styles={{
        placeholder: styles => ({
          ...styles,
          textAlign: 'left',
        }),
      }}
      onChange={onSelectChange}
    />
  );
}

export default Select;
