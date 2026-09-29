import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';

export interface Tournament {
  id: string;
  title: string;
  game: string;
  bannerUrl: string;
  badgeStatus: 'Registration Open' | 'In Progress' | 'Finished';
  badgeColor: string;
  dateRange: string;
  location: string;
  attendees: number;
  platform: 'start.gg' | 'challonge' | 'custom';
  externalUrl?: string;
}

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
    SelectModule,
    CheckboxModule,
    ToastModule,
    DialogModule
  ],
  templateUrl: './tournaments.html',
  styleUrl: './tournaments.scss',
  providers: [MessageService]
})
export class Tournaments implements OnInit {

  // Gestione modal popup
  displayModal: boolean = false;

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

  // Data mock per i tornei visibili in pagina
  featuredTournaments: Tournament[] = [
    {
      id: '1',
      title: 'Shinobi Showdown 2026',
      game: 'Naruto x Boruto: Ultimate Ninja Storm Connections',
      bannerUrl: '/connections.png', 
      badgeStatus: 'Registration Open',
      badgeColor: '#22c55e',
      dateRange: 'Oct 10th - 12th, 2026',
      location: 'Online',
      attendees: 64,
      platform: 'start.gg',
      externalUrl: 'https://start.gg'
    },
    {
      id: '2',
      title: 'Ultimate Storm League S2',
      game: 'Naruto x Boruto: Ultimate Ninja Storm Connections',
      bannerUrl: '/connections.png', 
      badgeStatus: 'Registration Open',
      badgeColor: '#22c55e',
      dateRange: 'Nov 5th - 6th, 2026',
      location: 'Milano, IT',
      attendees: 128,
      platform: 'challonge',
      externalUrl: 'https://challonge.com'
    }
  ];

  pastTournaments: Tournament[] = [
    {
      id: '3',
      title: 'Summer Ninja Clash #3',
      game: 'Naruto x Boruto: Ultimate Ninja Storm Connections',
      bannerUrl: '/connections.png', 
      badgeStatus: 'Finished',
      badgeColor: '#6b7280',
      dateRange: 'Aug 15th, 2026',
      location: 'Online',
      attendees: 42,
      platform: 'start.gg'
    },
    {
      id: '4',
      title: 'Infinite Burst Championship',
      game: 'Naruto x Boruto: Ultimate Ninja Storm Connections',
      bannerUrl: '/connections.png', 
      badgeStatus: 'Finished',
      badgeColor: '#6b7280',
      dateRange: 'Jul 18th, 2026',
      location: 'Online',
      attendees: 85,
      platform: 'challonge'
    }
  ];

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
    this.steps = [
      { label: 'General' },
      { label: 'Platforms' },
      { label: 'Settings' },
      { label: 'Review' }
    ];

    this.initForm();
  }

  private initForm() {
    this.tournamentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      game: ['storm_connections', Validators.required],
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

  openModal() {
    this.displayModal = true;
  }

  next() {
    if (this.activeIndex === 0 && (this.tournamentForm.get('name')?.invalid || this.tournamentForm.get('game')?.invalid)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required general information.' });
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

  resetForm() {
    this.successMessage = false;
    this.activeIndex = 0;
    this.initForm();
    this.displayModal = false;
  }

  openTournament(tournament: Tournament) {
    if (tournament.externalUrl) {
      window.open(tournament.externalUrl, '_blank');
    }
  }
}