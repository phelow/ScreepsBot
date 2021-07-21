var CreepManager = {
    EvaluateCreep: function (creep) {
        if (creep.store.getFreeCapacity() > 0) {
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                return;
            }
        }
        else {
            const target = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
            if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
                return;
            }
        }
    },

    ManageCreeps: function () {
        for (const i in Game.creeps) {
            this.EvaluateCreep(Game.creeps[i]);
        }
    }

}

module.exports = CreepManager;