import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class calls{
    arreglo: any =[];
    constructor(private http: HttpClient){

    }

    public reportePedidos(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/pedidos/reporte');
       //  return this.http.get<any>('https://profacoms.azurewebsites.net/pedidos/reporte');
    }
    public reporteProductos(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/productos/reporte');
       // return this.http.get<any>('https://profacoms.azurewebsites.net/productos/reporte');
    }
    public reporteVentas(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/ventas/reporte');
       // return this.http.get<any>('https://profacoms.azurewebsites.net/ventas/reporte');
    }
    public estadoPedido(): Observable<any>{
        //return this.http.get<any>('http://localhost:8080/estado_pedido');
        return this.http.get<any>('https://profacoms.azurewebsites.net/estado_pedido');
    }
    public contenidoPedido(): Observable<any>{
        //return this.http.get<any>('http://localhost:8080/pedidos_cont/reporte');
        return this.http.get<any>('https://profacoms.azurewebsites.net/pedidos_cont/reporte');
    }
    public municipios(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/municipios/municipio');
        //return this.http.get<any>('https://profacoms.azurewebsites.net/municipios/municipio');
     }
    public estadoProducto(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/estado');
        //return this.http.get<any>('https://profacoms.azurewebsites.net/estado');
    }
    public usuarios(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/usuario/ingreso');
        //return this.http.get<any>('https://profacoms.azurewebsites.net/usuario/ingreso');
    }


    public registrarPedido(body: any){
        //return this.http.post<any>('http://localhost:8080/pedidos/registrar',body);
        return this.http.post<any>('https://profacoms.azurewebsites.net/pedidos/registrar',body);
    }
    public registrarProducto(body: any){
        // return this.http.post<any>('http://localhost:8080/productos/ingresar',body);
        return this.http.post<any>('https://profacoms.azurewebsites.net/productos/ingresar',body);
    }
    public registrarVenta(body: any){
        //return this.http.post<any>('http://localhost:8080/ventas/registrar',body);
        return this.http.post<any>('https://profacoms.azurewebsites.net/ventas/registrar',body);
    }
    public consultaPedido(data: number): Observable<any>{
        return this.http.get<any>(`http://localhost:8080/pedidos/consulta/${data}`);
        //return this.http.get<any>(`https://profacoms.azurewebsites.net/pedidos/consulta/${data}`);
    }
    }

