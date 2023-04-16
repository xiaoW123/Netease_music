import styled from 'styled-components'
export const AppItemWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 204px;
  box-sizing: border-box;
  > img {
    width: 140px;
    height: 140px;
  }
  .bottom {
    position: absolute;
    width: 100%;
    height: 27px;
    top: 113px;
    font-size: 12px;
    color: #ccc;
    background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat 0 -537px;
    .bottom_img {
      display: inline-block;
      width: 14px;
      height: 11px;
      margin: 9px 5px 9px 10px;
      vertical-align: middle;
      background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat 0 -24px;
    }
    .bottom_count {
      vertical-align: middle;
    }
    .bottom_bf {
      float: right;
      width: 16px;
      height: 17px;
      margin-top: 6px;
      margin-right: 10px;
      background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat 0 0;
      &:hover {
        background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat 0 -60px;
      }
    }
  }
  > p {
    font-size: 14px;
    margin-top: 8px;
    line-height: 20px;
    > a:hover {
      color: #000;
      text-decoration: underline;
    }
  }
  .cover {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 140px;
    height: 140px;
    background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat 0 0;
  }
`
