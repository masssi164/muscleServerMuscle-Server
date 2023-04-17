export default function muscles() {
    return [
        {
            name: "Musculus quadriceps femoris",
            insertiones: ["Tuberositas tibiae"],
            oregines: ["Os ilium", "Facies anterior femoris"],
            innervation: "Nervus femoralis",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Extension"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Extension"],
                },
            ],
        },
        {
            name: "Musculus biceps femoris",
            insertiones: ["Caput fibulae", "Tuberositas tibiae"],
            oregines: [
                "Tuber ischiadicum",
                "Labium laterale linea aspera femoris",
                "Caput fibulae",
            ],
            innervation: "Nervus ischiadicus",
            joints: [
                {
                    bez: "Articulatio coxae",
                    funcs: ["Extension"],
                },
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion", "Aussenrotation"],
                },
            ],
        },
        {
            name: "Musculus gastrocnemius",
            insertiones: ["Calcaneus"],
            oregines: ["Epicondylus lateralis femoris", "Epicondylus medialis femoris"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio genus",
                    funcs: ["Flexion", "Dorsalextension"],
                },
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Plantarflexion"],
                },
            ],
        },
        {
            name: "Musculus soleus",
            insertiones: ["Calcaneus"],
            oregines: ["Caput fibulae", "Tibia"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Plantarflexion"],
                },
            ],
        },
        {
            name: "Musculus tibialis anterior",
            insertiones: ["Os cuneiforme mediale", "Metatarsale I"],
            oregines: ["Tibia"],
            innervation: "Nervus peroneus profundus",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Dorsalextension"],
                },
                {
                    bez: "Articulatio subtalaris",
                    funcs: ["Inversion"],
                },
            ],
        },
        {
            name: "Musculus tibialis posterior",
            insertiones: ["Os naviculare", "Os cuneiforme mediale", "Os tarsale III, IV"],
            oregines: ["Fibula", "Tibia"],
            innervation: "Nervus tibialis",
            joints: [
                {
                    bez: "Articulatio talocruralis",
                    funcs: ["Plantarflexion", "Inversion"],
                },
            ],
        }
    ];
}
//# sourceMappingURL=muscles.js.map