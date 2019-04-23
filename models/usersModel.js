const db = require('../db/dbConfig');

const baseQuery = () => db('users');

const filterByField = (field, fieldValue) => {
    return (query) => {
        return query.where(field, '=', fieldValue);
    };
};

exports.getAll = () => {
    return baseQuery();
};

const getById = (id) => {
    const filteredById = filterByField('id', id);
    return filteredById(baseQuery());
};

const insert = (data) => {
    return baseQuery().insert(data);
};

const remove = (id) => {
    return getById(id).del();
};

const update = (id, data) => {
    return getById(id).update(data);
};

export { getAll, getById, insert, remove, update };
