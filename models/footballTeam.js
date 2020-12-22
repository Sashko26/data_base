class Football_player {
    static async createOne(name,coach_id,year_of_creation,country) {
        try {
            console.log("Creating");

            await global.client.query(`INSERT INTO Football_team (name,coach_id,year_of_creation,country) VALUES ('${name}','${coach_id}','${year_of_creation}','${country}')`)
                .then(() => console.log("\nSuccessfully created\n"));
        } catch (e) {
            console.log(e);
        }
    }

    static async getOne(id) {
        try {
            const result = await global.client.query(`SELECT * FROM Football_team WHERE team_id=${id}`);
            console.table(Object.assign({}, ...result.rows));
            return result;
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async getMany(limit) {
        try {
            let res = await global.client.query(`SELECT * FROM Football_team LIMIT ${limit}`);
            console.table(res.rows);
        } catch (e) {
            console.log(e);
        }
    }

    static async updateById(id,name,coach_id,year_of_creation,country) {
        try {
            await global.client.query(`UPDATE football_team SET name = '${name}',coach_id = '${coach_id}',year_of_creation = '${year_of_creation}',country = '${country}' WHERE team_id=${id}`);
            console.info("\nSuccessfully updated\n");
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async removeById(id) {
        try {
         
            await global.client.query(`Delete from competition_team where team_id =${id};`);
         
            await global.client.query(`Delete from football_player where team_id =${id};`);
         
            await global.client.query(`DELETE FROM football_team WHERE team_id=${id}`);
           
            console.info("\nSuccessfully deleted");
        } catch (err) {
            console.error(err.stack);
        }
    }

    static async createRandom(limit) {
       console.log("You can't do it for team!)");
    }
}

module.exports = Football_player;





