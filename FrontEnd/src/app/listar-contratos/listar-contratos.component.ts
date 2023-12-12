import { EmpleadoDepositoService } from './../empleado-deposito/empleado-deposito.service';
import { Contrato } from './../contrato/contrato';
import { DepositoService } from './../deposito/deposito.service';
import { Deposito } from './../deposito/deposito';
import { Component } from '@angular/core';
import { ContratoService } from '../contrato/contrato.service';

@Component({
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css', '../app.component.css']
})
export class ListarContratosComponent {
  contratos: Contrato[] = [];
  depositos: Deposito[];

  editable: Contrato;
  nuevo = new Contrato;

  agregarVisible: Boolean;
  editarVisible: Boolean;

  id_usuario: number;
  idCliente: any;

  cliente: boolean

  constructor(private servicio: ContratoService, private depositoService: DepositoService){  }

  ngOnInit(){
    this.idCliente = Number(window.location.toString().slice(window.location.toString().lastIndexOf('/')+1));

    this.id_usuario=Number(this.obtenerIdUsuario());

    this.agregarVisible = false;
    this.editarVisible = false;

    if(this.obtenerRol() == "cliente"){
      this.cliente= true;
      this.obtenerDeUsuario();
    }
    else{
      this.cliente= false;
      this.obtenerTodos();
    }

    this.obtenerDepositos();
  }

  public obtenerDeUsuario(){
    this.servicio.obetenerDeUsuario(this.id_usuario).subscribe(dato=>{
      this.contratos = dato;
      this.contratos.forEach(contrato=>{
        if(contrato.aprobado == true){
          contrato.aprobadoString = "Sí"
        }
        else{
          contrato.aprobadoString = "No"
        }
      })
    })
  }

  private obtenerTodos(){
    console.log(this.idCliente);

    if(this.obtenerRol()=="administrador"){
      this.servicio.obetenerTodos().subscribe(datos=>{
        if(Number.isNaN(this.idCliente)){
          this.contratos = datos;
        }
        else{
          for(let dato of datos){
            if(dato.idUsuario == this.idCliente){
              this.contratos = this.contratos.concat(dato);
            }
          }
        }
      })
    }
    else{
      this.servicio.obetenerTodosDeEmpleado(this.id_usuario).subscribe(datos=>{
        if(Number.isNaN(this.idCliente)){
          this.contratos = datos;
        }
        else{
          for(let dato of datos){
            if(dato.idUsuario == this.idCliente){
              this.contratos = this.contratos.concat(dato);
            }
          }
        }
      })
    }
  }

  public obtenerDepositos(){
    this.depositoService.obetenerTodos().subscribe(losDepositos=>{
      this.depositos=losDepositos;
    });
  }

  public checkearAsignacion(){
    var contador = 0;
    if(this.depositos.length != 0){
      for(let deposito of this.depositos){
        if(this.contratos == undefined || this.contratos.length == 0){
          return deposito.idDeposito;
        }
        else{
          for(contador=0; contador < this.contratos.length; contador++){
            if(this.contratos[contador].idDeposito == deposito.idDeposito){
              break;
            }
            else if(contador == this.contratos.length-1){
              return deposito.idDeposito;
            }
          }
        }
      }
    }
    return -1;
  }

  public mostrarAgregarVisible(){
    let asignable;
    if(this.agregarVisible == false){
      asignable = this.checkearAsignacion();
      if(asignable == -1){
        alert("No hay depósitos disponibles");
      }
      else{
        this.agregarVisible=!this.agregarVisible;
        this.nuevo=new Contrato;
        this.nuevo.aprobado=false;
        this.nuevo.idUsuario=this.id_usuario;
        this.nuevo.idDeposito=asignable;
      }
    }
    else{
      this.agregarVisible=!this.agregarVisible;
    }
  }

  public correccionFecha(x: Contrato){
    x.fechaInicio = new Date(x.fechaInicio).setDate(new Date(x.fechaInicio).getDate()+1);
    x.fechaTerminacion = new Date(x.fechaTerminacion).setDate(new Date(x.fechaTerminacion).getDate()+1)
    return x;
  }

  public guardarNuevo(){
    if(this.nuevo.fechaInicio >= this.nuevo.fechaTerminacion){
      alert("La fecha de inicio no puede ser mayor ni igual que la fecha de terminación")
    }
    else if(new Date (this.nuevo.fechaInicio) < new Date (Date.now())){
      alert("La fecha no puede ser anterior a la fecha de hoy "+new Date (Date.now()));
    }
    else if(this.nuevo.fechaInicio == null){
      alert("La fecha de inicio está incompleta");
    }
    else if(this.nuevo.fechaTerminacion == null){
      alert("La fecha de terminación está incompleta");
    }
    else{
      this.servicio.agregar(this.correccionFecha(this.nuevo)).subscribe(x=>{
        this.ngOnInit();
      });
    }
  }

  public aprobar(x: Contrato){
    x.aprobado!=x.aprobado;
    this.modificar(this.correccionFecha(x));
  }

  public modificar(x: Contrato){
    this.servicio.modificar(x).subscribe(x=>{
      this.ngOnInit();
    })
  }

  public eliminar(x: Contrato){
    this.servicio.eliminar(x).subscribe(x=>{
      this.ngOnInit();
    })
  }

  public obtenerRol(){
    return localStorage.getItem("0");
  }

  public obtenerIdUsuario(){
    return localStorage.getItem("1");
  }
}
