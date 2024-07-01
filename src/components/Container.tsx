import React from 'react';

export type ContainerProps =
  | {
      children?: React.ReactNode;
      expand?: boolean;
      className?: string;
    }
  | any;

function Container(props: ContainerProps) {
  const remainingProps = { ...props };
  delete remainingProps.children;
  delete remainingProps.expand;
  delete remainingProps.className;

  return (
    <div
      className={`m-[20px] ${props.className !== undefined ? props.className : ''} bg-white p-[20px] rounded-lg inline-block outline outline-[2px] outline-[#ababab] ${
        props.expand
          ? 'w-full h-full max-w-[calc(100%-40px)] max-h-[calc(100%-40px)]'
          : ''
      }`}
      id="container"
      // style={{
      //   boxSizing: 'border-box',
      // }}
      {...remainingProps}
    >
      {props.children}
    </div>
  );
}

export default Container;
