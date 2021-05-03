import Vue from 'vue'
import Vuex from 'vuex'

import actions from '@/store/index/actions'
import mutations from '@/store/index/mutations'
import state from '@/store/index/state'
import getters from '@/store/index/getters'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state,
    mutations,
    actions,
    getters
})
