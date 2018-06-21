import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h5>{props.title}</h5>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;