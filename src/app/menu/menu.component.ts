import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foto = environment.foto
  nome = environment.nome
  id = environment.id

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.foto = ''
    environment.nome = ''
    environment.id = 0

  
  }

}

