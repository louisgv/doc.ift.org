const navConfig = {
  'IFTNext': {
    url: 'https://www.ift.org/iftnext',
    description:
      'IFTNEXT is a heightened, purpose-driven commitment to bringing provocative ideas and discoveries together to inspire thoughtful, important conversations that challenge conventional approaches with the goal of informing global issues related to the science of food.'
  },
};

const footerNavConfig = {
  News: {
    href: 'https://www.ift.org/news-and-publications/news/',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  Community: {
    href: 'http://connect.ift.org/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
};

module.exports = {
  siteName: "doc.ift",
  subtitle: "IFT Documentations",
  description: "A guide to IFT's standards and APIs",
  menuTitle: 'IFT ECOSYSTEM',
  segmentApiKey: 'wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg',
  algoliaApiKey: '794d68c6a15fef4147f373433a439119',
  algoliaIndexName: 'iftdocs',
  baseUrl: 'https://louisgv.github.io/doc.ift.org/',
  contentDir: '/source/',
  twitterHandle: 'IFT',
  spectrumHandle: 'IFT',
  youtubeUrl: 'https://www.youtube.com/user/IFTlive',
  logoLink: 'https://www.ift.org/',
  defaultVersion: 'default',
  navConfig,
  footerNavConfig
};
