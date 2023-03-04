import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;

  text-decoration:none;
   &:hover {
    color: orange;
   
    }
  &.active {
    border-bottom: 2px solid orange;
    }
  }
`;

// export const ButtonStyle = styled.button({
//     color:'red'
// })