import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      userInfo:null,
    },
    mutations: mutations,
    actions: actions,
    modules: {}
})
