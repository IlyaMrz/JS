export interface Markable {
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    markContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string, location: { lat: number; lng: number }) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: location,
        });
    }

    addMarker(markableItem: Markable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markableItem.location.lat,
                lng: markableItem.location.lng,
            },
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markableItem.markContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
