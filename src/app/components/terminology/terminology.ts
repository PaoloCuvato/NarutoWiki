import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

interface Mechanic {
  name: string;
  abbreviation?: string;
  description: string;
}

interface MechanicCategory {
  id: number;
  title: string;
  mechanics: Mechanic[];
}

@Component({
  selector: 'app-terminology',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    BadgeModule,
    ButtonModule
  ],
  templateUrl: './terminology.html',
  styleUrl: './terminology.scss'
})
export class Terminology {

  searchTerm = '';
  selectedCategory = 'all';

  categories: MechanicCategory[] = [
    {
      id: 1,
      title: 'Combo Mechanics & Cancels',
      mechanics: [
        {
          name: 'Combo Cancel',
          description: 'Interrupt a combo using a jump, ninja move, dash, jutsu, or another available action.'
        },
        {
          name: 'Jutsu Cancel',
          description: "Cancel a jutsu's animation with guard or another permitted action."
        },
        {
          name: 'Spark Dash',
          description: 'Cancel a melee combo using a chakra dash to continue attacking.'
        },
        {
          name: 'Stored Spark Dash',
          description: 'Prepare a spark dash during an animation where a chakra dash cannot normally be performed, then use it later.'
        },
        {
          name: 'Rev Cancel',
          description: 'Directly cancel a combo into a Secret Technique, consuming additional chakra and dealing reduced damage.'
        },
        {
          name: 'S3 Cancel',
          description: 'Cancel a combo using a jump or ninja move before activating a Secret Technique, allowing it to deal its normal damage.'
        },
        {
          name: 'Ninja Move Cancel',
          description: 'Use a ninja move to cancel an action or animation.'
        },
        {
          name: 'Hollow Step',
          description: 'Use a specific analog stick movement and jump input to perform a special jump cancel that can enable certain combo extensions.'
        },
        {
          name: 'Infinite Combo',
          description: "Repeatedly connect combo attacks by exploiting the opponent's stun and preventing them from escaping without substitution."
        },
        {
          name: 'Infinite Guard',
          description: 'Periodically release and reapply guard to avoid having it broken by repeated attacks.'
        }
      ]
    },
    {
      id: 2,
      title: 'Combo Types & Structure',
      mechanics: [
        {
          name: 'Intro Combo',
          abbreviation: 'IC',
          description: "The opening portion of a character's combo before directional combo options become available."
        },
        {
          name: 'Neutral Combo',
          abbreviation: 'NC',
          description: 'The standard combo performed without a directional input after the intro combo.'
        },
        {
          name: 'Up Combo',
          abbreviation: 'UC',
          description: 'The directional combo performed by holding up, usually launching the opponent.'
        },
        {
          name: 'Down Combo',
          abbreviation: 'DC',
          description: 'The directional combo performed by holding down, usually knocking the opponent down.'
        },
        {
          name: 'Air Combo',
          abbreviation: 'AC',
          description: 'A melee combo performed while airborne.'
        },
        {
          name: 'Air Jutsu',
          description: "Use a character's jutsu while airborne."
        },
        {
          name: 'Air Tilt',
          description: 'Use a character’s tilt attack while airborne after blocking an attack in the air.'
        }
      ]
    },
    {
      id: 3,
      title: 'Movement & Evasion',
      mechanics: [
        {
          name: 'Backdash',
          description: 'Dash away from an opponent to create distance.'
        },
        {
          name: 'Ninja Move',
          description: 'Use a quick evasive movement to dodge an attack.'
        },
        {
          name: 'Air Guard',
          description: 'Hold guard while airborne to block an incoming attack.'
        }
      ]
    },
    {
      id: 4,
      title: 'Guard & Defensive Mechanics',
      mechanics: [
        {
          name: 'Guard Break',
          description: 'Break an opponent’s guard, leaving them vulnerable to follow-up attacks.'
        },
        {
          name: 'Guard Break Attack',
          description: 'Use a special attack that instantly breaks an opponent’s guard.'
        },
        {
          name: 'Guard Gauge',
          description: 'The hidden or visible value representing how much damage a character’s guard can withstand.'
        },
        {
          name: 'Guard Pressure',
          description: 'Maintain attacks against an opponent’s guard to force a reaction or break it.'
        },
        {
          name: 'Chip Damage',
          description: 'Damage inflicted through blocking an attack.'
        },
        {
          name: 'Shuriken Guard Break',
          description: 'Use a chakra shuriken after a dash during a combo to break an opponent’s guard.'
        },
        {
          name: 'Tool Guard Break',
          description: 'Use a ninja tool in a similar manner to break an opponent’s guard.'
        },
        {
          name: 'Substitution Trap',
          description: 'Place an attack or lingering technique where an opponent is likely to substitute, catching them with the follow-up.'
        }
      ]
    },
    {
      id: 5,
      title: 'Switch Mechanics & Team Combos',
      mechanics: [
        {
          name: 'Switch Buffering',
          description: 'Switch characters at a specific timing to perform an action while consuming support gauge instead of its normal resource cost.'
        },
        {
          name: 'Jutsu Buffer',
          description: 'Input a melee and jutsu to trigger a character switch.'
        },
        {
          name: 'Chakra Dash Buffer',
          description: 'Switch characters and immediately chakra dash to use support gauge instead of chakra.'
        },
        {
          name: 'Counter Switch',
          description: 'Switch immediately after countering to perform the counter using support gauge instead of chakra.'
        },
        {
          name: 'Dash Switch',
          description: 'Switch characters during a dash to continue the movement with the incoming character.'
        },
        {
          name: 'Chakra Shuriken Switch',
          description: 'Switch characters while throwing a chakra shuriken to create a follow-up or mix-up.'
        },
        {
          name: 'Phantom Air Hit',
          description: 'Use switch tech and a character with a projectile in their air combo to hit the opponent from a distance.'
        },
        {
          name: 'Switch Jutsu',
          description: 'Switch characters while using a jutsu to have the incoming character perform their jutsu.'
        },
        {
          name: 'Switch Ultimate',
          description: "Switch characters during a Secret Technique to use the incoming character's Secret Technique. Only works with Sakura, Six Paths Madara, and 5KS Sasuke."
        }
      ]
    },
    {
      id: 6,
      title: 'Support Mechanics',
      mechanics: [
        {
          name: 'Charge Assist',
          description: 'Use a support character to help charge chakra.'
        },
        {
          name: 'Cover Fire',
          description: 'Use a support character to throw projectiles and pressure the opponent.'
        },
        {
          name: 'Dash Cut',
          description: 'Use a support character to interrupt an opponent’s chakra dash.'
        },
        {
          name: 'Strike Back',
          description: 'Use a support character to retaliate against an opponent after certain actions.'
        },
        {
          name: 'Support Gauge',
          description: 'The meter used to determine support character availability and switching.'
        },
        {
          name: 'Leader Switch',
          description: 'Switch the character currently being controlled during a team battle.'
        },
        {
          name: 'Support Switch',
          description: 'Switch between characters while retaining the current team’s support configuration.'
        }
      ]
    },
    {
      id: 7,
      title: 'Storm Mechanics & Awakening',
      mechanics: [
        {
          name: 'Storm Gauge',
          description: 'The meter that fills during battle and enables Storm-related actions.'
        },
        {
          name: 'Storm Activation',
          description: 'Activate the Storm Gauge to gain access to Storm actions.'
        },
        {
          name: 'Armor Break',
          description: 'A mechanic that causes a character to lose their armor after taking enough damage.'
        },
        {
          name: 'Armor Break State',
          description: 'The state in which a character’s armor has been broken, affecting their damage and awakening behavior.'
        },
        {
          name: 'Awakening Timer',
          description: 'The limited duration of a character’s awakening.'
        },
        {
          name: 'Awakening Finish',
          description: 'A powerful attack available to certain awakened characters.'
        }
      ]
    },
    {
      id: 8,
      title: 'Connection Indicators',
      mechanics: [
        {
          name: 'Blue Bars',
          description: 'The connection indicator representing a strong connection.'
        },
        {
          name: 'Yellow Bars',
          description: 'The connection indicator representing a moderate connection.'
        },
        {
          name: 'Red Bars',
          description: 'The connection indicator representing a poor connection.'
        }
      ]
    }
  ];

  get totalMechanics(): number {
    return this.categories.reduce(
      (total, category) => total + category.mechanics.length,
      0
    );
  }

  get filteredCategories(): MechanicCategory[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.categories
      .filter(category =>
        this.selectedCategory === 'all' ||
        category.id.toString() === this.selectedCategory
      )
      .map(category => ({
        ...category,
        mechanics: category.mechanics.filter(mechanic =>
          !search ||
          mechanic.name.toLowerCase().includes(search) ||
          mechanic.description.toLowerCase().includes(search) ||
          mechanic.abbreviation?.toLowerCase().includes(search)
        )
      }))
      .filter(category => category.mechanics.length > 0);
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  getCategoryCount(category: MechanicCategory): number {
    return category.mechanics.length;
  }
  get filteredMechanicsCount(): number {
  return this.filteredCategories.reduce(
    (total, category) => total + category.mechanics.length,
    0
  );
}
}