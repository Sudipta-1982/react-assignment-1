import React from "react";

interface BookProps {
  logo: string;
  name: string;
  author: string;
  bookPrice: number;
}

export function Book(props: BookProps): JSX.Element {
  return (
    <div className="book-container">
      <img src={props.logo} alt="book picture" className="book-image" />
      <div className="book-title">
        <span>Title:</span>
        {props.name}
      </div>
      <div className="book-author">
        <span>Author:</span>
        {props.author}
      </div>
      <div className="book-price">
        <span>Price: </span> {props.bookPrice}$
      </div>
    </div>
  );
  


}

