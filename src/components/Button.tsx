import React, { Children } from 'react'

interface Props{
  children:string;
  color?:'primary' | 'secondary' |'danger';
  onClicked:()=>void;
}

const Button = ({children, onClicked , color='primary'}:Props) => {
  return (
    <button className={'btn btn-'+color} onClick={onClicked}>{children}</button>
  )
}

export default Button