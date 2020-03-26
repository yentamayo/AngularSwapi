export interface ISpeciesResponse {
    count: string;
    next: string;
    previous: string;
    results: Specie[];
}

export class Specie {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: any[];
    films: any[];
    url: any[];
    created: string;
    edited: string;
}
