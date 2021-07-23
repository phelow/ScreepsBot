var spawner = require('Spawner');
var creepManager = require('CreepManager');

module.exports.loop = function () {
    spawner.CheckForSpawns();
    creepManager.ManageCreeps();
}