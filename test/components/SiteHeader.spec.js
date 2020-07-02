import {shallowMount} from '@vue/test-utils'
import SiteHeader from '../../components/SiteHeader'

const factory = () => {
  return shallowMount(SiteHeader, {});
};

describe('SiteHeader', () => {
  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  })
})
