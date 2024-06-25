import React from 'react';
import Container from '../Container';
import { formatDate } from '../../utility/date';
import { useNavigate } from 'react-router-dom';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export interface BlogPostData {
  id_url: string;
  title: string;
  date: number;
  blurb: string;
  post: string;
}

export interface BlogPostProps {
  post?: BlogPostData;
}

export function BlogPostEntry(props: BlogPostProps) {
  const navigation = useNavigate();

  if (props.post === undefined) {
    return <></>;
  }
  return (
    <Container
      onClick={() => {
        navigation(`/blog/${props.post?.id_url}`);
      }}
      expand={true}
      className="m-[8px] rounded-md hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
    >
      <p>{props.post.title}</p>
      <p>{formatDate(new Date(props.post.date))}</p>
      <br />
      <p>{props.post.blurb}</p>
    </Container>
  );
}

export function BlogPost(props: BlogPostProps) {
  const navigate = useNavigate();

  if (props.post === undefined) {
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
                navigate('/blog');
              }}
            >
              Back to Blog
            </button>
          </Container>
        </div>
        <Container expand={false} className="grow flex flex-col justify-center">
          <p>{props.post.title}</p>
          <p>{formatDate(new Date(props.post.date))}</p>
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
        <Container expand={true}>
          <p>{props.post.blurb}</p>
          <p>{props.post.post}</p>
        </Container>
      </div>
    </>
  );
}

export interface BlogContainerProps {
  posts: BlogPostData[];
}

export function BlogResumeContainer(props: BlogContainerProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <Container className={'mb-[8px]'} expand={true}>
          <h1>My Blog . . . .</h1>
        </Container>
        <div className={'px-16'}>
          {props.posts.slice(0, 3).map((p, i) => (
            <BlogPostEntry key={i} post={p} />
          ))}
        </div>
        <div className="h-2" />
        <button
          className="text-white outline p-1 px-2 rounded-sm bg-white bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40"
          onClick={() => {
            navigate('/blog');
          }}
        >
          Show more . . .
        </button>
      </div>
    </>
  );
}

export function BlogContainer(props: BlogContainerProps) {
  return (
    <>
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <Container className={'mb-[8px]'} expand={true}>
          <h1>My Blog . . . .</h1>
        </Container>
        <div className={'px-16'}>
          {props.posts.map((p, i) => (
            <BlogPostEntry key={i} post={p} />
          ))}
        </div>
        <div className="h-2" />
      </div>
    </>
  );
}

const paragraphAmount = 15;

export const mockBlogPosts: BlogPostData[] = [
  {
    id_url: 'the-rise-of-typescript',
    title: 'The Rise of TypeScript',
    date: new Date(2023, 0, 1).getTime(), // January is 0
    blurb: 'TypeScript has seen a meteoric rise in popularity in recent years.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'understanding-javascript-closures',
    title: 'Understanding JavaScript Closures',
    date: new Date(2023, 0, 8).getTime(), // January is 0
    blurb:
      'Closures are a fundamental concept in JavaScript that can be tricky to grasp.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'guide-to-react-hooks',
    title: 'A Guide to React Hooks',
    date: new Date(2023, 1, 7).getTime(), // February is 1
    blurb: 'React Hooks have revolutionized the way we write React components.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs. Flexbox: Which Should You Use?',
    date: new Date(2023, 2, 9).getTime(), // March is 2
    blurb: 'CSS Grid and Flexbox are two powerful layout systems in CSS.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'introduction-to-webassembly',
    title: 'Introduction to WebAssembly',
    date: new Date(2023, 3, 9).getTime(), // April is 3
    blurb:
      'WebAssembly is a new type of code that can be run in modern web browsers.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'the-rise-of-typescript-duplicate1',
    title: 'The Rise of TypeScript',
    date: new Date(2023, 0, 1).getTime(), // January is 0
    blurb: 'TypeScript has seen a meteoric rise in popularity in recent years.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'understanding-javascript-closures-duplicate1',
    title: 'Understanding JavaScript Closures',
    date: new Date(2023, 0, 8).getTime(), // January is 0
    blurb:
      'Closures are a fundamental concept in JavaScript that can be tricky to grasp.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'guide-to-react-hooks-duplicate1',
    title: 'A Guide to React Hooks',
    date: new Date(2023, 1, 7).getTime(), // February is 1
    blurb: 'React Hooks have revolutionized the way we write React components.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'css-grid-vs-flexbox-duplicate1',
    title: 'CSS Grid vs. Flexbox: Which Should You Use?',
    date: new Date(2023, 2, 9).getTime(), // March is 2
    blurb: 'CSS Grid and Flexbox are two powerful layout systems in CSS.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'introduction-to-webassembly-duplicate1',
    title: 'Introduction to WebAssembly',
    date: new Date(2023, 3, 9).getTime(), // April is 3
    blurb:
      'WebAssembly is a new type of code that can be run in modern web browsers.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'the-rise-of-typescript-duplicate2',
    title: 'The Rise of TypeScript',
    date: new Date(2023, 0, 1).getTime(), // January is 0
    blurb: 'TypeScript has seen a meteoric rise in popularity in recent years.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'understanding-javascript-closures-duplicate2',
    title: 'Understanding JavaScript Closures',
    date: new Date(2023, 0, 8).getTime(), // January is 0
    blurb:
      'Closures are a fundamental concept in JavaScript that can be tricky to grasp.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'guide-to-react-hooks-duplicate2',
    title: 'A Guide to React Hooks',
    date: new Date(2023, 1, 7).getTime(), // February is 1
    blurb: 'React Hooks have revolutionized the way we write React components.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'css-grid-vs-flexbox-duplicate2',
    title: 'CSS Grid vs. Flexbox: Which Should You Use?',
    date: new Date(2023, 2, 9).getTime(), // March is 2
    blurb: 'CSS Grid and Flexbox are two powerful layout systems in CSS.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
  {
    id_url: 'introduction-to-webassembly-duplicate2',
    title: 'Introduction to WebAssembly',
    date: new Date(2023, 3, 9).getTime(), // April is 3
    blurb:
      'WebAssembly is a new type of code that can be run in modern web browsers.',
    post: lorem.generateParagraphs(paragraphAmount),
  },
];
