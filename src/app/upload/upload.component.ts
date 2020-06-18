import { Component, OnInit } from '@angular/core';
import { ServUploadService } from '../service/serv-upload.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imagens
  formulario: FormGroup
  fotos

dados:any

  constructor(private server: ServUploadService, private FormBuilder: FormBuilder) {
    
    this.formulario = this.FormBuilder.group({
           nome:['',Validators.required],
           endereco:['',Validators.required],
           apelido:['',Validators.required],
           fotoUrl:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
    this.server.get().subscribe((res) => {
      this.imagens = res
      console.log(res)
    })
  }

  UploadImage(event) {
    console.log(event)
    const file = event.target.files[0]
    console.log(file)
    this.fotos = file   
    
  }

  Salvar() {
    const Form = new FormData();
    Form.append('file', this.fotos)

    this.server.post(Form).subscribe((result) => {
     this.dados = result
     console.log(this.dados)
      this.formulario.get('fotoUrl').setValue(this.dados.url)
    }) 
     
    setTimeout(()=>{
      this.InserirCliente()
    },2000)
    
  }
    
  InserirCliente(){      
     this.server.insertCliente(this.formulario.value).subscribe((res)=>{
         console.log(res)
     })
  }




}
