import React from 'react';

const PostList = ({posts}) => (
  <aspect className='posts aspect'>
    {posts.map(post => (
      <figure className="post figure" key={post._id}>
        <a className="route link" href={`/post/${post._id}`}>
          <h4 className="title">{post.title}</h4>

          <h2 className="date">
            <span className="meta date-start"><small className="date-label">start</small> Feb 6, 2016</span>
            <divider className="divider helper">-</divider>
            <span className="meta date-end"><small className="date-label">end</small>Feb 7, 2016</span>
          </h2>

          <h1 className="meta prize">$2,000</h1>

          <p className="meta location left">Online</p>

          <p className="meta players right">16 <span className="players-label">players</span></p>
        </a>
      </figure>
    ))}
  </aspect>
);

export default PostList;
