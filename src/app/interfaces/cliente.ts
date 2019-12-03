export interface Cliente{
    id?: number,
    nombre: string,
    telefonos?: {telefono:string}[],
    direcciones?: {direccion:string}[]
}