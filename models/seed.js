// Add some data in the database
export default function (sequelize) {
  const models = sequelize.models;

  models.User.create({
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com'
  })
  .then((user) => models.Project.create({
    name: 'Migrate from REST to GraphQL',
    UserId: user.id
  }))
  .then((project) => {
    models.Task.create({
      description: 'Read tutorial',
      ProjectId: project.id
    });
    models.Task.create({
      description: 'Start coding',
      ProjectId: project.id
    });
    return Promise.resolve(project);
  })
  .then((project) => models.Project.create({
    name: 'Create a blog',
    UserId: project.UserId
  }))
  .then((project) => {
    models.Task.create({
      description: 'Write draft of article',
      ProjectId: project.id
    });
    models.Task.create({
      description: 'Set up blog platform',
      ProjectId: project.id
    });
    return Promise.resolve();
  })
  .then(() => models.User.create({
    firstname: 'Alicia',
    lastname: 'Smith',
    email: 'alicia.smith@example.com'
  }))
  .then((user) => models.Project.create({
    name: 'Email Marketing Campaign',
    UserId: user.id
  }))
  .then((project) => {
    models.Task.create({
      description: 'Get list of users',
      ProjectId: project.id
    });
    models.Task.create({
      description: 'Write email template',
      ProjectId: project.id
    });
    return Promise.resolve(project);
  })
  .then((project) => models.Project.create({
    name: 'Hire new developer',
    UserId: project.UserId
  }))
  .then((project) => {
    models.Task.create({
      description: 'Find candidates',
      ProjectId: project.id
    });
    models.Task.create({
      description: 'Prepare interview',
      ProjectId: project.id
    });
    return Promise.resolve();
  });
}
