import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { calendarOutline } from 'ionicons/icons';
import { alarmOutline } from 'ionicons/icons';

@Component({
  selector: 'app-to-do-modal',
  imports: [CommonModule,SharedModule,MaterialModule],
  templateUrl: './to-do-modal.component.html',
  styleUrl: './to-do-modal.component.css',
})
export class ToDoModalComponent implements OnInit,OnDestroy {

  
  constructor(private formbuilder:FormBuilder){
    addIcons({calendarOutline,alarmOutline});
  }
  today: string='';
  maxDate:string='';
  currentTime = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString();
  minTime:any;

  todoListForm!: FormGroup; 
  readonly modalCtrl=inject (ModalController);
  date_event:any;
  isModalOpen = false;  
  selectedDate: string | undefined;
  canDismiss=false
  
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };

  datePick(){
    this.date_event = this.date_event.substring(0, 10);
  }
  
  ngOnInit(): void {

      const currentDate = new Date();
      this.today = currentDate.toISOString().split('T')[0] + 'T00:00:00';
      currentDate.setMonth(currentDate.getMonth() + 3); 
      this.maxDate = currentDate.toISOString().split('T')[0] + 'T23:59:59';

    this.todoListForm=this.formbuilder.group({
      title: ['', [Validators.required]], 
      detail: [''],
      specialData:[false],
      date: ['', [Validators.required]],
      time: ['', []]
    }) 

    this.todoListForm.controls['specialData'].valueChanges.subscribe(value => {
      if(value) this.minTime=this.currentTime
    });

  }


  confirm() {
    console.log(this.todoListForm.value)

    return this.modalCtrl.dismiss("Wwww", 'confirm');
  }



  onDateChange(event:any){
    const selectedDate = new Date(event.target.value).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day:'2-digit'
    });

    let currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day:'2-digit'
    });
    if (selectedDate === currentDate) {
      this.minTime=this.currentTime
    } else {
      this.minTime = null;

    }

  }


  ngOnDestroy(): void {
    
  }
}
