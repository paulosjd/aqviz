
const colorBoundaries = {
    // 0-15                    75 +
    // low  low mid mid high high
    'pm10': [5, 8, 14, 19, 22],
    // 'pm10': [20, 40, 60, 80, 100],
    'pm25': [12, 30, 40, 50, 70],
    'no2': [80, 160, 250, 340, 430],
    'ozone': [40, 75, 120, 150, 180]
    // 0: 0-40  1: 40-75  2: 75-120  3: 120-160  4: 160-200 5: 200+
};

export function getColorForPollutantAndValue(poll, val){
    if (!colorBoundaries[poll] || !Number.isInteger(val)) return 'white';
    let arrayInd = 0;
    colorBoundaries[poll].forEach((item, ind) => {
        if (val > item) {
            arrayInd = ind + 1;
        }
    });
    switch (arrayInd) {
        case 0:
            return '#a6d854';  // very low
        case 1:
            return '#dce649';  // low
        case 2:
            return '#ffd92f';  // med-low
        case 3:
            return '#ffaf24';  // med-high
        case 4:
            return 'red';  // high
        case 5:
            return 'red';  // very high
        default:
            return 'white'
    }
}


// switch (arrayInd) {
//     case 0:
//         return '#a6d854';  // very low
//     case 1:
//         return '#e3ff33';  // low
//     case 2:
//         return '#ffd92f';  // med-low
//     case 3:
//         return '#ffd92f';  // med-high
//     case 4:
//         return 'red';  // high
//     case 5:
//         return 'red';  // very high
//     default:
//         return 'white'
// }

export function getColorFromSiteCode(id_str, sites, pollutant){
    const ind = sites.map(x => x.site_code).indexOf(id_str);
    if (ind > -1) {
        const val = sites[ind][pollutant];
        return getColorForPollutantAndValue(pollutant, val)
    }
    console.log('not found');
    return 'white'
}