import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const BaseButton = ({ children, className, ...props }: IProps) => {
  return (
    <button
      {...props}
      className={`${className} flex items-center min-w-max justify-center bg-cyan-400 text-white w-20 p-1 rounded-sm disabled:bg-cyan-100`}
    >
      {children}
    </button>
  );
};