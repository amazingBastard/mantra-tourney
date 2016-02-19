let title = 'Tourney.News | News for upcoming Starcraft II tournaments',
    description = {
      name: 'description',
      content: 'A basic web app that scrapes data on upcoming Starcraft II tournaments and lists them for the user in a mobile friendly user interface.'
    },
    viewport = {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    favicon = {
      rel: 'icon',
      sizes: '16x16 32x32',
      type: 'image/png',
      href: '/favicon.png'
    };

DocHead.setTitle(title);
DocHead.addMeta(description);
DocHead.addMeta(viewport);
DocHead.addLink(favicon);
