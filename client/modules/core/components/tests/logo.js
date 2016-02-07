const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Logo from '../logo.jsx';

describe('core.components.logo', () => {
  it('should contain a link to root', () => {
    const el = shallow(<Logo />);
    const logo = el.find('a').at(0);
    expect(logo.text()).to.be.equal('tourney.news');
    expect(logo.prop('href')).to.be.equal('/');
  });
});
