import styled from 'styled-components'

export const HotItemWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 10px;
  &:hover span:last-child {
    background-color: #f4f4f4;
  }
  span:first-child {
    width: 62px;
    height: 62px;
    background-color: black;
  }
  span:last-child {
    box-sizing: border-box;
    width: 150px;
    padding: 10px 0 10px 15px;
    background-color: #fafafa;
    border: 1px solid #e9e9e9;
    border-left: none;
    > h4 {
      font-weight: 500;
      margin-bottom: 8px;
    }
    > p {
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #666666;
    }
  }
`
