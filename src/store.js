import { writable } from 'svelte/store';

function createSetsData() {
    const {
        subscribe,
        set,
        update,
    } = writable([{
                name: 'Master Sets',
                isMaster: true,
                value: '',
                values: []
            }]);

    return {
        subscribe,
        addSet: () => update(n => {
            n.push({
                name: `Data Sets Group ${n.length}`,
                isMaster: false,
                value: '',
                values: []
            });
            return n;
        }),
        addValueToSet: (setIndex, value) => update(n => {
            n[setIndex].value = value;
            n[setIndex].values = []
            n[setIndex].value.split('\n').forEach((v, i) => {
                n[setIndex].values.push(v);
            })
            if (setIndex == 0) {
                randoms.resetValue()
                n[setIndex].values.forEach((v, i) => {
                    if (v != '') {
                        randoms.addValue(v)
                    }
                })
            }
            return n;
        }),
        removeSet: (index) => update(n => {
            n.splice(index, 1);
            n.forEach((set, i) => { 
                if (set.isMaster == false) {
                    set.name = `Data Sets Group ${i}`;
                }
            })
            randoms.resetRandomValue()
            return n;
        }),
        resetSet: () => set([{
                name: 'Master Sets',
                isMaster: true,
                value: '',
                values: []
        }]),
        loadSet: (data) => set(data),
    };
}


function createRandomData() {
    const {
        subscribe,
        set,
        update,
    } = writable([]);

    return {
        subscribe,
        addValue: (v) => {
            update(n => { 
                n.push({ item: v, random: [] })
                return n;
            })
        },
        addRandomValue:(index, index_sub, value) => {
            update(n => { 
                n[index].random[index_sub] = value;
                return n;
            })
        },
        resetRandomValue: () => {
            update(n => { 
                n.forEach(v => {
                    v.random = []
                })
                return n;
            })
        },
        resetValue: ()=>{set([])},
    }
}

export const sets = createSetsData();
export const randoms = createRandomData();
