// Code your solution in this file!

let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function(drivers) {
    return [drivers[2], drivers[3]];
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(ride) {
    return function(fare) {
        return ride * fare;
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, other) {
    if (other === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (other === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}