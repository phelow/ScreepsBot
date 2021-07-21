var Spawner = {
    CheckForSpawns: function () {
        for (const i in Game.spawns) {
            if (Game.spawns[i].store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
                Game.spawns[i].spawnCreep([WORK, CARRY, MOVE], 'harvester', {
                    memory: { role: 'harvester' }
                });
            }
        }
    }

}

module.exports = Spawner;