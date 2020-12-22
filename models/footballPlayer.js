class Football_player {
    static async createOne(name,surname,position,team,leading_leg) {
        try {
            console.log("Creating");
            if (team == "")
            {
                team = -1;
            }
            await global.client.query(`INSERT INTO Football_player (name,surname,position,team_id,leading_leg) VALUES ('${name}','${surname}','${position}','${team}','${leading_leg}')`)
                .then(() => console.log("\nSuccessfully created\n"));
        } catch (e) {
            console.log(e + " lox");
        }
    }

    static async getOne(id) {
        try {
            const result = await global.client.query(`SELECT * FROM Football_player WHERE player_id=${id}`);
            console.table(Object.assign({}, ...result.rows));
            return result;
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async getMany(limit) {
        try {
            let res = await global.client.query(`SELECT * FROM Football_player LIMIT ${limit}`);
            console.table(res.rows);
        } catch (e) {
            console.log(e);
        }
    }

    static async updateById(id, name,surname,position,team,leading_leg) {
        try {
            await global.client.query(`UPDATE Football_player SET name = '${name}',surname = '${surname}',position = '${position}',team_id = '${team}',leading_leg = '${leading_leg}' WHERE player_id=${id}`);
            console.info("\nSuccessfully updated\n");
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async removeById(id) {
        try {
            await global.client.query(`DELETE FROM Football_player WHERE player_id=${id}`);
            console.info("\nSuccessfully deleted");
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async createRandom(limit) {
        try {
            await global.client.query(`            
            INSERT INTO Football_player(name,surname,position,leading_leg)
            SELECT chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int) AS name,
            chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int)   AS surname,
            chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int) AS position,
            chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int) || chr(trunc(65+random()*25)::int)|| chr(trunc(65+random()*25)::int) AS leading_leg FROM GENERATE_SERIES(1, limit);`)
                .then(() => console.log("\nSuccessfully created\n"));
        } catch (e) {
            console.log(e);
        }

    }
}

module.exports = Football_player;





