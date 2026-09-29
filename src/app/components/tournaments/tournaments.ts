import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select'; // <--- Aggiornato a SelectModule
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    SelectModule, // <--- Inserito qui
    CheckboxModule,
    ToastModule
  ],
  templateUrl: './tournaments.html',
  styleUrl: './tournaments.scss',
  providers: [MessageService]
})
export class Tournaments implements OnInit {
  
  steps: MenuItem[] = [];
  activeIndex: number = 0;
  tournamentForm!: FormGroup;
  successMessage: boolean = false;

  games = [
    { label: 'Naruto x Boruto: Ultimate Ninja Storm Connections', value: 'storm_connections' },
    { label: 'Street Fighter 6', value: 'sf6' },
    { label: '2XKO', value: '2xko' }
  ];

  formats = [
    { label: 'Single Elimination', value: 'single_elimination' },
    { label: 'Double Elimination', value: 'double_elimination' },
    { label: 'Round Robin', value: 'round_robin' }
  ];

  regions = [
    { label: 'Europe (EU)', value: 'eu' },
    { label: 'North America (NA)', value: 'na' },
    { label: 'Asia (AS)', value: 'asia' }
  ];

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
    this.steps = [
      { label: 'General' },
      { label: 'Platforms' },
      { label: 'Settings' },
      { label: 'Review' }
    ];

    this.tournamentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      game: [null, Validators.required],
      region: ['eu', Validators.required],
      
      platforms: this.fb.group({
        challonge: [true],
        startgg: [false],
        discord: [true]
      }),
      
      format: ['double_elimination', Validators.required],
      maxParticipants: [32, Validators.required],
      discordChannel: ['#tournament-announcements', Validators.required]
    });
  }

  next() {
    if (this.activeIndex === 0 && this.tournamentForm.get('name')?.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please enter a valid tournament name.' });
      return;
    }
    if (this.activeIndex < this.steps.length - 1) {
      this.activeIndex++;
    }
  }

  prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  onSubmit() {
    if (this.tournamentForm.valid) {
      const formData = this.tournamentForm.value;
      console.log('Tournament Payload:', formData);

      this.successMessage = true;
      this.messageService.add({
        severity: 'success',
        summary: 'Success!',
        detail: 'Tournament created and synced successfully.'
      });
    }
  }
}