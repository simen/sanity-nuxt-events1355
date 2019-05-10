export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events1355-studio',
                  apiId: 'c4b8a4cb-d6a6-4b6a-9e93-60d2fa2cf227'
                },
                {
                  buildHookId: '5cd584f7769bffc5934af709',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events1355',
                  apiId: '917c78b6-0aaf-424b-9586-7ae07a8004db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nuxt-events1355',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events1355.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
