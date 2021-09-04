export const event = {
    namespaced: true,
    state: {
        events: [
          {
            eventNo: 1,
            name: "Vue&TS勉強会",
            start: "2021-09-02",
            end: "2021-09-03",
            color: "blue",
            detail: "詳細です詳細です",
            timed: false
          },
          {
            eventNo: 2,
            name: "Vue.js応用勉強会",
            start: "2021-09-09",
            end: "2021-09-10",
            color: "green",
            detail: "詳細です詳細です",
            timed: false
          }
        ]
    },
    getters: {
        event: state => eventNo => {
            return state.events.find(value => value.eventNo == eventNo);
        }
    },
    mutations: {
        updateEvents(state, value) {
            state.events.push(value);
        }
    },
    actions: {
        createEvent({ commit }, payload) {
          commit("updateEvents", payload);
        }
    }
};