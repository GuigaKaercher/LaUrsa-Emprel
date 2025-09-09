import React from 'react';

export interface InputSearchSecondaryProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}

const InputSearchSecondary = React.forwardRef<HTMLInputElement, InputSearchSecondaryProps>(
  ({ className = '', disabled = false, style, ...props }, ref) => {
    const getContainerStyle = () => {
      return {
        position: 'relative' as const,
        display: 'inline-flex',
        alignItems: 'center',
        width: '540px',
        height: '48px',
        border: '1px solid #464E5C',
        borderRadius: '8px',
        backgroundColor: disabled ? '#F2F5F7' : 'white',
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
        color: disabled ? '#898B8F' : '#1B2029',
        cursor: disabled ? 'not-allowed' : 'text'
      };
    };

    const getSearchIconStyle = () => {
      return {
        position: 'absolute' as const,
        right: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '20px',
        height: '20px',
        pointerEvents: 'none' as const
      };
    };

    const handleContainerMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled) {
        e.currentTarget.style.borderColor = '#1B2029';
      }
    };

    const handleContainerMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && document.activeElement !== e.currentTarget.querySelector('input')) {
        e.currentTarget.style.borderColor = '#464E5C';
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
          container.style.borderColor = '#464E5C';
        }
      }
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    const SearchIcon = () => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
          stroke={disabled ? '#898B8F' : '#464E5C'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    return (
      <div
        style={{
          ...getContainerStyle(),
          borderColor: disabled ? '#DBDBDB' : '#464E5C'
        }}
        className={className}
        onMouseEnter={handleContainerMouseEnter}
        onMouseLeave={handleContainerMouseLeave}
      >
        <input
          ref={ref}
          disabled={disabled}
          style={getInputStyle()}
          placeholder="Pesquisar..."
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
        />
        <div style={getSearchIconStyle()}>
          <SearchIcon />
        </div>
      </div>
    );
  }
);

InputSearchSecondary.displayName = "InputSearchSecondary";

export { InputSearchSecondary };
export default InputSearchSecondary;