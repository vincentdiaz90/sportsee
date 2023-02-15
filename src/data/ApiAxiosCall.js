import axios from 'axios';

/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {object} Response
 */
function getUser(userId) {
	try {
		const response = axios.get(`http://localhost:3000/user/${userId}`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

//console.log(getUser(12))


/**
 * Get user activity 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 function getUserActivity(userId) {
	try {
		const response = axios.get(`http://localhost:3000/user/${userId}/activity`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user average session 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 function getUserAverageSessions(userId) {
	try {
		const response = axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user performance 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 function getUserPerformance(userId) {
	try {
		const response = axios.get(`http://localhost:3000/user/${userId}/performance`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

export {getUser, getUserActivity, getUserAverageSessions, getUserPerformance}