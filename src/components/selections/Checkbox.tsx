import React, { useState } from 'react';

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  onChange,
  label,
  name
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const getCheckboxStyles = () => {
    let borderColor = '#464E5C';
    let backgroundColor = '#FFFFFF';
    let checkColor = '#FFFFFF';

    if (disabled) {
      borderColor = '#DBDBDB';
      backgroundColor = '#DBDBDB';
      if (checked) {
        checkColor = '#898B8F';
      }
    } else if (checked) {
      backgroundColor = '#1474FF';
      borderColor = '#1474FF';
      if (isHovered) {
        backgroundColor = '#0F57BF'; // Darker blue for hover
        borderColor = '#0F57BF';
      }
      checkColor = '#FFFFFF';
    } else if (isHovered && !disabled) {
      borderColor = '#1B2029';
    }

    return {
      borderColor,
      backgroundColor,
      checkColor
    };
  };

  const styles = getCheckboxStyles();

  return (
    <label 
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: disabled ? 'default' : 'pointer',
        gap: '8px',
        userSelect: 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '16px',
          height: '16px',
          border: `1px solid ${styles.borderColor}`,
          borderRadius: '2px',
          backgroundColor: styles.backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        {checked && (
          <svg
            width="10.57"
            height="7.37"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: 'all 0.2s ease',
            }}
          >
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke={styles.checkColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        style={{
          display: 'none'
        }}
      />
      
      {label && (
        <span
          style={{
            fontSize: '14px',
            color: disabled ? '#898B8F' : '#464E5C',
            fontFamily: 'inherit',
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;