import * as React from 'react';

interface ArticleCardProps {
  /** name description */
  name: string;
  /** background description */
  background: string;
  /** title description */
  title?: string;
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

export const ArticleCard: React.FC<ArticleCardProps> = ({
  name = 'Hello',
  background = 'blue',
  /** title description */
  title = 'Hello',
}) => (
    <div style={{ background: background, height: '200px', width: '300px', color: 'black' }}>
      Card name : {name}<br />
      title: {title}
    </div>
  );