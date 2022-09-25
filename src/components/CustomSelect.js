import React, { useState, useRef, useEffect, useCallback } from 'react';

const CustomSelect = ({
  label,
  data,
  value,
  name,
  onChange,
  error,
  defaultOptionLabel,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState(
    value !== '' ? data.indexOf(value) : null,
  );
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState(data);
  return <div></div>;
};

export default CustomSelect;
