import DiscordLight from '../../../assets/images/app/discord/light.png';
import DiscordDark from '../../../assets/images/app/discord/dark.png';
import DauntlessBuilderLight from '../../../assets/images/contribution/dauntlessbuilder/light.png';
import DauntlessBuilderDark from '../../../assets/images/contribution/dauntlessbuilder/dark.png';
import DauntlessLeaderboardsLight from '../../../assets/images/contribution/dauntlessleaderboards/light.png';
import DauntlessLeaderboardsDark from '../../../assets/images/contribution/dauntlessleaderboards/dark.png';
import NPMLight from '../../../assets/images/package/npm/light.png';
import NPMDark from '../../../assets/images/package/npm/dark.png';

const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'app',
  },
  {
    name: 'collaboration',
  },
  {
    name: 'package',
  }
];

const projectsData = [
  {
    id: 1,
    category: 'app',
    imageLight: DiscordLight,
    imageDark: DiscordDark,
    title: 'DiscordAPP',
    link: 'https://discord.com/oauth2/authorize?client_id=1260588948544290927',
    repository: 'https://github.com/FJrodafo/DiscordAPP',
  },
  {
    id: 2,
    category: 'app',
    imageLight: DiscordLight,
    imageDark: DiscordDark,
    title: 'DiscordCRPS',
    link: 'https://discord.com/oauth2/authorize?client_id=1260588948544290927',
    repository: 'https://github.com/FJrodafo/DiscordCRPS',
  },
  {
    id: 3,
    category: 'collaboration',
    imageLight: DauntlessBuilderLight,
    imageDark: DauntlessBuilderDark,
    link: 'https://www.dauntless-builder.com/',
    title: 'dauntless-builder-legacy',
    repository: 'https://github.com/atomicptr/dauntless-builder-legacy',
  },
  {
    id: 4,
    category: 'collaboration',
    imageLight: DauntlessLeaderboardsLight,
    imageDark: DauntlessLeaderboardsDark,
    link: 'https://dauntless-leaderboards.com/',
    title: 'dauntless-leaderboards',
    repository: 'https://github.com/PierreYvesFlamand/Dauntless-Leaderboards',
  },
  {
    id: 5,
    category: 'package',
    imageLight: NPMLight,
    imageDark: NPMDark,
    link: 'https://www.npmjs.com/package/@fjrodafo/free-port',
    title: 'free-port',
    repository: 'https://github.com/FJrodafo/free-port',
  },
];

export { projectsNav, projectsData };
