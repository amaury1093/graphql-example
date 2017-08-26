import sequelize from '../../models';

const Project = sequelize.models.Project;

/**
 * Load Project and append to req.
 */
function load (req, res, next, id) {
  Project.findOne({ id })
    .then((Project) => {
      req.Project = Project; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get Project list.
 * @property {number} req.query.skip - Number of Projects to be skipped.
 * @property {number} req.query.limit - Limit number of Projects to be returned.
 * @returns {Project[]}
 */
function list (req, res, next) {
  Project.findAll()
    .then(Projects => res.json(Projects))
    .catch(e => next(e));
}

/**
 * Get Project
 * @returns {Project}
 */
function get (req, res) {
  return res.json(req.Project);
}

export default { load, get, list };
