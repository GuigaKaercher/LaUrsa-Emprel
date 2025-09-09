import React from 'react';

export interface ButtonSecondaryIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const ButtonSecondaryIcon = React.forwardRef<HTMLButtonElement, ButtonSecondaryIconProps>(
  ({ className = '', loading = false, disabled, children, style, ...props }, ref) => {
    const isDisabled = disabled || loading;
    
    const getButtonStyle = () => {
      const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
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

    const getIconColor = () => {
      if (isDisabled && !loading) {
        return '#898B8F';
      }
      if (loading) {
        return '#0A3A80';
      }
      return '#1474FF';
    };

    const [iconColor, setIconColor] = React.useState(getIconColor());

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.borderColor = '#4F97FF';
        e.currentTarget.style.color = '#4F97FF';
        setIconColor('#4F97FF');
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.borderColor = '#1474FF';
        e.currentTarget.style.color = '#1474FF';
        setIconColor('#1474FF');
      }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.borderColor = '#0F57BF';
        e.currentTarget.style.color = '#0F57BF';
        setIconColor('#0F57BF');
      }
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled && !loading) {
        e.currentTarget.style.borderColor = '#4F97FF';
        e.currentTarget.style.color = '#4F97FF';
        setIconColor('#4F97FF');
      }
    };

    React.useEffect(() => {
      setIconColor(getIconColor());
    }, [disabled, loading]);
    
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
          <>
            <span>{children}</span>
            <div style={{ 
              position: 'absolute',
              right: '24px',
              padding: '8px'
            }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke={iconColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </>
        )}
      </button>
    );
  }
);

ButtonSecondaryIcon.displayName = "ButtonSecondaryIcon";

export { ButtonSecondaryIcon };
export default ButtonSecondaryIcon;