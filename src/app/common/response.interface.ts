import { Tarea } from './tarea.interface';


export interface Response {
    page: number,
    per_page: number,
    total: number,
    total_page: number,
    data: Tarea[]
}