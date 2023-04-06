import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background: #242424;
  border-bottom: 1px solid #000;
  .header-box {
    height: 100%;
    // logo 模块
    .logo {
      float: left;
      width: 176px;
      height: 69px;
      background-position: 0 0;
    }
    // 导航栏模块
    ul {
      position: relative;
      float: left;
      width: 508px;
      height: 69px;
      display: flex;
      &::before {
        content: '';
        position: absolute;
        display: inline-block;
        z-index: 999;
        top: 21px;
        right: -20px;
        width: 28px;
        height: 19px;
        background-color: pink;
        background: url(${require('@/assets/img/sprite_01.png')}) no-repeat -190px
          0;
      }
      > li {
        > a {
          position: relative;
          display: inline-block;
          font-size: 14px;
          line-height: 69px;
          text-align: center;
          padding: 0 19px;
          color: #ccc;
        }
      }
    }
    // 登录模块
    .header-login {
      float: right;
      height: 100%;
      .login-v1 {
        float: left;
        display: flex;
        align-items: center;
        width: 158px;
        height: 100%;
        > span {
          border-radius: 32px;
          font-size: 12px;
          .ant-input-prefix {
            font-size: 16px;
            color: #ccc;
          }
        }
      }
      .login-v2 {
        float: left;
        display: flex;
        align-items: center;
        width: 90px;
        height: 100%;
        margin: 0 15px;
        > a {
          display: inline-block;
          width: 100%;
          height: 30px;
          font-size: 12px;
          text-align: center;
          line-height: 30px;
          border-radius: 20px;
          color: #ccc;
          border: 1px solid #4f4f4f;
          &:hover {
            color: #fff;
            border: 1px solid #fff;
          }
        }
      }
      .login-v3 {
        float: left;
        width: 28px;
        height: 100%;
        line-height: 70px;

        > a {
          color: #787878;
          font-size: 12px;
          &:hover {
            color: #666;
            text-decoration: underline;
          }
        }
      }
    }
  }
  .m-subnav-up {
    height: 5px;
    background-color: #c20c0c;
  }
  .active {
    color: #fff !important;
    background-color: #000;
    ::after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 12px;
      height: 7px;
      left: 50%;
      bottom: -1px;
      transform: translateX(-50%);
      /* background-color: #fff; */
      background: url(${require('@/assets/img/sprite_01.png')}) no-repeat -226px
        0;
    }
  }
`
