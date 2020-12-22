class Coach {
    static async createOne(name, surname,team,best_strategy) {
        try {
            if(team == '')
            {
                team =-1;
            }
           
            await global.client.query(`INSERT INTO coach (name, surname,team_id,best_strategy) VALUES ('${name}', '${surname}','${team}','${best_strategy}')`)
                .then( (result) => console.log("\nSuccessfully created\n"));
        } catch (e) {
            console.log(e);
        }
    }

    static async getOne(id) {
        try {
            const result = await global.client.query(`SELECT * FROM coach WHERE coach_id=${id}`);
            if (result.rows.length === 0) {
                console.info("No coach with this id");
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
            await global.client.query(`SELECT * FROM coach LIMIT ${limit}`)
                .then(result => console.table(result.rows));
        } catch (e) {
            console.log(e);
        }
    }

    static async updateById(id,name, surname,team,best_strategy) {
        try {
                console.log("id - " +id);
                console.log("name - " +name);
                console.log("surname - " +surname);
                console.log("team - " +team);
                console.log("best_strategy - " +best_strategy);
            await global.client.query(`UPDATE coach SET (name, surname,team_id,best_strategy) = ('${name}', '${surname}' , '${team}', '${best_strategy}' ) WHERE coach_id=${id}`);
            console.info("\nSuccessfully updated\n");
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async removeById(id) {
        try {
            
            await global.client.query(`DELETE FROM coach WHERE coach_id=${id}`);
            console.info("\nSuccessfully deleted");
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async createRandom(limit) {
        try {
            await global.client.query(`            
            INSERT INTO coach(name,surname,best_strategy)
            SELECT chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int) AS name,
            chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int)   AS surname,
            chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int) AS best_strategy FROM GENERATE_SERIES(1, 12);`)
                .then(() => console.log("\nSuccessfully created\n"));
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Coach;
