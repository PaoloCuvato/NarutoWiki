
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string[];
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {

  faqs: FaqItem[] = [
    {
      question: 'Why was this wiki created?',
      answer: [
        'The Storm Wiki was created to preserve, organize, and share knowledge about the Naruto Storm franchise. Our goal is to build a centralized archive where players, researchers, and content creators can find reliable and detailed information about the games.',
        'Over time, valuable knowledge can become scattered or lost. We want to make sure that the community has one place where this information can be accessed and preserved.'
      ],
      open: false
    },
    {
      question: 'What are the future plans for the wiki?',
      answer: [
        'We have many plans for the future! We want to expand the existing databases, introduce new interactive tools, document more game mechanics, and provide additional resources for the community.',
        'Our long-term vision is to make this the definitive information hub for the Naruto Storm franchise.'
      ],
      open: false
    },
    {
      question: 'How often will the wiki receive updates?',
      answer: [
        'The wiki is an ongoing project, and new content and improvements will be introduced progressively.',
        'Updates depend on development progress, research, and available community contributions. Sections marked as Coming Soon are planned features that will become available as development progresses.',
        'We prefer delivering complete and reliable features rather than rushing unfinished content.'
      ],
      open: false
    },
    {
      question: 'When will I be able to create my own Ninja Card?',
      answer: [
        'The Ninja Card Creator is one of our planned community features. It will allow players to create,customize their own player cards and join or create lobbies using our custom matchmaking system .',
        'Stay tuned for updates regarding its development and official release.'
      ],
      open: false
    },
    {
      question: 'When will I be able to create a lobby through Matchmaking?',
      answer: [
        'Our goal is to introduce a matchmaking system where players can create lobbies, organize matches, and connect with other members of the community via Discord or the wiki.',
        'This feature is planned for a future update. More details will be announced as development progresses.'
      ],
      open: false
    },
    {
      question: "I'm a content creator. How can I appear in the Community section?",
      answer: [
        'We are always interested in discovering content creators who contribute to the Naruto Storm community.',
        'You can contact our team through our official community channels and share your YouTube, Twitch, or other social media profiles or you can contact us directly on inquiry@willofninja.com; we will review your content and consider adding you to the Community section.'
      ],
      open: false
    },
    {
      question: 'How can I send suggestions or feedback?',
      answer: [
        'Community feedback is extremely important to us. If you have ideas, suggestions, or improvements in mind, feel free to contact us through our official community on Discord or email us at inquiry@willofninja.com.',
        'Every suggestion is appreciated and helps us improve the wiki.'
      ],
      open: false
    },
    {
      question: 'Was AI used to build this wiki?',
      answer: [
        'No. The wiki is designed and developed by a human developer. It is built through hands-on programming, research, testing, and continuous development.',
        'We believe in the value of developers, their skills, creativity, and the work behind every project.'
      ],
      open: false
    },
    {
      question: 'How can I become a sponsor?',
      answer: [
        'We welcome collaborations and sponsorship opportunities that can help support the project and its future growth.',
        'If you are interested in sponsoring the Storm Wiki, please get in touch with our team through our official contact channels or email us at inquiry@willofninja.com to discuss possible collaborations.'
      ],
      open: false
    },
    {
      question: 'How can I add my Storm project to the wiki?',
      answer: [
        'We want the wiki to be a place where the community can showcase useful projects and resources.',
        'If you have created a tool, mod, website, database, or another project related to the Naruto Storm series and you would like to showcase it on the wiki, contact our team with a description and the relevant links. We will review your submission.',
        'you can reach us through our official community channels or email us at inquiry@willofninja.com'
      ],
      open: false
    },
    {
      question: 'How can I become part of the Will of Ninja team?',
      answer: [
        'We are always looking for passionate people who want to contribute to the Naruto Storm community.',
        'Whether you are a developer, researcher, designer, content creator, or simply someone with valuable knowledge about the games, you can contact us and express your interest in joining the team.',
        'you can reach us through our official community channels or email us at inquiry@willofninja.com'

      ],
      open: false
    },
    {
      question: 'How can I report a bug?',
      answer: [
        'If you encounter a bug or something that is not working correctly, please report it through our official community channels or email us at inquiry@willofninja.com.',
        'Whenever possible, include a description of the issue, screenshots, and the steps required to reproduce it. This will help us investigate and fix the problem faster.'
      ],
      open: false
    },
    {
      question: 'Why are all characters ranked A Tier?',
      answer: [
        'We would love to showcase the different character tier lists across all the games. Unfortunately, implementing this feature will take some time.',
        'For this reason, you may currently see a tier displayed next to certain characters. Please note that these rankings are temporary and should not be taken seriously at this stage, we are worrking the fastest that we can to update the tier list of each games.',
        'We apologize for any inconvenience and appreciate your understanding!'

      ],
      open: false
    },
        {
      question: 'Why Leaderboard is not updating?',
      answer: [
        'The Leaderboard section is on build and will be updated in the future. We are working on implementing a system that will showcase the last rankings of our matchmaking system.',
        'We are also planning to add Seasons but before do that we need to upgrade our matchmaking system to support this feature.',
        'We appreciate your patience and understanding as we continue to develop and improve this feature.'
      ],
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
