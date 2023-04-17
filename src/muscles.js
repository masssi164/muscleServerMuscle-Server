"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHipAdductors = exports.createKneeExtensors = exports.createHipExtensors = exports.createDorsalExtensorsAnkle = exports.createHipFlexors = exports.createPlantarFlexors = exports.muscles = void 0;
function muscles() {
    let returningMuscles = [
        {
            name: "Musculus popliteus",
            insertiones: ["Proximal am Tibiakopf"],
            oregines: ["Area infraglenoidalis des Femurs"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion"],
                },
            ],
        },
    ];
    createPlantarFlexors().forEach(muscle => returningMuscles.push(muscle));
    createHipFlexors().forEach(muscle => returningMuscles.push(muscle));
    createDorsalExtensorsAnkle().forEach(muscle => returningMuscles.push(muscle));
    createKneeExtensors().forEach(muscle => returningMuscles.push(muscle));
    createHipAdductors().forEach(muscle => returningMuscles.push(muscle));
    return returningMuscles;
}
exports.muscles = muscles;
// Erstelle eine Funktion, die MuscleStruct-Objekte für Plantarflexoren erstellt
function createPlantarFlexors() {
    const muscles = [
        {
            name: "Musculus tibialis posterior",
            insertiones: ["Os cuneiforme mediale", "Os cuneiforme intermedium", "Os cuneiforme laterale", "Calcaneus"],
            oregines: ["Membrana interossea cruris", "Face posterior tibiae", "Face lateralis fibulae"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Plantarflexion"],
                },
                {
                    bez: "Articulatio subtalaris",
                    funcs: ["Inversion"],
                },
                {
                    bez: "Articulatio transversa tarsi",
                    funcs: ["Adduktion", "Inversion"],
                },
                // Weitere Gelenke und Funktionen hier...
            ],
        },
        {
            name: "Musculus peroneus longus",
            insertiones: ["Os cuneiforme mediale", "Os cuneiforme intermedium", "Os cuneiforme laterale", "Metatarsale I"],
            oregines: ["Caput fibulae", "Fibula"],
            innervation: "Nervus peroneus profundus",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Plantarflexion", "Eversion"],
                },
                {
                    bez: "Articulatio subtalaris",
                    funcs: ["Eversion"],
                },
                {
                    bez: "Articulatio transversa tarsi",
                    funcs: ["Eversion"],
                },
                // Weitere Gelenke und Funktionen hier...
            ],
        },
        {
            name: "Musculus peroneus brevis",
            insertiones: ["Quintus metatarsus"],
            oregines: ["Caput fibulae"],
            innervation: "Nervus peroneus profundus",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Plantarflexion", "Eversion"],
                },
                {
                    bez: "Articulatio subtalaris",
                    funcs: ["Eversion"],
                },
                {
                    bez: "Articulatio transversa tarsi",
                    funcs: ["Eversion"],
                },
                // Weitere Gelenke und Funktionen hier...
            ],
        },
        // Weitere MuscleStruct-Objekte für Plantarflexoren hier...
        {
            name: "Musculus soleus",
            insertiones: ["Tuber calcanei"],
            oregines: ["Caput fibulae", "Facies posterior tibiae"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Plantarflexion"],
                },
            ],
        },
        {
            name: "Musculus gastrocnemius",
            insertiones: ["Tuber calcanei"],
            oregines: ["Epicondylus lateralis femoris", "Epicondylus medialis femoris"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion"],
                },
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Plantarflexion"],
                },
            ],
        },
    ];
    return muscles;
}
exports.createPlantarFlexors = createPlantarFlexors;
function createHipFlexors() {
    const muscles = [
        {
            name: "Musculus iliopsoas",
            insertiones: ["Trochanter minor femoris"],
            oregines: ["Corpus vertebrae lumbalis I-IV", "Facies interna ossis ilii"],
            innervation: "Nervus femoralis",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Flexion", "Außenrotation"],
                },
            ],
        },
        {
            name: "Musculus sartorius",
            insertiones: ["Tuberositas tibiae"],
            oregines: ["Spina iliaca anterior superior"],
            innervation: "Nervus femoralis",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Flexion", "Außenrotation", "Abduktion"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion"],
                },
            ],
        },
        {
            name: "Musculus tensor fascia lata",
            insertiones: ["Tractus iliotibialis"],
            oregines: ["Spina iliaca anterior superior"],
            innervation: "Nervus gluteus superior",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Flexion", "Innenrotation"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Stabilisation"],
                },
            ],
        }
    ];
    return muscles;
}
exports.createHipFlexors = createHipFlexors;
function createDorsalExtensorsAnkle() {
    const muscles = [
        {
            name: "Musculus tibialis anterior",
            insertiones: ["Mediale Knochenfläche des Fußes (Os cuneiforme mediale, Metatarsale I)"],
            oregines: ["Condylus lateralis des Tibia", "Membrana interossea"],
            innervation: "Nervus peroneus profundus",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Dorsalextension", "Inversion"],
                },
            ],
        },
        {
            name: "Musculus extensor digitorum longus",
            insertiones: ["Laterale vier Zehenendglieder"],
            oregines: ["Fibula"],
            innervation: "Nervus peroneus profundus",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Dorsalextension", "Plantarflexion"],
                },
                {
                    bez: "Articulation subtalaris",
                    funcs: ["Eversion"],
                },
            ],
        },
        {
            name: "Musculus extensor hallucis longus",
            insertiones: ["Endglied des Großzehs"],
            oregines: ["Fibula"],
            innervation: "Nervus peroneus profundus",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Dorsalextension", "Plantarflexion"],
                },
                {
                    bez: "Articulation subtalaris",
                    funcs: ["Eversion"],
                },
            ],
        },
    ];
    return muscles;
}
exports.createDorsalExtensorsAnkle = createDorsalExtensorsAnkle;
function createHipExtensors() {
    const muscles = [
        {
            name: "Musculus gluteus maximus",
            insertiones: ["Tuber ischiadicum", "Ligg. sacrotuberale und sacrospinosum"],
            oregines: ["Fascia thoracolumbalis", "Darmbeinstachel (Crista iliaca)", "Sakrum", "Darmbein (Os sacrum)"],
            innervation: "Nervus gluteus inferior",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Extension", "Außenrotation"],
                },
            ],
        },
        {
            name: "Musculus biceps femoris",
            insertiones: ["Caput longum: Caput fibulae", "Caput breve: Linea aspera des Femurs"],
            oregines: ["Caput longum: Tuber ischiadicum", "Caput breve: Linea aspera des Femurs"],
            innervation: "Caput longum: Nervus tibialis, Caput breve: Nervus peroneus communis",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Extension", "Außenrotation"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion", "Innenrotation"],
                },
            ],
        },
        {
            name: "Musculus semitendinosus",
            insertiones: ["Pes anserinus (Tibia)", "Fascia lata"],
            oregines: ["Tuberositas ischiadica"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Extension", "Innenrotation"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion", "Innenrotation"],
                },
            ],
        },
        {
            name: "Musculus semimembranosus",
            insertiones: ["Condylus medialis der Tibia", "Fascia lata"],
            oregines: ["Tuberositas ischiadica"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Extension", "Innenrotation"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion", "Innenrotation"],
                },
            ],
        },
    ];
    return muscles;
}
exports.createHipExtensors = createHipExtensors;
function createKneeExtensors() {
    const muscles = [
        {
            name: "Musculus rectus femoris",
            insertiones: ["Tuberositas tibiae (über das Ligamentum patellae)"],
            oregines: ["Spina iliaca anterior inferior"],
            innervation: "Nervus femoralis",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Flexion", "Anteversion"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Extension"],
                },
            ],
        },
        {
            name: "Musculus vastus lateralis",
            insertiones: ["Tuberositas tibiae (über das Ligamentum patellae)"],
            oregines: ["Linea aspera des Femurs"],
            innervation: "Nervus femoralis",
            joints: [
                {
                    bez: "Articulatio genus",
                    funcs: ["Extension"],
                },
            ],
        },
        {
            name: "Musculus vastus medialis",
            insertiones: ["Tuberositas tibiae (über das Ligamentum patellae)"],
            oregines: ["Linea aspera des Femurs"],
            innervation: "Nervus femoralis",
            joints: [
                {
                    bez: "Articulatio genus",
                    funcs: ["Extension"],
                },
            ],
        },
        {
            name: "Musculus vastus intermedius",
            insertiones: ["Tuberositas tibiae (über das Ligamentum patellae)"],
            oregines: ["Femurintermediale"],
            innervation: "Nervus femoralis",
            joints: [
                {
                    bez: "Articulatio genus",
                    funcs: ["Extension"],
                },
            ],
        },
    ];
    return muscles;
}
exports.createKneeExtensors = createKneeExtensors;
function createHipAdductors() {
    const muscles = [
        {
            name: "Musculus adductor longus",
            insertiones: ["Linea aspera des Femurs", "Linea pectinea"],
            oregines: ["Ramus inferior des Schambeins"],
            innervation: "Nervus obturatorius",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Adduktion", "Flexion"],
                },
            ],
        },
        {
            name: "Musculus adductor brevis",
            insertiones: ["Linea aspera des Femurs"],
            oregines: ["Ramus inferior des Schambeins"],
            innervation: "Nervus obturatorius",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Adduktion"],
                },
            ],
        },
        {
            name: "Musculus adductor magnus",
            insertiones: ["Linea aspera des Femurs", "Labium mediale des Epicondylus medialis femoris", "Tuber ischiadicum"],
            oregines: ["Ramus inferior des Schambeins", "Tuberositas ischiadica"],
            innervation: "Nervus obturatorius, Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Adduktion"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion", "Innenrotation"],
                },
            ],
        },
        {
            name: "Musculus gracilis",
            insertiones: ["Mediales Epicondylus des Tibia"],
            oregines: ["Ramus inferior des Schambeins"],
            innervation: "Nervus obturatorius",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Adduktion", "Flexion"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion", "Innenrotation"],
                },
            ],
        },
    ];
    return muscles;
}
exports.createHipAdductors = createHipAdductors;
