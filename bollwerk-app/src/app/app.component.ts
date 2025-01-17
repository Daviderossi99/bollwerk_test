import { Component, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreenService } from './services/screen.service';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  providers: [ScreenService],
  imports: [
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatCardModule,
    MatSelectModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'bollwerk-app';

  tiles = [
    {title:'Presentation Wizard',description:'Create awesome, beatiful presentation within seconds'},
    {title:'Due Diligence',description:'Create awesome, beatiful presentation within seconds'},
    {title:'Research',description:'Create awesome, beatiful presentation within seconds'},
    {title:'Coding assistant',description:'Create awesome, beatiful presentation within seconds'},
    {title:'Translate',description:'Create awesome, beatiful presentation within seconds'},
    {title:'Browse Apps / Prompts',description:'Create awesome, beatiful presentation within seconds'}
  ]

  llms = [
    {icon:'language',name:'Claude 3.5 Sonnet',number:'200k'},
    {icon:'language',name:'GPT-4o',number:'128k'},
    {icon:'language',name:'Gemini 2.0 Flash',number:'2.10M'},
    {icon:'language',name:'o1-mini',number:'128k'}
  ]

  selectedLlm = this.llms[0]

  constructor(public screenService : ScreenService) {} 

}
