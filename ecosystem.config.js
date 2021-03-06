module.exports = {
  apps: [
    {
      name: 'my-project',
      script: '/index.js',
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '129.226.144.194',
      ref: 'origin/master',
      repo: 'git@github.com:chnpeople/my_project.git',
      path: '/www/wwwroot/www.tim007.xyz',
      'pre-deploy': 'git pull',
      'post-deploy': 'npm install && npm run build',
    },
  },
};
