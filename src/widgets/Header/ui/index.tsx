import { Menu } from '@features/Menu';
import { Logo, BurgerMenu as BurgerMenuIcon } from '@shared/assets';
import { useDevice } from '@shared/hooks';
import { useState } from 'react';

import BurgerMenu from './BurgerMenu';
import { SHeader } from './header.styles';

const Header = () => {
  const { isTablets } = useDevice();

  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handlerOpenMenu = () => {
    setIsOpenBurgerMenu((prev) => !prev);
  };

  return (
    <SHeader>
      {isTablets && <BurgerMenu isOpen={isOpenBurgerMenu} onClose={handlerOpenMenu} />}
      <Logo />
      {isTablets && <BurgerMenuIcon onClick={handlerOpenMenu} />}
      {!isTablets && <Menu />}
    </SHeader>
  );
};

export default Header;