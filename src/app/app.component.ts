import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeNumbers = false;
  includeSymbols = false;
  includeLetters = false;
  length=undefined;
  password = "";
  useNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  useSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  useLetters() {
    this.includeLetters = !this.includeLetters;
  }
  getLength(input:string) {
    const enteredNum = parseInt(input);
    if (!isNaN(enteredNum)) {
      this.length = enteredNum;
      console.log(enteredNum);
      
    }
  }
  onGenerate() {
    let numbers = "1234567890";
    let chars = "asdfghjklpqwertyuiopzxcvbnm";
    let symbols = "!@#$%^&*()<>?|{}+_-`";
    let validChars = "";
    let generatedPass = "";
    if (this.includeLetters) {
      validChars += chars;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    for (let i = 0; i < this.length; i++){
      let index = Math.floor(Math.random() * validChars.length);
      generatedPass += validChars[index];
    }
    this.password = generatedPass;
  }
}
