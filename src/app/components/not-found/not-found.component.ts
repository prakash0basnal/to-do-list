import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
@Component({
  selector: 'app-not-found',
  imports: [CommonModule,MaterialModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit,OnDestroy {
  constructor(){
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
  
}
