
import { RouterOutlet } from '@angular/router';
import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, filter } from 'rxjs';
import { FormControl, FormsModule } from '@angular/forms';
import * as events from 'events';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatIconAnchor, MatIconButton } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';




declare var google:any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, MatTableModule, MatIconModule, MatIconButton, CommonModule, FormsModule, MatCheckbox, MatIconAnchor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:"860419357187-0rji6hlcv00ohib75icmonn16g48knid.apps.googleusercontent.com",
      callback:(res:any) =>{
        this.handleLogin(res)
        console.log(res)
      }
    })
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:'filled_blue',
      size:'large',
      shape:'rectangle',
      text: 'sign_in_with_google',
      width:350
    })
  }
  
  private decodeToken(token:string){
    return JSON.parse(atob(token.split('.')[1]))
  }

  handleLogin(res:any){
    const payload = this.decodeToken(res.credential)
    sessionStorage.setItem('Json token',JSON.stringify(payload))
  }


 
}
