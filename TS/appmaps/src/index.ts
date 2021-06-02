import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const firstUser = new User();
const firstCompany = new Company();

const customMap = new CustomMap("map", firstCompany.location);
customMap.addMarker(firstUser);
customMap.addMarker(firstCompany);

// console.log("whooo is here");
// console.log(`
// User:
//     name: ${firstUser.name}
//     lat: ${firstUser.location.lat}
//     lng: ${firstUser.location.lng}
// `);
// console.log(`
// Company:
//     name: ${firstCompany.companyName}
//     lat: ${firstCompany.location.lat}
//     lng: ${firstCompany.location.lng}
// `);
