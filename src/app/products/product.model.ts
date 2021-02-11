export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    addedToCart: boolean;
    desc: string;
}

export interface Cart {
    id: number;
    name: string;
}