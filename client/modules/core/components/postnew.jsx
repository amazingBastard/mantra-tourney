import React from 'react';

class PostNew extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <aspect className="new post aspect">
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <form className="new post form" onSubmit={this.createPost.bind(this)}>
          <input ref="titleRef" type="text" placeholder="Enter your post title."/>
          <textarea ref="contentRef" placeholder="Enter your post content."/>
          <button type="submit" className="primary button">Add New</button>
        </form>
      </aspect>
    );
  }

  createPost(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default PostNew;
