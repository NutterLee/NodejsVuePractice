import Vue from 'vue'
import App from './components/App'
import Router from 'vue-router'
import './less/style.less'


var VueResource = require('vue-resource');
Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(Router);
var router = new Router({
    history: false
})

routerConfig(router);
router.start(App,'#start');
window.router = router;


function routerConfig(router) {
	router.map({
		'/provincelist':{
			name:'provincelist',
			component:function(resolve){
				require(['./components/ProvinceList.vue'],resolve);
			}
		},
		'/citylist':{
			name:'citylist',
			component:function(resolve){
				require(['./components/CityList.vue'],resolve);
			}
		}
	});

	router.afterEach(function(transition) {
        // if (transition.to && transition.to.pageId) {
        //     cUtil.sendUbt(transition.to);
        // }
    })

	router.redirect({
		"*":'/provincelist'
	});
}