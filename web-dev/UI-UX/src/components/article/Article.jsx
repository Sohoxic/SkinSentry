import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, url }) => (
  <div className="gpt3__blog-container_article">

    <div className="gpt3__blog-container_article-image">
      <a target="_blank" rel="noreferrer" href={url}>
        <img src={imgUrl} alt="blog_image" /></a>
    </div>
    <div className="gpt3__blog-container_article-content" >

      <a target="_blank" rel="noreferrer" href={url}>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </a>
    </div>

  </div>
);

export default Article;
