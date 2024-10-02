import React from 'react'
import { Container, StyledNav } from './Navbar.styles'
import { ButtonFill } from '../../styles/styles';
import { useAppDispatch } from '../../hooks/redux';
import { useLocation } from 'react-router-dom';
import { toggleCreateNoteModal } from '../../store/modal/modalSlice';
import { toggleMenu } from '../../store/menu/menuSlice';
import getStandardName from '../../utils/getStandardName';
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const { pathname, state } = location;
  //다음 경로에 navbar가 표시되지 않음
  if (pathname === "/404") {
    return null;
  }

  return (
    <StyledNav>
      <div className="nav__menu">
        <FiMenu onClick={() => dispatch(toggleMenu(true))} />
      </div>

      <Container>
        <div className="nav__page-title">{getStandardName(state)}</div>

        {state !== "Trash" && state !== "Archive" && (
          <ButtonFill
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav__btn"
          >
            <span>+</span>
          </ButtonFill>
        )}
      </Container>
    </StyledNav>
  );
};

export default Navbar