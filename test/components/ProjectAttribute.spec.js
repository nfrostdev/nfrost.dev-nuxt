import {shallowMount} from '@vue/test-utils'
import ProjectAttribute from "~/components/ProjectAttribute";

const slot = '<div class="test">Test</div>';

const factory = () => {
  return shallowMount(ProjectAttribute, {
    propsData: {
      label: "Testing"
    },
    slots: {
      default: slot
    }
  });
};

describe('ProjectAttribute', () => {
  test('renders properly with label', () => {
    const wrapper = factory();
    expect(wrapper.html()).toContain('<div class="project__attribute__label">Testing</div>');
  })
  test('renders properly has slot filled', () => {
    const wrapper = factory();
    expect(wrapper.html()).toContain(slot);
  })
})
