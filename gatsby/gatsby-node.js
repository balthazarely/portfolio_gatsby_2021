import path from 'path';

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/Project.jsx');
  const { data } = await graphql(`
    query {
      project: allSanityProjects {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.project.nodes.forEach((project) => {
    actions.createPage({
      path: `${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnProjectsIntoPages(params)]);
}
