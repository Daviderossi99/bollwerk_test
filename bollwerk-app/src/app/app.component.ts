import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bollwerk-app';
  public appTypes = [
    'Chat',
    'Call Analyzer',
    'Compare documents',
    'Due Dilligence',
    'KYC Profile',
    'Presentation Wizard',
    'Researcher',
    'Translator'
  ]

}
