class Competition {
    static async createOne(name, surname,team,best_strategy) {
        try {
            await global.client.query(`INSERT INTO competition (name,type,country) VALUES ('${name}', '${surname}','${team}','${best_strategy}')`)
                .then(() => console.log("\nSuccessfully created\n"));
        } catch (e) {
            console.log(e);
        }
    }

    static async getOne(id) {
        try {
            const result = await global.client.query(`SELECT * FROM competition WHERE coach_id=${id}`);
            if (result.rows.length === 0) {
                console.info("No driver with this id");
                return null;
            } else {
                return result;
            }
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async getMany(limit) {
        try {
            await global.client.query(`SELECT * FROM competition LIMIT ${limit}`)
                .then(result => console.table(result.rows));
        } catch (e) {
            console.log(e);
        }
    }

    static async updateById(id,name, type,country) {
        try {
            await global.client.query(`UPDATE competition SET (name,type,country) = ('${name}', '${type}' ,'${country}') WHERE coach_id=${id}`);
            console.info("\nSuccessfully updated\n");
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async removeById(id) {
        try {
            await global.client.query(`DELETE FROM competition WHERE coach_id=${id}`);
            console.info("\nSuccessfully deleted");
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async createRandom(limit) {
        try {
            await global.client.query(`            
            INSERT INTO competition(name,type,country)
            SELECT chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int) AS name,
            chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int)   AS type,
            chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int) AS country FROM GENERATE_SERIES(1, 12);`)
                .then(() => console.log("\nSuccessfully created\n"));
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Competition;
