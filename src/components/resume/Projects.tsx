import React from 'react';
import Container from '../Container';

export interface ProjectEntryData {
  title: string;
  startDate: string;
  endDate: string;
  blurb: string;
  body: string;
  skills: string[];
  company: string;
}

export interface ProjectMainResumeEntryProps {
  entry: ProjectEntryData;
}

export function ProjectMainResumeEntry(props: ProjectMainResumeEntryProps) {
  return (
    <Container
      className="m-[8px] rounded-md hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
      expand={true}
    >
      <p>{props.entry.title}</p>
      <p>
        {props.entry.startDate} {props.entry.endDate}
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
  return (
    <>
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <Container className={'mb-[8px]'} expand={true}>
          <h1>Projects I am proud of</h1>
        </Container>
        <div className={'px-16'}>
          {props.entrys.splice(0, 3).map((e, i) => (
            <ProjectMainResumeEntry key={i} entry={e} />
          ))}
        </div>
        <div className="h-2" />
        <button className="text-white outline p-1 px-2 rounded-sm bg-white bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40">
          Show more . . .
        </button>
      </div>
    </>
  );
}

export const mockProjectEntries: ProjectEntryData[] = [
  {
    title: 'Web Application Development',
    startDate: '2022-01-01',
    endDate: '2022-06-30',
    blurb: 'Developed a cutting-edge web application for a tech company.',
    body: 'Developed a full-stack web application using React, Node.js, and MongoDB. The project involved creating a responsive user interface, implementing server-side logic, and integrating with a NoSQL database.',
    skills: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'CSS'],
    company: 'Tech Solutions Inc.',
  },
  {
    title: 'Mobile App Design',
    startDate: '2021-05-15',
    endDate: '2021-12-15',
    blurb: 'Designed and developed a mobile app for both major platforms.',
    body: 'Designed and developed a mobile application for both Android and iOS platforms. The app featured a user-friendly interface, seamless navigation, and integration with backend services.',
    skills: ['React Native', 'Java', 'Swift', 'UI/UX Design'],
    company: 'Creative Apps Ltd.',
  },
  {
    title: 'Cloud Infrastructure Setup',
    startDate: '2023-02-01',
    endDate: '2023-08-31',
    blurb: 'Implemented cloud solutions for scalable infrastructure.',
    body: 'Set up and managed cloud infrastructure using AWS and Terraform. The project included creating scalable deployments, automating infrastructure provisioning, and ensuring high availability.',
    skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    company: 'Cloud Innovators',
  },
  {
    title: 'E-commerce Platform Development',
    startDate: '2020-03-01',
    endDate: '2020-12-01',
    blurb: 'Built a scalable e-commerce platform from scratch.',
    body: 'Developed a scalable e-commerce platform using Magento and integrated it with various payment gateways. The project involved customizing the platform, optimizing performance, and ensuring secure transactions.',
    skills: ['Magento', 'PHP', 'MySQL', 'Payment Gateway Integration'],
    company: 'E-Shop Solutions',
  },
  {
    title: 'Data Analysis and Visualization',
    startDate: '2021-09-01',
    endDate: '2022-02-28',
    blurb:
      'Analyzed data and created visual reports to drive business decisions.',
    body: 'Conducted data analysis and created visualizations using Python and Tableau to support business decision-making. The project included data cleaning, statistical analysis, and creating interactive dashboards.',
    skills: ['Python', 'Tableau', 'Data Analysis', 'Pandas'],
    company: 'Data Insights Corp.',
  },
  {
    title: 'API Development',
    startDate: '2023-04-01',
    endDate: '2023-10-01',
    blurb: 'Developed secure and scalable APIs for a fintech application.',
    body: 'Developed RESTful APIs for a fintech application, ensuring robust security and scalability. The project involved designing API endpoints, implementing authentication, and optimizing performance.',
    skills: ['RESTful APIs', 'Python', 'Flask', 'SQL'],
    company: 'Fintech Innovators',
  },
];
