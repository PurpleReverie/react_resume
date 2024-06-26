import React from 'react';
import Container from '../Container';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utility/date';

export interface ProjectEntryData {
  project_id: string;
  title: string;
  startDate: number;
  endDate: number;
  blurb: string;
  body: string;
  skills: string[];
  company: string;
}

export interface ProjectMainResumeEntryProps {
  entry: ProjectEntryData;
}

export function ProjectEntry(props: ProjectMainResumeEntryProps) {
  const navigate = useNavigate();

  return (
    <Container
      className="m-[8px] rounded-md hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
      expand={true}
      onClick={() => {
        navigate(`/project/${props.entry.project_id}`);
      }}
    >
      <p>{props.entry.title}</p>
      <p>
        {props.entry.startDate} - {props.entry.endDate}
      </p>
      <p>{props.entry.blurb}</p>
      <p>
        {props.entry.skills.map((s) => (
          <>{`${s} `}</>
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
  return (
    <>
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <Container className={'mb-[8px]'} expand={true}>
          <h1>Projects I am proud of</h1>
        </Container>
        <div className={'px-16'}>
          {props.entrys.splice(0, 3).map((e, i) => (
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

  console.log(props.entrys);

  return (
    <>
      <div className="flex flex-row justify-end">
        <div className="flex flex-col justify-center">
          <Container expand={false} className="flex justify-center">
            <button
              className="w-40 h-40 min-w-48 min-h-48"
              onClick={() => {
                navigate('/');
              }}
            >
              Back to Home
            </button>
          </Container>
        </div>
        <Container expand={false} className="grow flex flex-col justify-center">
          <h1>Project I remember fondly!</h1>
        </Container>
        <div className="">
          <Container>
            <img
              src={'/profilePic.webp'}
              className="w-40 h-40 min-w-48 min-h-48"
            />
          </Container>
        </div>
      </div>

      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <div className="h-[12px]" />
        <div className={'px-16'}>
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
  projectEntry?: ProjectEntryData;
}

export function ProjectPost(props: ProjectPostProp) {
  const navigate = useNavigate();

  if (props.projectEntry === undefined) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-row justify-end">
        <div className="flex flex-col justify-center">
          <Container expand={false} className="flex justify-center">
            <button
              className="w-40 h-40 min-w-48 min-h-48"
              onClick={() => {
                navigate('/project');
              }}
            >
              Back to Projects List
            </button>
          </Container>
        </div>
        <Container expand={false} className="grow flex flex-col justify-center">
          <p>{props.projectEntry.title}</p>
          <p>
            {formatDate(new Date(props.projectEntry.startDate))} -
            {formatDate(new Date(props.projectEntry.endDate))}
          </p>
          <p>{props.projectEntry.blurb}</p>
        </Container>
        <div className="">
          <Container>
            <img
              src={'/profilePic.webp'}
              className="w-40 h-40 min-w-48 min-h-48"
            />
          </Container>
        </div>
      </div>
      <hr className="w-48 mx-auto" />
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <div className={'px-16'}>
          <Container expand={true}>
            <p>{props.projectEntry.body}</p>
          </Container>
        </div>
      </div>
    </>
  );
}

export function mockProjectEntries(): ProjectEntryData[] {
  return [
    {
      project_id: 'web-application-development',
      title: 'Web Application Development',
      startDate: new Date('2022-01-01').getTime(),
      endDate: new Date('2022-06-30').getTime(),
      blurb: 'Developed a cutting-edge web application for a tech company.',
      body: 'Developed a full-stack web application using React, Node.js, and MongoDB. The project involved creating a responsive user interface, implementing server-side logic, and integrating with a NoSQL database.',
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'CSS'],
      company: 'Tech Solutions Inc.',
    },
    {
      project_id: 'mobile-app-design',
      title: 'Mobile App Design',
      startDate: new Date('2021-05-15').getTime(),
      endDate: new Date('2021-12-15').getTime(),
      blurb: 'Designed and developed a mobile app for both major platforms.',
      body: 'Designed and developed a mobile application for both Android and iOS platforms. The app featured a user-friendly interface, seamless navigation, and integration with backend services.',
      skills: ['React Native', 'Java', 'Swift', 'UI/UX Design'],
      company: 'Creative Apps Ltd.',
    },
    {
      project_id: 'cloud-infrastructure-setup',
      title: 'Cloud Infrastructure Setup',
      startDate: new Date('2023-02-01').getTime(),
      endDate: new Date('2023-08-31').getTime(),
      blurb: 'Implemented cloud solutions for scalable infrastructure.',
      body: 'Set up and managed cloud infrastructure using AWS and Terraform. The project included creating scalable deployments, automating infrastructure provisioning, and ensuring high availability.',
      skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      company: 'Cloud Innovators',
    },
    {
      project_id: 'e-commerce-platform-development',
      title: 'E-commerce Platform Development',
      startDate: new Date('2020-03-01').getTime(),
      endDate: new Date('2020-12-01').getTime(),
      blurb: 'Built a scalable e-commerce platform from scratch.',
      body: 'Developed a scalable e-commerce platform using Magento and integrated it with various payment gateways. The project involved customizing the platform, optimizing performance, and ensuring secure transactions.',
      skills: ['Magento', 'PHP', 'MySQL', 'Payment Gateway Integration'],
      company: 'E-Shop Solutions',
    },
    {
      project_id: 'data-analysis-and-visualization',
      title: 'Data Analysis and Visualization',
      startDate: new Date('2021-09-01').getTime(),
      endDate: new Date('2022-02-28').getTime(),
      blurb:
        'Analyzed data and created visual reports to drive business decisions.',
      body: 'Conducted data analysis and created visualizations using Python and Tableau to support business decision-making. The project included data cleaning, statistical analysis, and creating interactive dashboards.',
      skills: ['Python', 'Tableau', 'Data Analysis', 'Pandas'],
      company: 'Data Insights Corp.',
    },
    {
      project_id: 'api-development',
      title: 'API Development',
      startDate: new Date('2023-04-01').getTime(),
      endDate: new Date('2023-10-01').getTime(),
      blurb: 'Developed secure and scalable APIs for a fintech application.',
      body: 'Developed RESTful APIs for a fintech application, ensuring robust security and scalability. The project involved designing API endpoints, implementing authentication, and optimizing performance.',
      skills: ['RESTful APIs', 'Python', 'Flask', 'SQL'],
      company: 'Fintech Innovators',
    },
  ];
}
