const API_URL = "https://1furniturerestoration.com/api";

export interface PaginationData<T> {
    count: number;
    next: number | null;
    previous: number | null;
    results: T[];
}

export interface Post {
    id: number;
    slug: string;
    title: string;
    description: string;
    h1: string;
    name: string;
    created_at: string;
    text1: string;
    text2: string;
    image1: string | null;
    image2: string | null;
    services: ServiceShort[];
    anchor_from_service?: string;
}

export interface State {
    id: number;
    name: string;
}

export interface Location {
    id: number;
    location_name: string;
    state: State;
    population: number;
    geo_latitude: number;
    geo_longitude: number;
}

export interface Photo {
    id: number;
    caption: string;
    photo: string;
    location: Location | null;
    order: number;
    type_of: string;
    created_at?: string;
}

export interface ServiceShort {
    id: number;
    slug: string;
    name: string;
    offer_image: string | null;
    offer_image_before: string | null;
    offer_image_after: string | null;
    offer_price: string;
    offer_is_friendly: boolean;
    anchor_from_blog: string;
    anchor_from_parent: string;
}

export interface Service extends ServiceShort {
    media: Photo[];
    description: string;
    h1: string;
    text1: string;
    text2: string;
    main_video: string;
    main_image: string | null;
    main_menu: boolean;
    image1: string | null;
    image2: string | null;
    children: ServiceShort[];
    created_at: string;
    text_for_location: object | any;
    blogs?: Post[];
}

export interface Review {
    id: number;
    service: number;
    location: number | null;
    location_data: Location | null;
    name: string;
    stars: number;
    review_text: string;
    image1: string | null;
    image2: string | null;
    created_at: string;
}

export interface Booking {
    id: number;
    time: string;
    service: number;
    location: number | null;
}

export async function fetchStates(
    limit = 20,
    offset = 0
): Promise<PaginationData<Photo>> {
    const res = await fetch(
        `${API_URL}/states?limit=${limit}&offset=${offset}`
    );
    return res.json();
}

export async function fetchLocations(
    limit = 20,
    offset = 0
): Promise<PaginationData<Location>> {
    const res = await fetch(`${API_URL}/locations/?is_active=1`);
    return res.json();
}

export async function fetchBlog(
    limit = 20,
    offset = 0
): Promise<PaginationData<Post>> {
    const res = await fetch(`${API_URL}/blogs?limit=${limit}&offset=${offset}`);
    return res.json();
}

export async function fetchPostById(id: number | string): Promise<Post> {
    const res = await fetch(`${API_URL}/blogs/${id}`);
    return res.json();
}

export async function fetchPhotos(
    limit = 20,
    offset = 0
): Promise<PaginationData<Photo>> {
    const res = await fetch(
        `https://1furniturerestoration.com/api/media?limit=${limit}&offset=${offset}`
    );
    return res.json();
}

export async function fetchServices(
    limit = 20,
    offset = 0
): Promise<PaginationData<Service>> {
    const res = await fetch(`${API_URL}/service/`);
    return res.json();
}

export async function fetchServiceById(id: number | string): Promise<Service> {
    const res = await fetch(`${API_URL}/service/${id}`);
    return res.json();
}

export async function fetchServiceByIdandLoc(
    id: number | string,
    locationId: number | null | string
): Promise<Service> {
    const res = await fetch(
        `https://1furniturerestoration.com/api/service/${id}/?for_location=${locationId}`
    );
    return res.json();
}

export async function fetchReviews(
    limit = 20,
    offset = 0
): Promise<PaginationData<Review>> {
    const res = await fetch(
        `${API_URL}/review?limit=${limit}&offset=${offset}`
    );
    return res.json();
}

export async function createBooking(payload: Booking): Promise<Service> {
    const res = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "content-type": "application/json",
        },
    });
    return res.json();
}

export async function getCurrentLocation(): Promise<Location> {
    const res = await fetch(`${API_URL}/location/find/`);
    return res.json();
}

export function getPaggPage(count = 0, page = 1) {
    let num = Math.ceil(count / page);
    let arr: any = [];
    for (let i = 0; i < num; i++) {
        arr.push(i);
    }
    arr.length > 5 && arr.splice(-1, 0, ". . .");
    // console.log(arr);
    return arr;
}
