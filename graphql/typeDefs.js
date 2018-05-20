const typeDefinitions = `
type User {
  id: ID!
  firstname: String
  lastname: String
  email: String
  projects: [Project]
}

input UserInput {
  firstname: String
  lastname: String
  email: String
}

type Project {
  id: ID!
  name: String
  tasks: [Task]
}

input ProjectInput {
  name: String
  UserId: ID!
}

type Task {
  id: ID!
  description: String
  ProjectId: ID!
}

input TaskInput {
  description: String
  ProjectId: ID!
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

# The schema allows the following mutations:
type RootMutation {
  createUser(input: UserInput!): User
  updateUser(id: ID!, input: UserInput!): User
  removeUser(id: ID!): User
  createProject(input: ProjectInput!): Project
  updateProject(id: ID!, input: ProjectInput!): Project
  removeProject(id: ID!): Project
  createTask(input: TaskInput!): Task
  updateTask(id: ID!, input: TaskInput!): Task
  removeTask(id: ID!): Task
}

# We need to tell the server which types represent the root query.
# We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;
