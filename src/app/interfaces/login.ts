import { Permiso } from './permisos';

export interface Login{
    respuesta?: string;
    apikey?: string;
    usuario?: string;
    password?: string;
    permisos?: Permiso[]
}