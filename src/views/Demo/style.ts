import styled from 'styled-components'

const DemoWrapper = styled.div`
  .container {
    display: flex;
    height: 285px;

    background-color: skyblue;

    .left {
      flex: 1;
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
