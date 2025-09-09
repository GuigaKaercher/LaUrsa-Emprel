import React, { useState } from 'react';
import iconFilter from '../../assets/icon.png';

interface InputFilterProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  onFilterClick?: () => void;
}

const InputFilter: React.FC<InputFilterProps> = ({
  placeholder = "Pesquisar...",
  value = "",
  onChange,
  disabled = false,
  onFilterClick
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const getStyles = () => {
    let borderColor = '#464E5C';
    let backgroundColor = '#FFFFFF';
    
    if (disabled) {
      borderColor = '#DBDBDB';
      backgroundColor = '#F2F5F7';
    } else if (isFocused) {
      borderColor = '#1474FF';
    } else if (isHovered) {
      borderColor = '#1B2029';
    }

    return {
      borderColor,
      backgroundColor
    };
  };

  const styles = getStyles();

  return (
    <div 
      style={{
        position: 'relative',
        width: '306px',
        height: '48px',
      }}
    >
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '100%',
          height: '100%',
          border: `1px solid ${styles.borderColor}`,
          borderRadius: '8px',
          backgroundColor: styles.backgroundColor,
          paddingLeft: '40px',
          paddingRight: '40px',
          fontSize: '14px',
          color: disabled ? '#898B8F' : '#464E5C',
          outline: 'none',
          fontFamily: 'inherit',
          boxSizing: 'border-box',
        }}
      />
      
      {/* Search Icon */}
      <div
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke={disabled ? "#898B8F" : "#898B8F"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Filter Icon */}
      <div
        onClick={disabled ? undefined : onFilterClick}
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: disabled ? 'default' : 'pointer',
          filter: disabled ? 'grayscale(100%) opacity(0.5)' : 'none',
        }}
      >
        <img
          src={iconFilter}
          alt="Filter"
          width="24"
          height="24"
          style={{
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};

export default InputFilter;