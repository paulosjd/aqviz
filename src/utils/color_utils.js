
const colorBoundaries = {
    'pm10': [10, 20, 30, 40, 50, 60, 70, 80, 100],
    'pm25': [6, 12, 18, 24, 30, 36, 42, 50, 70],
    'no2': [40, 80, 120, 160, 200, 250, 340, 430],
    'ozone': [20, 40, 60, 80, 100, 125, 150, 180]
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
            return '#a6d854';
        case 1:
            return '#dce649';
        case 2:
            return '#e6be1f';
        case 3:
            return '#ffaf24';
        case 4:
            return '#ff9c1c';
        case 5:
            return '#ff8308';
        case 6:
            return '#ff7105';
        case 7:
            return '#ff5c16';
        case 8:
            return '#ff4411';
        case 9:
            return '#ff0500';
        default:
            return 'white'
    }
}

export function getColorFromSiteCode(id_str, sites, pollutant){
    const ind = sites.map(x => x.site_code).indexOf(id_str);
    if (ind > -1) {
        const val = sites[ind][pollutant];
        return getColorForPollutantAndValue(pollutant, val)
    }
    console.log('not found');
    return 'white'
}