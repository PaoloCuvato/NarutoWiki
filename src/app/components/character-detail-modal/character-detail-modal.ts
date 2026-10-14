import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-character-detail-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, TabsModule],
  templateUrl: './character-detail-modal.html',
  styleUrl: './character-detail-modal.scss',
})
export class CharacterDetailModal {
  // Controlla se la modale è aperta o chiusa
  @Input() visible: boolean = false;

  // Riceve l'oggetto del personaggio selezionato dal JSON
  @Input() character: any = null;

  // Notifica al componente padre quando la modale viene chiusa
  @Output() visibleChange = new EventEmitter<boolean>();

  // Metodo per chiudere la modale
  closeModal() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}