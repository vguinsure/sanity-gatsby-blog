export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d24547b77cb1b30e57dc94d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jc8zhdka',
                  apiId: '9a239db4-5c25-4f98-afa2-5da86597c1e4'
                },
                {
                  buildHookId: '5d24547b332e5047de13ca79',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1ke29gfu',
                  apiId: 'ccc70a81-6144-45df-848e-ed100b37087b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vguinsure/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1ke29gfu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
