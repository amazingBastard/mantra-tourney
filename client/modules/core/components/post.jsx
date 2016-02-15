import React from 'react';
import CommentList from '../../comments/containers/comment_list.js';

const Post = ({post}) => (
  <aspect className="post aspect">
    {post.saving ? <p>Saving...</p> : null}
    <h2 className="title">{post.title}</h2>
    <p className="post-content">
      {post.content}
    </p>
    <div className="post-comments">
      <h4>Comments</h4>
      <CommentList postId={post._id}/>
    </div>
  </aspect>
);

export default Post;
