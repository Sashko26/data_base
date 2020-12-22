class Competition_team {
    static async createOne(competition_id, team_id,number_of_matches_played) {
        try {
            await global.client.query(`INSERT INTO competition_team (competition_id,team_id,number_of_matches_played) VALUES ('${competition_id}', '${team_id}','${number_of_matches_played}')`)
                .then(() => console.log("\nSuccessfully created\n"));
        } catch (e) {
            console.log(e);
        }

    }

    static async getOne(id) {
        try {
            const result = await global.client.query(`SELECT * FROM competition_team WHERE id=${id}`);
            if (result.rows.length === 0) {
                console.info("No trip with this id");
                return null;
            } else {
                return result;
            }
        } catch (err) {
            console.log(err.stack);
        }
    }

    static async getMany(limit) {
        try {
            await global.client.query(`SELECT * FROM competition_team LIMIT ${limit}`)
                .then(result => {
                    console.table(result.rows)
                })
        } catch (e) {
            console.log(e);
        }

    }

    static async updateById(id, team_id, competition_id, AmountOfPlayedMatches) {
        try {
            await global.client.query(`UPDATE competition_team SET (team_id, competition_id, AmountOfPlayedMatches) = ('${team_id}','${competition_id}','${AmountOfPlayedMatches}') WHERE id=${id}`,);
            console.info("\nSuccessfully updated\n");

        } catch (err) {
            console.log(err);
        }
    }

    static async removeById(id) {
        try {
            await global.client.query(`DELETE FROM competition_team WHERE id=${id}`);
            console.info("\nSuccessfully deleted");
        } catch (err) {
            console.log(err);
        }
    }

    static async createRandom(limit) {
        try {
            let i = 0;
            while (i < limit) {
                await global.client.query(`            
                INSERT INTO competition_team(competition_id,team_id,number_of_matches_played) 
                SELECT 
                     (SELECT competition_id FROM competition ORDER BY RANDOM() LIMIT 1) as competition_id,
                    (SELECT team_id FROM football_team ORDER BY RANDOM() LIMIT 1) as team_id,
                    (SELECT random()*(1000)) as number_of_matches_played`)
                    .then(() => {
                        console.log("\nSuccessfully created\n")
                        i++})
            }
        } catch (e) {
            console.log(e);
        }
    }

    static async complexSearch(football_team_name, competition_name, AmountOfPlayedMatches) {
        try {
            await global.client.query(`            
        SELECT competition_team.id,
            football_team.name AS football_team_name,
            competition.name AS competition_name,
            competition_team.number_of_matches_played AS AmountOfPlayedMatches
                 FROM
                        competition_team,football_team,competition
                 WHERE 
                 competition_team.team_id = football_team.team_id 
                        AND competition_team.competition_id = competition.competition_id 
                        AND competition.name = '${competition_name}'
                        AND football_team.name = '${football_team_name}'  
                        AND competition_team.number_of_matches_played = '${AmountOfPlayedMatches}'
            `).then(result => {
                if (result.rows.length === 0) {
                    console.log("No trip with found\n");
                    return null;
                } else {
                    console.table(result.rows)
                }
            })
        } catch (e) {
            console.log(e);
        }

    }
}

module.exports = Competition_team;
