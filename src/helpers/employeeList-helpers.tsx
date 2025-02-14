export const colorOfDay = (time: string) => {
    // Determining time of day for CSS coloring
    const morning = ["06", "07", "08", "09", "10"];
    const midDay = ["11", "12", "13"];
    const evening = ["14", "15", "16", "17", "18"];

    // time comes over as "12:30" and must compare the first 2 numbers only
    let t = time[0] + time[1];

    // Determines CSS return statement
    if (morning.includes(t)) {
        return "morning";
    } else if (midDay.includes(t)) {
        return "midDay";
    } else if (evening.includes(t)) {
        return "evening";
    } else {
        return "bg-black text-white"
    }
};

export const titleCase = (str: string): string => str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');