import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  .top_banner_bgimg {
    width: 100%;
    height: 285px;
  }

  .top_banner_box {
    display: flex;
  }
  .top_banner_download {
    position: relative;
    width: 100%;
    height: 285px;
    background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
    > a {
      cursor: pointer;
      position: absolute;
      display: block;
      top: 185px;
      left: 19px;
      width: 215px;
      height: 56px;
      z-index: 9;
      &:hover {
        background-color: #333;
        opacity: 0.3;
      }
    }
    > p {
      width: 100%;
      position: absolute;
      font-size: 12px;
      bottom: 10px;
      text-align: center;
      /* left: 50%; */
      /* transform: translateX(-50%); */
      text-align: center;
      color: #8d8d8d;
    }
  }
`
