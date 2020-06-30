export const state = () => ({
    posts: [],
    users: []
})

export const mutations = {
    frontPagePost(state, posts) {
        state.posts = posts
    },

    frontPageUsers(state, users) {
        state.users = users
    }
}