import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
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
  todoListForm!: FormGroup; 
  readonly modalCtrl=inject (ModalController);
  date_event:any;
  
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  isModalOpen = false;  
  selectedDate: string | undefined;



  onDateChange(event: any) {
    this.selectedDate = event.detail.value; // Get the selected date
    this.todoListForm.controls['date'].setValue(this.selectedDate); // Update the form control
    this.isModalOpen = false;

  }
  canDismiss=false


  datePick(){
    this.date_event = this.date_event.substring(0, 10);
  }
  
  ngOnInit(): void {
    this.todoListForm=this.formbuilder.group({
      title: ['', [Validators.required]], 
      detail: [''],
      specialData:[false],
      date: ['', []],
      time: ['', []]
    }) 
  }


  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.todoListForm.value)

    return this.modalCtrl.dismiss("Wwww", 'confirm');
  }


 
  ngOnDestroy(): void {
    
  }
}
