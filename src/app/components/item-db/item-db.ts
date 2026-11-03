import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface StormItem {
  name: string;
  description: string;
  category: 'Common' | 'Unique';
  game?: string;
  users?: string[];
  imageUrl: string;
}

function createItem(
  name: string,
  description: string,
  category: 'Common' | 'Unique',
  game?: string,
  users: string[] = []
): StormItem {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return {
    name,
    description,
    category,
    game,
    users,
    imageUrl: `assets/items/${slug}.png`
  };
}

@Component({
  selector: 'app-item-db',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-db.html',
  styleUrl: './item-db.scss',
})
export class ItemDb {

  searchTerm = '';
  selectedFilter = 'All';

  filters = [
    'All',
    'Common',
    'Unique',
    'Ultimate Ninja Storm 1',
    'Ultimate Ninja Storm 2',
    'Ultimate Ninja Storm Generations',
    'Ultimate Ninja Storm 3'
  ];

  items: StormItem[] = [

    // ==========================================
    // COMMON TOOLS
    // ==========================================

    createItem(
      'Guard Break',
      'Breaks the opponent\'s guard and stuns them for a few seconds.',
      'Common'
    ),
    createItem(
      'Paper Bomb',
      'Throws an explosive tag at the floor. Explodes upon impact.',
      'Common'
    ),
    createItem(
      'Bomb Ball',
      'Throws a spherical bomb at the opponent. Travels further than Paper Bomb, and explodes upon impact with the opponent.',
      'Common'
    ),
    createItem(
      'Burst Kunai',
      'Throws a kunai with a parachute at the opponent. Explodes upon impact.',
      'Common'
    ),
    createItem(
      'Kunai Rain',
      'Throws a triad of kunai with parachutes. These fall slower, but still explode upon impact.',
      'Common'
    ),
    createItem(
      'Poison Tag',
      'Throws a tag at the opponent that slowly poisons them for a time.',
      'Common'
    ),
    createItem(
      'Sleep Tag',
      'Throws a tag at the opponent that puts them to sleep for a time, leaving them vulnerable to follow-up attacks.',
      'Common'
    ),
    createItem(
      'Chakra Seal Tag',
      'Throws a tag at the opponent that seals their use of Chakra-based techniques for a time.',
      'Common'
    ),
    createItem(
      'Exhaustion Tag',
      'Throws a tag at the opponent that drastically reduces their attack power for a time.',
      'Common'
    ),
    createItem(
      'Defense Breaking Tag',
      'Throws a tag at the opponent that drastically reduces their defense for a time.',
      'Common'
    ),
    createItem(
      'Sluggish Tag',
      'Throws a tag at the opponent that drastically reduces their movement speed for a time.',
      'Common'
    ),
    createItem(
      'Food Pills',
      'Ingests a pill that drastically increases the user\'s attack power for a time.',
      'Common'
    ),
    createItem(
      'Tortoiseshell Pills',
      'Ingests a pill that drastically increases the user\'s defense for a time.',
      'Common'
    ),
    createItem(
      'Shot Run Pills',
      'Ingests a pill that drastically increases the user\'s movement speed for a time.',
      'Common'
    ),
    createItem(
      'Power Mochi',
      'Eats a ball of mochi that increases the user\'s guard break power for a time.',
      'Common'
    ),
    createItem(
      'Focus Tag',
      'Uses a tag that increases the user\'s Storm Gauge fill quicker.',
      'Common'
    ),
    createItem(
      'Chain Mail',
      'Makes the user impervious to shuriken for a time.',
      'Common'
    ),
    createItem(
      'Scroll of Hidden Cloud',
      'Uses a scroll that grants the user invisibility for a time.',
      'Common'
    ),
    createItem(
      'Substitution Scroll',
      'Uses a scroll that automatically uses Substitutions for a time when hit.',
      'Common'
    ),

    // ==========================================
    // ULTIMATE NINJA STORM 1
    // ==========================================

    createItem(
      'Ramen',
      'Increases chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Naruto Uzumaki (Part 1)']
    ),
    createItem(
      'Uchiha Scroll',
      'Grants automatic Substitutions*.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Sasuke Uchiha (Part 1)']
    ),
    createItem(
      'Miso Soup',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Sakura Haruno (Part 1)']
    ),
    createItem(
      'Bandages',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Rock Lee (Part 1)']
    ),
    createItem(
      'Substitution Tag',
      'Grants automatic Substitutions*.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Neji Hyuga (Part 1)']
    ),
    createItem(
      'Dumpling',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Tenten (Part 1)']
    ),
    createItem(
      'Crushed Root',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Shikamaru Nara (Part 1)']
    ),
    createItem(
      'Potato Chips',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Choji Akimichi (Part 1)']
    ),
    createItem(
      'Flower',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Ino Yamanaka (Part 1)']
    ),
    createItem(
      'Military Ration Pills',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Kiba Inuzuka (Part 1)']
    ),
    createItem(
      'Beetle',
      'Grants invisibility.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Shino Aburame (Part 1)']
    ),
    createItem(
      'Hyuga Clan Secret Ointment',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Hinata Hyuga (Part 1)']
    ),
    createItem(
      'Shukaku\'s Sand',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Gaara of the Sand']
    ),
    createItem(
      'Puppet Arm',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Kankuro (Part 1)']
    ),
    createItem(
      'Temari\'s Scroll',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Temari (Part 1)']
    ),
    createItem(
      'Make-Out Lit.',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Kakashi Hatake']
    ),
    createItem(
      'Medicine',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Might Guy']
    ),
    createItem(
      'Hokage Hat',
      'Grants invisibility.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['The Third Hokage']
    ),
    createItem(
      'Make-Out Paradise',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Jiraiya']
    ),
    createItem(
      'Tsunade\'s Medicine',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Tsunade']
    ),
    createItem(
      'Orochimaru\'s Medicine',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Orochimaru']
    ),
    createItem(
      'Kabuto\'s Pills',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Kabuto Yakushi']
    ),
    createItem(
      'Bones',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Kimimaro']
    ),
    createItem(
      'Itachi\'s Scroll',
      'Grants automatic Substitutions*.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Itachi Uchiha']
    ),
    createItem(
      'Kisame\'s Scroll',
      'Grants invisibility.',
      'Unique',
      'Ultimate Ninja Storm 1',
      ['Kisame Hoshigaki']
    ),

    // ==========================================
    // ULTIMATE NINJA STORM 2
    // ==========================================

    createItem(
      'Ramen',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Naruto Uzumaki']
    ),
    createItem(
      'Book',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Naruto Uzumaki (Sage Mode)']
    ),
    createItem(
      'Seal',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Sasuke Uchiha']
    ),
    createItem(
      'Akatsuki Cape',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Sasuke Uchiha (The "Taka")']
    ),
    createItem(
      'Popsicle',
      'Recovers negative statuses.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Sakura Haruno']
    ),
    createItem(
      'Training Weight',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Rock Lee']
    ),
    createItem(
      'Book',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Neji Hyuga']
    ),
    createItem(
      'Ninja Tool Scroll',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Tenten']
    ),
    createItem(
      'Crushed Root',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Shikamaru Nara']
    ),
    createItem(
      'Handbag',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Ino Yamanaka']
    ),
    createItem(
      'Potato Chips',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Choji Akimichi']
    ),
    createItem(
      'Military Ration Pills',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Kiba Inuzuka']
    ),
    createItem(
      'Insect Bag',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Shino Aburame']
    ),
    createItem(
      'Hyuga Clan Secret Ointment',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Hinata Hyuga']
    ),
    createItem(
      'Shukaku\'s Sand',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Gaara']
    ),
    createItem(
      'Puppet Arm',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Kankuro']
    ),
    createItem(
      'Dumplings',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Temari']
    ),
    createItem(
      'Lottery Ticker',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Tsunade']
    ),
    createItem(
      'Orochimaru\'s Medicine',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Orochimaru']
    ),
    createItem(
      'Itachi\'s Scroll',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Itachi Uchiha']
    ),
    createItem(
      'Whetstone',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Kisame Hoshigaki']
    ),
    createItem(
      'Shogi Tile',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Asuma Sarutobi']
    ),
    createItem(
      'Anbu Mask',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Yamato']
    ),
    createItem(
      'Inkbrush',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Sai']
    ),
    createItem(
      'Puppet Grip',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Chiyo']
    ),
    createItem(
      'Flying Raijin Kunai',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Minato Namikaze']
    ),
    createItem(
      'Water Bottle',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Suigetsu Hozuki']
    ),
    createItem(
      'Bird',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Jugo']
    ),
    createItem(
      'Perfume',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Karin']
    ),
    createItem(
      'Black Needle',
      'Increases guard break power.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Pain']
    ),
    createItem(
      'Origami Flower',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Konan']
    ),
    createItem(
      'Demon Mask',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Sasori']
    ),
    createItem(
      'Detonating Clay',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Deidara']
    ),
    createItem(
      'Hit List',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Kakuzu']
    ),
    createItem(
      'Jashin Necklace',
      'Increases guard break power.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Hidan']
    ),
    createItem(
      'Akatsuki Ring',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Tobi']
    ),
    createItem(
      'Rhyming Dictionary',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Killer Bee']
    ),
    createItem(
      'Cell Phone',
      'Increases guard break power.',
      'Unique',
      'Ultimate Ninja Storm 2',
      ['Lars Alexandersson']
    ),

    // ==========================================
    // ULTIMATE NINJA STORM GENERATIONS
    // ==========================================

    createItem(
      'Seal',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Sasuke Uchiha (Susano\'o)']
    ),
    createItem(
      'Back Pocket',
      'Restores chakra.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Kakashi Hatake (Kid)']
    ),
    createItem(
      'Snake Cloak',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Kabuto Yakushi (Snake Cloak)']
    ),
    createItem(
      'Senju Charm',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['The First Hokage: Hashirama Senju']
    ),
    createItem(
      'Tobirama\'s Face Guard',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['The Second Hokage: Tobirama Senju']
    ),
    createItem(
      'Mask',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Masked Man']
    ),
    createItem(
      'Raikage Hat',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Raikage: Ay']
    ),
    createItem(
      'Tsuchikage Hat',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Tsuchikage: Ohnoki']
    ),
    createItem(
      'Mizukage Hat',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Mizukage: Mei Terumi']
    ),
    createItem(
      'Zabuza\'s Kunai',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Zabuza Momochi']
    ),
    createItem(
      'Mist Anbu Mask',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Haku']
    ),
    createItem(
      'Sharingan',
      'Restores chakra.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      ['Danzo Shimura']
    ),

    // ==========================================
    // ULTIMATE NINJA STORM 3
    // ==========================================

    createItem(
      'Seal',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      [
        'Sasuke Uchiha (Five Kage Summit)',
        'Kabuto Yakushi (Sage Mode)'
      ]
    ),
    createItem(
      'Book',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Nagato']
    ),
    createItem(
      'Madara\'s Fan',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Tobi (Great Ninja War)']
    ),
    createItem(
      'Itachi\'s Scroll',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Itachi Uchiha (Reanimation)']
    ),
    createItem(
      'Eye Drops',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Obito Uchiha (Kid)']
    ),
    createItem(
      'Cleaver Sword',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Darui']
    ),
    createItem(
      'Katana',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Mifune']
    ),
    createItem(
      'Armor',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Madara Uchiha']
    ),
    createItem(
      'Poison Fog',
      'Grants poison damage with any attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Hanzo']
    ),
    createItem(
      'Rosary Beads',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Yugito Ni\'i']
    ),
    createItem(
      'Flower',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Yagura']
    ),
    createItem(
      'Roshi\'s Knife',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Roshi']
    ),
    createItem(
      'Han\'s Gear',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Han']
    ),
    createItem(
      'Bubble Pipe',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Utakata']
    ),
    createItem(
      'Fuu\'s Bag',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 3',
      ['Fuu']
    )
  ];

  // ==========================================
  // SEARCH AND FILTER
  // ==========================================

  get filteredItems(): StormItem[] {

    const search = this.searchTerm.toLowerCase().trim();

    return this.items.filter(item => {

      const matchesSearch =
        search === '' ||
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        (item.game?.toLowerCase().includes(search) ?? false) ||
        (item.users?.some(user =>
          user.toLowerCase().includes(search)
        ) ?? false);

      let matchesFilter = true;

      if (this.selectedFilter === 'Common') {

        matchesFilter = item.category === 'Common';

      } else if (this.selectedFilter === 'Unique') {

        matchesFilter = item.category === 'Unique';

      } else if (this.selectedFilter !== 'All') {

        matchesFilter = item.game === this.selectedFilter;

      }

      return matchesSearch && matchesFilter;
    });
  }

  // ==========================================
  // IMAGE ERROR
  // ==========================================

  onImageError(event: Event): void {

    const target = event.target;

    if (target instanceof HTMLImageElement) {
      target.hidden = true;
    }
  }

  // ==========================================
  // RESET FILTERS
  // ==========================================

  resetFilters(): void {

    this.searchTerm = '';
    this.selectedFilter = 'All';

  }

}