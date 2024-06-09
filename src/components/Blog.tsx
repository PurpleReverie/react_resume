import React from 'react';
import Container from './Container';

export interface BlogPostData {
  title: string;
  date: number;
  post: string;
}

export interface BlogPostProps {
  post: BlogPostData;
}

export function BlogPostEntry(props: BlogPostProps) {
  return (
    <Container expand={true}>
      <p>{props.post.title}</p>
      <br />
      <p>{props.post.post}</p>
    </Container>
  );
}

export function BlogPost(props: BlogPostProps) {
  return <></>;
}

export interface BlogContainerProps {
  posts: BlogPostData[];
}

export function BlogContainer(props: BlogContainerProps) {
  return (
    <>
      {props.posts.map((p, i) => (
        <BlogPostEntry key={i} post={p} />
      ))}
    </>
  );
}

export const mockBlogPosts: BlogPostData[] = [
  {
    title: 'The Rise of TypeScript',
    date: 1672531200, // January 1, 2023
    post: 'TypeScript has seen a meteoric rise in popularity in recent years. In this post, we explore the reasons behind its success and why you should consider using it in your next project.',
  },
  {
    title: 'Understanding JavaScript Closures',
    date: 1673116800, // January 8, 2023
    post: "Closures are a fundamental concept in JavaScript that can be tricky to grasp. This article breaks down closures in a way that's easy to understand, with plenty of examples to guide you along the way.",
  },
  {
    title: 'A Guide to React Hooks',
    date: 1675708800, // February 7, 2023
    post: "React Hooks have revolutionized the way we write React components. In this comprehensive guide, we'll cover everything you need to know about hooks, including useState, useEffect, and custom hooks.",
  },
  {
    title: 'CSS Grid vs. Flexbox: Which Should You Use?',
    date: 1678310400, // March 9, 2023
    post: 'CSS Grid and Flexbox are two powerful layout systems in CSS. This post compares them, highlighting their strengths and weaknesses, and providing guidance on when to use each.',
  },
  {
    title: 'Introduction to WebAssembly',
    date: 1680998400, // April 9, 2023
    post: 'WebAssembly is a new type of code that can be run in modern web browsers. It allows for high-performance applications on the web. This introduction covers the basics of WebAssembly and how you can get started with it.',
  },
];
