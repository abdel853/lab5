import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch',
  templateUrl: './lightswitch.component.html',
  styleUrls: ['./lightswitch.component.css']
})
export class LightswitchComponent implements OnInit {
  isOn = false;

  color= true;

  background = true;


  firstColor='white';
  secondColer='black';
  
  
  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }



blackColor(){
  this.color = !this.color;
  this.background = !this.background;
}
  

  get change(){
    return `${document.body.style.backgroundColor = this.background ? this.firstColor :this.secondColer}:&& :${document.body.style.color=this.color ? this.secondColer:this.firstColor}`;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
