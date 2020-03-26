export interface IPeopleResponse {
    count: number;
    next: string;
    previous: string;
    results: Person[];
}

export class Person {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: any[];
    species: any[];
    starships: any[];
    vehicles: any[];
    url: string;
    created: string;
    edited: string;
}
