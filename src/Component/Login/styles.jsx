import styled, { css, keyframes } from 'styled-components';
import { Search } from '@material-ui/icons';
import { ArrowRight } from '@material-ui/icons';

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5px;
  background: white;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 70%;
      border: 1px solid #00adb5;

      @media (min-width: 768px) {
        width: 80%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  line-height: 20px;
  outline: 0;
  border: 0;
  font-size: 2rem;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? 'block' : 'none')};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.5rem;
  width: 1.5rem;
  fill: rgb(97, 136, 253);
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(Search)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRight)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: white;
  }
`;
