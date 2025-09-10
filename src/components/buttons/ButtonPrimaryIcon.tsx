import React from 'react';

export interface ButtonPrimaryIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const ButtonPrimaryIcon = React.forwardRef<HTMLButtonElement, ButtonPrimaryIconProps>(
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

    // icone de seta (arrow right)
    const ArrowIcon = () => (
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none"
        style={{ 
          flexShrink: 0,
          padding: '6px'
        }}
      >
        <path 
          d="M10 16L22 16M18 12L22 16L18 20" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    );
    
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
          <>
            {children}
            <ArrowIcon />
          </>
        )}
      </button>
    );
  }
);

ButtonPrimaryIcon.displayName = "ButtonPrimaryIcon";

export { ButtonPrimaryIcon };
export default ButtonPrimaryIcon;