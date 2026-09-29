export interface TournamentModal {
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