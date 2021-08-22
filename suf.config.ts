import { ConfigFile } from 'suf-cli'

const config: ConfigFile = {
  badges: {
    name: 'suf-canvas',
    github: 'TheRealSyler',
    repo: 'suf-canvas',
    out: 'README.md',
    badges: [
      'npmV npm',
      'install package',
      'githubLastCommit github',
    ],
  },
  license: {
    name: 'Leonard Grosoli',
    type: 'mit',
    year: '2021',
    out: 'README.md',
    file: 'LICENSE',
  },
  tsDoc: {
    title: 'Docs',
    dir: 'dist',
    out: 'README.md',
    exclude: ['index', 'utils']
  },
};

export default config;