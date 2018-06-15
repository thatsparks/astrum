import 'module-alias/register';
import getProjectData from '@appTemplate/js/core/utilities/get-project-data.js';
import limitedAssign from '@appTemplate/js/core/utilities/limited-assign.js';

export default {
    namespaced: true,
    state: {
        assets: {
            css: [],
            js: []
        },
        font_libraries: {
            typekit_code: null,
            typography_web_fonts: null,
            google_web_fonts: null
        }
    },
    mutations: {
        setInitialState(state, payload) {
            
            // Auto-override state values based on what was passed in
            Object.assign(state, limitedAssign(state, payload));
        }
    },
    actions: {
        setInitialState({ commit }) {

            // Load the project data
            getProjectData()
                .then(data => {

                    // If it's all good, commit to state
                    commit('info/setInitialState', data);
                })
                .catch(error => console.error(error));
        }
    }
};