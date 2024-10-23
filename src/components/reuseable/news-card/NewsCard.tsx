import { FC } from 'react';
import currency from 'utils/currency';
import NextLink from '../links/NextLink';
import ratingGenerate from 'utils/ratings';

// =========================================
type NewsCardProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
  publishDate: string;
  className?: string;
};
// =========================================

const NewsCard: FC<NewsCardProps> = (props) => {
  const { image, title, description, slug, publishDate, className = ''} = props;

  const badge = (title: string, color: string) => {
    return (
      <span
        style={{ top: '1rem', left: '1rem' }}
        className={`avatar ${color} text-white w-10 h-10 position-absolute text-uppercase fs-13`}
      >
        <span>{title}</span>
      </span>
    );
  };

  return (
    <div className={`project item ${className}`}>
      <figure className="rounded mb-6 position-relative overflow-hidden">
        <img src={image} srcSet={image} alt="" />
{/* 
        <a
          href="#"
          title=""
          className="item-view"
          aria-label="Quick view"
          data-bs-toggle="white-tooltip"
          data-bs-original-title="Quick view"
        >
          <i className="uil uil-eye" />
        </a> */}

        <a href={`/noticia/${slug}`} className="item-cart">
          <i className="uil uil-eye" /> Ver mas
        </a>

      </figure>

      <div className="post-header">
        <div className="d-flex flex-row align-items-center justify-content-between mb-2">
          <div className="post-category text-ash mb-0">{publishDate}</div>

        </div>

        <h2 className="post-title h3 fs-22">
          <NextLink title={title} href={`/noticia/${slug}`} className="link-dark" />
        </h2>


      </div>
    </div>
  );
};

export default NewsCard;
