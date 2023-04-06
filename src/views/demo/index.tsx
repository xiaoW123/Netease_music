import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}
interface IState {
  message: string
  counter: number
}
export default class Demo01 extends PureComponent<IProps, IState> {
  // constructor(props: IProps) {
  //   super(props)

  //   this.state = {
  //     message: 'Hello world',
  //     counter: 100
  //   }
  // }
  // name = '123'
  //简写：
  state = {
    message: 'Hello world',
    counter: 100
  }

  render(): React.ReactNode {
    return (
      <div>
        <div>name:{this.props.name}</div>
        <div>message: {this.state.message}</div>
        <div>counter: {this.state.counter}</div>
      </div>
    )
  }
}
