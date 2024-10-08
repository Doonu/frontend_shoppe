import React, { FC, SVGProps } from 'react';

interface BurgerMenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ color, ...props }) => (
  <svg
    width="21"
    height="17"
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.0545 2.87494L19.7976 2.87494C20.1425 2.87494 20.4222 2.45491 20.422 1.93747C20.4218 1.41995 20.1418 1 19.7969 1L1.05377 1C0.708884 1 0.429179 1.42003 0.42938 1.93747C0.429581 2.45491 0.709664 2.87494 1.0545 2.87494Z"
      fill={color}
      stroke="white"
      strokeWidth="0.2"
    />
    <path
      d="M19.7972 7.5625L1.05408 7.5625C0.709189 7.5625 0.429484 7.98253 0.429685 8.49997C0.429886 9.0174 0.709969 9.43743 1.05481 9.43743L19.7979 9.43743C20.1428 9.43743 20.4225 9.01741 20.4223 8.49997C20.4221 7.98253 20.1421 7.5625 19.7972 7.5625Z"
      fill={color}
      stroke="white"
      strokeWidth="0.2"
    />
    <path
      d="M19.797 14.125L7.30175 14.125C6.95687 14.125 6.67716 14.545 6.67735 15.0625C6.67754 15.58 6.95761 15.9999 7.30244 15.9999L19.7977 15.9999C20.1426 15.9999 20.4223 15.5799 20.4221 15.0625C20.4219 14.545 20.1419 14.125 19.797 14.125Z"
      fill={color}
      stroke="white"
      strokeWidth="0.2"
    />
  </svg>
);
