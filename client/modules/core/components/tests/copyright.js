const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Copyright from '../copyright.jsx';

describe('core.components.copyright', () => {
  it('should contain a link to the community', () => {
    const el = shallow(<Copyright />);
    const community = el.find('a').at(0);
    expect(community.text()).to.be.equal('StarCraft');
    expect(community.prop('href')).to.be.equal('https://www.reddit.com/r/starcraft/');
  });

  it('should contain a link to the code', () => {
    const el = shallow(<Copyright />);
    const code = el.find('a').at(0);
    expect(code.text()).to.be.equal('GitHub');
    expect(code.prop('href')).to.be.equal('https://github.com/amazingBastard/mantra-tourney');
  });
});
