const competition_team = require('../models/competition_team');
const prompt = require('prompt-sync')();

class competition_teamController {
    static async createOne() {
        const team_id = prompt(`Enter team_id: `)
        const competition_id = prompt(`Enter competition_id: `)
        const AmountOfPlayedMatches = prompt(`Enter amount of played matches: `)
            console.log();
        await competition_team.createOne(team_id, competition_id,AmountOfPlayedMatches)
    };

    static async getOne() {
        const id = prompt(`Enter id: `)
        console.log();
        const data = await competition_team.getOne(id);
        console.table(Object.assign({}, ...data.rows));
    }

    static async getMany() {
        const limit = prompt(`Enter limit: `)
        console.log();
        await competition_team.getMany(limit)

    }

    static async updateById() {
       
        let id = prompt(`Enter id: `)
        const oldRelation = await competition_team.getOne(id);

        let  team_id = prompt(`Enter team_id: `)
        let competition_id = prompt(`Enter competition_id: `)
        let AmountOfPlayedMatches =  prompt(`Enter amount of played matches: `)

        if(team_id=="")
        {
            team_id = oldPlayer.rows[0].team_id;
        }
        if(competition_id=="")
        {
            competition_id = oldPlayer.rows[0].competition_id;
        }
        if(AmountOfPlayedMatches=="")
        {
            position = oldPlayer.rows[0].AmountOfPlayedMatches;
        }
         console.log();
        await competition_team.updateById(id, team_id, competition_id, AmountOfPlayedMatches);
    }

    static async removeById() {
        const id = prompt(`Enter id: `)
        console.log();
        await competition_team.removeById(id);
    }

    static async createRandom() {
        const limit = prompt(`Enter amount of random entities: `)
        await competition_team.createRandom(limit)
    };

    static async complexSearch() {
        const competition_name = prompt(`Enter competition name: `);
        const team_name = prompt(`Enter team name: `);
        const AmountOfPlayedMatches = prompt(`Enter team's amount of played matches in competition: `);
        await competition_team.complexSearch(competition_name, team_name, AmountOfPlayedMatches)
    };

}

module.exports = competition_teamController;
