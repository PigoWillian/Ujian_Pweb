import {Sequelize} from "sequelize";

const db = new Sequelize('crud1_db','root','', {
    host: 'localhost',
    dialect : 'mysql'
})

export default db;