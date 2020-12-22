const prompt = require('prompt-sync')();
const {Client} = require('pg');
const footballPlayerController = require('./controllers/footballPlayerController');
const coachController = require('./controllers/coachController');
const competition_teamController = require('./controllers/competition_teamController');
const teamController = require('./controllers/teamController');
const competitionController =require('./controllers/competitionController');
require('dotenv').config();

const client = new Client(
    {
        database: "Football_business",
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
       
    }
);

client.connect();
global.client = client;
console.clear();
main();

function main() {
    const syncWait = ms => {
        const end = Date.now() + ms;
        while (Date.now() < end) continue;
    };
    console.log(client.user);
    console.log(client.password);
    console.log(client.host);
    console.log("Program started");
    console.log("Command type: entity commandOperation");
    console.log("Entities: football_player,coach,competition_team, football_team, competition");
    console.log("Command Operations: create, readone, readmany, update, delete, search, generate");
    let command = String(prompt("Enter the command to execute: "));

    command = command.split(" ");

    let entity = command[0];
    let operation = command[1];
    let currentEntity;

    if (entity === 'football_player') {
        currentEntity = footballPlayerController;
    } else if (entity === 'coach') {
        currentEntity = coachController;
    } else if (entity === 'competition_team') {
        currentEntity = competition_teamController;
        
    }  else if(entity === 'football_team')
    {
        currentEntity = teamController;
    } 
    else if(entity === 'competition')
    {
        currentEntity = competitionController;
    }

    else {
        console.log("Missing entity");
        syncWait(2000);
        main();
    }

    if (operation === 'create') {
        currentEntity.createOne().then(r =>main());
    } else if (operation === 'readone') {
        currentEntity.getOne().then(r=>main());
    } else if (operation === 'readmany') {
        currentEntity.getMany().then(r => main());
    } else if (operation === 'update') {
        currentEntity.updateById().then(r => main());
    } else if (operation === 'delete') {
        currentEntity.removeById().then(r => main());
    } else if (operation === 'search') {
        currentEntity.complexSearch().then(r => main());
    } else if (operation === 'generate') {
        currentEntity.createRandom().then(r => main())
    } else {
        console.log("Missing operation");
        syncWait(2000);
        main();
    }
}
