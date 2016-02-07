const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Toolbar from '../toolbar.jsx';

describe('core.components.toolbar', () => {
  it('should contain a link to create a new post', () => {
    const el = shallow(<Toolbar />);
    const newPostLink = el.find('a').at(1);
    expect(newPostLink.prop('href')).to.be.equal('/new-post');
  });
});
