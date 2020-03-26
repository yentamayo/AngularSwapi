export interface IStarshipsResponse {
    count: string;
    next: string;
    previous: string;
    results: Starship[];
}

export class Starship {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: any[];
    pilots: any[];
    url: string;
    created: string;
    edited: string;
}
