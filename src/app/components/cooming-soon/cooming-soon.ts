import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ComingSoonConfig {
  title: string;
  description: string;
  plannedContent: string[];
  label?: string;
  backLabel?: string;
}

@Component({
  selector: 'app-cooming-soon',
  standalone: true,
  imports: [],
  templateUrl: './cooming-soon.html',
  styleUrl: './cooming-soon.scss'
})
export class CoomingSoon {
  @Input({ required: true }) config!: ComingSoonConfig;

  @Output() back = new EventEmitter<void>();

  goBack(): void {
    this.back.emit();
  }
}