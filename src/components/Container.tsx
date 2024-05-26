import React, { Fragment } from 'react';

export interface ContainerProps {
  children: JSX.Element | JSX.Element[] | undefined;
}

function Container(props: ContainerProps) {
  return (
    <div
      className="bg-white m-[20px] p-[20px] rounded-lg inline-block outline outline-[2px] outline-[#ababab]"
      id="container"
    >
      {props.children}
    </div>
  );
}

export default Container;
