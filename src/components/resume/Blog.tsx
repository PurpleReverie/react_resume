import React, { useEffect } from 'react';
import Container from '../Container';
import { formatDate } from '../../utility/date';
import { useNavigate } from 'react-router-dom';
import { LoremIpsum } from 'lorem-ipsum';
import { BlogPostEntryData } from '../../types/blogTypes';
import ReactMarkdown from 'react-markdown';
import useFetch from 'react-fetch-hook';
import matter from 'gray-matter';
import { getBlogPostURL } from '../../utility/generatedContent';
import useIsMobile from '../../hooks/useMobile';
import { renderIntoDocument } from 'react-dom/test-utils';
import { ContactSection } from './Contact';
import '../../styles/markldown_blog_content.css';

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

export interface BlogPostProps {
  post: BlogPostEntryData;
}

export function BlogPostEntry(props: BlogPostProps) {
  const navigation = useNavigate();

  if (props.post === undefined) {
    return <></>;
  }
  return (
    <Container
      onClick={() => {
        navigation(`/blog/${props.post?.slug}`);
      }}
      expand={true}
      className="m-[8px] rounded-md hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
    >
      <h3>
        <strong>{props.post.title}</strong>
      </h3>
      <p>
        <strong>{formatDate(new Date(props.post.date))}</strong>
      </p>
      <br />
      <p>{props.post.blurb}</p>
    </Container>
  );
}

export function BlogPost(props: BlogPostProps) {
  const navigate = useNavigate();
  const mdRequest = useFetch(getBlogPostURL(props.post?.file as string), {
    formatter: (response) => response.text(),
  });
  const isMobile = useIsMobile(768);

  if (props.post === undefined) {
    return <></>;
  }

  const renderBackButton = () => (
    <div className="flex flex-col justify-center">
      <Container expand={false} className="flex justify-center">
        <button
          className="w-40 h-40 min-w-48 min-h-48"
          onClick={() => {
            navigate('/blog');
          }}
        >
          <strong>{'<-'} Back to Blog </strong>
        </button>
      </Container>
    </div>
  );

  const renderTitle = () => (
    <Container expand={false} className="grow flex flex-col justify-center">
      <h1>{props.post.title}</h1>
      <h2>{formatDate(new Date(props.post.date))}</h2>
      <h3>{props.post.blurb}</h3>
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
          {renderTitle()}
          {renderImage()}
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col justify-end">
          {renderImage()}
          {renderTitle()}
        </div>
      )}

      <hr className="w-48 mx-auto" />
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <div className={'md:px-16 px-0'}>
          <Container expand={true} className="markdown_override">
            {/* <p>{props.post.post}</p> */}
            {mdRequest.isLoading || (
              <ReactMarkdown>{mdRequest.data}</ReactMarkdown>
            )}
          </Container>
        </div>
      </div>

      <ContactSection />
    </>
  );
}

export interface BlogContainerProps {
  posts: BlogPostEntryData[];
}

export function BlogResumeContainer(props: BlogContainerProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className={'my-4 bg-[#000000] bg-opacity-20 pb-[12px] rounded-lg'}>
        <Container className={'mb-[8px]'} expand={true}>
          <h1>My Blog . . . .</h1>
        </Container>
        <div className={'md:px-16 px-0'}>
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
  const navigate = useNavigate();
  const isMobile = useIsMobile(768);

  console.log(isMobile);

  const renderBackButton = () => (
    <div className="flex flex-col justify-center">
      <Container expand={false} className="flex justify-center">
        <button
          className="w-40 h-40 min-w-48 min-h-48"
          onClick={() => {
            navigate('/');
          }}
        >
          <strong>{'<- '} Back to Home </strong>
        </button>
      </Container>
    </div>
  );

  const renderTilte = () => (
    <Container expand={false} className="grow flex flex-col justify-center">
      <h1>My Blog . . . .</h1>
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
          {renderTilte()}
          {renderImage()}
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col justify-end">
          {renderImage()}
          {renderTilte()}
        </div>
      )}

      <div className={'my-4 bg-[#000000] bg-opacity-20 py-[12px] rounded-lg'}>
        <div className={'md:px-16 px-0'}>
          {props.posts.map((p, i) => (
            <BlogPostEntry key={i} post={p} />
          ))}
        </div>
        <div className="h-2" />
      </div>

      <ContactSection />
    </>
  );
}
