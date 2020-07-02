import {RouterLinkStub, shallowMount} from '@vue/test-utils'
import SiteNavigation from '../../components/SiteNavigation'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faLayerGroup, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faLayerGroup, faFileAlt, faEnvelope, faGithub)

const factory = () => {
  return shallowMount(SiteNavigation, {
    data() {
      return {
        resume: 'Test',
      }
    },
    stubs: {
      NuxtLink: RouterLinkStub,
      FontAwesomeIcon
    },
    mocks: {
      $fetchState: {
        pending: false
      }
    }
  });
};

describe('SiteNavigation', () => {
  test('renders nuxt links properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toThrowErrorMatchingSnapshot();
  })
})
