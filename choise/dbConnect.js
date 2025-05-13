import {attachPaginate} from "knex-paginate"
import knex from "knex";

const db = knex({
	client: 'mysql2',
	connection: {
		host : '217.25.91.182',
		port : 3306,
		user : 'choiseweb',
		password : 'X4ECLhxGdhJYfGXc',
		database : 'choiseweb'
	},
	useNullAsDefault: true
});

if (!db.queryBuilder().paginate) attachPaginate()
export default db