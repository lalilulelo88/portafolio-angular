import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import {  Router } from '@angular/router';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService,
    private router:Router) { }

  ngOnInit() {
  }

  buscarProducto(termino: string) {

    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);

  }

}
