import React from 'react';


export default function DisLikeButton(props) {
  return (
    <button className={props.class} onClick={props.onclick}>{`${props.title} | ${props.count}`}</button>
  );

}
