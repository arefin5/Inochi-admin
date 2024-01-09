// ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'inochi-admin',
      script: 'npm',
      args: 'run dev -- --host 0.0.0.0',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
