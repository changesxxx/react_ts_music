import styled from 'styled-components'
const NavBarWrapper = styled.div`
  display: flex;
  height: 100%;

  .tab-item {
    display: block;
    height: 100%;
    text-decoration: none;

    &:hover .title {
      background-color: rgba(55, 55, 55, 0.4);
      border-radius: 12px;
    }
    .title {
      padding: 4px 13px;
      margin: 0 17px;
      color: #fff;
    }
  }
`

export default NavBarWrapper
