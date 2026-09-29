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

import { TournamentService } from '../../service/tournament-service';
import { TournamentModal } from '../../modals/tournament-modal';

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
  
  // Variabile per gestire lo stato di caricamento (spinner)
  isLoading: boolean = false;

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

  // Liste tipizzate con TournamentModal
  featuredTournaments: TournamentModal[] = [];
  pastTournaments: TournamentModal[] = [];

  constructor(
    private fb: FormBuilder, 
    private messageService: MessageService,
    private tournamentService: TournamentService
  ) {}

  ngOnInit() {
    this.steps = [
      { label: 'General' },
      { label: 'Platforms' },
      { label: 'Settings' },
      { label: 'Review' }
    ];

    this.initForm();
    this.loadTournaments();
  }

  loadTournaments() {
    this.isLoading = true; // Attiva lo spinner / stato di caricamento
    
    this.tournamentService.getTopTournaments().subscribe({
      next: (data: any[]) => {
        const now = new Date();

        const mappedTournaments: TournamentModal[] = data.map(t => {
          const tournamentDate = t.startAt ? new Date(t.startAt * 1000) : null;
          const isPast = tournamentDate && tournamentDate < now;

          return {
            id: t.id,
            title: t.name,
            game: 'Naruto x Boruto: Ultimate Ninja Storm Connections',
            platform: 'start.gg',
            bannerUrl: (t.images && t.images.length > 0) ? t.images[0].url : 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop',
            dateRange: tournamentDate ? tournamentDate.toLocaleDateString() : 'Upcoming',
            location: 'Online',
            attendees: t.numAttendees || 0,
            badgeStatus: isPast ? 'Finished' : 'Registration Open',
            badgeColor: isPast ? '#6b7280' : '#9333ea',
            externalUrl: t.slug ? 'https://start.gg/' + t.slug : '#'
          };
        });

        const topTen = mappedTournaments.slice(0, 10);
        this.featuredTournaments = topTen.slice(0, 5); 
        this.pastTournaments = topTen.slice(5, 10);    
        
        this.isLoading = false; // Disattiva lo spinner a caricamento completato
      },
      error: (err) => {
        console.error('Errore nel caricamento dei tornei:', err);
        this.isLoading = false; // Disattiva lo spinner anche in caso di errore
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Could not load tournaments from the service.'
        });
      }
    });
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

  openTournament(tournament: TournamentModal) {
    if (tournament.externalUrl) {
      window.open(tournament.externalUrl, '_blank');
    }
  }
}