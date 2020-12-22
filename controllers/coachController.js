const Coach = require('../models/coach');
const prompt = require('prompt-sync')();

class Coach_controller {
    static async createOne() {
        const name = prompt(`Enter name: `);
        const surname = prompt(`Enter surname: `);
        const team = prompt(`Enter team_id: `);
        const best_strategy =prompt(`Enter best_strategy: `);
        console.log();
        await Coach.createOne(name, surname,team,best_strategy);
    };

    static async getOne() {
        const id = prompt(`Enter id: `);
        console.log();
        const data = await Coach.getOne(id);
        console.table(Object.assign({}, ...data.rows));
    }

    static async getMany() {
        const limit = prompt(`Enter limit: `);
        console.log();
        const result = await Coach.getMany(limit);
    }

    static async updateById() {
        let id;
        while(id ==undefined)
        { 
            id= prompt(`Enter id `);
        }
         
        let oldCoach =   await  Coach.getOne(id);
        let name = prompt(`Enter name: `);
        let surname = prompt(`Enter surname: `);
        let team = prompt(`Enter team_id: `);
        let best_strategy =prompt(`Enter best_strategy: `);
        if(name =='')
        {
            name = oldCoach.rows[0].name;
        }
        if(surname =='')
        {
            surname=oldCoach.rows[0].surname;
        }
        if(team =='')
        {
            if(oldCoach.rows[0].team_id)
            {
                team=oldCoach.rows[0].team_id;
                console.log("popa kak u KIM");
            }
            else
            { 
                console.log(" autism!!!");
                team=-1;
            }
            
        }
        if(best_strategy =='')
        {
            console.log(" hule plakat if HP!!!");
            best_strategy=oldCoach.rows[0].best_strategy;

        }

        console.log("kamikaze DI");
        await Coach.updateById(id, name, surname,team,best_strategy);
    }

    static async removeById() {
        const id = prompt(`Enter id: `);
        await Coach.removeById(id);
    }

    static async createRandom() {
        const limit = prompt(`Enter amount of random entities: `);
        await Coach.createRandom(limit);
    };

    static async complexSearch() {
    console.log("complex search is only for competition_team))0");
    };

}

module.exports = Coach_controller;
