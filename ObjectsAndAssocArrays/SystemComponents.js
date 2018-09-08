'use strict';
function getSystemComponents(arr) {
    let components = new Map();

    for (let str of arr) {
        let [system, component, subcomponent] = str.split(/\s*\|\s*/).filter(el => el !== '');

        if (!components.has(system)) {
            components.set(system, new Map);
            let subcomponents = new Map();
            subcomponents.set(component, new Set());
            subcomponents.set(component, subcomponents.get(component).add(subcomponent));
            components.set(system, subcomponents);
        } else {
            if(!components.get(system).has(component)) {
                components.get(system).set(component, new Set());
                let componentsSet = new Set();
                componentsSet.add(subcomponent);
                components.get(system).set(component, componentsSet);
            } else {
                components.get(system).set(component, components.get(system).get(component).add(subcomponent));
            }
        }
    }

    let sorted = Array.from(components.keys()).sort((a, b) => {
        if (components.get(a).size !== components.get(b).size) {
            return components.get(b).size - components.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });

    for (let system of sorted) {
        console.log(system);
        let sortedComponents = Array.from(components.get(system).keys())
            .sort((a, b) => components.get(system).get(b).size - components.get(system).get(a).size);

        for (let component of sortedComponents) {
            console.log(`|||${component}`);

            for (let subcomponent of components.get(system).get(component)) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}

getSystemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);

// getSystemComponents(['SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site |  Login Page',
//     'SULS | Judge Site | Login Page',
//     'SULS | Judge Site | Submittion Page',
//     'Lambda | CoreA | A23',
//     'SULS | Digital Site | Login Page',
//     'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',
//     'Lambda | CoreC | C4',
//     'Indice | Session | Default Storage',
//     'Indice | Session | Default Security'
// ]);
