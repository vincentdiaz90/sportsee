import axios from 'axios'

const url = axios.create({
    baseURL: 'http://localhost:3000/user/',
    headers: {
        Accept: 'application/json',
    },
})

/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {object} Response
 */
async function getUser(userId) {
    try {
        const response = await url.get(`/${userId}`)
        //console.log(response.data.data)
        return response.data.data
    } catch (e) {
        console.log(e)
    }
}

/**
 * Get user activity
 *
 * @param {string} id User id
 * @returns {object} Response
 */
async function getUserActivity(userId) {
    try {
        const response = await url.get(`/${userId}/activity`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

/**
 * Get user average session
 *
 * @param {string} id User id
 * @returns {object} Response
 */
async function getUserAverageSessions(userId) {
    try {
        const response = await url.get(`/${userId}/average-sessions`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

/**
 * Get user performance
 *
 * @param {string} id User id
 * @returns {object} Response
 */
async function getUserPerformance(userId) {
    try {
        const response = await url.get(`/${userId}/performance`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export { getUser, getUserActivity, getUserAverageSessions, getUserPerformance }
