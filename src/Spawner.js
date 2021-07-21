var Spawner = {
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
            if (Game.spawns[i].store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
                Game.spawns[i].spawnCreep([WORK, CARRY, MOVE], this.generateCreepName('harvester'), {
                    memory: { role: 'harvester' }
                });
            }
        }
    }

}

module.exports = Spawner;