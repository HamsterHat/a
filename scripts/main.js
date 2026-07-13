let coruptMarker = null;
let glitchTimer = 0;

Events.on(ClientLoadEvent, () => {
    coruptMarker = Vars.content.getByName(ContentType.status, "c00l-corrupted") || 
                Vars.content.statusEffects().find(s => s.name.includes("corrupted"));

    if(coruptMarker){
        Log.info(">>> [YORIK] Crimson Glitch VFX initialized: " + coruptMarker.name);
    } else {
        Log.err(">>> [YORIK] Status NOT FOUND.");
    }
});




Events.run(Trigger.draw, () => {
    if(!coruptMarker) return;
    
    let player = Vars.player;
    if(!player || !player.unit() || !player.unit().hasEffect(coruptMarker)) return;
    
    glitchTimer += Time.delta;
    
    Draw.z(Layer.max);
    
    let camX = Core.camera.position.x;
    let camY = Core.camera.position.y;
    let w = Core.camera.width;
    let h = Core.camera.height;
    
    // 1. ПОСТОЯННОЕ ЗАТЕМНЕНИЕ (Видимость мира 40%, то есть 60% непрозрачности)
    // Используем самый темный красный цвет для создания гнетущей атмосферы
    Draw.color(Color.valueOf("250c0c"), 0.60);
    Fill.rect(camX, camY, w, h);
    
    // 2. ПОЛОСЫ СКАНИРОВАНИЯ (Бегущие горизонтальные помехи)
    // Медленно плывущие по экрану линии сбоя матрицы
    Draw.color(Color.valueOf("a11515"), 0.25);
    let scanY1 = camY + ((glitchTimer * 1.5) % h) - h/2;
    let scanY2 = camY - ((glitchTimer * 2.2) % h) + h/2;
    Fill.rect(camX, scanY1, w, h * 0.04);
    Fill.rect(camX, scanY2, w, h * 0.02);
    
    // 3. КРУПНЫЕ СБОЙНЫЕ БЛОКИ (Артефакты битой памяти)
    // Рендерим прямоугольники ваших цветов, меняющие положение дискретно
    let seed = Math.floor(glitchTimer / 5); 
    let rand = new Rand(seed); 
    
    let blockCount = rand.nextInt(6, 12);
    for(let i = 0; i < blockCount; i++){
        // Случайный выбор между вашими двумя цветами
        let blockColor = rand.chance(0.6) ? "a11515cc" : "250c0ccc";
        Draw.color(Color.valueOf(blockColor));
        
        let bx = camX + rand.nextFloat(-w/2, w/2);
        let by = camY + rand.nextFloat(-h/2, h/2);
        let bw = rand.nextFloat(w * 0.04, w * 0.22);
        let bh = rand.nextFloat(h * 0.03, h * 0.07);
        
        Fill.rect(bx, by, bw, bh);
    }
    
    // 4. МЕЛКИЙ ЦИФРОВОЙ ШУМ (Искры сгоревшей шины данных)
    // Хаотично прыгающие мелкие штрихи
    for(let i = 0; i < 20; i++){
        Draw.color(Color.valueOf(Mathf.chance(0.6) ? "a11515ee" : "250c0cff"));
        
        let nx = camX + Mathf.random(-w/2, w/2);
        let ny = camY + Mathf.random(-h/2, h/2);
        let nw = Mathf.random(w * 0.02, w * 0.07);
        let nh = Mathf.random(1.5, 3); 
        
        Fill.rect(nx, ny, nw, nh);
    }
    
    // 5. РАМКА КРИТИЧЕСКОЙ ОШИБКИ
    // Тонкая пульсирующая рамка по краям экрана для акцента
    let pulse = Math.sin(glitchTimer * 0.15) * 0.5 + 0.5;
    Draw.color(Color.valueOf("a11515"), 0.2 + pulse * 0.4);
    Lines.stroke(3);
    Lines.rect(camX - w/2, camY - h/2, w, h);
    
    Draw.reset();
});




let glitch = null;
let glitchTimer2 = 0;

Events.on(ClientLoadEvent, () => {
    glitch = Vars.content.getByName(ContentType.status, "c00l-1glitch1") || 
                Vars.content.statusEffects().find(s => s.name.includes("1glitch1"));

    if(coruptMarker){
        Log.info(">>> [YORIK] Glitch VFX initialized: " + glitch.name);
    } else {
        Log.err(">>> [YORIK] Status NOT FOUND.");
    }
});




Events.run(Trigger.draw, () => {
    if(!glitch) return;
    
    let player = Vars.player;
    if(!player || !player.unit() || !player.unit().hasEffect(glitch)) return;
    
    glitchTimer2 += Time.delta;
    
    Draw.z(Layer.max);
    
    let camX = Core.camera.position.x;
    let camY = Core.camera.position.y;
    let w = Core.camera.width;
    let h = Core.camera.height;
    
    // 1. ПОСТОЯННОЕ ЗАТЕМНЕНИЕ (Видимость мира 40%, то есть 60% непрозрачности)
    Draw.color(Color.valueOf("083012"), 0.60);
    Fill.rect(camX, camY, w, h);
    
    // 2. ПОЛОСЫ СКАНИРОВАНИЯ (Бегущие горизонтальные помехи)
    // Медленно плывущие по экрану линии сбоя матрицы
    Draw.color(Color.valueOf("ff0000"), 0.25);
    let scanY1 = camY + ((glitchTimer2 * 1.5) % h) - h/2;
    let scanY2 = camY - ((glitchTimer2 * 2.2) % h) + h/2;
    Fill.rect(camX, scanY1, w, h * 0.04);
    Fill.rect(camX, scanY2, w, h * 0.02);
    
    // 3. КРУПНЫЕ СБОЙНЫЕ БЛОКИ (Артефакты битой памяти)
    // Рендерим прямоугольники ваших цветов, меняющие положение дискретно
    let seed = Math.floor(glitchTimer2 / 5); 
    let rand = new Rand(seed); 
    
    let blockCount = rand.nextInt(6, 12);
    for(let i = 0; i < blockCount; i++){
        // Случайный выбор между вашими двумя цветами
        let blockColor = rand.chance(0.6) ? "0d4d0dcc" : "0c2514cc";
        Draw.color(Color.valueOf(blockColor));
        
        let bx = camX + rand.nextFloat(-w/2, w/2);
        let by = camY + rand.nextFloat(-h/2, h/2);
        let bw = rand.nextFloat(w * 0.04, w * 0.22);
        let bh = rand.nextFloat(h * 0.03, h * 0.07);
        
        Fill.rect(bx, by, bw, bh);
    }
    
    // 4. МЕЛКИЙ ЦИФРОВОЙ ШУМ (Искры сгоревшей шины данных)
    // Хаотично прыгающие мелкие штрихи
    for(let i = 0; i < 20; i++){
        Draw.color(Color.valueOf(Mathf.chance(0.6) ? "20641dee" : "033605"));
        
        let nx = camX + Mathf.random(-w/2, w/2);
        let ny = camY + Mathf.random(-h/2, h/2);
        let nw = Mathf.random(w * 0.02, w * 0.07);
        let nh = Mathf.random(1.5, 3); 
        
        Fill.rect(nx, ny, nw, nh);
    }
    
    // 5. РАМКА КРИТИЧЕСКОЙ ОШИБКИ
    // Тонкая пульсирующая рамка по краям экрана для акцента
    let pulse = Math.sin(glitchTimer2 * 0.15) * 0.5 + 0.5;
    Draw.color(Color.valueOf("052b0b"), 0.2 + pulse * 0.4);
    Lines.stroke(3);
    Lines.rect(camX - w/2, camY - h/2, w, h);
    
    Draw.reset();
});


let acidStatus = null;
let acidMixTimer = 0;

Events.on(ClientLoadEvent, () => {
    acidStatus = Vars.content.getByName(ContentType.status, "mod-acid-poison") || 
                 Vars.content.statusEffects().find(s => s.name.includes("acid-poison"));

    if(acidStatus){
        Log.info(">>> [ENTITY999] Caustics Chemical Shaderless FX injected successfully.");
    } else {
        Log.err(">>> [ENTITY999] Acid Status NOT FOUND.");
    }
});

Events.run(Trigger.draw, () => {
    if(!acidStatus) return;
    
    let player = Vars.player;
    if(!player || !player.unit() || !player.unit().hasEffect(acidStatus)) return;
    
    acidMixTimer += Time.delta;
    
    let camX = Core.camera.position.x;
    let camY = Core.camera.position.y;
    let w = Core.camera.width;
    let h = Core.camera.height;
    
    Draw.z(Layer.max);
    
    let causticsRegion = Core.atlas.find("c00l-caustics");
    let distortRegion = Core.atlas.find("c00l-distortAlpha");
    let noiseRegion = Core.atlas.find("c00l-noiseAlpha");
    
    if(causticsRegion){
        Draw.color(Color.valueOf("3ae42b"), 0.35);
        let cSize = Math.max(w, h) * 1.5;
        let cX = camX + Math.sin(acidMixTimer * 0.02) * 15;
        let cY = camY + Math.cos(acidMixTimer * 0.015) * 15;
        Draw.rect(causticsRegion, cX, cY, cSize, cSize, acidMixTimer * 0.05);
    }
    
    if(distortRegion){
        Draw.color(Color.valueOf("0f5705"), 0.22);
        let dSize = Math.max(w, h) * 1.7;
        let dScaleX = 1.0 + Math.sin(acidMixTimer * 0.05) * 0.1;
        let dScaleY = 1.0 + Math.cos(acidMixTimer * 0.04) * 0.1;
        let dRot = Math.sin(acidMixTimer * 0.02) * -12;
        Draw.rect(distortRegion, camX, camY, dSize * dScaleX, dSize * dScaleY, dRot);
    }
    
    if(noiseRegion){
        let seed = Math.floor(acidMixTimer / 5);
        let rand = new Rand(seed);
        Draw.color(Color.valueOf("052202"), rand.nextFloat(0.06, 0.14));
        let nSize = Math.max(w, h) * 1.3;
        let nFlipX = rand.chance(0.5) ? nSize : -nSize;
        let nFlipY = rand.chance(0.5) ? nSize : -nSize;
        Draw.rect(noiseRegion, camX, camY, nFlipX, nFlipY, rand.nextFloat(0, 360));
    }
    
    let shakeX = Math.sin(acidMixTimer * 0.45) * 2.0;
    let shakeY = Math.cos(acidMixTimer * 0.35) * 2.0;
    Core.camera.position.add(shakeX, shakeY);
    
    Draw.color(Color.valueOf("0f5705"), 0.4);
    Lines.stroke(10);
    Lines.rect(camX - w/2, camY - h/2, w, h);
    
    Draw.reset();
});







let specterInfection = null;
let specterTimeCounter = 0;

Events.on(ClientLoadEvent, () => {
    // Ищем статус-эффект взлома Спектра по его названию в локализации
    specterInfection = Vars.content.getByName(ContentType.status, "c00l-hacked") || 
                        Vars.content.statusEffects().find(status => status.name.includes("hacked"));

    if(specterInfection){
        Log.info(">>> [YORIK] Core Specter Shockwave Layer Loaded: " + specterInfection.name);
    } else {
        Log.err(">>> [YORIK] Critical Error: Specter Status Missing.");
    }
});

Events.run(Trigger.draw, () => {
    if(!specterInfection) return;
    
    let activeUser = Vars.player;
    if(!activeUser || !activeUser.unit() || !activeUser.unit().hasEffect(specterInfection)) return;
    
    specterTimeCounter += Time.delta;
    
    Draw.z(Layer.max);
    
    let originX = Core.camera.position.x;
    let originY = Core.camera.position.y;
    let displayWidth = Core.camera.width;
    let displayHeight = Core.camera.height;
    
    // 1. ТОТАЛЬНОЕ ЗАПЕКШЕЕСЯ ЗАТЕМНЕНИЕ (Поглощение разума Спектром)
    // Самый плотный уровень непрозрачности (75%) — мир вокруг Пуня исчезает
    Draw.color(Color.valueOf("250c0c"), 0.75);
    Fill.rect(originX, originY, displayWidth, displayHeight);
    
    // 2. ВЕРТИКАЛЬНЫЕ ГЛИТЧ-ПОТОКИ (Разрушение шины рендеринга)
    Draw.color(Color.valueOf("a11515"), 0.35);
    let shiftX1 = originX + ((specterTimeCounter * 0.9) % displayWidth) - displayWidth/2;
    let shiftX2 = originX - ((specterTimeCounter * 1.6) % displayWidth) + displayWidth/2;
    Fill.rect(shiftX1, originY, displayWidth * 0.025, displayHeight);
    Fill.rect(shiftX2, originY, displayWidth * 0.015, displayHeight);
    
    // 3. СИСТЕМНАЯ СЕТКА СБОЕВ
    let matrixSeed = Math.floor(specterTimeCounter / 4); 
    let matrixGenerator = new Rand(matrixSeed); 
    
    let gridLinesCount = matrixGenerator.nextInt(5, 9);
    Draw.color(Color.valueOf("a1151566"));
    Lines.stroke(2);
    for(let index = 0; index < gridLinesCount; index++){
        let currentGridY = originY + matrixGenerator.nextFloat(-displayHeight/2, displayHeight/2);
        Lines.line(originX - displayWidth/2, currentGridY, originX + displayWidth/2, currentGridY);
    }
    
    // 4. ТЯЖЕЛЫЕ БИНАРНЫЕ БЛОКИ (Разрывы видеопамяти Спектра)
    // Очень длинные горизонтальные полосы, перекрывающие экран
    let structuralBlocksCount = matrixGenerator.nextInt(6, 11);
    for(let index = 0; index < structuralBlocksCount; index++){
        let selectedHexColor = matrixGenerator.chance(0.65) ? "a11515cc" : "250c0cff";
        Draw.color(Color.valueOf(selectedHexColor));
        
        let positionX = originX + matrixGenerator.nextFloat(-displayWidth/2, displayWidth/2);
        let positionY = originY + matrixGenerator.nextFloat(-displayHeight/2, displayHeight/2);
        let dimensionW = matrixGenerator.nextFloat(displayWidth * 0.20, displayWidth * 0.45);
        let dimensionH = matrixGenerator.nextFloat(displayHeight * 0.015, displayHeight * 0.05);
        
        Fill.rect(positionX, positionY, dimensionW, dimensionH);
    }
    
    // 5. ВЫСОКОЧАСТОТНЫЕ МИКРО-ИСКАЖЕНИЯ (Белый статический шум)
    for(let index = 0; index < 18; index++){
        Draw.color(Color.valueOf(Mathf.chance(0.65) ? "a11515ff" : "250c0cee"));
        
        let noiseX = originX + Mathf.random(-displayWidth/2, displayWidth/2);
        let noiseY = originY + Mathf.random(-displayHeight/2, displayHeight/2);
        let noiseW = Mathf.random(displayWidth * 0.04, displayWidth * 0.10);
        let noiseH = Mathf.random(1.2, 2.8); 
        
        Fill.rect(noiseX, noiseY, noiseW, noiseH);
    }
    
    // 6. ТИСКИ ЧИСТИЛИЩА (Толстая сужающаяся рамка критического сбоя)
    let oscillation = Math.sin(specterTimeCounter * 0.07) * 0.5 + 0.5;
    Draw.color(Color.valueOf("250c0c"), 0.4 + oscillation * 0.5);
    Lines.stroke(5 + oscillation * 10);
    Lines.rect(originX - displayWidth/2, originY - displayHeight/2, displayWidth, displayHeight);
    
    Draw.reset();
});








let hack = null;
let hackTimer = 0;

Events.on(ClientLoadEvent, () => {
    hack = Vars.content.getByName(ContentType.status, "c00l-h4ck3d") || 
                Vars.content.statusEffects().find(s => s.name.includes("h4ck3d"));

    if(hack){
        Log.info(">>> [H4CK3R] VFX initialized: " +hack.name);
    } else {
        Log.err(">>> [H4CK3R] Status NOT FOUND.");
    }
});




Events.run(Trigger.draw, () => {
    if(!hack) return;
    
    let player = Vars.player;
    if(!player || !player.unit() || !player.unit().hasEffect(hack)) return;
    
    hackTimer += Time.delta;
    
    Draw.z(Layer.max);
    
    let camX = Core.camera.position.x;
    let camY = Core.camera.position.y;
    let w = Core.camera.width;
    let h = Core.camera.height;
    
    // 1. ПОСТОЯННОЕ ЗАТЕМНЕНИЕ (Видимость мира 40%, то есть 60% непрозрачности)
    Draw.color(Color.valueOf("0059fd"), 0.75);
    Fill.rect(camX, camY, w, h);
    
    // 2. ПОЛОСЫ СКАНИРОВАНИЯ (Бегущие горизонтальные помехи)
    // Медленно плывущие по экрану линии сбоя матрицы
    Draw.color(Color.valueOf("2600ff"), 0.25);
    let scanY1 = camY + ((hackTimer * 1.5) % h) - h/2;
    let scanY2 = camY - ((hackTimer * 2.2) % h) + h/2;
    Fill.rect(camX, scanY1, w, h * 0.04);
    Fill.rect(camX, scanY2, w, h * 0.02);
    
    // 3. КРУПНЫЕ СБОЙНЫЕ БЛОКИ (Артефакты битой памяти)
    // Рендерим прямоугольники ваших цветов, меняющие положение дискретно
    let seed = Math.floor(hackTimer / 5); 
    let rand = new Rand(seed); 
    
    let blockCount = rand.nextInt(6, 12);
    for(let i = 0; i < blockCount; i++){
        // Случайный выбор между вашими двумя цветами
        let blockColor = rand.chance(0.6) ? "0b518acc" : "055661cc";
        Draw.color(Color.valueOf(blockColor));
        
        let bx = camX + rand.nextFloat(-w/2, w/2);
        let by = camY + rand.nextFloat(-h/2, h/2);
        let bw = rand.nextFloat(w * 0.04, w * 0.22);
        let bh = rand.nextFloat(h * 0.03, h * 0.07);
        
        Fill.rect(bx, by, bw, bh);
    }
    
    // 4. МЕЛКИЙ ЦИФРОВОЙ ШУМ (Искры сгоревшей шины данных)
    // Хаотично прыгающие мелкие штрихи
    for(let i = 0; i < 20; i++){
        Draw.color(Color.valueOf(Mathf.chance(0.6) ? "1d2264ee" : "03362f"));
        
        let nx = camX + Mathf.random(-w/2, w/2);
        let ny = camY + Mathf.random(-h/2, h/2);
        let nw = Mathf.random(w * 0.02, w * 0.07);
        let nh = Mathf.random(1.5, 3); 
        
        Fill.rect(nx, ny, nw, nh);
    }
    
    // 5. РАМКА КРИТИЧЕСКОЙ ОШИБКИ
    // Тонкая пульсирующая рамка по краям экрана для акцента
    let pulse = Math.sin(hackTimer * 0.15) * 0.5 + 0.5;
    Draw.color(Color.valueOf("052a2b"), 0.2 + pulse * 0.4);
    Lines.stroke(3);
    Lines.rect(camX - w/2, camY - h/2, w, h);
    

    Draw.reset();
});
