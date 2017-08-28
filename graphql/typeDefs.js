const typeDefinitions = `
type User {
  id: ID!
  firstname: String
  lastname: String
  email: String
  projects: [Project]
}

type Project {
  id: ID!
  name: String
  tasks: [Task]
}

type Task {
  id: ID!
  description: String
}

# The schema allows the following queries:
type RootQuery {
  user(id: ID): User
  users: [User]
  project(id: ID!): Project
  projects: [Project]
  task(id: ID!): Task
  tasks: [Task]
}

# We need to tell the server which types represent the root query.
# We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
  # mutation: RootMutation # Our mutations would go here
}
`;

export default typeDefinitions;
