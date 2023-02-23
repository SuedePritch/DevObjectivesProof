import React from 'react'
export interface MyProps {
    message ?: string;
  };
export default class Class extends React.Component<MyProps> {
  render() {
    return (
      <div className='text-muted' >{this.props.message}</div>
    )
  }
}
