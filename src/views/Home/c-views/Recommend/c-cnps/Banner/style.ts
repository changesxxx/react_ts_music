import styled from 'styled-components'

const BannerWrapper = styled.div<{ $backgroundImg: string }>`
  height: 285px;

  background: url(${(props) => props.$backgroundImg}) center center/6000px;
  .banner {
    position: relative;
    height: 100%;
    display: flex;

    .left {
      flex: 1;
      overflow: hidden;
      height: 100%;

      .banner-item {
        width: 100%;
        height: 100%;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .right {
      position: relative;
      width: 254px;
      height: 100%;
      background-position: 0 0;

      .link {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        background-position: 0 9999px;
        text-indent: -9999px;
        &:hover {
          background-position: 0 -290px;
        }
      }
    }

    .btn {
      position: absolute;
      width: 37px;
      height: 63px;
      top: 0;
      bottom: 0;
      margin: auto 0;

      cursor: pointer;

      &:hover {
        background-color: rgba(55, 55, 55, 0.4);
      }
    }

    .prev {
      background-position: 0 -360px;
      left: -72px;
    }

    .next {
      background-position: 0 -508px;
      right: -72px;
    }
  }
`

export default BannerWrapper
