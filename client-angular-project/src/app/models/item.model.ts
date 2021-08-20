import { Product } from './product.model';

export class Item {
    product: Product;
    quantity: number;
    constructor() {
        this.product = new Product();
        this.quantity = 0;
    }
}