import React from 'react';
import Container from '../Container';
import { userWorkExperience } from '../../generated/work.generated';
import { WorkExperienceDataEntry } from '../../types/workTypes';

export interface WorkExperienceResumeEntryProps {
  entry: WorkExperienceDataEntry;
}

export function WorkExperienceResumeEntry(
  props: WorkExperienceResumeEntryProps,
) {
  const formatDate = (dateNumber: number) => {
    const date = new Date(dateNumber);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' }); // Use 'short' for abbreviated month name
    const formattedDate = `${year}`;

    return formattedDate;
  };

  return (
    <>
      <Container expand={true}>
        <h2>{props.entry.companyName}</h2>
        <p>
          <strong>{props.entry.title}</strong>
        </p>
        <p>
          {' '}
          <strong>
            {formatDate(props.entry.startDate)} -{' '}
            {formatDate(props.entry.endDate)}
          </strong>{' '}
        </p>
        <p>{props.entry.overview}</p>
        <div className="flex flex-col">
          {props.entry.projects.map((p, i) => (
            <div
              className="outline outline-gray-200 m-1 mx-auto p-2 max-w-3xl rounded-sm"
              style={{
                wordBreak: 'break-word',
                // overflowWrap: 'break-word',
                // wordWrap: 'break-word',
                // whiteSpace: 'normal',
              }}
              key={i}
            >
              {p}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap flex-row justify-center">
          {props.entry.skills.map((s, i) => (
            <span className="m-2" key={i}>
              <small>
                <i>{s}</i>
              </small>
            </span>
          ))}
        </div>
      </Container>
    </>
  );
}

export interface WorkExperienceResumeContainerProps {
  entrys: WorkExperienceDataEntry[];
}

export function WorkExperienceResumeContainer(
  props: WorkExperienceResumeContainerProps,
) {
  return (
    <>
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <Container className={'mb-[8px]'} expand={true}>
          <h1>My Journey in Software</h1>
        </Container>
        <div className={'md:px-16 px-0'}>
          {props.entrys
            .sort((a, b) => b.startDate - a.startDate)
            .map((e, i) => (
              <WorkExperienceResumeEntry key={i} entry={e} />
            ))}
        </div>
      </div>
    </>
  );
}
