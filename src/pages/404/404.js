import React from 'react';
import './404.css';

const NotFound = () => {
  return (
    <div className="notFound">
      <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved.{' '}
          <p>
            Let's go <a href="/">home</a> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
