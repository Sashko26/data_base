const football_player = require('../models/footballPlayer');
const prompt = require('prompt-sync')();

class football_player_controller {
    static async createOne() {
        const name = prompt(`Enter name: `);
        const surname = prompt(`Enter surname: `);
        const position = prompt(`Enter position: `);
        const team = prompt(`Enter team id: `);
        const leading_leg = prompt(`Enter leading_leg(left or right or both): `);
        await football_player.createOne(name,surname,position,team,leading_leg);
    };

    static async getOne() {
        const id =  prompt(`Enter id: `);
        return await football_player.getOne(id);
    }

    static async getMany() {
        const limit =  prompt(`Enter limit: `);
        console.log();
        await football_player.getMany(limit);
    }

    static async updateById() {
        
        const id =  prompt(`Enter id: `);
        const oldPlayer =   await  football_player.getOne(id);
   
        
        
        console.log(`If you don't want to enter new value of atribute just click enter for skip.`);
        let name =  prompt(`Enter new name: `);
        let surname =  prompt(`Enter new surname: `);
        let position =  prompt(`Enter new position: `);
        let team =  prompt(`Enter team id: `);
        let leading_leg = prompt(`Enter new leading leg(right,left,both): `);
        console.log();
        if(name=="")
        {
            name = oldPlayer.rows[0].name;
        }
        if(surname=="")
        {
            surname = oldPlayer.rows[0].surname;
        }
        if(position=="")
        {
            position = oldPlayer.rows[0].position;
        }
        if(leading_leg=="")
        {
            leading_leg = oldPlayer.rows[0].leading_leg;
        }
        if(team == "")
        {
            team = oldPlayer.rows[0].team_id;
        }

        await football_player.updateById(id,name,surname,position,team,leading_leg);
    }

    static async removeById() {
        const id =  prompt(`Enter id: `);
        await football_player.removeById(id);
    }

    static async createRandom() {
        const limit = prompt(`Enter amount of random entities: `);
        await football_player.createRandom(limit);
    };
    static async complexSearch() {
        console.log("complex search is only for competition_team))0")
    };

}

module.exports = football_player_controller;
