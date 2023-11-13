import styled from 'styled-components'

const NewDiscWrapper = styled.div`
  .container {
    width: 689px;
    .new-disc {
      position: relative;

      height: 186px;
      margin: 20px 0 37px;
      padding-left: 16px;
      background: #f5f5f5;
      border: 1px solid #d3d3d3;

      .btn {
        position: absolute;
        width: 17px;
        height: 17px;
        transform: translateY(-50%);
        cursor: pointer;
      }
      .left {
        top: 0;
        bottom: 0;
        left: 4px;
        margin: auto 0;
        background-position: -280px -75px;

        &:hover {
          background-position: -260px -75px;
        }
      }
      .right {
        top: 0;
        bottom: 0;
        right: 10px;
        margin: auto 0;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
  }
`

export default NewDiscWrapper
