export interface IFilmsResponse {
    count: number;
    next: string;
    previous: string;
    results: Film[];
}

export class Film {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    species: any[];
    starships: any[];
    vehicles: any[];
    characters: any[];
    planets: any[];
    url: string;
    created: string;
    edited: string;
}