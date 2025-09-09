import React from 'react';

export interface ButtonSecondaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const ButtonSecondary = React.forwardRef<HTMLButtonElement, ButtonSecondaryProps>(
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
        gap: '10px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        backgroundColor: 'transparent',
        ...style
      };

      if (isDisabled && !loading) {
        return {
          ...baseStyle,
          border: '2px solid #DBDBDB',
          color: '#DBDBDB',
        };
      }

      if (loading) {
        return {
          ...baseStyle,
          border: '2px solid #0A3A80',
          color: '#0A3A80',
        };
      }

      return {
        ...baseStyle,
        border: '2px solid #1474FF',
        color: '#1474FF'
      };
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.borderColor = '#4F97FF';
        e.currentTarget.style.color = '#4F97FF';
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.borderColor = '#1474FF';
        e.currentTarget.style.color = '#1474FF';
      }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.borderColor = '#0F57BF';
        e.currentTarget.style.color = '#0F57BF';
      }
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.borderColor = '#4F97FF';
        e.currentTarget.style.color = '#4F97FF';
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
              border: '2px solid #0A3A80',
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

ButtonSecondary.displayName = "ButtonSecondary";

export { ButtonSecondary };
export default ButtonSecondary;