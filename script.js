document.addEventListener('DOMContentLoaded', function() {
    const processors = {
        Intel: [
            { generation: "2nd Gen", models: [{ name: "CORE i3 2120", socket: "LGA 1155" }, { name: "CORE i5 2400", socket: "LGA 1155" }, { name: "CORE i5 2500", socket: "LGA 1155" }] },
            { generation: "3rd Gen", models: [{ name: "CORE i3 3240", socket: "LGA 1155" }, { name: "CORE i5 3470", socket: "LGA 1155" }] },
            { generation: "4th Gen", models: [{ name: "CORE i3 4170", socket: "LGA 1150" }, { name: "CORE i5 4590", socket: "LGA 1150" }, { name: "CORE i7 4790", socket: "LGA 1150" }] },
            { generation: "6th Gen", models: [{ name: "CORE i3 6100", socket: "LGA 1151" }, { name: "CORE i5 6600", socket: "LGA 1151" }] },
            { generation: "7th Gen", models: [{ name: "CORE i3 7100", socket: "LGA 1151" }, { name: "CORE i5 7500", socket: "LGA 1151" }] },
            { generation: "8th Gen", models: [{ name: "CORE i3 8100", socket: "LGA 1151" }, { name: "CORE i5 8500", socket: "LGA 1151" }] },
            { generation: "9th Gen", models: [{ name: "CORE i3 9100", socket: "LGA 1151" }] },
            { generation: "10th Gen", models: [{ name: "CORE i3 10105F", socket: "LGA 1200" }, { name: "CORE i3 10105", socket: "LGA 1200" }, { name: "CORE i5 10400F", socket: "LGA 1200" }, { name: "CORE i5 10400", socket: "LGA 1200" }, { name: "CORE i7 10700F", socket: "LGA 1200" }, { name: "CORE i7 10700", socket: "LGA 1200" }, { name: "CORE i7 10700KF", socket: "LGA 1200" }] },
            { generation: "11th Gen", models: [{ name: "CORE i5 11400", socket: "LGA 1200" }, { name: "CORE i5 11600KF", socket: "LGA 1200" }, { name: "CORE i7 11700F", socket: "LGA 1200" }] },
            { generation: "12th Gen", models: [{ name: "CORE i3 12100F", socket: "LGA 1700" }, { name: "CORE i3 12100", socket: "LGA 1700" }, { name: "CORE i5 12400F", socket: "LGA 1700" }, { name: "CORE i5 12400", socket: "LGA 1700" }, { name: "CORE i7 12700F", socket: "LGA 1700" }, { name: "CORE i7 12700", socket: "LGA 1700" }, { name: "CORE i7 12700K", socket: "LGA 1700" }, { name: "CORE i9 12900KF", socket: "LGA 1700" }, { name: "CORE i9 12900F", socket: "LGA 1700" }] },
            { generation: "13th Gen", models: [{ name: "CORE i3 13100F", socket: "LGA 1700" }, { name: "CORE i3 13100", socket: "LGA 1700" }, { name: "CORE i5 13400F", socket: "LGA 1700" }, { name: "CORE i5 13400", socket: "LGA 1700" }, { name: "CORE i5 13500", socket: "LGA 1700" }, { name: "CORE i5 13600KF", socket: "LGA 1700" }, { name: "CORE i7 13700F", socket: "LGA 1700" }, { name: "CORE i7 13700", socket: "LGA 1700" }, { name: "CORE i7 13700KF", socket: "LGA 1700" }, { name: "CORE i7 13700K", socket: "LGA 1700" }, { name: "CORE i9 13900F", socket: "LGA 1700" }, { name: "CORE i9 13900KF", socket: "LGA 1700" }, { name: "CORE i9 13900", socket: "LGA 1700" }, { name: "CORE i9 13900K", socket: "LGA 1700" }] },
            { generation: "14th Gen", models: [{ name: "CORE i5 14600KF", socket: "LGA 1700" }, { name: "CORE i5 14600K", socket: "LGA 1700" }, { name: "CORE i7 14700F", socket: "LGA 1700" }, { name: "CORE i7 14700KF", socket: "LGA 1700" }, { name: "CORE i7 14700K", socket: "LGA 1700" }, { name: "CORE i9 14900KF", socket: "LGA 1700" }, { name: "CORE i9 14900K", socket: "LGA 1700" }] }
        ],
        AMD: [
            { generation: "Zen", models: [{ name: "ATHLON 3000G", socket: "AM4" }] },
            { generation: "Zen+", models: [{ name: "RYZEN 3 3200G", socket: "AM4" }] },
            { generation: "Zen 2", models: [{ name: "RYZEN 3 4100", socket: "AM4" }, { name: "RYZEN 5 3600", socket: "AM4" }, { name: "RYZEN 5 3600X", socket: "AM4" }, { name: "RYZEN 7 3700X", socket: "AM4" }] },
            { generation: "Zen 3", models: [{ name: "RYZEN 5 5600X", socket: "AM4" }, { name: "RYZEN 7 5800X", socket: "AM4" }, { name: "RYZEN 9 5900X", socket: "AM4" }] },
            { generation: "Zen 4", models: [{ name: "RYZEN 5 7600X", socket: "AM5" }, { name: "RYZEN 7 7700X", socket: "AM5" }, { name: "RYZEN 9 7900X", socket: "AM5" }, { name: "RYZEN 9 7950X", socket: "AM5" }] }
        ]
    };

    const motherboards = {
        "LGA 1155": ["Intel Motherboard LGA 1155 A", "Intel Motherboard LGA 1155 B"],
        "LGA 1150": ["Intel Motherboard LGA 1150 A", "Intel Motherboard LGA 1150 B"],
        "LGA 1151": ["Intel Motherboard LGA 1151 A", "Intel Motherboard LGA 1151 B"],
        "LGA 1200": ["Intel Motherboard LGA 1200 A", "Intel Motherboard LGA 1200 B"],
        "LGA 1700": ["Intel Motherboard LGA 1700 A", "Intel Motherboard LGA 1700 B"],
        "AM4": ["AMD Motherboard AM4 A", "AMD Motherboard AM4 B"],
        "AM5": ["AMD Motherboard AM5 A", "AMD Motherboard AM5 B"]
    };

    const rams = {
        "LGA 1155": ["DDR3 1600MHz", "DDR3 1866MHz"],
        "LGA 1150": ["DDR3 1600MHz", "DDR3 1866MHz"],
        "LGA 1151": ["DDR4 2133MHz", "DDR4 2400MHz"],
        "LGA 1200": ["DDR4 2666MHz", "DDR4 2933MHz"],
        "LGA 1700": ["DDR5 4800MHz", "DDR5 5200MHz"],
        "AM4": ["DDR4 2666MHz", "DDR4 3200MHz"],
        "AM5": ["DDR5 5200MHz", "DDR5 5600MHz"]
    };

    const gpus = {
        "LGA 1155": ["NVIDIA GTX 1050 Ti", "NVIDIA GTX 1060"],
        "LGA 1150": ["NVIDIA GTX 1070", "NVIDIA GTX 1080"],
        "LGA 1151": ["NVIDIA GTX 1660 Ti", "NVIDIA RTX 2060"],
        "LGA 1200": ["NVIDIA RTX 3060", "NVIDIA RTX 3070"],
        "LGA 1700": ["NVIDIA RTX 3080", "NVIDIA RTX 3090"],
        "AM4": ["AMD RX 580", "AMD RX 590"],
        "AM5": ["AMD RX 6800", "AMD RX 6900 XT"]
    };

    const psus = {
        "NVIDIA GTX 1050 Ti": ["450W", "500W"],
        "NVIDIA GTX 1060": ["450W", "500W"],
        "NVIDIA GTX 1070": ["500W", "550W"],
        "NVIDIA GTX 1080": ["500W", "550W"],
        "NVIDIA GTX 1660 Ti": ["500W", "550W"],
        "NVIDIA RTX 2060": ["550W", "600W"],
        "NVIDIA RTX 3060": ["550W", "600W"],
        "NVIDIA RTX 3070": ["600W", "650W"],
        "NVIDIA RTX 3080": ["650W", "700W"],
        "NVIDIA RTX 3090": ["700W", "750W"],
        "AMD RX 580": ["450W", "500W"],
        "AMD RX 590": ["450W", "500W"],
        "AMD RX 6800": ["600W", "650W"],
        "AMD RX 6900 XT": ["650W", "700W"]
    };

    const processorSelect = document.getElementById('processorSelect');
    const generationSelect = document.getElementById('generationSelect');
    const processorModelSelect = document.getElementById('processorModelSelect');
    const socketInput = document.getElementById('socketInput');
    const motherboardSelect = document.getElementById('motherboardSelect');
    const ramSelect = document.getElementById('ramSelect');
    const gpuSelect = document.getElementById('gpuSelect');
    const psuSelect = document.getElementById('psuSelect');
    const saveButton = document.getElementById('saveButton');
    const showCompatibilityButton = document.getElementById('showCompatibilityButton');
    const compatibilityResult = document.getElementById('compatibilityResult');
    const deleteButton = document.getElementById('deleteButton');

    processorSelect.addEventListener('change', () => {
        const brand = processorSelect.value;
        console.log(`Processor brand selected: ${brand}`);
        resetFields();
        if (brand) {
            const generations = processors[brand].map(proc => proc.generation);
            generations.forEach(generation => {
                const option = document.createElement('option');
                option.value = generation;
                option.textContent = generation;
                generationSelect.appendChild(option);
            });
            generationSelect.disabled = false;
        }
    });

    generationSelect.addEventListener('change', () => {
        const brand = processorSelect.value;
        const generation = generationSelect.value;
        console.log(`Processor generation selected: ${generation}`);
        processorModelSelect.innerHTML = '<option value="">Select Processor Model</option>';
        socketInput.value = '';
        socketInput.disabled = true;
        motherboardSelect.innerHTML = '<option value="">Select Motherboard</option>';
        motherboardSelect.disabled = true;
        ramSelect.innerHTML = '<option value="">Select RAM</option>';
        ramSelect.disabled = true;
        gpuSelect.innerHTML = '<option value="">Select GPU</option>';
        gpuSelect.disabled = true;
        psuSelect.innerHTML = '<option value="">Select PSU</option>';
        psuSelect.disabled = true;

        if (brand && generation) {
            const models = processors[brand].find(proc => proc.generation === generation).models;
            models.forEach(model => {
                const option = document.createElement('option');
                option.value = model.name;
                option.textContent = model.name;
                processorModelSelect.appendChild(option);
            });
            processorModelSelect.disabled = false;
        }
    });

    processorModelSelect.addEventListener('change', () => {
        const brand = processorSelect.value;
        const generation = generationSelect.value;
        const model = processorModelSelect.value;
        console.log(`Processor model selected: ${model}`);
        socketInput.value = '';
        socketInput.disabled = true;
        motherboardSelect.innerHTML = '<option value="">Select Motherboard</option>';
        motherboardSelect.disabled = true;
        ramSelect.innerHTML = '<option value="">Select RAM</option>';
        ramSelect.disabled = true;
        gpuSelect.innerHTML = '<option value="">Select GPU</option>';
        gpuSelect.disabled = true;
        psuSelect.innerHTML = '<option value="">Select PSU</option>';
        psuSelect.disabled = true;

        if (brand && generation && model) {
            const selectedProcessor = processors[brand].find(proc => proc.generation === generation).models.find(procModel => procModel.name === model);
            socketInput.value = selectedProcessor.socket;
            socketInput.disabled = false;

            const motherboardsForSocket = motherboards[selectedProcessor.socket] || [];
            motherboardsForSocket.forEach(mobo => {
                const option = document.createElement('option');
                option.value = mobo;
                option.textContent = mobo;
                motherboardSelect.appendChild(option);
            });
            motherboardSelect.disabled = false;

            const ramsForSocket = rams[selectedProcessor.socket] || [];
            ramsForSocket.forEach(ram => {
                const option = document.createElement('option');
                option.value = ram;
                option.textContent = ram;
                ramSelect.appendChild(option);
            });
            ramSelect.disabled = false;
        }
    });

    motherboardSelect.addEventListener('change', () => {
        const mobo = motherboardSelect.value;
        console.log(`Motherboard selected: ${mobo}`);
        gpuSelect.innerHTML = '<option value="">Select GPU</option>';
        gpuSelect.disabled = true;
        psuSelect.innerHTML = '<option value="">Select PSU</option>';
        psuSelect.disabled = true;

        if (mobo) {
            const selectedSocket = socketInput.value;
            const gpusForSocket = gpus[selectedSocket] || [];
            gpusForSocket.forEach(gpu => {
                const option = document.createElement('option');
                option.value = gpu;
                option.textContent = gpu;
                gpuSelect.appendChild(option);
            });
            gpuSelect.disabled = false;
        }
    });

    gpuSelect.addEventListener('change', () => {
        const gpu = gpuSelect.value;
        console.log(`GPU selected: ${gpu}`);
        psuSelect.innerHTML = '<option value="">Select PSU</option>';
        psuSelect.disabled = true;

        if (gpu) {
            const psusForGpu = psus[gpu] || [];
            psusForGpu.forEach(psu => {
                const option = document.createElement('option');
                option.value = psu;
                option.textContent = psu;
                psuSelect.appendChild(option);
            });
            psuSelect.disabled = false;
        }
    });

    saveButton.addEventListener('click', () => {
        const compatibility = {
            brand: processorSelect.value,
            generation: generationSelect.value,
            model: processorModelSelect.value,
            socket: socketInput.value,
            motherboard: motherboardSelect.value,
            ram: ramSelect.value,
            gpu: gpuSelect.value,
            psu: psuSelect.value
        };

        let storedCompatibilities = JSON.parse(localStorage.getItem('compatibilities')) || [];
        storedCompatibilities.push(compatibility);
        localStorage.setItem('compatibilities', JSON.stringify(storedCompatibilities));
        alert('Compatibility saved!');
    });

    showCompatibilityButton.addEventListener('click', () => {
        const storedCompatibilities = JSON.parse(localStorage.getItem('compatibilities')) || [];
        compatibilityResult.innerHTML = '<h5>Spesifikasi Tersimpan:</h5>';
        storedCompatibilities.forEach(comp => {
            compatibilityResult.innerHTML += `<p>Brand: ${comp.brand}<br> Generation: ${comp.generation}<br> Model: ${comp.model}<br> Socket: ${comp.socket}<br> Motherboard: ${comp.motherboard}<br> RAM: ${comp.ram}<br> GPU: ${comp.gpu}<br> PSU: ${comp.psu}</p>`;
        });
    });

    deleteButton.addEventListener('click', () => {
        localStorage.removeItem('compatibilities');
        compatibilityResult.innerHTML = '';
        alert('All compatibilities deleted!');
    });

    function resetFields() {
        generationSelect.innerHTML = '<option value="">Select Processor Generation</option>';
        generationSelect.disabled = true;
        processorModelSelect.innerHTML = '<option value="">Select Processor Model</option>';
        processorModelSelect.disabled = true;
        socketInput.value = '';
        socketInput.disabled = true;
        motherboardSelect.innerHTML = '<option value="">Select Motherboard</option>';
        motherboardSelect.disabled = true;
        ramSelect.innerHTML = '<option value="">Select RAM</option>';
        ramSelect.disabled = true;
        gpuSelect.innerHTML = '<option value="">Select GPU</option>';
        gpuSelect.disabled = true;
        psuSelect.innerHTML = '<option value="">Select PSU</option>';
        psuSelect.disabled = true;
    }
});
