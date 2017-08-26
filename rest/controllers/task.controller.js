import sequelize from '../../models';

const Task = sequelize.models.Task;

/**
 * Load Task and append to req.
 */
function load (req, res, next, id) {
  Task.findOne({ id })
    .then((Task) => {
      req.Task = Task; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get Task list.
 * @property {number} req.query.skip - Number of Tasks to be skipped.
 * @property {number} req.query.limit - Limit number of Tasks to be returned.
 * @returns {Task[]}
 */
function list (req, res, next) {
  Task.findAll()
    .then(Tasks => res.json(Tasks))
    .catch(e => next(e));
}

/**
 * Get Task
 * @returns {Task}
 */
function get (req, res) {
  return res.json(req.Task);
}

export default { load, get, list };
