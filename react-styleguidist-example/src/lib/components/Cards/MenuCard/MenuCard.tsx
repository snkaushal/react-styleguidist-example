import * as React from 'react';

interface MenuCardProps {
  /** name of the menu card */
  name: string;
  /** image link of the menu card */
  imageUrl: string;
  /** handles onClick event on menu */
  clickHandler?: (e: React.MouseEvent<HTMLElement>) => void;
  /** location of the menu item */
  location: string;
}

/** Menu card to be used in the menus */

export const MenuCard: React.FC<MenuCardProps> = ({
  name = '',
  imageUrl = '',
  clickHandler = () => null,
  location = '',
}) => (
    <div style={{ padding: '20px', height: '100%', width: '100%', color: 'black', margin: '0 auto' }} onClick={clickHandler}>
      <img src={imageUrl} alt='Menu Card' width={'100px'} height={'100px'} /><br />
      Title : {name}<br />
      Read the full artilce <a href={location}>here</a>
    </div>
  )
