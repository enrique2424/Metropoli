import Link from 'next/link';
import { FC, ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import NextLink from '../links/NextLink';

// ========================================================
type NewsProps = {
  title: string;
  description: string;
  content: string;
  publishDate: string;
  linkVideo: string;
  cardTop: ReactElement;
};
// ========================================================

const News: FC<NewsProps> = (props) => {
  const { cardTop, title, description, publishDate, content, linkVideo } = props;

  return (
    <article className="post">
      <div className="">
        <h1 className="post-title mb-5 mb-0">{title}</h1>
        <div className="d-flex justify-content-center align-items-center">{cardTop}</div>

        <div className="card-footer">
          <ul className="post-meta d-flex my-3">
            <li className="post-date">
              <i className="uil uil-calendar-alt" />
              <span>{publishDate}</span>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="post-header">
            {/* <div className="post-category text-line">
              <NextLink title={category} href="#" className="hover" />
            </div> */}
          </div>
          <div className="post-content">
            <p className='fw-lighter fst-italic'>{description}</p>
          </div>
          <hr></hr>
          <div className="post-content text-justify">
            {/* <p>{description}</p> */}
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
};

export default News;
