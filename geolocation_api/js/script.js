document.getElementById('getLocation').addEventListener('click',() => {
    if (navigator.geolocation){
        const option = {
            enableHighAccuracy: true,
            timeout: 10000,
        };
        navigator.geolocation.getCurrentPosition(displayLocation,showError,option);
    } else {
        document.getElementById('LocationResult').innerText='GeoLocation is not supported on this browser';
    }
});

function displayLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    var url = `https://www.google.com/maps/@${lat},${lon},15z?entry=ttu`
    document.getElementById('LocationResult').innerHTML = `
        Latitude: ${lat} <br>
        Longitude: ${lon}
    `;
    window.open(url,'_blank');
}

function showError(error) {
    let message = '';
    switch (error.code){
        case error.PERMISSION_DENIED:
            message = 'User denied the request for geolocation';
            break;
        case error.POSITION_UNAVAILABLE:
            message = 'Location information is unavailable';
            break;
        case error.TIMEOUT:
            message = 'The request to get user location timed out';
            break;
        case error.UNKNOWN_ERROR:
            message = 'An unknown error occured';
            break;
    }
    document.getElementById('LocationResult').innerText = message;
}
