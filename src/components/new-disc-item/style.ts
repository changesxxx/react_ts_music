import styled from 'styled-components'

const NewDiscItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  margin-left: 11px;
  background-position: -260px 100px;
  .cover {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 7px;

    &:hover .play {
      display: block;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 118px;
      height: 100%;
      background-position: 0 -570px;
    }

    .play {
      display: none;
      position: absolute;
      right: 6px;
      width: 22px;
      height: 22px;
      bottom: 5px;
      cursor: pointer;

      background-position: 0 -85px;
      &:hover {
        background-position: 0 -110px;
      }
    }
  }

  .disc-name {
    width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    line-height: 18px;
    a {
      color: #000;
    }
  }
  ${(props) => props.className}
`

export default NewDiscItemWrapper
