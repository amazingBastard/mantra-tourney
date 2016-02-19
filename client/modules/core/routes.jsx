import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/layout.jsx';
import PostList from './containers/postlist';
import PostNew from './containers/postnew';
import Post from './containers/post';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/new', {
    name: 'posts.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostNew/>)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });
}
