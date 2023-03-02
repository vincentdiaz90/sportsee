class Format {
    constructor(data) {
        this._currentUserActivities = data;
        this._currentUserPerformances = data;
        this._currentUserInfo = data;
    }

    get CurrentUserActivities() {
        return this.dataResetActivity()
    }

    get CurrentUserPerformances() {
        return this.dataRessetPerformance()
    }
    
    get CurrentUserInfo() {
        return this.dataResetUserInfo()
    }


    /**
     * Format date in day formatter
     * @param {object} dataActivity.day
     * @returns {object} number of the day
     */

    dataResetActivity() {
        const currentUserActivities = this._currentUserActivities?.map(
            (el) => {
                if (el.day.split('-')[2].includes('0')) {
                    return {
                        ...el, currentDay: el.day.split('-')[2].split('')[1]
                    }
                }
                return { ...el, currentDay: el.day.split('-')[2] }     
            }
        )

        return currentUserActivities
    }

    dataRessetPerformance(){
        const skillsTab = ['Intensité', 'Vitesse', 'Force', 'Endurance','Energie','Cardio']
    
        /**
         * Format array dataperformances
         * @param {array} array
         * @returns array + new column name skill
         */    
    
        const currentUserPerformance = this._currentUserPerformances?.map(
            (el,key) => {
                for(let i = 0; i<skillsTab.length; i++){
                    return { ...el, skill : skillsTab[key] }
                }
            }
        )
        return currentUserPerformance
    }


    /**
     * Format into one type for score data (currently : score & todayScore) && Format the score in percentage
     * @param {object} score
     * @param {object} todayScore
     * @returns {object} score
     */

    dataResetUserInfo() {
            const currentUserInfo = this._currentUserInfo
                if(currentUserInfo.todayScore){
                    return { ...currentUserInfo, score: currentUserInfo.todayScore }
                }
                if(currentUserInfo.score){
                    return { ...currentUserInfo, scorePercent: Math.round(currentUserInfo.score * 100) }
                }     

        return currentUserInfo;
    }
}

export default Format
