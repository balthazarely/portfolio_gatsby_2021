import React, { useState, useContext } from 'react';
import Switch from 'react-switch';
import { FaMoon, FaSun } from 'react-icons/fa';
import GlobalContext from '../../context/GlobalContext';

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false);
  const gContext = useContext(GlobalContext);

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <label>
      <Switch
        offColor="#82d88"
        onColor="#eeeeee"
        height={23}
        width={48}
        uncheckedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              color: 'orange',
              paddingRight: 2,
            }}
          >
            <FaMoon />
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              color: 'orange',
              paddingRight: 2,
            }}
          >
            <FaSun />
          </div>
        }
        onChange={() => {
          gContext.toggleDarkMode();
          handleChange();
        }}
        checked={checked}
      />
    </label>
  );
}
