
const colorBoundaries = {
    // 0-15                    75 +
    // low  low mid mid high high
    'pm10': [20, 40, 60, 80, 100],
    'pm25': [12, 30, 40, 50, 70],
    'no2': [80, 160, 250, 340, 430],
    'ozone': [40, 75, 120, 150, 180]
    // 0: 0-40  1: 40-75  2: 75-120  3: 120-160  4: 160-200 5: 200+
};

export function getColorForPollutantAndValue(poll, val){
    if (!colorBoundaries[poll] || !Number.isInteger(val)) return 'grey';
    let arrayInd = 0;
    colorBoundaries[poll].forEach((item, ind) => {
        if (val > item) {
            arrayInd = ind + 1;
        }
    });
    switch (arrayInd) {
        case 0:
            return 'green';  // very low
        case 1:
            return 'blue';  // low
        case 2:
            return 'orange';  // med
        case 3:
            return 'orange';  // med
        case 4:
            return 'red';  // high
        case 5:
            return 'red';  // very high
        default:
            return 'grey'
    }
}

// TODO more detailed boundaries...using above, so not hardcoded/in one place so can share values with legend

export function getColorFromSiteCode(id_str, sites, pollutant){
    const ind = sites.map(x => x.site_code).indexOf(id_str);
    if (ind > -1){
        const val = sites[ind][pollutant];
        return getColorForPollutantAndValue(pollutant, val)
        switch (pollutant) {
            case 'pm10':
                if (val > 72) return 'red';
                if (val > 44) return 'orange';
                break;
                if (val > 72) return 'red';
                if (val > 44) return 'orange';
                if (val > 72) return 'red';
                if (val > 44) return 'orange';
                if (val > 72) return 'red';
                if (val > 44) return 'orange';
            case 'pm25':
                if (val > 50) return 'red';
                if (val > 28) return 'orange';
                break;
            case 'no2':
                if (val > 360) return 'red';
                if (val > 180) return 'orange';
                break;
            case 'ozone':
                if (val > 180) return 'red';
                if (val > 90) return 'orange';
                break;
            default:
                return 'grey';
        }
        if (val > 0) {
            return '#1e90ff';
        } return 'grey';
    } else console.log('not found');
    return 'grey'
}