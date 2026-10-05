import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import Moduli PrimeNG
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TooltipModule } from 'primeng/tooltip';

import html2canvas from 'html2canvas';

export interface TierItem {
  id: string;
  url: string;
  name: string;
}

export interface TierRow {
  id: string;
  name: string;
  color: string;
  items: TierItem[];
}

@Component({
  selector: 'app-tier-tool',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DragDropModule,
    InputTextModule,
    ColorPickerModule,
    TooltipModule
  ],
  templateUrl: './tier-tool.html',
  styleUrl: './tier-tool.scss',
})
export class TierTool {
  @ViewChild('tierListCanvas') tierListCanvas!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  draggedItem: TierItem | null = null;

  // Tier di default
  tiers: TierRow[] = [
    { id: '1', name: 'S', color: '#ff7f7f', items: [] },
    { id: '2', name: 'A', color: '#ffbf7f', items: [] },
    { id: '3', name: 'B', color: '#ffdf7f', items: [] },
    { id: '4', name: 'C', color: '#ffff7f', items: [] },
    { id: '5', name: 'D', color: '#bfff7f', items: [] }
  ];

  unrankedItems: TierItem[] = [];

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  // Importa le immagini caricate dall'utente tramite input file nativo
  onImageImport(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      let processed = 0;
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.unrankedItems.push({
            id: Math.random().toString(36).substring(2, 9),
            url: e.target.result,
            name: file.name
          });
          processed++;
          if (processed === files.length) {
            this.cdr.detectChanges();
          }
        };
        reader.readAsDataURL(file);
      }
    }
    event.target.value = '';
  }

  // Gestione Drag & Drop
  onDragStart(item: TierItem) {
    this.draggedItem = item;
  }

  onDragEnd() {
    this.draggedItem = null;
  }

  onDropToTier(targetTier: TierRow) {
    if (this.draggedItem) {
      this.removeItemFromAll(this.draggedItem);
      targetTier.items.push(this.draggedItem);
    }
  }

  onDropToUnranked() {
    if (this.draggedItem) {
      this.removeItemFromAll(this.draggedItem);
      this.unrankedItems.push(this.draggedItem);
    }
  }

  private removeItemFromAll(item: TierItem) {
    this.unrankedItems = this.unrankedItems.filter(i => i.id !== item.id);
    this.tiers.forEach(tier => {
      tier.items = tier.items.filter(i => i.id !== item.id);
    });
  }

  // Aggiunge una nuova riga alla lista
  addTier() {
    this.tiers.push({
      id: Math.random().toString(36).substring(2, 9),
      name: 'NEW',
      color: '#7fbfff',
      items: []
    });
  }

  deleteTier(index: number) {
    const removed = this.tiers.splice(index, 1)[0];
    if (removed && removed.items.length > 0) {
      this.unrankedItems.push(...removed.items);
    }
  }

  resetAll() {
    this.tiers.forEach(t => {
      this.unrankedItems.push(...t.items);
      t.items = [];
    });
  }

  // Esporta l'area in un file PNG
  exportToPng() {
    if (!this.tierListCanvas) return;
    const element = this.tierListCanvas.nativeElement;

    html2canvas(element, {
      useCORS: true,
      backgroundColor: '#0a0a0f'
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'tier-list.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
}