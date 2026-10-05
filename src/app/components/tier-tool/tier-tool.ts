import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ButtonModule } from 'primeng/button';
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
  label: string;
  color: string;
  items: TierItem[];
}

@Component({
  selector: 'app-tier-tool',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    ButtonModule,
    InputTextModule,
    ColorPickerModule,
    TooltipModule
  ],
  templateUrl: './tier-tool.html',
  styleUrl: './tier-tool.scss',
})
export class TierTool {
  @ViewChild('exportArea') exportArea!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  tiers: TierRow[] = [
    { id: 'tier-s', label: 'S', color: '#ff7f7f', items: [] },
    { id: 'tier-a', label: 'A', color: '#ffbf7f', items: [] },
    { id: 'tier-b', label: 'B', color: '#ffff7f', items: [] },
    { id: 'tier-c', label: 'C', color: '#7fff7f', items: [] },
    { id: 'tier-d', label: 'D', color: '#7fbfff', items: [] },
    { id: 'tier-f', label: 'F', color: '#ff7fff', items: [] }
  ];

  unrankedItems: TierItem[] = [];
  successMessage: string | null = null;

  get connectedToIds(): string[] {
    return [...this.tiers.map(t => t.id), 'unranked-pool'];
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onImageUpload(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      let processed = 0;
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.unrankedItems.push({
            id: 'item-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
            url: e.target.result,
            name: file.name
          });
          processed++;
          if (processed === files.length) {
            this.successMessage = `${files.length} images successfully loaded!`;
            this.cdr.detectChanges();

            setTimeout(() => {
              this.successMessage = null;
              this.cdr.detectChanges();
            }, 4000);
          }
        };
        reader.readAsDataURL(file);
      }
    }
    event.target.value = '';
  }

  onDrop(event: CdkDragDrop<TierItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTier() {
    this.tiers.push({
      id: 'tier-' + Date.now(),
      label: 'NEW',
      color: '#bf7fff',
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

  exportImage(format: 'png' | 'jpeg') {
    if (!this.exportArea) return;
    const element = this.exportArea.nativeElement;

    html2canvas(element, {
      useCORS: true,
      backgroundColor: '#0a0a0f',
      scale: 2
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `tier-list.${format}`;
      link.href = canvas.toDataURL(`image/${format}`, 0.95);
      link.click();
    });
  }
}