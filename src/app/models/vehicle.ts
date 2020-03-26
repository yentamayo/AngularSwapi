export interface IVehiclesResponse {
    count: string;
    next: string;
    previous: string;
    results: Vehicle[];
}

export class Vehicle {
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    films: any[];
    pilots: any[];
    url: string;
    created: string;
    edited: string;
}