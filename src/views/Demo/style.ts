import styled from 'styled-components'

const DemoWrapper = styled.div`
  .container {
    display: flex;
    height: 285px;

    background-color: skyblue;

    .left {
      flex: 1;
      .item {
        font-size: 64px;
        font-weight: 700;
        line-height: 285px;
        text-align: center;
        color: #fff;
      }
    }
    .right {
      box-sizing: border-box;

      width: 254px;
      border: 1px solid #333;
      background-color: #fff;
    }
  }
`

export default DemoWrapper
