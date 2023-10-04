const dynastyReign = [
    { dynasty: 'Dynasty A', start: 'MCMXC', end: 'MMX' },
    { dynasty: 'Dynasty B', start: 'MD', end: 'MCMXC' },
    { dynasty: 'Dynasty C', start: 'MCM', end: 'MM' },
];

function convertYear(romanYear) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = romanYear.length - 1; i >= 0; i--) {
        const currentChar = romanYear[i];
        const currentValue = romanNumerals[currentChar];

        if (currentValue === undefined) {
            return "Invalid";
        }

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
        return "No Data";
    }

    let longestReign = 0;
    let longestDynastyName = "";

    for (let i = 0; i < dynastyReign.length; i++) {
        const entry = dynastyReign[i];
        const startYear = convertYear(entry.start);
        const endYear = convertYear(entry.end);

        if (startYear === "Invalid" || endYear === "Invalid") {
            continue;
        }

        const reignDuration = endYear - startYear;

        if (reignDuration > longestReign) {
            longestReign = reignDuration;
            longestDynastyName = entry.dynasty;
        }
    }

    return longestDynastyName;
}

console.log(longestDynasty(dynastyReign));