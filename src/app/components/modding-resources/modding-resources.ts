import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { AccordionModule } from 'primeng/accordion';

interface ModdingTool {
  name: string;
  category: string;
  description: string;
  url?: string;
  extraUrl?: string;
  extraLabel?: string;
  fileName?: string;
}

interface TutorialStep {
  title: string;
  description: string;
}

interface TutorialChapter {
  id: number;
  title: string;
  description: string;
  steps: TutorialStep[];
  note?: string;
}

@Component({
  selector: 'app-modding-resources',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    AccordionModule
  ],
  templateUrl: './modding-resources.html',
  styleUrl: './modding-resources.scss'
})
export class ModdingResources {
  activeTab = 'tools';
  expandedChapters: string[] = [];
  searchQuery = '';
  selectedCategory = 'All Tools';

  tools: ModdingTool[] = [
    {
      name: 'Blender XFBIN Importer / Exporter',
      category: 'Models & Textures',
      description: 'Blender addon for importing and exporting supported XFBIN resources used in Storm Engine games.',
      url: 'https://github.com/Al-Hydra/Blender-XFBIN-Importer/releases'
    },
    {
      name: 'Sound Editor',
      category: 'Audio',
      description: 'Editor for modifying supported sound event files.',
      fileName: 'XfbinEvEditor.rar'
    },
    {
      name: 'NS2 Framework',
      category: 'Frameworks & APIs',
      description: 'Framework and resources for the Naruto Storm 2 Revived project.',
      url: 'https://github.com/hardkiller2565123123/NarutoStorm2Revived',
      extraUrl: 'https://github.com/hardkiller2565123123/NarutoStorm2Revived/releases/tag/Release2',
      extraLabel: 'VERSION 2'
    },
    {
      name: 'Storm Revival Client',
      category: 'Frameworks & APIs',
      description: 'Source code for Naruto Storm revival client projects.',
      url: 'https://github.com/hardkiller2565123123/StormRevivalClientSource'
    },
    {
      name: 'Storm Connections Sound Tool (ACE)',
      category: 'Audio',
      description: 'Audio editing utility for Naruto Storm Connections.',
      url: 'https://github.com/eliteace170/ACE-Naruto-Storm-Connections/releases'
    },
    {
      name: 'Action Merger Addon',
      category: 'Models & Textures',
      description: 'Addon for merging compatible animation actions.',
      fileName: 'Action_Merge_BY_v1.9.zip'
    },
    {
      name: 'NSUNS4 AdjustParamAT Data Editor',
      category: 'Editors & Utilities',
      description: 'Utility for editing supported AdjustParamAT game data.',
      url: 'https://mega.nz/file/WBckHCaI#JzQpiqguvcIWI59-vobwOuXBilBiZHnOBZrUL9SNyqk'
    },
    {
      name: 'NSC Toolbox',
      category: 'Editors & Utilities',
      description: 'Toolbox for editing supported Naruto Storm game files and resources.',
      url: 'https://github.com/TheLeonX/NSC-Toolbox/releases'
    },
    {
      name: 'Naruto Storm Font',
      category: 'Resources',
      description: 'Font resource for Naruto Storm projects and community content.',
      url: 'https://drive.google.com/file/d/1JnK9RRU4WWGLKZ3fcdjw6DSl4gl9uEmR/view?usp=sharing'
    },
    {
      name: 'cosprm',
      category: 'Editors & Utilities',
      description: 'Community utility for working with supported cosprm resources.',
      url: 'https://github.com/maxcabd/cosprm'
    },
    {
      name: 'Accessory Tool',
      category: 'Editors & Utilities',
      description: 'Utility for adding and modifying supported character accessories.',
      url: 'https://github.com/maxcabd/accprm'
    },
    {
      name: 'nuccbin',
      category: 'Editors & Utilities',
      description: 'Community utility for working with supported NUCC binary resources.',
      url: 'https://github.com/maxcabd/nuccbin'
    },
    {
      name: 'XFBIN Texture Tool',
      category: 'Models & Textures',
      description: 'Tool for working with supported XFBIN texture resources.',
      url: 'https://github.com/Al-Hydra/XFBIN-Texture-Tool/releases'
    },
    {
      name: 'Blender XFBIN Animation Exporter',
      category: 'Models & Textures',
      description: 'Blender addon for exporting compatible CC2 animation resources.',
      url: 'https://github.com/maxcabd/cc2_anm_export_blender/releases'
    },
    {
      name: 'NSC Mod Manager',
      category: 'Mod Managers',
      description: 'Mod management utility for Naruto Storm Connections.',
      url: 'https://github.com/TheLeonX/NSC-ModManager/releases'
    },
    {
      name: 'strmconv',
      category: 'Editors & Utilities',
      description: 'Community conversion utility for supported Storm resources.',
      url: 'https://github.com/maxcabd/strmconv'
    },
    {
      name: 'XFBIN Parser (C#)',
      category: 'Frameworks & APIs',
      description: 'C# parser for working with supported XFBIN files.',
      url: 'https://github.com/TheLeonX/XFBIN_PARSER/releases'
    },
    {
      name: 'NSUNS4 Modding API',
      category: 'Frameworks & APIs',
      description: 'Modding API and framework for Naruto Shippuden Ultimate Ninja Storm 4.',
      url: 'https://github.com/zealottormunds/ns4moddingapi/releases/tag/2.0'
    },
    {
      name: 'CC2 XFBIN Alt Switcher',
      category: 'Models & Textures',
      description: 'Utility for switching supported CC2 alternate texture references.',
      url: 'https://github.com/KojoBailey/CC2-Alt-Switcher'
    },
    {
      name: 'AWB Dump',
      category: 'Audio',
      description: 'Community resource for working with AWB audio archives.',
      fileName: 'Naruto Storm Modding Server'
    },
    {
      name: 'JAPI',
      category: 'Frameworks & APIs',
      description: 'Community framework and related project releases.',
      url: 'https://github.com/Kapilarny/JAPI/releases/latest'
    },
    {
      name: 'S3, SREV & JoJo ASB MessageInfo Editor',
      category: 'Editors & Utilities',
      description: 'MessageInfo editing utility by Xuân Thái.',
      url: 'https://drive.google.com/file/d/1sukfaiHFpvj2FNd8wKC3qJOaO5iT4OYA/view'
    },
    {
      name: 'Batch NSUNS4 XFBIN Image Unpacker',
      category: 'Models & Textures',
      description: 'Batch utility for unpacking supported XFBIN image resources.',
      url: 'https://mega.nz/file/iNty2SqD#ruZ1dfD9qtU-ihRCSvitXZanBCZObxPcYDCTrsi7YMw'
    },
    {
      name: 'CPK Repacker',
      category: 'Editors & Utilities',
      description: 'Utility for building CPK archives using CPKTools.exe.',
      url: 'https://drive.google.com/file/d/1LuWQlqgo4KIT_HdhGQu6-Jcjj-jvICTf/view'
    },
    {
      name: 'ACE Audio Cue Editor',
      category: 'Audio',
      description: 'Audio Cue Editor by LazyBone152 for working with supported CRIWARE ACB and AWB files.',
      url: 'https://github.com/LazyBone152/ACE/releases'
    },
    {
      name: 'NVIDIA Texture Tools Exporter',
      category: 'Models & Textures',
      description: 'Adobe Photoshop texture exporter for DDS workflows.',
      url: 'https://developer.nvidia.com/gameworksdownload#?dn=texture-tools-for-adobe-photoshop-8-55'
    },
    {
      name: 'YACpkTool',
      category: 'Editors & Utilities',
      description: 'Utility for extracting supported DX9 and PS3 Storm CPK archives.',
      url: 'https://github.com/Brolijah/YACpkTool/releases/tag/v1.1b'
    },
    {
      name: 'HxD',
      category: 'Editors & Utilities',
      description: 'Hexadecimal editor for inspecting and modifying binary files.',
      url: 'https://mh-nexus.de/en/downloads.php?product=HxD20'
    },
    {
      name: 'Noesis',
      category: 'Models & Textures',
      description: 'Model preview utility. For texture extraction, use an appropriate dedicated tool.',
      url: 'https://richwhitehouse.com/index.php?content=inc_projects.php&filemirror=noesisv4466.zip'
    },
    {
      name: 'NSUNS4 Mod Manager',
      category: 'Mod Managers',
      description: 'Mod manager for Naruto Shippuden Ultimate Ninja Storm 4.',
      url: 'https://github.com/TheLeonX/NSUNS4-ModManager/releases'
    },
    {
      name: 'XFBIN Parser (xfbin_lib)',
      category: 'Frameworks & APIs',
      description: 'Library and utilities for reading supported XFBIN files.',
      url: 'https://github.com/SutandoTsukai181/xfbin_lib/releases'
    },
    {
      name: 'NSUNS4 Character Message IDs',
      category: 'Resources',
      description: 'Reference spreadsheet for PlayerSettingParam and CharacterSelectParam message IDs.',
      url: 'https://docs.google.com/spreadsheets/d/1R0K7HgSu06RZ1LaL_vVQgzepWzA2LDhOtnegtKlvnQk/edit?usp=sharing'
    }
  ];

  chapters: TutorialChapter[] = [
    {
      id: 1,
      title: 'Getting Started',
      description: 'Everything you need before creating your first mod.',
      steps: [
        {
          title: 'Introduction to Modding',
          description: 'Learn what modding is and how game resources can be customized.'
        },
        {
          title: 'Choose Your Game',
          description: 'Select the Naruto Storm game you want to modify and identify its supported tools.'
        },
        {
          title: 'Prepare Your Workspace',
          description: 'Create separate folders for original files, extracted resources and modified assets.'
        },
        {
          title: 'Backup Original Files',
          description: 'Create a backup of all relevant game files before making changes.'
        }
      ],
      note: 'Always keep an untouched backup of your original game files.'
    },
    {
      id: 2,
      title: 'Understanding XFBIN Files',
      description: 'Learn how XFBIN resources work and how to inspect them.',
      steps: [
        {
          title: 'What Is XFBIN?',
          description: 'XFBIN is a resource container format found in supported CyberConnect2 games.'
        },
        {
          title: 'Choose an XFBIN Parser',
          description: 'Find a compatible parser based on your target game and resource type.'
        },
        {
          title: 'Inspect Game Resources',
          description: 'Use an appropriate tool to inspect supported XFBIN files.'
        },
        {
          title: 'Export Resources',
          description: 'Extract supported assets using the selected tool.'
        },
        {
          title: 'Reimport and Test',
          description: 'Where supported, reimport modified assets and verify their behavior in game.'
        }
      ]
    },
    {
      id: 3,
      title: 'Character Modding',
      description: 'Understanding character files, parameters and resources.',
      steps: [
        {
          title: 'Locate Character Files',
          description: 'Identify the resources associated with your target character.'
        },
        {
          title: 'Understand Character Parameters',
          description: 'Review the supported character configuration files and their editing tools.'
        },
        {
          title: 'Modify Character Resources',
          description: 'Edit compatible assets while preserving the game resource structure.'
        },
        {
          title: 'Test Your Changes',
          description: 'Load the modified resources and check for errors or compatibility problems.'
        }
      ]
    },
    {
      id: 4,
      title: 'Model & Texture Editing',
      description: 'Introduction to editing 3D models and game textures.',
      steps: [
        {
          title: 'Install Blender',
          description: 'Install a Blender version compatible with your XFBIN addon.'
        },
        {
          title: 'Configure the XFBIN Addon',
          description: 'Install the addon and verify which resource formats it supports.'
        },
        {
          title: 'Import Character Models',
          description: 'Import compatible resources and inspect their meshes and materials.'
        },
        {
          title: 'Edit Models and Textures',
          description: 'Modify supported assets while preserving the required structure.'
        },
        {
          title: 'Export and Test',
          description: 'Export the resources and verify them in your target game.'
        }
      ],
      note: 'Compatibility depends on the game, Blender version and addon version.'
    },
    {
      id: 5,
      title: 'Animation Modding',
      description: 'Introduction to working with character animations.',
      steps: [
        {
          title: 'Identify Animation Resources',
          description: 'Locate the supported animation resources for your target character.'
        },
        {
          title: 'Choose an Animation Tool',
          description: 'Use a compatible animation exporter or action merging addon.'
        },
        {
          title: 'Modify Animations',
          description: 'Edit the supported animation data using the selected workflow.'
        },
        {
          title: 'Export and Verify',
          description: 'Export the modified assets and test them in game.'
        }
      ]
    },
    {
      id: 6,
      title: 'Audio Modding',
      description: 'Learn the fundamentals of game audio editing.',
      steps: [
        {
          title: 'Understand Audio Resources',
          description: 'Identify the sound archives and audio formats used by your target game.'
        },
        {
          title: 'Select an Audio Editor',
          description: 'Choose a compatible tool for the audio format you want to modify.'
        },
        {
          title: 'Edit Sound Resources',
          description: 'Modify the supported sound events or audio files.'
        },
        {
          title: 'Test Audio Changes',
          description: 'Verify playback and resource compatibility.'
        }
      ]
    },
    {
      id: 7,
      title: 'Installing & Managing Mods',
      description: 'Learn how to install, organize and manage game modifications.',
      steps: [
        {
          title: 'Choose a Mod Manager',
          description: 'Use a mod manager compatible with your Naruto Storm game.'
        },
        {
          title: 'Install a Modification',
          description: 'Follow the installation instructions provided by the mod author.'
        },
        {
          title: 'Check Compatibility',
          description: 'Verify whether multiple modifications affect the same game files.'
        },
        {
          title: 'Restore Original Files',
          description: 'Disable conflicting modifications or restore your original game files.'
        }
      ],
      note: 'Respect the rules of online play and test modifications in permitted environments.'
    }
  ];

  get categories(): string[] {
    return [
      'All Tools',
      ...new Set(this.tools.map(tool => tool.category))
    ];
  }

  get filteredTools(): ModdingTool[] {
    const query = this.searchQuery.trim().toLowerCase();

    return this.tools.filter(tool => {
      const matchesCategory =
        this.selectedCategory === 'All Tools' ||
        tool.category === this.selectedCategory;

      const matchesSearch =
        query === '' ||
        tool.name.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = 'All Tools';
  }
}