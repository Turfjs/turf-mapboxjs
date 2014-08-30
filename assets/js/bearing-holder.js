turf.bearing = function (point1, point2) {
    var coordinates1 = point1.geometry.coordinates
    var coordinates2 = point2.geometry.coordinates

    var lon1 = toRad(coordinates1[0])
    var lon2 = toRad(coordinates2[0])
    var lat1 = toRad(coordinates1[1])
    var lat2 = toRad(coordinates2[1])
    var a = Math.sin(lon2 - lon1) * Math.cos(lat2);
    var b = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);

    var bearing = toDeg(Math.atan2(a, b));

    return bearing
}

function toRad(degree) {
    return degree * Math.PI / 180
}

function toDeg(radian) {
    return radian * 180 / Math.PI;
}
