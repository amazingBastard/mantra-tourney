import React from 'react';

const PostList = ({posts}) => (
  <div className='postlist'>
    <ul>
      {posts.map(post => (
        <li key={post._id}>
          <h4 className="title">{post.title}</h4>
          <h2 className="date">
            02/06/2016 - 02/07/2016
          </h2>
          <p className="prize">$2,000</p>
          <p className="location">Online</p>
          <a href={`/post/${post._id}`}>more details</a>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
