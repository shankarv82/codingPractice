// You are given n activities with their start and finish times. 
// Select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.

const comparatorFn = (activityA, activityB) => activityA[1] - activityB[1];

const selectActivities = (activities) => {
    const selectedActivities = [];
    
    // Pre conditions
    if (!activities.length) {
        return selectedActivities;
    }
    
    // Sort the array by finish time
    activities = activities.sort(comparatorFn);

    let i=0;
    const n = activities.length;

    selectedActivities.push(activities[0]);
    
    // Iterate and compare end times
    for (let j=1; j<n; j++) {
        if (activities[j][0] >= activities[i][1]) {
            i = j;
            selectedActivities.push(activities[j]);
        }
    }

    return selectedActivities;
}
const selectedActivities = selectActivities([[5, 9], [1, 2], [3, 4], [0, 6],[5, 7], [8, 9]]);
console.log(selectedActivities);
