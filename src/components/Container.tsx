import React from 'react';

export interface ContainerProps {
  children?: React.ReactNode;
  expand?: boolean;
  className?: string;
}

function Container(props: ContainerProps) {
  return (
    <div
      className={`${props.className !== undefined ? props.className : ''} bg-white m-[20px] p-[20px] rounded-lg inline-block outline outline-[2px] outline-[#ababab] ${
        props.expand
          ? 'w-full h-full max-w-[calc(100%-40px)] max-h-[calc(100%-40px)]'
          : ''
      }`}
      id="container"
      style={{
        boxSizing: 'border-box',
      }}
    >
      {props.children}
    </div>
  );
}

export default Container;
