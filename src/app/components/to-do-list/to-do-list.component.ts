import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ToDoModalComponent } from '../to-do-modal/to-do-modal.component';
import { ModalController } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search ,create,trash} from 'ionicons/icons';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule,MaterialModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit,OnDestroy {

  constructor(){
    addIcons({ library, playCircle, radio, search,create,trash });
  }
  readonly modalCtrl=inject (ModalController);
  ngOnInit(): void {
    
  }
  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ToDoModalComponent,
    });
    modal.present();

  }

  ngOnDestroy(): void {
    
  }



}
