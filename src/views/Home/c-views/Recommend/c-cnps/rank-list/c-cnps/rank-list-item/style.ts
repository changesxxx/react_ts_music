import styled from 'styled-components'

const RankListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;

  &:last-child {
    width: 228px;
  }
  .rank-info {
    display: flex;
    height: 100px;
    flex-shrink: 0;
    padding: 20px 0 0 19px;
    .coverImg {
      width: 80px;
      height: 80px;
      a {
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      margin: 6px 0 0 10px;
      a {
        color: #333;
      }

      .icon {
        margin-top: 10px;
        .btn {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }

        .play {
          background-position: -267px -205px;

          &:hover {
            background-position: -267px -235px;
          }
        }

        .folder {
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .song {
    flex: 1;

    .song-item {
      position: relative;
      display: flex;
      height: 32px;
      line-height: 32px;
      margin-left: 50px;
      span {
        width: 35px;
        margin-left: -32px;

        text-align: center;
        font-size: 16px;
      }

      &:nth-child(-n + 3) span {
        color: ${(props) => props.theme.primarily.color};
      }

      &:hover .oper {
        display: block;
      }

      .item {
        flex: 1;
        max-width: 170px;
        flex-shrink: 0;
      }

      .oper {
        display: none;
        width: 82px;

        .icon {
          display: inline-block;
          position: relative;
          top: -2px;
          width: 17px;
          height: 17px;
          margin-right: 10px;
          vertical-align: middle;
        }

        .play {
          background-position: -267px -268px;

          &:hover {
            background-position: -267px -288px;
          }
        }

        .folder {
          background-position: -297px -268px;

          &:hover {
            background-position: -297px -288px;
          }
        }

        .save {
          margin-top: 6px;
          background-position: 0 -700px;

          &:hover {
            background-position: -22px -700px;
          }
        }
      }
    }

    .more {
      height: 32px;
      margin-right: 32px;

      a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 32px;
        text-align: right;
      }
    }
  }
`

export default RankListItemWrapper
