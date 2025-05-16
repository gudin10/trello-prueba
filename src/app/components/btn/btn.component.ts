import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit'  = 'button';
  @Input() color = 'primary';

  constructor(){

  }

  ngOnInit(): void {
    // No initialization needed at this time.
  }

  get colors(){
    return {
      'text-white':this.color==='success' || this.color==='primary' || this.color==='red',
      'bg-green-700':this.color==='green',
      'hover:bg-green-800':this.color==='green',
      'focus:ring-green-300':this.color==='green',
      'bg-blue-700':this.color==='blue',
      'hover:bg-blue-800':this.color==='blue',
      'focus:ring-blue-300':this.color==='blue',
      'bg-red-700':this.color==='red',
      'hover:bg-red-800':this.color==='red',
      'focus:ring-red-300':this.color==='red',
      'bg-gray-200':this.color==='gray-light',
      'hover:bg-gray-500':this.color==='red',
      'focus:ring-gray-50':this.color==='red',
      //gray-light
    }
  }

}
