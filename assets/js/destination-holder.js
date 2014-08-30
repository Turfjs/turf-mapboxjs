turf.destination = function (point1, distance, bearing, units) {
    var coordinates1 = point1.geometry.coordinates
    var longitude1 = toRad(coordinates1[0])
    var latitude1 = toRad(coordinates1[1])
    var bearing_rad = toRad(bearing)

    var R = 0
    switch (units) {
    case 'miles':
        R = 3960
        break
    case 'kilometers':
        R = 6373
        break
    case 'degrees':
        R = 57.2957795
        break
    case 'radians':
        R = 1
        break
    }

    var latitude2 = Math.asin(Math.sin(latitude1) * Math.cos(distance / R) +
        Math.cos(latitude1) * Math.sin(distance / R) * Math.cos(bearing_rad));
    var longitude2 = longitude1 + Math.atan2(Math.sin(bearing_rad) * Math.sin(distance / R) * Math.cos(latitude1),
        Math.cos(distance / R) - Math.sin(latitude1) * Math.sin(latitude2));

    return turf.point(toDeg(longitude2), toDeg(latitude2))
};

function toRad(degree) {
    return degree * Math.PI / 180
}

function toDeg(rad) {
    return rad * 180 / Math.PI
}
