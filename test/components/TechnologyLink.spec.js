import {shallowMount} from '@vue/test-utils'
import TechnologyLink from '../../components/TechnologyLink'

const factory = () => {
  return shallowMount(TechnologyLink, {
    propsData: {
      technology: {
        url: 'https://www.google.com/',
        title: 'Google'
      }
    }
  });
};

describe('TechnologyLink', () => {
  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  })
  test('has link', () => {
    const wrapper = factory();
    expect(wrapper.html()).toContain('<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" class="technology-link">Google</a>');
  })
})
