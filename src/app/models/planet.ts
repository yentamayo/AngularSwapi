export interface IPlanetsResponse {
    count: string;
    next: string;
    previous: string;
    results: Planet[];
}

export class Planet {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: any[];
    films: any[];
    url: string;
    created: string;
    edited: string;
}