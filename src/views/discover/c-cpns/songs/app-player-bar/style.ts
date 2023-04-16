import styled from 'styled-components'

interface IPlayMode {
  playMode: number
}

export const AppPlayerBarWrapper = styled.div<IPlayMode>`
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 53px;
  background: url(${require('@/assets/img/playbar_sprite.png')}) 1px 0;
  padding-top: 3px;
  z-index: 999;
  .play_bar_box {
    display: flex;
  }
  .play_bar_left {
    display: flex;
    width: 137px;
    height: 52px;
    align-items: center;
    > span {
      cursor: pointer;
    }
    span:first-child {
      background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat 0 -130px;
      &:hover {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -30px -130px;
      }
    }
    span:last-child {
      background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -80px -130px;
      &:hover {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -110px -130px;
      }
    }
    span:first-child,
    span:last-child {
      width: 28px;
      height: 28px;
    }
    .left_bfzt {
      width: 36px;
      height: 36px;
      margin: 0 8px;
      background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat 0 -204px;
      &:hover {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -40px -204px;
      }
    }
    .left_bfzt_f {
      width: 36px;
      height: 36px;
      margin: 0 8px;
      background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat 0 -165px;
      &:hover {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -40px -165px;
      }
    }
  }
  .play_bar_center {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-top: 3px;
    width: 620px;
    height: 48px;
    .center_img {
      width: 34px;
      height: 35px;
    }
    .center_xx {
      width: 581px;
      height: 40px;
      padding-left: 20px;
      > span {
        box-sizing: border-box;
        margin-top: 0;
        font-size: 12px;
        margin-right: 15px;
      }
      .center_xx_span1 a {
        color: #e8e8e8;
        &:hover {
          text-decoration: underline;
        }
      }
      .center_xx_span2 a {
        color: #9b9b9b;
        &:hover {
          text-decoration: underline;
        }
      }
      .center_xx_span1 i {
        cursor: pointer;
        display: inline-block;
        width: 19px;
        height: 17px;
        margin-left: 5px;
        vertical-align: middle;
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat
          0 -57px;
        &:hover {
          background: url(${require('@/assets/img/playbar_sprite.png')})
            no-repeat -20px -57px;
        }
      }
      .center_xx_span2 i {
        display: inline-block;
        width: 14px;
        height: 15px;
        margin-left: 10px;
        vertical-align: middle;
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -110px -103px;
        &:hover {
          background: url(${require('@/assets/img/playbar_sprite.png')})
            no-repeat -130px -103px;
        }
      }
    }
  }
  .ant-slider {
    width: 466px;
    height: 9px;
    margin: 3px 0;
    .ant-slider-rail {
      width: 466px;
      height: 9px;
      border-radius: 9px;
      background: url(${require('@/assets/img/progress_bar.png')}) no-repeat 0 0;
    }
    .ant-slider-track {
      height: 9px;
      border-radius: 9px;
      background: url(${require('@/assets/img/progress_bar.png')}) no-repeat 0 -65px;
    }
    .ant-slider-handle {
      width: 22px;
      height: 24px;
      border: none;
      margin-top: -3px;
      background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat 0 -250px;
    }
    .ant-slider-handle::after {
      display: none;
    }
    .ant-slider-handle::before {
      display: none;
    }
    .ant-slider-step {
      width: 466px;
      height: 9px;
    }
  }
  .jdt {
    position: relative;
  }
  .jdt .jdt_cs {
    position: absolute;
    display: flex;
    font-size: 12px;
    bottom: -8px;
    right: 13px;
    width: 70px;
    height: 14px;
    /* background-color: red; */
    color: #797979;
    text-shadow: 0 1px 0 #121212;
    div:first-child {
      color: #fff;
    }
  }
  .play_bar_right {
    display: flex;
    margin-top: 10px;
    width: 180px;
    height: 25px;
    /* background-color: red; */
    div:first-child {
      display: flex;
      width: 90px;
      padding-right: 10px;
      > span {
        width: 25px;
        height: 25px;
        margin-left: 3px;
      }
      .left_icon1 {
        background: url(${require('@/assets/img/icon1.png')}) no-repeat 0 0;
        &:hover {
          background: url(${require('@/assets/img/icon1.png')}) no-repeat 0 -25px;
        }
      }
      .left_icon2 {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -88px -163px;
        &:hover {
          background: url(${require('@/assets/img/playbar_sprite.png')})
            no-repeat -88px -189px;
        }
      }
      .left_icon3 {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -114px -163px;
        &:hover {
          background: url(${require('@/assets/img/playbar_sprite.png')})
            no-repeat -114px -189px;
        }
      }
    }

    div:last-child {
      display: flex;
      padding-left: 10px;
      border-left: 1px solid #333;
      > span {
        width: 25px;
        height: 25px;
        margin-left: 3px;
      }
      .right_icon1 {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -2px -248px;
        &:hover {
          background: url(${require('@/assets/img/playbar_sprite.png')})
            no-repeat -31px -248px;
        }
      }
      .right_icon2 {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat;
        background-position: ${(props) => {
          switch (props.playMode) {
            case 1:
              return '-66px -248px'
            case 2:
              return '-66px -344px'
            default:
              return '-3px -344px'
          }
        }};
        &:hover {
          background: url(${require('@/assets/img/playbar_sprite.png')})
            no-repeat;
          background-position: ${(props) => {
            switch (props.playMode) {
              case 1:
                return '-93px -248px'
              case 2:
                return '-93px -344px'
              default:
                return '-33px -344px'
            }
          }};
        }
      }
      .right_icon3 {
        width: 60px;
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -42px -68px;
        &:hover {
          background: url(${require('@/assets/img/playbar_sprite.png')})
            no-repeat -42px -98px;
        }
      }
    }
  }
`
