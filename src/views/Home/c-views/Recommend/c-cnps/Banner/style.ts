import styled from 'styled-components'

const BannerWrapper = styled.div`
  height: 100%;

  display: flex;

  .left {
    flex: 1;
    overflow: hidden;

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
`

export default BannerWrapper
