import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent{
  cursos: string[] = ["Javascript", "Angular", "Typescript"];
  imageURL: string = "https://ep00.epimg.net/verne/imagenes/2019/11/13/album/1573641411_551713_1573641467_album_normal.jpg";
  inputValue: string = "";
  isMouseOver: boolean = false;
  nameValue: string = "abc";
  cursoName: string = "Angular";

  getimage(){
    return this.imageURL;
  }

  changeSelect(event: Event){
    console.log(event);
  }

  handleClick(event: Event){
    console.log(this.inputValue);
  }

  changeInputValue = (value: string) => this.inputValue = value;
  changeName = (value: string) => this.nameValue = value;
  onMudouValor = (event: Event) => console.log(event);
}
