import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabsModule } from 'primeng/tabs';

export interface CharacterChange {
  character: string;
  type: 'Buff' | 'Nerf' | 'Adjustment';
  details: string[];
}

export interface SystemChange {
  category: string;
  description: string;
}

export interface PatchVersion {
  version: string;
  releaseDate: string;
  title: string;
  highlights: string[];
  systemChanges: SystemChange[];
  characterAdjustments: CharacterChange[];
}

@Component({
  selector: 'app-patch-notes',
  standalone: true,
  imports: [CommonModule, AccordionModule, TabsModule],
  templateUrl: './patch-notes.html',
  styleUrl: './patch-notes.scss'
})
export class PatchNotes {
  connectionsPatches: PatchVersion[] = [
    {
      version: 'v1.71',
      releaseDate: 'September 2026',
      title: 'BP Rank Display & Asset Stability Update',
      highlights: [
        'Fixed rank display issues on Ninja Info Cards after reaching high BP values.',
        'Fixed repeated rank-up notifications after surpassing 99,999 BP.',
        'Applied costume and matching voice asset fixes for Nanashi Uchiha and Hikari Uchiha.'
      ],
      systemChanges: [
        {
          category: 'Bug Fixes',
          description: 'Fixed an issue where rank names were incorrectly displayed on Ninja Info Cards after reaching high BP values.'
        },
        {
          category: 'Bug Fixes',
          description: 'Resolved repeated rank-up notification triggers after winning matches beyond 99,999 BP.'
        },
        {
          category: 'Asset Fixes',
          description: 'Fixed costume and matching voice assets for specific characters and outfits.'
        }
      ],
      characterAdjustments: [
        {
          character: 'Nanashi Uchiha',
          type: 'Adjustment',
          details: [
            'Applied costume and matching voice fixes for Ninja Heroes and Warring States Period outfits.'
          ]
        },
        {
          character: 'Hikari Uchiha',
          type: 'Adjustment',
          details: [
            'Updated special chats and synchronized matching voice assets.'
          ]
        }
      ]
    },
    {
      version: 'v1.70',
      releaseDate: 'August 20, 2026',
      title: 'Major Battle Balance & Nanashi Uchiha Update',
      highlights: [
        'Increased Guard Durability across the roster.',
        'Adjusted Ninja Dash, Chakra Dash and Charge Chakra Dash guard damage.',
        'Added Nanashi Uchiha as a playable character.',
        'Raised the Proficiency Level cap to 130.',
        'Added new events, Special Challenges, titles and items.'
      ],
      systemChanges: [
        {
          category: 'Guard Durability',
          description: 'Increased Guard Durability, making it less likely for characters to suffer a Guard Break while guarding ninjutsu and similar attacks.'
        },
        {
          category: 'Ninja Dash',
          description: 'Increased Ninja Dash Guard damage to maintain the previous Guard Break effectiveness.'
        },
        {
          category: 'Chakra Dash',
          description: 'Increased Chakra Dash Guard damage to compensate for the new Guard Durability values.'
        },
        {
          category: 'Charge Chakra Dash',
          description: 'Increased Charge Chakra Dash Guard damage to maintain its previous Guard Break effectiveness.'
        },
        {
          category: 'New Content',
          description: 'Added Nanashi Uchiha, new costumes, Color 5 costumes, recurring Ninja Battle and Proficiency Events, Wanted Players, Special Challenges, items and titles.'
        }
      ],
      characterAdjustments: [
        {
          character: 'Kankuro',
          type: 'Nerf',
          details: [
            'Restricted immediate Throw and Shuriken follow-ups after a guarded Chakra Dash.',
            'Increased Throw damage.'
          ]
        },
        {
          character: 'Kankuro (Part 1)',
          type: 'Nerf',
          details: [
            'Restricted immediate Throw and Shuriken follow-ups after a guarded Chakra Dash.'
          ]
        },
        {
          character: 'Kankuro (BORUTO)',
          type: 'Nerf',
          details: [
            'Restricted immediate Throw and Shuriken follow-ups after a guarded Chakra Dash.',
            'Increased Throw damage.'
          ]
        },
        {
          character: 'Chiyo',
          type: 'Nerf',
          details: [
            'Restricted immediate Throw and Shuriken follow-ups after a guarded Chakra Dash.',
            'Increased Throw damage.'
          ]
        },
        {
          character: 'Sasori',
          type: 'Nerf',
          details: [
            'Restricted immediate Throw and Shuriken follow-ups after a guarded Chakra Dash.',
            'Increased Throw damage.'
          ]
        },
        {
          character: 'Kabuto Yakushi (Sage Mode)',
          type: 'Nerf',
          details: [
            'Ninjutsu 1 "Sage Art: Scattering Rage Jutsu": decreased support recovery speed.',
            'Ninjutsu 2 "Snake Confinement": decreased support recovery speed.'
          ]
        }
      ]
    },
    {
      version: 'v1.60',
      releaseDate: 'February 4, 2025',
      title: 'Battle Balance & Character Adjustments',
      highlights: [
        'Major adjustments to Charged Chakra Dash, Counterattack and Ninja Tools.',
        'Numerous character-specific balance changes and bug fixes.',
        'Fixed several 60 FPS-specific battle issues.'
      ],
      systemChanges: [
        {
          category: 'Charged Chakra Dash',
          description: 'Fixed an issue where a charged Chakra Dash did not cancel the opponent’s Chakra Dash.'
        },
        {
          category: 'Counterattack',
          description: 'Reduced the maximum amount of the Chakra Gauge when Counterattack is activated.'
        },
        {
          category: 'Shot Run Pill',
          description: 'Delayed the time required before the Ninja Tool can be reused.'
        },
        {
          category: 'Tortoiseshell Pill',
          description: 'Increased the effectiveness of the Ninja Tool.'
        }
      ],
      characterAdjustments: [
        {
          character: 'Kimimaro',
          type: 'Adjustment',
          details: [
            'Fixed an issue where Guard Break did not occur when guarding the ending phase of Ninjutsu 2 "Clethra".'
          ]
        },
        {
          character: 'Naruto Uzumaki (Baryon Mode)',
          type: 'Adjustment',
          details: [
            'Fixed an issue where attacking priority was not granted to Ninjutsu 1 "Massive Rasengan" at 60 FPS.'
          ]
        },
        {
          character: 'Boruto Uzumaki (Karma Progression)',
          type: 'Adjustment',
          details: [
            'Fixed Guard Break behavior for Ninjutsu 2 "Spiraling Bullet" when used as support.',
            'Fixed Air Combo rebound behavior during the ending phase at 60 FPS.'
          ]
        },
        {
          character: 'Naruto Uzumaki (Sage of the Six Paths Mode)',
          type: 'Buff',
          details: [
            'Ninjutsu 1 "Tailed Beast Bomb Rasen Shuriken": expanded the hurtbox when activated in the air.',
            'Decreased the step-back distance.'
          ]
        },
        {
          character: 'Naruto Uzumaki (Kurama Link Mode)',
          type: 'Buff',
          details: [
            'Changed the final effect of the aerial combo to allow a Chakra Dash follow-up.',
            'Adjusted Throw speed.'
          ]
        },
        {
          character: 'Choji Akimichi',
          type: 'Buff',
          details: [
            'Increased Defense power parameters.',
            'Ninjutsu 1 "Spiky Human Boulder": increased Guard damage.',
            'Increased overall Throw damage.'
          ]
        },
        {
          character: 'The Third Raikage',
          type: 'Buff',
          details: [
            'Reduced total Chakra consumption of Hell Thrust variants.'
          ]
        },
        {
          character: 'Nagato',
          type: 'Buff',
          details: [
            'Ninjutsu 1 "Almighty Push": decreased Chakra consumption.',
            'Ninjutsu 2 "Shura Attack: Distance": expanded air hurtbox.',
            'Decreased initial step-back distance.',
            'Enabled Throw follow-up.'
          ]
        }
      ]
    },
    {
      version: 'v1.50',
      releaseDate: 'September 25, 2024',
      title: 'Karma Progression & Battle Balance Update',
      highlights: [
        'Added Boruto Uzumaki (Karma Progression) through DLC Pack 5.',
        'Introduced additional battle balance adjustments.',
        'Added new Ninja Battle Exchange Ticket rewards.'
      ],
      systemChanges: [
        {
          category: 'Ninja Dash',
          description: 'Reduced Guard damage.'
        },
        {
          category: 'Ninja Tools',
          description: 'Adjusted Ninja Tool-related battle behavior and timing.'
        },
        {
          category: 'Ninja Battle',
          description: 'Added more items to the collection obtainable through Exchange Tickets.'
        }
      ],
      characterAdjustments: [
        {
          character: 'Neji Hyuga (Part 1)',
          type: 'Buff',
          details: [
            'Increased Defense power.'
          ]
        },
        {
          character: 'Hinata Hyuga (Part 1)',
          type: 'Nerf',
          details: [
            'Increased recovery time when hit by ground combos.'
          ]
        },
        {
          character: 'Sakura Uchiha (BORUTO)',
          type: 'Buff',
          details: [
            'Increased Defense power.'
          ]
        },
        {
          character: 'Rock Lee (BORUTO)',
          type: 'Buff',
          details: [
            'Made dash cancel timing faster when activating Ninjutsu 1 "Leaf’s Combo Attack!" in mid-air.'
          ]
        },
        {
          character: 'Delta',
          type: 'Buff',
          details: [
            'Increased Defense power.'
          ]
        }
      ]
    },
    {
      version: 'v1.40',
      releaseDate: 'July 24, 2024',
      title: 'Kawaki & Online Battle Update',
      highlights: [
        'Added Kawaki (Karma Progression) through DLC Pack 4.',
        'Introduced Disconnection Penalties for Online Battle.',
        'Added additional battle adjustments.'
      ],
      systemChanges: [
        {
          category: 'Disconnection Penalties',
          description: 'Added Trust Level penalties when disconnecting from Online Battle, excluding Custom Matches.'
        },
        {
          category: 'Online Battle',
          description: 'Introduced additional systems and adjustments for online matchmaking and competitive play.'
        }
      ],
      characterAdjustments: [
        {
          character: 'Various Characters',
          type: 'Adjustment',
          details: [
            'Additional character and battle adjustments were introduced alongside DLC Pack 4.'
          ]
        }
      ]
    },
    {
      version: 'v1.30',
      releaseDate: 'May 30, 2024',
      title: 'Kurenai & Battle Balance Update',
      highlights: [
        'Added Kurenai Yuhi through DLC Pack 3.',
        'Added new Combination Secret Techniques.',
        'Introduced several character balance adjustments.'
      ],
      systemChanges: [
        {
          category: 'Ninja Battle',
          description: 'Adjusted battle behavior and specific Ninjutsu interactions.'
        },
        {
          category: 'Bug Fixes',
          description: 'Fixed various battle-related issues and minor bugs.'
        }
      ],
      characterAdjustments: [
        {
          character: 'Madara Uchiha (Six Paths)',
          type: 'Buff',
          details: [
            'Raised the priority of Ninjutsu 1 "Instantaneous Path".'
          ]
        },
        {
          character: 'Madara Uchiha (Reanimation Release)',
          type: 'Buff',
          details: [
            'Increased Throw speed.'
          ]
        },
        {
          character: 'Hagoromo Otsutsuki',
          type: 'Adjustment',
          details: [
            'Shortened the hitbox duration of Ninjutsu 1 "Divine Thunder".',
            'Decreased recovery speed when used as support.'
          ]
        },
        {
          character: 'Sakura Uchiha (BORUTO)',
          type: 'Buff',
          details: [
            'Changed the final hit of the aerial combo to allow an easier Chakra Dash follow-up.'
          ]
        },
        {
          character: 'Tenten (BORUTO)',
          type: 'Buff',
          details: [
            'Increased Defense power.'
          ]
        },
        {
          character: 'Kazekage Gaara (BORUTO)',
          type: 'Nerf',
          details: [
            'Reduced ground combo damage.',
            'Reduced aerial combo damage.'
          ]
        },
        {
          character: 'Temari Nara (BORUTO)',
          type: 'Buff',
          details: [
            'Increased Defense power.'
          ]
        }
      ]
    },
    {
      version: 'v1.21',
      releaseDate: 'April 2, 2024',
      title: 'Matchmaking Improvement',
      highlights: [
        'Improved online matchmaking.'
      ],
      systemChanges: [
        {
          category: 'Matchmaking',
          description: 'Improved matchmaking functionality for Online Battle.'
        }
      ],
      characterAdjustments: []
    },
    {
      version: 'v1.20',
      releaseDate: 'March 28, 2024',
      title: 'Isshiki & Ninja Battle Update',
      highlights: [
        'Added Isshiki Otsutsuki through DLC Pack 2.',
        'Introduced the Ninja Battle in-game event.',
        'Added Exchange Tickets.',
        'Fixed multiple battle issues.'
      ],
      systemChanges: [
        {
          category: 'Ninja Battle',
          description: 'Introduced a new event where players join opposing camps and compete through Rank Match and Target Match.'
        },
        {
          category: 'Exchange Tickets',
          description: 'Added Exchange Tickets obtainable through Ninja Battle and usable to acquire in-game items.'
        },
        {
          category: 'Battle Fixes',
          description: 'Fixed several frame-rate-dependent and Chakra Back Dash-related issues.'
        }
      ],
      characterAdjustments: [
        {
          character: 'Boruto Uzumaki',
          type: 'Adjustment',
          details: [
            'Fixed an issue where the character could become invincible during Chakra Back Dash.'
          ]
        },
        {
          character: 'Boruto Uzumaki (Scientific Ninja Tool)',
          type: 'Adjustment',
          details: [
            'Fixed an issue where the character could become invincible during Chakra Back Dash.'
          ]
        },
        {
          character: 'Boruto Uzumaki (Chunin Exam)',
          type: 'Adjustment',
          details: [
            'Fixed an issue where the character could become invincible during Chakra Back Dash.'
          ]
        },
        {
          character: 'Boruto Uzumaki (Karma)',
          type: 'Adjustment',
          details: [
            'Fixed an issue where the character could become invincible during Chakra Back Dash.'
          ]
        }
      ]
    },
    {
      version: 'v1.11',
      releaseDate: 'January 25, 2024',
      title: 'Custom Matchmaking & Hagoromo Update',
      highlights: [
        'Added Hagoromo Otsutsuki through DLC Pack 1.',
        'Introduced Custom Matchmaking.',
        'Added support for VS Battle, League and Tournament custom matches.'
      ],
      systemChanges: [
        {
          category: 'Custom Matchmaking',
          description: 'Players can create rooms for up to 8 designated players.'
        },
        {
          category: 'VS Battle',
          description: 'Custom VS Battles support 2 players.'
        },
        {
          category: 'League',
          description: 'Custom League matches support up to 4 players.'
        },
        {
          category: 'Tournament',
          description: 'Custom Tournament matches support between 4 and 8 players.'
        }
      ],
      characterAdjustments: []
    },
    {
      version: 'v1.01',
      releaseDate: 'November 16, 2023',
      title: 'Day 1 Update',
      highlights: [
        'Added additional voice-over language options depending on platform.',
        'Applied minor bug fixes.'
      ],
      systemChanges: [
        {
          category: 'Languages',
          description: 'Added French voice-over support on PlayStation and Xbox, with additional language availability on Nintendo Switch.'
        },
        {
          category: 'Bug Fixes',
          description: 'Applied minor bug fixes.'
        }
      ],
      characterAdjustments: []
    }
  ];

  evolutionPatches: PatchVersion[] = [
    {
      version: 'v1.00',
      releaseDate: 'Archived',
      title: 'Storm Evolution Community Project',
      highlights: [
        'Initial community project baseline.',
        'Custom assets and modified gameplay configurations.',
        'Foundation for community balance and gameplay changes.'
      ],
      systemChanges: [
        {
          category: 'Evolution Core',
          description: 'Established the base framework for custom Storm Evolution modifications.'
        },
        {
          category: 'Gameplay',
          description: 'Introduced modified gameplay configurations and community-oriented balance systems.'
        },
        {
          category: 'Assets',
          description: 'Added custom assets and project-specific resources.'
        }
      ],
      characterAdjustments: [
        {
          character: 'All Roster Characters',
          type: 'Adjustment',
          details: [
            'Standardized community balance adjustments.',
            'Established custom combo and gameplay priorities.'
          ]
        }
      ]
    }
  ];

  getPatchCount(patches: PatchVersion[]): number {
    return patches.length;
  }
}