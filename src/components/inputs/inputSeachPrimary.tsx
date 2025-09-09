import React from 'react';

export interface InputSearchPrimaryProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}

const InputSearchPrimary = React.forwardRef<HTMLInputElement, InputSearchPrimaryProps>(
  ({ className = '', disabled = false, style, ...props }, ref) => {
    const getContainerStyle = () => {
      return {
        position: 'relative' as const,
        display: 'inline-flex',
        alignItems: 'center',
        width: '540px',
        height: '56px',
        border: '2px solid #DBDBDB',
        borderRadius: '8px',
        backgroundColor: 'white',
        overflow: 'hidden',
        transition: 'all 0.2s ease-in-out',
        ...style
      };
    };

    const getInputStyle = () => {
      return {
        flex: 1,
        height: '100%',
        padding: '0 16px',
        border: 'none',
        outline: 'none',
        fontSize: '16px',
        fontFamily: 'DM Sans, sans-serif',
        backgroundColor: 'transparent',
        color: disabled ? '#6B7280' : '#1B2029',
        cursor: disabled ? 'not-allowed' : 'text'
      };
    };
    

    const getSearchButtonStyle = () => {
      return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '56px',
        height: '56px',
        backgroundColor: disabled ? '#DBDBDB' : '#1474FF',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease-in-out'
      };
    };

    const handleContainerMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled) {
        e.currentTarget.style.borderColor = '#1B2029';
      }
    };

    const handleContainerMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && document.activeElement !== e.currentTarget.querySelector('input')) {
        e.currentTarget.style.borderColor = '#DBDBDB';
      }
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled) {
        const container = e.currentTarget.parentElement;
        if (container) {
          container.style.borderColor = '#1474FF';
        }
      }
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled) {
        const container = e.currentTarget.parentElement;
        if (container) {
          container.style.borderColor = '#DBDBDB';
        }
      }
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    const SearchIcon = () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    return (
      <div
        style={getContainerStyle()}
        className={className}
        onMouseEnter={handleContainerMouseEnter}
        onMouseLeave={handleContainerMouseLeave}
      >
        <input
          ref={ref}
          disabled={disabled}
          style={getInputStyle()}
          placeholder="Que serviço você procura?"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
        />
        <button
          type="button"
          disabled={disabled}
          style={getSearchButtonStyle()}
          onClick={() => {}}
        >
          <SearchIcon />
        </button>
      </div>
    );
  }
);

InputSearchPrimary.displayName = "InputSearchPrimary";

export { InputSearchPrimary };
export default InputSearchPrimary;