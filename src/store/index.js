import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        newSrc: '',
        edits: false,
        alertControl: true
    },
    getters: {
        getName(state) {
            return state.user.name
        },
        getTitle(state) {
            return state.user.title
        },
        getMail(state) {
            return state.user.mail
        },
        getPhone(state) {
            return state.user.phone
        },
        getSrc(state) {
            return state.newSrc
        },
        getUrl(state) {
            return state.user.linkedinUrl
        },
        getTeam(state) {
            return state.user.teamControl
        },
        getEdit(state) {
            return state.edits
        },
        getAlert(state) {
            return state.alertControl
        }
    },
    mutations: {
        mutateUser(state, user_data) {
            state.user = user_data
        },
        mutateUrl(state, new_url) {
            state.newSrc = new_url
        },
        edit(state, control) {
            state.edits = control
        },
        updateAlert(state, payload) {
            state.alertControl = payload
        }

    },
    actions: {
        setUser(context, user_data) {
            context.commit('mutateUser', user_data)

        },
        setUrl(context, new_url) {
            context.commit('mutateUrl', new_url)
        }
    },

})