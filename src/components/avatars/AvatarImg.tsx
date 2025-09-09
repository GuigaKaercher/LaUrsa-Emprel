import React from 'react';

export interface AvatarImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'SM' | 'MD' | 'Large' | 'XL';
  src: string;
  alt: string;
}

const AvatarImg = React.forwardRef<HTMLImageElement, AvatarImgProps>(
  ({ size = 'MD', src, alt, className = '', style, ...props }, ref) => {
    
    const getSizeStyles = () => {
      switch (size) {
        case 'SM':
          return {
            width: '48px',
            height: '48px',
          };
        case 'MD':
          return {
            width: '64px',
            height: '64px',
          };
        case 'Large':
          return {
            width: '88px',
            height: '88px',
          };
        case 'XL':
          return {
            width: '120px',
            height: '120px',
          };
        default:
          return {
            width: '64px',
            height: '64px',
          };
      }
    };

    const avatarStyle = {
      ...getSizeStyles(),
      borderRadius: '50%',
      border: '3px solid #1474FF',
      objectFit: 'cover' as const,
      display: 'block',
      ...style
    };
    
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        style={avatarStyle}
        className={className}
        {...props}
      />
    );
  }
);

AvatarImg.displayName = "AvatarImg";

export { AvatarImg };
export default AvatarImg;