import React from 'react';
import useIsMobile from '../hooks/useMobile';

export type ContainerProps =
  | {
      children?: React.ReactNode;
      expand?: boolean;
      className?: string;
    }
  | any;

// props.expand
// ? 'w-full h-full max-w-[calc(100%-40px)] max-h-[calc(100%-40px)]'
// : ''

function Container(props: ContainerProps) {
  const remainingProps = { ...props };
  delete remainingProps.children;
  delete remainingProps.expand;
  delete remainingProps.className;

  const contents = (
    <div
      className={`flex-grow m-2 my-4 md:m-[20px] ${props.className !== undefined ? props.className : ''} bg-white md:p-[20px] p-4 rounded-lg inline-block outline outline-[2px] outline-[#ababab]`}
      id="container"
      {...remainingProps}
    >
      {props.children}
    </div>
  );

  return (
    <>
      {props.expand && (
        <div className="w-full h-full flex flex-row justify-center">
          {contents}
        </div>
      )}
      {!props.expand && contents}
    </>
  );
}

export default Container;
