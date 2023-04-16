import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
  width: 100%;
  height: 285px;
  .top_banner_box {
    box-sizing: border-box;
    display: flex;
    height: 100%;
  }
  /* 轮播 */
  .top_banner_img {
    position: relative;
    width: 730px;
    height: 100%;
    .top_banner_item {
      width: 100%;
      > img {
        width: 100%;
        height: 285px;
      }
    }
  }
  /* Download */
  .top_banner_download {
    position: relative;
    box-sizing: border-box;
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
      text-align: center;
      color: #8d8d8d;
    }
  }
  /* left and right button */
  .top_banner_left {
    position: absolute;
    width: 37px;
    height: 67px;
    left: -68px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${require('@/assets/img/banner-control-left.png')})
      no-repeat;
    &:hover {
      background-color: #333;
      opacity: 0.3;
    }
  }
  .top_banner_right {
    position: absolute;
    width: 37px;
    height: 67px;
    right: -332px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${require('@/assets/img/banner-control-right.png')})
      no-repeat;
    &:hover {
      background-color: #333;
      opacity: 0.3;
    }
  }
`
