import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface StormItem {
  users: any;
  name: string;
  description: string;
  category: 'Common' | 'Unique';
  game?: string;
  imageUrl: string;
}

function createItem(
  name: string,
  description: string,
  category: 'Common' | 'Unique',
  game: string | undefined,
  imageUrl: string
): StormItem {
  return {
  name,
  description,
  category,
  game,
  imageUrl,
  users: undefined,
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

    // COMMON TOOLS

    createItem(
      'Guard Break',
      'Breaks the opponent\'s guard and stuns them for a few seconds.',
      'Common',
      undefined,
      'items/1.png'
    ),
    createItem(
      'Paper Bomb',
      'Throws an explosive tag at the floor. Explodes upon impact.',
      'Common',
      undefined,
      'items/c_bat_186.png'
    ),
    createItem(
      'Bomb Ball',
      'Throws a spherical bomb at the opponent. Travels further than Paper Bomb, and explodes upon impact with the opponent.',
      'Common',
      undefined,
      'items/8.png'
    ),
    createItem(
      'Burst Kunai',
      'Throws a kunai with a parachute at the opponent. Explodes upon impact.',
      'Common',
      undefined,
      '/items/c_bat_213.png'
    ),
    createItem(
      'Kunai Rain',
      'Throws a triad of kunai with parachutes. These fall slower, but still explode upon impact.',
      'Common',
      undefined,
      '/items/c_bat_183.png'
    ),
    createItem(
      'Poison Tag',
      'Throws a tag at the opponent that slowly poisons them for a time.',
      'Common',
      undefined,
      '/items/c_bat_206.png'
    ),
    createItem(
      'Sleep Tag',
      'Throws a tag at the opponent that puts them to sleep for a time, leaving them vulnerable to follow-up attacks.',
      'Common',
      undefined,
      '/items/c_bat_177.png'
    ),
    createItem(
      'Chakra Seal Tag',
      'Throws a tag at the opponent that seals their use of Chakra-based techniques for a time.',
      'Common',
      undefined,
      '/items/c_bat_180.png'
    ),
    createItem(
      'Exhaustion Tag',
      'Throws a tag at the opponent that drastically reduces their attack power for a time.',
      'Common',
      undefined,
      '/items/c_bat_168.png'
    ),
    createItem(
      'Defense Breaking Tag',
      'Throws a tag at the opponent that drastically reduces their defense for a time.',
      'Common',
      undefined,
      '/items/c_bat_171.png'
    ),
    createItem(
      'Sluggish Tag',
      'Throws a tag at the opponent that drastically reduces their movement speed for a time.',
      'Common',
      undefined,
      '/items/c_bat_174.png'
    ),
    createItem(
      'Food Pills',
      'Ingests a pill that drastically increases the user\'s attack power for a time.',
      'Common',
      undefined,
      'items/c_bat_162.png'
    ),
    createItem(
      'Tortoiseshell Pills',
      'Ingests a pill that drastically increases the user\'s defense for a time.',
      'Common',
      undefined,
      'items/c_bat_165.png'
    ),
    createItem(
      'Shot Run Pills',
      'Ingests a pill that drastically increases the user\'s movement speed for a time.',
      'Common',
      undefined,
      'items/c_bat_198.png'
    ),
    createItem(
      'Power Mochi',
      'Eats a ball of mochi that increases the user\'s guard break power for a time.',
      'Common',
      undefined,
      'items/c_bat_203.png'
    ),
    createItem(
      'Focus Tag',
      'Uses a tag that increases the user\'s Storm Gauge fill quicker.',
      'Common',
      undefined,
      'items/c_bat_211.png'
    ),
    createItem(
      'Chain Mail',
      'Makes the user impervious to shuriken for a time.',
      'Common',
      undefined,
      'items/c_bat_159.png'
    ),
    createItem(
      'Scroll of Hidden Cloud',
      'Uses a scroll that grants the user invisibility for a time.',
      'Common',
      undefined,
      'items/c_bat_195.png'
    ),
    createItem(
      'Substitution Scroll',
      'Uses a scroll that automatically uses Substitutions for a time when hit.',
      'Common',
      undefined,
      'items/c_bat_156.png'
    ),

    // ULTIMATE NINJA STORM 1

    createItem(
      'Ramen',
      'Increases chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/ramen.png'
    ),
    createItem(
      'Uchiha Scroll',
      'Grants automatic Substitutions*.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/uchiha-scroll.png'
    ),
    createItem(
      'Miso Soup',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/miso-soup.png'
    ),
    createItem(
      'Bandages',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/bandages.png'
    ),
    createItem(
      'Substitution Tag',
      'Grants automatic Substitutions*.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/substitution-tag.png'
    ),
    createItem(
      'Dumpling',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/dumpling.png'
    ),
    createItem(
      'Crushed Root',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/crushed-root.png'
    ),
    createItem(
      'Potato Chips',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/potato-chips.png'
    ),
    createItem(
      'Flower',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/flower.png'
    ),
    createItem(
      'Military Ration Pills',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/military-ration-pills.png'
    ),
    createItem(
      'Beetle',
      'Grants invisibility.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/beetle.png'
    ),
    createItem(
      'Hyuga Clan Secret Ointment',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/hyuga-clan-secret-ointment.png'
    ),
    createItem(
      'Shukaku\'s Sand',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/shukaku-s-sand.png'
    ),
    createItem(
      'Puppet Arm',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/puppet-arm.png'
    ),
    createItem(
      'Temari\'s Scroll',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/temari-s-scroll.png'
    ),
    createItem(
      'Make-Out Lit.',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/make-out-lit.png'
    ),
    createItem(
      'Medicine',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/medicine.png'
    ),
    createItem(
      'Hokage Hat',
      'Grants invisibility.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/hokage-hat.png'
    ),
    createItem(
      'Make-Out Paradise',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/make-out-paradise.png'
    ),
    createItem(
      'Tsunade\'s Medicine',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/tsunade-s-medicine.png'
    ),
    createItem(
      'Orochimaru\'s Medicine',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/orochimaru-s-medicine.png'
    ),
    createItem(
      'Kabuto\'s Pills',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/kabuto-s-pills.png'
    ),
    createItem(
      'Bones',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/bones.png'
    ),
    createItem(
      'Itachi\'s Scroll',
      'Grants automatic Substitutions*.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/itachi-s-scroll.png'
    ),
    createItem(
      'Kisame\'s Scroll',
      'Grants invisibility.',
      'Unique',
      'Ultimate Ninja Storm 1',
      'assets/items/storm1/kisame-s-scroll.png'
    ),

    // ULTIMATE NINJA STORM 2

    createItem(
      'Ramen',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/ramen.png'
    ),
    createItem(
      'Book',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/book.png'
    ),
    createItem(
      'Seal',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/seal.png'
    ),
    createItem(
      'Akatsuki Cape',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/akatsuki-cape.png'
    ),
    createItem(
      'Popsicle',
      'Recovers negative statuses.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/popsicle.png'
    ),
    createItem(
      'Training Weight',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/training-weight.png'
    ),
    createItem(
      'Book',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/book.png'
    ),
    createItem(
      'Ninja Tool Scroll',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/ninja-tool-scroll.png'
    ),
    createItem(
      'Crushed Root',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/crushed-root.png'
    ),
    createItem(
      'Handbag',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/handbag.png'
    ),
    createItem(
      'Potato Chips',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/potato-chips.png'
    ),
    createItem(
      'Military Ration Pills',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/military-ration-pills.png'
    ),
    createItem(
      'Insect Bag',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/insect-bag.png'
    ),
    createItem(
      'Hyuga Clan Secret Ointment',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/hyuga-clan-secret-ointment.png'
    ),
    createItem(
      'Shukaku\'s Sand',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/shukaku-s-sand.png'
    ),
    createItem(
      'Puppet Arm',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/puppet-arm.png'
    ),
    createItem(
      'Dumplings',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/dumplings.png'
    ),
    createItem(
      'Lottery Ticker',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/lottery-ticker.png'
    ),
    createItem(
      'Orochimaru\'s Medicine',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/orochimaru-s-medicine.png'
    ),
    createItem(
      'Itachi\'s Scroll',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/itachi-s-scroll.png'
    ),
    createItem(
      'Whetstone',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/whetstone.png'
    ),
    createItem(
      'Shogi Tile',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/shogi-tile.png'
    ),
    createItem(
      'Anbu Mask',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/anbu-mask.png'
    ),
    createItem(
      'Inkbrush',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/inkbrush.png'
    ),
    createItem(
      'Puppet Grip',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/puppet-grip.png'
    ),
    createItem(
      'Flying Raijin Kunai',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/flying-raijin-kunai.png'
    ),
    createItem(
      'Water Bottle',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/water-bottle.png'
    ),
    createItem(
      'Bird',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/bird.png'
    ),
    createItem(
      'Perfume',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/perfume.png'
    ),
    createItem(
      'Black Needle',
      'Increases guard break power.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/black-needle.png'
    ),
    createItem(
      'Origami Flower',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/origami-flower.png'
    ),
    createItem(
      'Demon Mask',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/demon-mask.png'
    ),
    createItem(
      'Detonating Clay',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/detonating-clay.png'
    ),
    createItem(
      'Hit List',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/hit-list.png'
    ),
    createItem(
      'Jashin Necklace',
      'Increases guard break power.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/jashin-necklace.png'
    ),
    createItem(
      'Akatsuki Ring',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/akatsuki-ring.png'
    ),
    createItem(
      'Rhyming Dictionary',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/rhyming-dictionary.png'
    ),
    createItem(
      'Cell Phone',
      'Increases guard break power.',
      'Unique',
      'Ultimate Ninja Storm 2',
      'assets/items/storm2/cell-phone.png'
    ),

    // ULTIMATE NINJA STORM GENERATIONS

    createItem(
      'Seal',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/seal.png'
    ),
    createItem(
      'Back Pocket',
      'Restores chakra.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/back-pocket.png'
    ),
    createItem(
      'Snake Cloak',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/snake-cloak.png'
    ),
    createItem(
      'Senju Charm',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/senju-charm.png'
    ),
    createItem(
      'Tobirama\'s Face Guard',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/tobirama-s-face-guard.png'
    ),
    createItem(
      'Mask',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/mask.png'
    ),
    createItem(
      'Raikage Hat',
      'Increases speed.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/raikage-hat.png'
    ),
    createItem(
      'Tsuchikage Hat',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/tsuchikage-hat.png'
    ),
    createItem(
      'Mizukage Hat',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/mizukage-hat.png'
    ),
    createItem(
      'Zabuza\'s Kunai',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/zabuza-s-kunai.png'
    ),
    createItem(
      'Mist Anbu Mask',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/mist-anbu-mask.png'
    ),
    createItem(
      'Sharingan',
      'Restores chakra.',
      'Unique',
      'Ultimate Ninja Storm Generations',
      'assets/items/generations/sharingan.png'
    ),

    // ULTIMATE NINJA STORM 3

    createItem(
      'Seal',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/seal.png'
    ),
    createItem(
      'Book',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/book.png'
    ),
    createItem(
      'Madara\'s Fan',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/madara-s-fan.png'
    ),
    createItem(
      'Itachi\'s Scroll',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/itachi-s-scroll.png'
    ),
    createItem(
      'Eye Drops',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/eye-drops.png'
    ),
    createItem(
      'Cleaver Sword',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/cleaver-sword.png'
    ),
    createItem(
      'Katana',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/katana.png'
    ),
    createItem(
      'Armor',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/armor.png'
    ),
    createItem(
      'Poison Fog',
      'Grants poison damage with any attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/poison-fog.png'
    ),
    createItem(
      'Rosary Beads',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/rosary-beads.png'
    ),
    createItem(
      'Flower',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/flower.png'
    ),
    createItem(
      'Roshi\'s Knife',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/roshi-s-knife.png'
    ),
    createItem(
      'Han\'s Gear',
      'Increases defense.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/han-s-gear.png'
    ),
    createItem(
      'Bubble Pipe',
      'Increases attack.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/bubble-pipe.png'
    ),
    createItem(
      'Fuu\'s Bag',
      'Recovers chakra.',
      'Unique',
      'Ultimate Ninja Storm 3',
      'assets/items/storm3/fuu-s-bag.png'
    )
  ];

  // SEARCH AND FILTER

  get filteredItems(): StormItem[] {

    const search = this.searchTerm.toLowerCase().trim();

    return this.items.filter(item => {

      const matchesSearch =
        search === '' ||
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        (item.game?.toLowerCase().includes(search) ?? false) ||
        (item.users?.some((user: string) =>
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