import React, { useEffect, useState } from 'react';
import Container from '../Container';
import { useScroll } from '../../hooks/useScroll';
import { PageContainerStyle } from '../../utility/styles';
import useIsMobile from '../../hooks/useMobile';

export function ContactPopup() {
  const scrollAmount = useScroll();
  const useMobile = useIsMobile();

  const renderPopup = () => (
    <div className="fixed bottom-0 left-0 right-0 z-[2] w-full flex justify-center pointer-events-none">
      <div className={`${!useMobile ? PageContainerStyle : ''} w-full`}>
        <ContactSection overrideContainer={true} />
      </div>
    </div>
  );

  const renderCondition = () => {
    if (scrollAmount > 10 && scrollAmount < 98) {
      return <>{renderPopup()}</>;
    } else {
      return null;
    }
  };

  return <>{renderCondition()}</>;
}

export interface ContactSectionProps {
  overrideContainer?: boolean;
}
export function ContactSection(props: ContactSectionProps) {
  const isMobile = useIsMobile();

  const renderFullBanner = isMobile && props.overrideContainer;

  const contents = (
    <>
      <h3>Contact me:</h3>
      <div>
        <button
          onClick={() => {
            window.location.href = 'tel:+64211049888';
          }}
        >
          Phone
        </button>
        <button
          onClick={() => {
            window.location.href = 'mailto:taurajgreig@outlook.com';
          }}
        >
          Email
        </button>
      </div>
    </>
  );

  return (
    <>
      {!renderFullBanner && (
        <Container expand={true} className="">
          <div className="w-full h-full flex flex-row justify-between pointer-events-auto">
            {contents}
          </div>
        </Container>
      )}
      {renderFullBanner && (
        <div className="w-full h-full flex flex-row justify-between bg-white p-2 pb-6 pointer-events-auto">
          {contents}
        </div>
      )}
    </>
  );
}
