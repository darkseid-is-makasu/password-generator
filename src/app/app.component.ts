import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  passwordCharacters = ""

  password = "";

  passwordLength: Number;

  containLetters = false;

  containNumbers = false;

  containSymbols = false;

  getButtonActive(){
    return !(this.password) && !(this.containLetters || this.containNumbers || this.containSymbols)
  }

  handlePasswordChange(e){
    this.passwordLength = e.target.value;
  }

  toggleContainLetters(){
    this.containLetters = !this.containLetters
    
    if (this.containLetters){
      this.passwordCharacters += "abcdefghijklmnopqrstuvwxyzABCDEFHGIJKLMNOPQRSTUVWXYZ";
    } else {
      console.log('replacing')
      this.passwordCharacters = this.passwordCharacters.replace('abcdefghijklmnopqrstuvwxyzABCDEFHGIJKLMNOPQRSTUVWXYZ', '0')
    }
  }

  toggleContainNumbers(){
    this.containNumbers = !this.containNumbers

    if (this.containNumbers){
      this.passwordCharacters += "0123456789"
    } else {
      this.passwordCharacters = this.passwordCharacters.replace("0123456789", "")
    }
  }

  toggleContainSymbols(){
    this.containSymbols = !this.containSymbols

    if (this.containSymbols){
      this.passwordCharacters += "!@#$%^&*()_-=+[]{}"
    } else {
      this.passwordCharacters = this.passwordCharacters.replace("!@#$%^&*()_-=+[]{}", "")
    }
  }

  createPassword(){
    let tempPassword = []

    for (let i = 0; i < this.passwordLength; i++){
      let newIndex = Math.floor(Math.random() * this.passwordCharacters.length);
      tempPassword.push(this.passwordCharacters[newIndex]);
    }

    this.password = tempPassword.join("");
  }
}