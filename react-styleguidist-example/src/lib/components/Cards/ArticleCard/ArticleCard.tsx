import * as React from 'react';

interface ArticleCardProps {
  /** Image Url */
  imageUrl: string;
  /** Title of the article */
  title: string;
  /** Description of the article */
  description: string;
  /** URL link to the entire article */
  url: string;
}

/**
 * Card used for articles.
 */

export const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl = '',
  title = '',
  description = '',
  url = '',
}) => (
    <div style={{ padding: '20px', height: '100%', width: '100%', color: 'black', margin: '0 auto' }}>
      <img src={imageUrl} alt='article' width={'100px'} height={'100px'}/><br />
      Title : {title}<br />
      Description: {description}<br />
      Read the full artilce <a href={url}>here</a>
    </div>
  );
