import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tavolo } from 'src/app/model/tavolo';
import { TavoloService } from '../tavolo.service';

@Component({
  selector: 'app-tavolo-list',
  templateUrl: './tavolo-list.component.html',
  styleUrls: ['./tavolo-list.component.css']
})
export class TavoloListComponent implements OnInit{

  tavoli?: Tavolo[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(private tavoloService: TavoloService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.tavoloService.getTavoli().subscribe(tavoloListItem => this.tavoli = tavoloListItem);

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
