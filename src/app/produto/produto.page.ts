import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  formGroup : FormGroup;

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true}

  constructor(public navCtrl : NavController,
              
              public formBuilder : FormBuilder) { 

                this.firestore.settings(this.settings);

                this.formGroup = this.formBuilder.group({
                  nomeProduto : [''],
                  preco : [''],
                  categoria : [''],
                  descricao : [''],
                });
              }


  cadastrarP(){
    let ref = this.firestore.collection('produto')
    ref.add(this.formGroup.value)
    .then(resp=>{
      console.log('Cadastrado com Sucesso');
      //this.navCtrl.
    }).catch(()=>{
      console.log('Erro ao Cadastrar');
    })
  }

  
  ngOnInit() {}

}
