import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
}) 
export class AppComponent {
  supportLanguages = ['en', 'ge'];
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');

  }
  ngOnInit(): void { 
    this.hideSignInLinks();
  }
  hideSignInLinks() {
    const enterLinks = document.querySelectorAll('.options .no-user');
    const signOutLinks = document.querySelectorAll('.options .user-in');
    if (this.isUserSignedIn()) {
      enterLinks.forEach((link) => {
        link.classList.toggle('hide');
      });
      signOutLinks.forEach((link) => {
        link.classList.toggle('hide');
      });
    }
  }
  isUserSignedIn(): boolean {
    const userSignedIn = localStorage.getItem('userSignedIn');
    console.log(userSignedIn);
    return userSignedIn == 'true';
  }
  signOutFunction() {
    this.hideSignInLinks();
    localStorage.setItem('userSignedIn', 'false');
    setTimeout(()=>{
      location.reload();
    },250)
  }
   
  switchLanguage(lang: string , sw:boolean): void {
    this.translateService.use(lang);
    if(!sw){
      document.querySelector("nav .options .chose-language .eng")?.classList.remove("active");
      document.querySelector("nav .options .chose-language .geo")?.classList.add("active");
    }else{
      document.querySelector("nav .options .chose-language .eng")?.classList.add("active");
      document.querySelector("nav .options .chose-language .geo")?.classList.remove("active");
    }
  }
}
