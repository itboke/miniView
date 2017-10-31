/*
 * @coder: hzl
 * @description: 
 * @params: 
 * @return: 
*/
import miniTab from './components/tab';
import tabItem from './components/tabItem';
import miniModal from './components/modal';
import miniButtom from './components/button';
import miniOverlay from './components/overlay';
import miniCarousel from './components/carousel';
import miniPageScrolling from './components/page-scrolling';
import miniSmsVerification from './components/sms-verification';
import miniAlert from './components/plugins/alert';
import '../css/index.scss';
const components = {
  miniTab: miniTab,
  tabItem: tabItem,
  miniModal: miniModal,
  miniButton: miniButtom,
  miniOverlay: miniOverlay,
  miniCarousel: miniCarousel,
  miniPagescrolling: miniPageScrolling,
  miniSmsVerification: miniSmsVerification
};
const plugins = {
  miniAlert: miniAlert
};
const miniView = {
  install: function(Vue) {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
    });
    Object.keys(plugins).forEach((key) => {
      Vue.use(plugins[key]);
    });
  }
};
export default miniView;