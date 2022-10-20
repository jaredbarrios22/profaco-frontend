import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class calls{

    constructor(private http: HttpClient){

    }

    public reportePedidos(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/pedidos/reporte');
    }
    public reporteProductos(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/productos/reporte');
    }
    public reporteVentas(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/ventas/reporte');
    }
    public estadoPedido(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/estado_pedido');
    }
    public contenidoPedido(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/pedidos_cont/reporte');
    }
    public municipios(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/municipios/municipio');
     }
    public estadoProducto(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/estado');
    }
    }

