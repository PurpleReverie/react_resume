import React from 'react';
import Container from '../Container';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utility/date';
import { ProjectEntryData } from '../../types/projectTypes';
import ReactMarkdown from 'react-markdown';
import useFetch from 'react-fetch-hook';
import { getProjectPostURL } from '../../utility/generatedContent';
import useIsMobile from '../../hooks/useMobile';
import { format } from 'path';

export interface ProjectMainResumeEntryProps {
  entry: ProjectEntryData;
}

export function ProjectEntry(props: ProjectMainResumeEntryProps) {
  const navigate = useNavigate();

  const formatDate = (dateNumber: number) => {
    const date = new Date(dateNumber);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' }); // Use 'short' for abbreviated month name
    const formattedDate = `${year} ${month}`;

    return formattedDate;
  };

  return (
    <Container
      className="m-[8px] rounded-md hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
      expand={true}
      onClick={() => {
        navigate(`/project/${props.entry.slug}`);
      }}
    >
      <h3>
        <strong>{props.entry.title}</strong>
      </h3>
      <p>
        <strong>
          {formatDate(props.entry.startDate)} -{' '}
          {formatDate(props.entry.endDate)}
        </strong>
      </p>
      <p>{props.entry.blurb}</p>
      <p>
        {props.entry.skills.map((s, i) => (
          <small key={i}>
            <i>{`${s} `}</i>
          </small>
        ))}
      </p>
      <p>{props.entry.company}</p>
    </Container>
  );
}

export interface ProjectMainResumeContainerProps {
  entrys: ProjectEntryData[];
}

export function ProjectMainResumeContainer(
  props: ProjectMainResumeContainerProps,
) {
  const navigate = useNavigate();
  console.log(props.entrys);

  return (
    <>
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <Container className={'mb-[8px]'} expand={true}>
          <h1>Projects I am proud of</h1>
        </Container>
        <div className={'md:px-16 px-0'}>
          {/* {props.entrys.splice(0, 3).map((e, i) => (
            <ProjectEntry key={i} entry={e} />
          ))} */}
          {props.entrys.map((e, i) => (
            <ProjectEntry key={i} entry={e} />
          ))}
        </div>
        <div className="h-2" />
        <button
          className="text-white outline p-1 px-2 rounded-sm bg-white bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40"
          onClick={() => {
            navigate('/project');
          }}
        >
          Show more . . .
        </button>
      </div>
    </>
  );
}

export interface ProjectContainerProps {
  entrys: ProjectEntryData[];
}

export function ProjectContainer(props: ProjectContainerProps) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const renderBackButton = () => (
    <div className="flex flex-col justify-center">
      <Container expand={false} className="flex justify-center">
        <button
          className="w-40 h-40 min-w-48 min-h-48"
          onClick={() => {
            navigate('/');
          }}
        >
          <strong> {'< -'} Back to Home </strong>
        </button>
      </Container>
    </div>
  );

  const renderHeader = () => (
    <Container expand={false} className="grow flex flex-col justify-center">
      <h1>Projects I remember fondly!</h1>
    </Container>
  );

  const renderImage = () => (
    <div className="">
      <Container>
        <img
          src={'/profilePic.webp'}
          className={!isMobile ? 'w-40 h-40 min-w-48 min-h-48' : ''}
        />
      </Container>
    </div>
  );

  return (
    <>
      {!isMobile && (
        <div className="flex flex-row justify-end">
          {renderBackButton()}
          {renderHeader()}
          {renderImage()}
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col justify-end">
          {renderImage()}
          {renderHeader()}
        </div>
      )}

      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <div className="h-[12px]" />
        <div className={'md:px-16 px-0'}>
          {props.entrys.map((e, i) => (
            <ProjectEntry key={i} entry={e} />
          ))}
        </div>
        <div className="h-2" />
      </div>
    </>
  );
}

export interface ProjectPostProp {
  projectEntry: ProjectEntryData;
}

export function ProjectPost(props: ProjectPostProp) {
  const navigate = useNavigate();
  const mdRequest = useFetch(getProjectPostURL(props.projectEntry.file), {
    formatter: (response) => response.text(),
  });
  const isMobile = useIsMobile();

  if (props.projectEntry === undefined) {
    return <></>;
  }

  const renderBackButton = () => (
    <div className="flex flex-col justify-center">
      <Container expand={false} className="flex justify-center">
        <button
          className="w-40 h-40 min-w-48 min-h-48"
          onClick={() => {
            navigate('/project');
          }}
        >
          <strong>{'<- '} Back to Projects List</strong>
        </button>
      </Container>
    </div>
  );

  const renderHeader = () => (
    <Container expand={false} className="grow flex flex-col justify-center">
      <h1>{props.projectEntry.title}</h1>
      <h2>
        {formatDate(new Date(props.projectEntry.startDate))} -
        {formatDate(new Date(props.projectEntry.endDate))}
      </h2>
      <h3>{props.projectEntry.blurb}</h3>
    </Container>
  );
  const renderImage = () => (
    <div className="">
      <Container>
        <img
          src={'/profilePic.webp'}
          className={!isMobile ? 'w-40 h-40 min-w-48 min-h-48' : ''}
        />
      </Container>
    </div>
  );
  return (
    <>
      {!isMobile && (
        <div className="flex flex-row justify-end">
          {renderBackButton()}
          {renderHeader()}
          {renderImage()}
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col justify-end">
          {renderImage()}
          {renderHeader()}
        </div>
      )}

      <hr className="w-48 mx-auto" />
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <div className={'md:px-16 px-0'}>
          <Container expand={true}>
            {mdRequest.isLoading || (
              <ReactMarkdown>{mdRequest.data as string}</ReactMarkdown>
            )}
          </Container>
        </div>
      </div>
    </>
  );
}
