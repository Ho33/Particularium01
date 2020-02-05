import { Offer } from './../../core/model/offer';
import { Filtro } from './../../core/control/filtro';
import { Demand } from './../../core/model/demand';
import { Createable } from './../../interfaces/createable';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DemandOfferService implements Createable {


  private _demandasPropias: Demand[];
  private _ofertasPropias: Offer[];
  private _todasOfertas: Offer[];
  private _todasDemanda: Demand[];

  constructor(private afStore: DataService, private routesv: Router, private afAuth: AuthService, ) {
  }

  crearOferta(oferta: import("../../core/model/offer").Offer): boolean {
    oferta.id = (this.todasOfertas.length + 1).toString();
    oferta.idUser = this.afAuth.getCurrentUserUid();
    console.log(oferta);

    this.afStore.addOffer(this.afAuth.getCurrentUserUid(), oferta);

    this.routesv.navigateByUrl('/menu');

    return true;

    throw new Error("Method not implemented.");
  }
  crearDemanda(demanda: import("../../core/model/demand").Demand): boolean {

    demanda.id = (this.todasDemanda.length + 1).toString();
    demanda.idUser = this.afAuth.getCurrentUserUid();
    console.log(demanda);

    this.afStore.addDemand(this.afAuth.getCurrentUserUid(), demanda);

    this.routesv.navigateByUrl('/menu-demanda');

    return true;

    throw new Error("Method not implemented.");
  }

  async getTodasDemanda() {
    return this.afStore.getAllDemandsDos();
  }

  async getTodasOfertas() {
    return this.afStore.getAllOffersDos();

  }

  getOfertasEncontradas(demanda): Offer[] {

    return new Filtro().filtrar(this.todasOfertas, demanda);

  }

  async ObtenerDemandasPropias() {
    var demandas = []
    var demandasPropias = []
    await this.getTodasDemanda().then((data: Offer[]) => {
      for (let index = 0; index < data.length; index++) {
        console.log('idUser:', this.afAuth.getCurrentUserUid());
        console.log('idUserDemanda:', data[index]._idUser);
        demandasPropias.push(data[index]);
        if (data[index]._idUser === this.afAuth.getCurrentUserUid()) {
          demandas.push(data[index]);
        }

      }
      this.todasDemanda = demandasPropias;
      console.log(demandasPropias);
      this.demandasPropias = demandas;
      console.log(demandas);
    });
  }
  async ObtenerOfertasProfesor() {
    var ofertas = []
    var ofertasProfesor = []
    await this.getTodasOfertas().then((data: Offer[]) => {
      for (let index = 0; index < data.length; index++) {
        console.log('idUser:', this.afAuth.getCurrentUserUid());
        console.log('idUserOferta:', data[index]._idUser);
        ofertasProfesor.push(data[index]);
        if (data[index]._idUser === this.afAuth.getCurrentUserUid()) {
          ofertas.push(data[index]);
        }

      }
      this.todasOfertas = ofertasProfesor;
      console.log(ofertasProfesor)
      this.ofertasPropias = ofertas;
      console.log(ofertas);
    });
  }


  /**
   * Getter demandasPropias
   * @return {Demand[]}
   */
  public get demandasPropias(): Demand[] {
    return this._demandasPropias;
  }

  /**
   * Setter demandasPropias
   * @param {Demand[]} value
   */
  public set demandasPropias(value: Demand[]) {
    this._demandasPropias = value;
  }

  /**
   * Getter ofertasPropias
   * @return {Offer[]}
   */
  public get ofertasPropias(): Offer[] {
    return this._ofertasPropias;
  }

  /**
   * Setter ofertasPropias
   * @param {Offer[]} value
   */
  public set ofertasPropias(value: Offer[]) {
    this._ofertasPropias = value;
  }

  /**
   * Getter todasOfertas
   * @return {Offer[]}
   */
  public get todasOfertas(): Offer[] {
    return this._todasOfertas;
  }

  /**
   * Setter todasOfertas
   * @param {Offer[]} value
   */
  public set todasOfertas(value: Offer[]) {
    this._todasOfertas = value;
  }

  /**
   * Getter todasDemanda
   * @return {Demand[]}
   */
  public get todasDemanda(): Demand[] {
    return this._todasDemanda;
  }

  /**
   * Setter todasDemanda
   * @param {Demand[]} value
   */
  public set todasDemanda(value: Demand[]) {
    this._todasDemanda = value;
  }


}
