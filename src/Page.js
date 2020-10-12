import React from 'react';
import Posts from './Posts';
import './Page.css';

function Page() {
  return (
    <div className="page">
      <h1 className= "page-title"> Recent Posts </h1>
      <Posts />
    </div>
  );
}

export default Page;
