import React from 'react';

export interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ className = '', loading = false, disabled, children, style, ...props }, ref) => {
    const isDisabled = disabled || loading;
    
    const getButtonStyle = () => {
      const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: '500',
        fontFamily: 'DM Sans, sans-serif',
        height: '48px',
        width: '344px',
        padding: '0 24px',
        border: '2px solid transparent',
        gap: '10px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        ...style
      };

      if (isDisabled && !loading) {
        return {
          ...baseStyle,
          backgroundColor: '#DBDBDB',
          color: '#6B7280',
        };
      }

      if (loading) {
        return {
          ...baseStyle,
          backgroundColor: '#0A3A80',
          color: 'white',
        };
      }

      return {
        ...baseStyle,
        backgroundColor: '#1474FF',
        color: 'white'
      };
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.backgroundColor = '#4F97FF';
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.backgroundColor = '#1474FF';
      }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.backgroundColor = '#0F57BF';
      }
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.backgroundColor = '#4F97FF';
      }
    };
    
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        style={getButtonStyle()}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      >
        {loading ? (
          <div
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid white',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}
          />
        ) : (
          children
        )}
      </button>
    );
  }
);

ButtonPrimary.displayName = "ButtonPrimary";

export { ButtonPrimary };
export default ButtonPrimary;