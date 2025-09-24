import React, { useState } from 'react';
export interface InputAreaProps {
  primary?: boolean;
  label?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
  error?: boolean;
  success?: boolean;
  warning?: boolean;


}


export const InputArea = ({ primary = false, label, id ='input-area', style, error, success, warning, disabled, ...props }: InputAreaProps) => {


  const [isHovered, setIsHovered] = useState(false);

  const getContainerStyle = () => ({
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
    fontFamily: 'Inter, Arial, sans-serif',
    width: 'fit-content',
    ...style,
  });

const getTextareaStyle = () => {
    let borderColor = '#C8CDD1';
    if (error) borderColor = '#F04438';
    else if (success) borderColor = '#4CAF50';
    else if (warning) borderColor = 'gold';
    else if (primary) borderColor = '#C8CDD1';
   if (isHovered && !error && !success && !warning && !disabled) borderColor = '#A3A8AF';
   if(isHovered && primary && !disabled) borderColor = '#2563eb';

    return {
      width: '350px',
      minHeight: '190px',
      padding: '12px 8px',
      fontSize: '14px',
      borderRadius: '6px',
      border: `1.5px solid ${borderColor}`,
      background: disabled ? '#F4F5F7' : '#fff',
      color: disabled ? '#A3A8AF' : '#222',
      resize: 'vertical' as const,
      transition: 'border-color 0.2s',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'text',
      
    };
  };


  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#2563eb';
  }



  

    const mode = primary ? 'primary' : 'secondary';
  return (
    <div className={`input-area-container input-area-${mode}`} style={getContainerStyle()}>
        <label className="input-area-label ">Label:</label>
      <textarea 
      disabled={disabled}
      onFocus={handleFocus}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={id}
      style={getTextareaStyle()}
      placeholder= {label || "Placeholder"} {...props} />
      
    </div>
  );
}