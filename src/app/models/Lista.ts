import { Producto } from "./Producto";
import { Proveedor } from "./Proveedor";

export interface Lista{
    id:number;
    listid: number;
    productid: number;
    list_product_state:string;
    producto:Producto;
    supplier:Proveedor;
}

export interface ListaParam{
    listid: number;
    productid: number;
    list_product_state:string;
}
export interface ListaParamUpdate{
    list_product_state:string;
}