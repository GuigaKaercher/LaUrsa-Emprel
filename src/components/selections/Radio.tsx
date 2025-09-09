import React, { useState } from 'react';

interface RadioProps {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  name?: string;
  label?: string;
}

const Radio: React.FC<RadioProps> = ({
  value = "",
  checked = false,
  disabled = false,
  onChange,
  name,
  label
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = () => {
    if (!disabled && onChange && value) {
      onChange(value);
    }
  };

  const getRadioStyles = () => {
    let borderColor = '#464E5C';
    let backgroundColor = '#FFFFFF';
    let pointColor = '#F2F5F7';

    if (disabled) {
      borderColor = '#DBDBDB';
      backgroundColor = '#FFFFFF';
      if (checked) {
        backgroundColor = '#DBDBDB';
        pointColor = '#898B8F';
      }
    } else if (checked) {
      borderColor = '#1474FF';
      if (isHovered) {
        backgroundColor = '#0F57BF'; // Darker blue for hover
      } else {
        backgroundColor = '#1474FF';
      }
      pointColor = '#F2F5F7';
    } else if (isHovered && !disabled) {
      borderColor = '#1B2029';
    }

    return {
      borderColor,
      backgroundColor,
      pointColor
    };
  };

  const styles = getRadioStyles();

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
          borderRadius: '50%',
          backgroundColor: styles.backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        {checked && (
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: styles.pointColor,
              transition: 'all 0.2s ease',
            }}
          />
        )}
      </div>
      
      <input
        type="radio"
        value={value}
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

export default Radio;