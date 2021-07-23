var Spawner = {

    sortByCount: function (a, b) {
        return a.value.creepCount > b.value.creepCount;
    },

    generateCreepBody: function (spawn) {

        let creepType = class {
            constructor(creepName, creepCount, creepBody) {
                this.creepName = creepName;
                this.creepCount = creepCount;
                this.creepBody = creepBody;
            }
        };

        // We pretend we already have some of the units because we want to get some units first before spawning those.
        var currentTypes = {
            "Worker": new creepType("Worker", 0, [WORK, MOVE, CARRY]),
            "Carrier": new creepType("Carrier", 1, [CARRY, MOVE]),
            "Miner": new creepType("Miner", 2, [WORK, MOVE]),
            "Melee": new creepType("Miner", 2, [WORK, ATTACK])
        };

        for (const i in Game.creeps) {
            var creep = Game.spawns[i];
            currentTypes[creep.memory.role] = currentTypes[creep.memory.role] + 1; 
        }

        currentTypes.Sort(sortByCount);
        

        return currentTypes[0];
    },

    generateCreepName: function(roleName) {
        // Generate a creep name based on the role and add a suffix to make it unique
        var i = 0;
        while(Game.creeps[(roleName + '_' + i)]) {
            i++;
        }

        return (roleName + '_' + i);
    },

    CheckForSpawns: function () {
        for (const i in Game.spawns) {
            var spawn = Game.spawns[i];
            var creepBodyToSpawn = this.generateCreepBody(spawn);

            spawn.spawnCreep(creepBodyToSpawn.creepBody, this.generateCreepName(creepBodyToSpawn.creepName), { creepBodyToSpawn.creepName});
            
        }
    }

}

module.exports = Spawner;