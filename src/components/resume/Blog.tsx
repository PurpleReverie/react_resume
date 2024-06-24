import React from 'react';
import Container from '../Container';
import { formatDate } from '../../utility/date';

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
  if (props.post === undefined) {
    return <></>;
  }
  return (
    <Container
      onClick={() => {
        console.log('Go to post!');
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
  if (props.post === undefined) {
    return <></>;
  }
  return (
    <Container expand={true}>
      <p>{props.post.title}</p>
      <p>{formatDate(new Date(props.post.date))}</p>
      <br />
      <p>{props.post.blurb}</p>
      <p>{props.post.post}</p>
    </Container>
  );
}

export interface BlogContainerProps {
  posts: BlogPostData[];
}

export function BlogResumeContainer(props: BlogContainerProps) {
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
        <button className="text-white outline p-1 px-2 rounded-sm bg-white bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40">
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

export const mockBlogPosts: BlogPostData[] = [
  {
    id_url: 'the-rise-of-typescript',
    title: 'The Rise of TypeScript',
    date: new Date(2023, 0, 1).getTime(), // January is 0
    blurb: 'TypeScript has seen a meteoric rise in popularity in recent years.',
    post: "In this post, we explore the reasons behind TypeScript's success and why you should consider using it in your next project. From improved developer experience to enhanced code quality, TypeScript offers numerous benefits that can significantly boost your productivity and maintainability.",
  },
  {
    id_url: 'understanding-javascript-closures',
    title: 'Understanding JavaScript Closures',
    date: new Date(2023, 0, 8).getTime(), // January is 0
    blurb:
      'Closures are a fundamental concept in JavaScript that can be tricky to grasp.',
    post: "This article breaks down closures in a way that's easy to understand, with plenty of examples to guide you along the way. We'll dive into how closures work, why they are useful, and how you can leverage them to write more efficient and cleaner code in your JavaScript applications.",
  },
  {
    id_url: 'guide-to-react-hooks',
    title: 'A Guide to React Hooks',
    date: new Date(2023, 1, 7).getTime(), // February is 1
    blurb: 'React Hooks have revolutionized the way we write React components.',
    post: "In this comprehensive guide, we'll cover everything you need to know about hooks, including useState, useEffect, and custom hooks. We'll explore practical examples and best practices to help you make the most out of React Hooks in your projects.",
  },
  {
    id_url: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs. Flexbox: Which Should You Use?',
    date: new Date(2023, 2, 9).getTime(), // March is 2
    blurb: 'CSS Grid and Flexbox are two powerful layout systems in CSS.',
    post: "This post compares them, highlighting their strengths and weaknesses, and providing guidance on when to use each. Whether you're building complex layouts or simple responsive designs, understanding the differences between CSS Grid and Flexbox will help you choose the right tool for the job.",
  },
  {
    id_url: 'introduction-to-webassembly',
    title: 'Introduction to WebAssembly',
    date: new Date(2023, 3, 9).getTime(), // April is 3
    blurb:
      'WebAssembly is a new type of code that can be run in modern web browsers.',
    post: "It allows for high-performance applications on the web. This introduction covers the basics of WebAssembly and how you can get started with it. We'll discuss its benefits, potential use cases, and provide a step-by-step guide to help you write and compile your first WebAssembly module.",
  },
  {
    id_url: 'the-rise-of-typescript-duplicate1',
    title: 'The Rise of TypeScript',
    date: new Date(2023, 0, 1).getTime(), // January is 0
    blurb: 'TypeScript has seen a meteoric rise in popularity in recent years.',
    post: "In this post, we explore the reasons behind TypeScript's success and why you should consider using it in your next project. From improved developer experience to enhanced code quality, TypeScript offers numerous benefits that can significantly boost your productivity and maintainability.",
  },
  {
    id_url: 'understanding-javascript-closures-duplicate1',
    title: 'Understanding JavaScript Closures',
    date: new Date(2023, 0, 8).getTime(), // January is 0
    blurb:
      'Closures are a fundamental concept in JavaScript that can be tricky to grasp.',
    post: "This article breaks down closures in a way that's easy to understand, with plenty of examples to guide you along the way. We'll dive into how closures work, why they are useful, and how you can leverage them to write more efficient and cleaner code in your JavaScript applications.",
  },
  {
    id_url: 'guide-to-react-hooks-duplicate1',
    title: 'A Guide to React Hooks',
    date: new Date(2023, 1, 7).getTime(), // February is 1
    blurb: 'React Hooks have revolutionized the way we write React components.',
    post: "In this comprehensive guide, we'll cover everything you need to know about hooks, including useState, useEffect, and custom hooks. We'll explore practical examples and best practices to help you make the most out of React Hooks in your projects.",
  },
  {
    id_url: 'css-grid-vs-flexbox-duplicate1',
    title: 'CSS Grid vs. Flexbox: Which Should You Use?',
    date: new Date(2023, 2, 9).getTime(), // March is 2
    blurb: 'CSS Grid and Flexbox are two powerful layout systems in CSS.',
    post: "This post compares them, highlighting their strengths and weaknesses, and providing guidance on when to use each. Whether you're building complex layouts or simple responsive designs, understanding the differences between CSS Grid and Flexbox will help you choose the right tool for the job.",
  },
  {
    id_url: 'introduction-to-webassembly-duplicate1',
    title: 'Introduction to WebAssembly',
    date: new Date(2023, 3, 9).getTime(), // April is 3
    blurb:
      'WebAssembly is a new type of code that can be run in modern web browsers.',
    post: "It allows for high-performance applications on the web. This introduction covers the basics of WebAssembly and how you can get started with it. We'll discuss its benefits, potential use cases, and provide a step-by-step guide to help you write and compile your first WebAssembly module.",
  },
  {
    id_url: 'the-rise-of-typescript-duplicate2',
    title: 'The Rise of TypeScript',
    date: new Date(2023, 0, 1).getTime(), // January is 0
    blurb: 'TypeScript has seen a meteoric rise in popularity in recent years.',
    post: "In this post, we explore the reasons behind TypeScript's success and why you should consider using it in your next project. From improved developer experience to enhanced code quality, TypeScript offers numerous benefits that can significantly boost your productivity and maintainability.",
  },
  {
    id_url: 'understanding-javascript-closures-duplicate2',
    title: 'Understanding JavaScript Closures',
    date: new Date(2023, 0, 8).getTime(), // January is 0
    blurb:
      'Closures are a fundamental concept in JavaScript that can be tricky to grasp.',
    post: "This article breaks down closures in a way that's easy to understand, with plenty of examples to guide you along the way. We'll dive into how closures work, why they are useful, and how you can leverage them to write more efficient and cleaner code in your JavaScript applications.",
  },
  {
    id_url: 'guide-to-react-hooks-duplicate2',
    title: 'A Guide to React Hooks',
    date: new Date(2023, 1, 7).getTime(), // February is 1
    blurb: 'React Hooks have revolutionized the way we write React components.',
    post: "In this comprehensive guide, we'll cover everything you need to know about hooks, including useState, useEffect, and custom hooks. We'll explore practical examples and best practices to help you make the most out of React Hooks in your projects.",
  },
  {
    id_url: 'css-grid-vs-flexbox-duplicate2',
    title: 'CSS Grid vs. Flexbox: Which Should You Use?',
    date: new Date(2023, 2, 9).getTime(), // March is 2
    blurb: 'CSS Grid and Flexbox are two powerful layout systems in CSS.',
    post: "This post compares them, highlighting their strengths and weaknesses, and providing guidance on when to use each. Whether you're building complex layouts or simple responsive designs, understanding the differences between CSS Grid and Flexbox will help you choose the right tool for the job.",
  },
  {
    id_url: 'introduction-to-webassembly-duplicate2',
    title: 'Introduction to WebAssembly',
    date: new Date(2023, 3, 9).getTime(), // April is 3
    blurb:
      'WebAssembly is a new type of code that can be run in modern web browsers.',
    post: "It allows for high-performance applications on the web. This introduction covers the basics of WebAssembly and how you can get started with it. We'll discuss its benefits, potential use cases, and provide a step-by-step guide to help you write and compile your first WebAssembly module.",
  },
];
