import { User } from "./User";
import { Company } from "./Company";

const firstUser = new User();
const firstCompany = new Company();
console.log("whooo is here");
console.log(`
User:
    name: ${firstUser.name}
    lat: ${firstUser.location.lat}
    lng: ${firstUser.location.lng}
`);
console.log(`
Company:
    name: ${firstCompany.companyName}
    lat: ${firstCompany.location.lat}
    lng: ${firstCompany.location.lng}
`);

let map: google.maps.Map;

// function initMap(): void {
//     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// }

new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 0, lng: 0 },
    // center: firstCompany.location,
});
