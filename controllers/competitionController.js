const Competition= require('../models/competition');
const prompt = require('prompt-sync')();

class Competition_controller {
    static async createOne() {
        const name = prompt(`Enter name: `);
        const type = prompt(`Enter type: `);
        const country = prompt(`Enter country: `);
        console.log();
        await Competition.createOne(name, type,team,country);
    };

    static async getOne() {
        const id = prompt(`Enter id: `);
        console.log();
        const data = await Competition.getOne(id);
        console.table(Object.assign({}, ...data.rows));
    }

    static async getMany() {
        const limit = prompt(`Enter limit: `);
        console.log();
        const result = await Competition.getMany(limit);
    }

    static async updateById() {
        let name = prompt(`Enter name: `);
        let type = prompt(`Enter type: `);
        let country = prompt(`Enter country: `);
        console.log();
        await Competition.updateById(name, type, country);
    }

    static async removeById() {
        const id = prompt(`Enter id: `);
        await Competition.removeById(id);
    }

    static async createRandom() {
        const limit = prompt(`Enter amount of random entities: `);
        await Competition.createRandom(limit);
    };

    static async complexSearch() {
    console.log("complex search is only for competition_team))0");
    };

}

module.exports = Competition;
