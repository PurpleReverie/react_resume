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
  return (
    <>
      <Container expand={true}>
        <p>{props.entry.companyName}</p>
        <p>{props.entry.title}</p>
        <p>
          {new Date(props.entry.startDate).toDateString()} -
          {new Date(props.entry.endDate).toDateString()}
        </p>
        <p>{props.entry.overview}</p>
        <div className="h-4" />
        <div className="flex flex-col">
          {props.entry.projects.map((p, i) => (
            <div
              className="outline outline-gray-200 m-1 mx-auto p-2 max-w-3xl rounded-sm"
              key={i}
            >
              {p}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap flex-row justify-center">
          {props.entry.skills.map((s, i) => (
            <span className="m-2" key={i}>
              {s}
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
        <div className={'px-16'}>
          {props.entrys.map((e, i) => (
            <WorkExperienceResumeEntry key={i} entry={e} />
          ))}
        </div>
      </div>
    </>
  );
}

// export const mockWorkExperience: WorkExperienceDataEntry[] = [
//   {
//     companyName: 'Tech Innovators Inc.',
//     title: 'Software Engineer',
//     startDate: 1609459200, // Jan 1, 2021 (Unix timestamp)
//     endDate: 1672444800, // Jan 1, 2023 (Unix timestamp)
//     overview:
//       'Developed and maintained web applications using modern frameworks and technologies.',
//     skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'GraphQL'],
//     projects: [
//       'E-commerce platform: Built a scalable e-commerce platform that supports millions of users, featuring real-time inventory management and a seamless checkout process.',
//       'Internal management tool: Developed a tool for internal use to streamline project management, including task tracking, team collaboration, and performance analytics.',
//       'Customer support system: Created an integrated support system to handle customer queries, track tickets, and provide analytics on common issues and resolution times.',
//     ],
//   },
//   {
//     companyName: 'Creative Solutions Ltd.',
//     title: 'Front-End Developer',
//     startDate: 1577836800, // Jan 1, 2020 (Unix timestamp)
//     endDate: 1609459200, // Jan 1, 2021 (Unix timestamp)
//     overview:
//       'Focused on creating responsive and user-friendly interfaces for web applications.',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'SASS'],
//     projects: [
//       'Marketing website: Designed and implemented a visually appealing and responsive website to enhance brand presence and drive customer engagement.',
//       'Portfolio builder: Developed a customizable portfolio builder tool that allows users to create and showcase their professional work online.',
//       'Blog platform: Built a dynamic blog platform with features like content management, user comments, and social media integration to boost user interaction.',
//     ],
//   },
//   {
//     companyName: 'NextGen Technologies',
//     title: 'Backend Developer',
//     startDate: 1546300800, // Jan 1, 2019 (Unix timestamp)
//     endDate: 1577836800, // Jan 1, 2020 (Unix timestamp)
//     overview:
//       'Specialized in developing scalable server-side logic and database management.',
//     skills: ['Python', 'Django', 'PostgreSQL', 'Docker', 'REST APIs'],
//     projects: [
//       'API for mobile app: Created a robust REST API to support a mobile application, ensuring high performance and security for user data and transactions.',
//       'Data analytics platform: Developed a data analytics platform that aggregates and processes large datasets to provide actionable insights through interactive dashboards.',
//       'Authentication service: Implemented a secure authentication service with features like multi-factor authentication and OAuth integration for various applications.',
//     ],
//   },
//   {
//     companyName: 'Innovative Apps',
//     title: 'Full-Stack Developer',
//     startDate: 1514764800, // Jan 1, 2018 (Unix timestamp)
//     endDate: 1546300800, // Jan 1, 2019 (Unix timestamp)
//     overview:
//       'Worked on both front-end and back-end aspects of web applications.',
//     skills: ['JavaScript', 'Angular', 'Node.js', 'MongoDB', 'Express.js'],
//     projects: [
//       'Project management tool: Developed a comprehensive project management tool with features like Gantt charts, task assignments, and progress tracking.',
//       'Real-time chat application: Built a real-time chat application with WebSocket support, providing instant messaging, file sharing, and user presence detection.',
//       'Social media platform: Created a social media platform that includes user profiles, activity feeds, friend connections, and multimedia content sharing.',
//     ],
//   },
//   {
//     companyName: 'Data Insights Co.',
//     title: 'Data Engineer',
//     startDate: 1483228800, // Jan 1, 2017 (Unix timestamp)
//     endDate: 1514764800, // Jan 1, 2018 (Unix timestamp)
//     overview: 'Handled data pipeline development and data processing tasks.',
//     skills: ['Python', 'Apache Spark', 'Hadoop', 'SQL', 'ETL'],
//     projects: [
//       'Data warehousing solution: Designed and implemented a data warehousing solution to centralize and organize data from multiple sources, enhancing data accessibility and reporting.',
//       'Stream processing system: Developed a real-time stream processing system to handle and analyze incoming data streams, providing timely insights and alerts.',
//       'Data visualization tool: Created a data visualization tool that allows users to create interactive charts and graphs, making complex data more accessible and understandable.',
//     ],
//   },
// ];
