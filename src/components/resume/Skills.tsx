import React from 'react';
import Container from '../Container';
import { useNavigate } from 'react-router-dom';
import { userSkills } from '../../generated/skills.generated';
import useIsMobile from '../../hooks/useMobile';
import { PageContainerStyle } from '../../utility/styles';

// TODO: create entries for skills, describing each of your skills and how you used it in the past

export interface SkillEntry {
  slug: string;
  name: string;
  overview: string;
}

const skillBlockStyle =
  'outline outline-gray-200 m-1 p-1 px-4 rounded-lg cursor-pointer hover:bg-gray-200 active:bg-gray-300';

export function ResumeSkillsContainer() {
  const navigate = useNavigate();
  return (
    <>
      <Container expand={true}>
        <h1>Skills</h1>
        <div className="h-4" />
        <div className="flex justify-center flex-wrap">
          {userSkills.map((s, i) => (
            <span
              key={i}
              className={skillBlockStyle}
              onClick={() => {
                const currentParams = new URLSearchParams(
                  window.location.search,
                );
                currentParams.set('skill', s.slug);
                navigate(
                  `${window.location.pathname}?${currentParams.toString()}`,
                );
              }}
            >
              {s.name}
            </span>
          ))}
        </div>
      </Container>
    </>
  );
}

/*
    <div className="fixed inset-0 z-[-1]">
      <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"></div>
    </div>
*/

export interface ResumeSkillPopupContainerProps {
  skill?: SkillEntry;
}

export function ResumeSkillPopupContainer(
  props: ResumeSkillPopupContainerProps,
) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  if (props.skill === undefined) {
    console.log(props.skill);
    console.log('aborting');
    return <></>;
  }

  const closeSkillPopup = () => {
    console.log('Delete skill');
    const params = new URLSearchParams(window.location.search);
    params.delete('skill');
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    navigate(newUrl);
  };

  return (
    <div className="fixed inset-0 z-[4]">
      <div className="fixed w-full h-full bg-gray-800 opacity-70"></div>
      <div
        className="fixed w-full h-full flex justify-center items-center cursor-pointer"
        onClick={() => {
          closeSkillPopup();
        }}
      >
        <div className={!isMobile ? PageContainerStyle : ''}>
          <Container
            className="cursor-default px-16 py-4"
            onClick={(e: unknown) => (e as Event).stopPropagation()}
          >
            <h3>
              <strong>{props.skill.name}</strong>
            </h3>
            <p>{props.skill.overview}</p>
            <br />
            <button
              onClick={() => {
                closeSkillPopup();
              }}
            >
              Close
            </button>
          </Container>
        </div>
      </div>
    </div>
  );
}
