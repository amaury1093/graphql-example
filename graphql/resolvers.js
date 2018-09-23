import sequelize from '../models';
const models = sequelize.models;

// resolvers
export const resolvers = {
    RootQuery: {
        user(root, {id}, context) {
            return models.User.findById(id, context);
        },
        users(root, args, context) {
            return models.User.findAll({}, context);
        }
    },

    User: {
        projects(user) {
            return user.getProjects();
        }
    },

    Project: {
        tasks(project) {
            return project.getTasks();
        }
    }
};

// mutations
export const mutations = {
    async createUser({input}) {
        let user = await models.User.create(input);
        return user.dataValues;
    },

    async updateUser({id, input}) {
        let user = await models.User.findById(id);

        user.firstname = input.firstname;
        user.lastname = input.lastname;
        user.email = input.email;
        user = await user.save();

        return user.dataValues;
    },

    async removeUser({id}) {
        let user = await models.User.findById(id);
        user = await user.destroy();

        return user.dataValues;
    },
};