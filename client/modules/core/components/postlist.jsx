import React from 'react';

const PostList = ({posts}) => (
  <ul className='posts list'>
    {posts.map(post => (
      <li className="post item" key={post._id}>
        <a className="route link" href={`/post/${post._id}`}>
          <h4 className="title">{post.title}</h4>

          <h2 className="date">
            <span className="meta date-start">Feb 6</span>
            <divider className="divider helper">-</divider>
            <span className="meta date-end">Feb 7</span>
          </h2>

          <h1 className="meta prize">$2,000</h1>

          <p className="meta location left">Online</p>

          <p className="meta players right">16 <span className="players-label">players</span></p>
        </a>
      </li>
    ))}
  </ul>
);

export default PostList;
