const football_team = require('../models/footballTeam');
const prompt = require('prompt-sync')();

class football_player_controller {
    static async createOne() {
        const name = prompt(`Enter name: `);
        const coach_id = prompt(`Enter coach_id: `);
        const year = prompt(`Enter year of creation: `);
        const country = prompt(`Enter country: `);
        await football_team.createOne(name,coach_id,year,country);
    };

    static async getOne() {
        const id =  prompt(`Enter id: `);
        return await football_team.getOne(id);
    }

    static async getMany() {
        const limit =  prompt(`Enter limit: `);
        console.log();
        await football_team.getMany(limit);
    }

    static async updateById() {
        
        let id =  prompt(`Enter id: `);
        let oldTeam =   await  football_team.getOne(id);
        console.log(oldTeam.rows[0]);
        if(oldTeam.rows[0] == undefined)
        {
            return;
        }
        
        
        console.log(`If you don't want to enter new value of atribute just click enter for skip.`);
        let name =  prompt(`Enter new name: `);
        let coach_id =  prompt(`Enter new coach_id: `);
        let year_of_creation =  prompt(`Enter year of creation: `);
        let country =  prompt(`Enter country: `);
        console.log();
        if(name=="")
        {
            name = oldTeam.rows[0].name;
        }
        if(coach_id=="")
        {
            coach_id = oldTeam.rows[0].coach_id;
        }
        if(year_of_creation=="")
        {
            year_of_creation = oldTeam.rows[0].year_of_creation;
        }
        if(country=="")
        {
            country = oldTeam.rows[0].country;
        }
       await football_team.updateById(id,name,coach_id,year_of_creation,country);
    }

    static async removeById() {
        const id =  prompt(`Enter id: `);
        await football_team.removeById(id);
    }

    static async createRandom() {
        const limit = prompt(`Enter amount of random entities: `);
        await football_team.createRandom(limit);
    };
    static async complexSearch() {
        console.log("complex search is only for competition_team))0")
    };

}

module.exports = football_player_controller;
