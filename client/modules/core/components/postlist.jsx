import React from 'react';

const PostList = ({posts}) => (
  <aspect className='postlist aspect'>
    {posts.map(post => (
      <figure className="post card" key={post._id}>
        <a href={`/post/${post._id}`}>
          <h4 className="title">{post.title}</h4>

          <h2 className="date">
            02/06/2016 - 02/07/2016
          </h2>

          <p className="prize">$2,000 prize</p>

          <p className="players">16 players</p>

          <p className="location">Online</p>
        </a>
      </figure>
    ))}
  </aspect>
);

export default PostList;
