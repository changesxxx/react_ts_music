import styled from 'styled-components'

const HeaderWrapper = styled.div`
  height: 75px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;

  .active {
    background: #000;
    color: #fff !important;
  }

  .active .icon {
    position: absolute;
    display: inline-block;
    width: 12px;
    height: 7px;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%, 0);
    background-position: -226px 0;
  }

  .container {
    display: flex;
    height: 70px;

    .logo {
      width: 176px;
      height: 69px;

      cursor: pointer;
      background-position: 0 0;

      a {
        display: block;
        text-indent: -9999px;
      }
    }

    .tab {
      .tab-item {
        display: flex;

        .item {
          position: relative;
          display: block;
          height: 70px;
          line-height: 70px;
          padding: 0 19px;
          font-size: 14px;
          color: #ccc;

          text-decoration: none;

          &:hover {
            background: #000;
            color: #fff;
          }
        }
      }
    }

    .other {
      display: flex;
      align-items: center;
      height: 100%;

      .search-input {
        width: 158px;
        color: #333;
        font-size: 12px;
        border-radius: 32px;
      }

      .creator {
        color: #ccc;

        box-sizing: border-box;
        margin-left: 12px;
        height: 30px;
        line-height: 30px;
        padding: 0 16px;
        border: 1px solid #4f4f4f;
        border-radius: 20px;
      }

      .login {
        margin-left: 22px;
      }
    }
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export default HeaderWrapper
