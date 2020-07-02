import {RouterLinkStub, shallowMount} from '@vue/test-utils'
import ProjectLink from '../../components/ProjectLink'

const factory = () => {
  return shallowMount(ProjectLink, {
    propsData: {
      project: {
        uid: 'Test',
        data: {
          title: [{text: 'Test'}],
          client: {
            data: {name: 'Test'}
          },
          images: [
            {
              image: {
                '4k': {url: 'Test'},
                '2k': {url: 'Test'},
                '1080p': {url: 'Test'},
                'Mobile': {url: 'Test'},
              }
            }
          ],
          technologies: {
            technology: {
              technology: {
                id: 'Test',
                url: 'https://www.google.com/',
                title: 'Google'
              }
            }
          }
        }
      }
    },
    stubs: {
      NuxtLink: RouterLinkStub
    },
  });
};

describe('ProjectLink', () => {
  test('renders nuxt links properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toThrowErrorMatchingSnapshot();
  })
})
