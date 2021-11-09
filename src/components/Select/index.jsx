import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import SelectWrapper from './Select.styles';

const initialOptions = [
  { label: '24 hours', value: '24h', active: true },
  { label: '1 week', value: '7d', active: false },
  { label: '1 month', value: '30d', active: false },
  { label: '1 year', value: '1y', active: false },
  { label: '5 years', value: '5y', active: false },
];

const Select = ({ timeFrame, setTimeFrame }) => {
  const [openMenu, setOpenMenu] = useState();
  const [options, setOptions] = useState(initialOptions);

  const handleSelectOption = (option, index) => {
    if (option.value === timeFrame) {
      setOpenMenu(false);
      return;
    }

    setTimeFrame(option.value);
    let newOptions = [...options];
    newOptions = newOptions.map((o) => {
      o.active = false;
      return o;
    });
    newOptions[index].active = true;
    setOptions(newOptions);
    setOpenMenu(false);
  };

  return (
    <SelectWrapper>
      <div className='select' onClick={() => setOpenMenu(!openMenu)}>
        <span className='value'>{timeFrame}</span>
        {!openMenu ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>
      <SelectWrapper.Dropdown open={openMenu}>
        <ul>
          {options.map((option, index) => (
            <li
              className={option.active ? 'active' : ''}
              key={index}
              onClick={() => handleSelectOption(option, index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </SelectWrapper.Dropdown>
    </SelectWrapper>
  );
};

export default Select;
