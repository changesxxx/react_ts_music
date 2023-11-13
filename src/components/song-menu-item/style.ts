import styled from 'styled-components'

const SongMenuItemWrapper = styled.div`
  .song-item {
    width: 140px;
    height: 204px;
    .cover {
      position: relative;
      width: 100%;
      height: 140px;

      a {
        display: block;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 0;
        z-index: 1;
      }

      .bottom {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        bottom: 0;
        left: 0;
        right: 0;
        height: 27px;

        color: #fff;

        background-position: 0 -537px;

        .count {
          .icon {
            position: relative;
            display: inline-block;
            top: 2px;
            width: 14px;
            height: 11px;
            margin: 0 5px 0 10px;
            background-position: 0 -24px;
          }
        }

        .play {
          width: 16px;
          height: 17px;
          margin-right: 10px;
          background-position: 0 0;
        }
      }
    }

    .dec {
      width: 100%;
      margin: 8px 0 3px;
      font-size: 14px;

      a {
        width: 100%;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;

        color: #333;
      }
    }
  }
`

export default SongMenuItemWrapper
