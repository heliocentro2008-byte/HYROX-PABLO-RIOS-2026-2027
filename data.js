/* ============================================================
   DATA.JS — CONTENIDO DE LA SEMANA
   Este es el ÚNICO archivo que cambia cada semana.
   Sustitúyelo entero en GitHub por el nuevo cada vez que
   Claude te entregue una semana nueva. No toques index.html,
   manifest.json ni sw.js — esos no cambian.

   Semana actual: 24-30 agosto 2026 (Semana 2 — primera semana completa)
   ============================================================ */

const BASE_IMG='https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
const YT='https://www.youtube.com/results?search_query=';

const EX={
  squat:{n:'Back Squat con barra',s:'Test de fuerza máxima — patrón principal tren inferior',img:'Barbell_Full_Squat/0.jpg',g:[{l:'PR actual',v:'90 kg'},{l:'Fecha',v:'21 ago 2026'}],k:['Pies a la anchura de hombros, pecho arriba, core activo antes de bajar','Baja controlado hasta profundidad completa sin perder la curva lumbar neutra','Empuja el suelo con toda la planta del pie, rodillas en línea con la punta del pie','Para el intento si pierdes técnica — un 1RM sin técnica no sirve como referencia real']},
  hip_thrust:{n:'BB Hip Thrust',s:'Fuerza + hipertrofia de glúteo — ejercicio prioritario',img:'Barbell_Hip_Thrust/0.jpg',g:[{l:'PR actual',v:'140 kg'},{l:'Fecha',v:'21 ago 2026'}],k:['Espalda apoyada en banco a la altura de la escápula','Barbilla metida, mirada al frente en el punto más alto','Aprieta el glúteo con fuerza arriba, no arquees la lumbar','Pies a la anchura de caderas, empuje a través del talón']},
  rdl:{n:'Romanian Deadlift',s:'Cadena posterior — isquios y glúteo',img:'Romanian_Deadlift/0.jpg',g:[{l:'Series',v:'3×10'},{l:'Foco',v:'Bisagra de cadera'}],k:['La barra roza el muslo durante todo el recorrido','Rodillas con flexión mínima y constante, no es una sentadilla','Siente el estiramiento en isquios, para cuando notes tensión en lumbar','Sube empujando cadera hacia delante, aprieta glúteo arriba']},
  plancha:{n:'Plancha antirotación',s:'Core — estabilidad',img:'Plank/0.jpg',g:[{l:'Series',v:'3×30 seg'},{l:'Tipo',v:'Isométrico'}],k:['Cadera y hombros alineados, sin elevar ni hundir la cadera','Respira de forma controlada sin perder tensión abdominal']},
  curl:{n:'DB Biceps Curl',s:'Superserie con glúteo — brazo · foto de referencia sentado, mismo patrón de flexión de codo',img:'Seated_Dumbbell_Curl/0.jpg',g:[{l:'Series',v:'3×12'},{l:'Tempo',v:'3 seg bajada'}],k:['Codos fijos junto al cuerpo durante todo el movimiento','Sube con supinación completa, controla la bajada']},
  run_z2:{n:'Carrera continua Z2',s:'Base aeróbica — ritmo conversacional',img:'Running_Treadmill/0.jpg',g:[{l:'Duración',v:'25-30 min'},{l:'Cadencia',v:'170-180 spm'}],k:['Ritmo al que podrías mantener una conversación sin ahogarte','Pasos cortos y rápidos, evita zancada larga que castiga la rodilla','Si notas la rodilla, baja el ritmo antes de parar del todo']},
  strides:{n:'Strides / progresiones',s:'Economía de carrera — neuromuscular',img:'Wind_Sprints/0.jpg',g:[{l:'Series',v:'4-6×15-20 seg'},{l:'Intensidad',v:'~85-90%, no máximo'}],k:['Acelera progresivamente los primeros 5 seg, no salgas explosivo','Técnica limpia: brazos relajados, mirada al frente, aterrizaje bajo el centro de masa','Recuperación completa caminando entre repeticiones']},
  bench:{n:'Press de banca',s:'Fuerza tren superior — empuje horizontal',img:'Barbell_Bench_Press_-_Medium_Grip/0.jpg',g:[{l:'PR actual',v:'80 kg'},{l:'RPE hoy',v:'7-8'}],k:['Escápulas juntas y hundidas contra el banco antes de empezar','Baja controlado 2 seg, la barra toca el pecho a la altura del esternón','Empuje explosivo en la subida, sin despegar los glúteos del banco']},
  remo_db:{n:'DB Row de pie, inclinado',s:'Tirón horizontal — espalda',img:'Bent_Over_Two-Dumbbell_Row/0.jpg',g:[{l:'Series',v:'3×10/10'},{l:'Foco',v:'Torso paralelo al suelo'}],k:['Bisagra de cadera, torso inclinado y fijo durante toda la serie','Lleva los codos hacia atrás pegados al cuerpo, no hacia arriba','Pausa 1 seg en la contracción máxima']},
  abduccion:{n:'Abducción de cadera',s:'Glúteo medio — máquina',img:'Thigh_Abductor/0.jpg',g:[{l:'Series',v:'3×15'},{l:'Tempo',v:'Controlado, sin rebote'}],k:['Pausa 1 seg en la apertura máxima','Vuelve controlado, no dejes que la resistencia te arrastre']},
  press_militar:{n:'Press Militar con mancuernas',s:'Empuje vertical — hombro',img:'Dumbbell_Shoulder_Press/0.jpg',g:[{l:'Series',v:'3×10'},{l:'Postura',v:'De pie, core activo'}],k:['No arquees la espalda para compensar el rango final','Controla especialmente la bajada']},
  sandbag_lunges:{n:'Sandbag Lunges',s:'Estación HYROX — históricamente tu más débil (10:12 en Madrid)',yt:'sandbag lunges hyrox technique',g:[{l:'Foco',v:'Técnica bajo fatiga'},{l:'Progresión',v:'Distancia y ritmo'}],k:['Zancada controlada, torso recto, rodilla delantera no sobrepasa la puntera','El saco se reparte en ambos hombros o en la espalda alta, mantén el core apretado','Prioriza ritmo constante sobre velocidad explosiva — es donde más tiempo pierdes']},
  burpee_bj:{n:'Burpee Broad Jump',s:'Estación HYROX — tu segunda más débil (8:32 en Madrid)',yt:'burpee broad jump hyrox technique',g:[{l:'Foco',v:'Ritmo sostenible'},{l:'Progresión',v:'Sets bajo fatiga leve'}],k:['No salgas explosivo en las primeras repeticiones — es la trampa que más tiempo cuesta después','Salto amplio controlado, no busques distancia máxima cada vez','Respiración constante, encuentra un ritmo que puedas mantener toda la serie']},
  sled_push:{n:'Sled Push',s:'Estación HYROX — tu mejor estación (3:52 en Madrid), mantenimiento',img:'Sled_Push/0.jpg',g:[{l:'Foco',v:'Mantener nivel'},{l:'Postura',v:'Baja y explosiva'}],k:['Ángulo de empuje bajo, brazos extendidos, pasos cortos y potentes','Mantén la calidad técnica aunque sea tu punto fuerte — no te relajes']},
  run_transicion:{n:'Carrera de transición corta',s:'Entrada/salida de estación — específico HYROX',img:'Running_Treadmill/0.jpg',g:[{l:'Distancia',v:'200-400m'},{l:'Objetivo',v:'Piernas encendidas tras estación'}],k:['Sal de la estación ya trotando, no camines los primeros metros','Busca recuperar el ritmo de carrera lo antes posible tras el esfuerzo de la estación']},
  hip9090:{n:'Hip 90/90',s:'Movilidad de cadera multiplanar',yt:'hip 90 90 mobility drill',g:[{l:'Series',v:'4/lado'},{l:'Respiración',v:'5 por posición'}],k:['Ambas rodillas y caderas a 90°','Mantén el torso erguido, no te eches hacia atrás para compensar']},
  thread:{n:'Thread the Needle',s:'Movilidad torácica rotacional',yt:'thread the needle thoracic mobility',g:[{l:'Series',v:'10/lado'}],k:['Rota desde la zona dorsal, no desde la lumbar','Pausa 1 seg en el punto de rotación máxima']},
  wgs:{n:'World\'s Greatest Stretch',s:'Movilidad global de mayor transferencia',img:'Worlds_Greatest_Stretch/0.jpg',g:[{l:'Series',v:'5/lado'}],k:['Secuencia completa: zancada, rotación torácica, isquio — no te saltes ningún paso']},
  clubbell_mill:{n:'Clubbell Swing / Mill',s:'Alternativa en casa — hombro y core rotacional',yt:'clubbell mill exercise technique',g:[{l:'Series',v:'3×8/lado'},{l:'Material',v:'Clubbell'}],k:['Movimiento controlado, el peso marca el ritmo, no fuerces la velocidad','Mantén el core activo durante toda la rotación']},
  band_hipthrust:{n:'Glute Bridge con banda',s:'Alternativa en casa a Hip Thrust · foto de referencia unilateral, con banda el patrón es el mismo',img:'Single_Leg_Glute_Bridge/0.jpg',g:[{l:'Series',v:'4×15'},{l:'Material',v:'Goma + suelo'}],k:['Banda por encima de rodilla, empuja hacia fuera durante la extensión de cadera','Aprieta el glúteo con fuerza arriba, pausa 2 seg']},
  backpack_lunge:{n:'Lunge con mochila cargada',s:'Alternativa en casa a Sandbag Lunges',img:'Bodyweight_Walking_Lunge/0.jpg',g:[{l:'Series',v:'3×10/10'},{l:'Material',v:'Mochila con peso'}],k:['Misma técnica que con sandbag: torso recto, rodilla no sobrepasa puntera']},
  deadlift:{n:'Peso muerto convencional',s:'Cadena posterior completa — RM real en fresco',img:'Barbell_Deadlift/0.jpg',g:[{l:'PR actual',v:'120 kg'},{l:'Fecha',v:'RM confirmado'}],k:['Espalda neutral antes de arrancar — nunca redondees la lumbar','Barra cerca de las espinillas al inicio','Empuje de piernas en la primera fase, caderas arriba al final']},
  power_clean:{n:'Power Clean',s:'Potencia — patrón olímpico',img:'Power_Clean/0.jpg',g:[{l:'PR actual',v:'55 kg'},{l:'Fecha',v:'RM confirmado'}],k:['Tirón explosivo desde el suelo, barra cerca del cuerpo','Recepción en cuarto de sentadilla, codos altos rápido']},
  pullups:{n:'Dominadas',s:'Tracción vertical — peso corporal',img:'Pullups/0.jpg',g:[{l:'PR actual',v:'4 reps'},{l:'Fecha',v:'RM confirmado'}],k:['Rango completo: de brazos extendidos a barbilla sobre la barra','Escápulas activas desde el inicio, sin balanceo']},
};

function thumb(id){
  const e=EX[id];
  if(e&&e.img)return`<img src="${BASE_IMG}${e.img}" alt="${e.n}" onerror="this.parentElement.innerHTML='▶'">`;
  if(e&&e.yt)return'▶';
  return'▶';
}
function sl(t){return`<div class="s-label">${t}</div>`}
function bl(tag,name,meta,rows){
  return`<div class="block"><div class="block-hdr" onclick="tb(this)"><span class="b-tag ${tag}">${tag==='act'?'ACT':tag.toUpperCase()}</span><span class="b-name">${name}</span><span class="b-meta">${meta}</span><span class="chev">▼</span></div><div class="block-body open">${rows.join('')}</div></div>`
}
function ex(id,name,cue,data,sub){
  return`<div class="ex" onclick="openEx('${id}')"><div class="ex-thumb">${thumb(id)}</div><div class="ex-left"><div class="ex-name">${name}</div><div class="ex-cue">${cue}</div></div><div class="ex-right"><div class="ex-data">${data}</div>${sub?`<span class="ex-sub">${sub}</span>`:''}</div></div>`
}
function exw(id,name,cue,data,sub,warn){
  return`<div class="ex" onclick="openEx('${id}')"><div class="ex-thumb">${thumb(id)}</div><div class="ex-left"><div class="ex-name">${name}</div><div class="ex-cue">${cue}</div>${warn?`<div class="ex-warn">⚠️ ${warn}</div>`:''}</div><div class="ex-right"><div class="ex-data">${data}</div>${sub?`<span class="ex-sub">${sub}</span>`:''}</div></div>`
}
function ordRow(n,desc,data){return`<div class="ord-row"><div class="ord-num">${n}</div><div class="ord-desc">${desc}</div><div class="ord-data">${data}</div></div>`}
function nutriItem(time,label,desc){return`<div class="nutri-item"><div class="nutri-time">${time}</div><div class="nutri-label">${label}</div><div class="nutri-desc">${desc}</div></div>`}
function nutriTrack(items){return`<div class="nutri-track">${items.join('')}</div>`}
function marksTable(title,rows){
  let body=rows.map(r=>`<tr><td class="marks-ex">${r}</td><td><input placeholder="kg / tiempo"></td><td><select><option value="">–</option>${[1,2,3,4,5,6,7,8,9,10].map(n=>`<option>${n}</option>`).join('')}</select></td><td><input placeholder="nota"></td></tr>`).join('');
  return`<div class="s-label">${title}</div><table class="marks-table"><tr><th>Ejercicio / marca</th><th>Resultado</th><th>Sens.</th><th>Notas</th></tr>${body}</table>`
}

const DAYS={
  lunes:{eyebrow:'Lunes 24 agosto · Lower + Glúteo',title:'LOWER <span>+ GLÚTEO</span>',cls:'d-mon',
    pills:['~85 min','Sin test hoy','RPE 7-8','Rodilla: sin restricción'],
    entreno:()=>`
      <div class="note"><strong>Sin test esta semana:</strong> la sentadilla ya tiene su PR real (90kg, 21 ago). Hoy trabajamos volumen a RPE 7-8, sin buscar otro máximo — el próximo test de fuerza no llega hasta el 22-27 de septiembre.</div>
      ${sl('Calentamiento — 10 min')}
      ${bl('act','Activación','Preparación articular',[
        ex('hip9090','Movilidad cadera + tobillo','Hip circle × 10/lado + dorsiflexión tobillo × 10','1 ronda',''),
      ])}
      ${sl('Fuerza — superserie de eficiencia (pierna + glúteo)')}
      ${bl('mon','Fuerza','A1/A2 — combinan grupos no competitivos entre sí',[
        ex('squat','A1 · Back Squat','Referencia: tu test fue 90kg — hoy RPE 7-8, no busques otro máximo','4×6',''),
        ex('hip_thrust','A2 · BB Hip Thrust','Pausa 2 seg arriba · descanso tras A2: 2 min','4×10-12',''),
        ex('rdl','B1 · Romanian Deadlift','Bisagra de cadera limpia','3×10',''),
        ex('curl','B2 · DB Biceps Curl','Descanso tras B2: 75 seg','3×12',''),
      ])}
      ${sl('Core')}
      ${bl('mon','Core','Estabilidad',[ex('plancha','Plancha antirotación','Cadera y hombros alineados','3×30 seg','')])}
      ${sl('Vuelta a la calma')}
      ${bl('act','Longevidad','Recuperación',[ex('hip9090','Foam roller cuádriceps + glúteo','2 min por pierna','6 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua. Nada pesado, digestión lenta.'),
      nutriItem('14:00','Comida principal','Gestión de tu nutricionista.'),
      nutriItem('17:15-17:30','Pre-entreno','Plátano o dátiles, 30-45 min antes.'),
      nutriItem('~18:00','Durante','Agua a sorbos entre series.'),
      nutriItem('18:30-19:00','Post-entreno','Proteína + carbohidrato: batido o yogur con fruta.'),
      nutriItem('20:30','Cena','Proteína + verdura, sin prisas.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['Back Squat (kg trabajados)','BB Hip Thrust (kg)','Romanian Deadlift (kg)','Sensación general','Rodilla derecha']),
    alt:()=>`<div class="alt-intro"><strong>Sin gimnasio</strong>Sustituye la barra por clubbell + banda.</div>
      ${bl('mon','En casa','Lower + glúteo sin gimnasio',[
        ex('band_hipthrust','Glute Bridge con banda','Sustituye Hip Thrust','4×15',''),
        ex('backpack_lunge','Lunge con mochila cargada','Sustituye sentadilla como patrón de pierna','3×10/10',''),
        ex('clubbell_mill','Clubbell Swing','Si tienes espacio','3×8/lado',''),
        ex('plancha','Plancha antirotación','Igual que en gimnasio','3×30 seg',''),
      ])}`
  },
  martes:{eyebrow:'Martes 25 agosto · Carrera',title:'CARRERA <span>+ CADENCIA</span>',cls:'d-tue',
    pills:['~45 min','Cadencia: buscar >150 spm','Construcción de volumen','RPE 5-6'],
    entreno:()=>`
      <div class="alert"><strong>El domingo tu cadencia subió a 158 spm</strong> (venías de 119 el viernes). Eso confirma que no es un límite físico fijo — es cuestión de atención consciente al paso. Hoy repetimos ese cue desde el primer minuto, no solo al final.</div>
      ${sl('Calentamiento — 10 min')}
      ${bl('act','Activación','Entrada progresiva',[ex('hip9090','Movilidad tobillo + cadera','Antes de empezar a correr','1 ronda','')])}
      ${sl('Carrera continua — con foco en cadencia')}
      ${bl('tue','Cardio','Base aeróbica, pasos cortos y rápidos desde el minuto 1',[
        ex('run_z2','Carrera continua Z2','Cuenta tus pasos 15 seg cada 5 min para autocorregir — objetivo >150 spm','30-35 min',''),
      ])}
      ${sl('Economía de carrera')}
      ${bl('tue','Neuromuscular','Progresiones cortas',[ex('strides','Strides','Recuperación completa caminando entre series','4-6×15-20 seg','')])}
      ${sl('Vuelta a la calma')}
      ${bl('act','Longevidad','Cierre',[ex('run_z2','Trote suave + estiramiento','Piernas, gemelos, cadera','5 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua.'),
      nutriItem('14:00','Comida principal','Gestión de tu nutricionista.'),
      nutriItem('17:15','Pre-entreno','Fruta (plátano o manzana) 45 min antes.'),
      nutriItem('~18:00','Durante','Agua si la sesión se alarga.'),
      nutriItem('18:45','Post-entreno','Fruta + frutos secos, o yogur.'),
      nutriItem('20:30','Cena','Normal.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['Distancia total','Ritmo medio','Cadencia media (spm)','Sensación piernas','Rodilla derecha']),
    alt:()=>`<div class="alt-intro"><strong>Ya es "en casa" por naturaleza</strong>Correr no depende del gimnasio.</div>
      ${bl('tue','En casa','Si no puedes salir a correr',[ex('clubbell_mill','Circuito cardio con peso corporal','Jumping jacks, mountain climbers, en circuito continuo','6×3 min','')])}`
  },
  miercoles:{eyebrow:'Miércoles 26 agosto · Boxeo (opcional)',title:'BOXEO <span>OPCIONAL</span>',cls:'d-wed',
    pills:['~60 min','Decisión del entrenador: incluido esta semana','Desconexión','RPE moderado'],
    entreno:()=>`
      <div class="note"><strong>Por qué sí esta semana:</strong> lunes (fuerza) y martes (carrera) son carga moderada, y las sensaciones de la semana pasada fueron buenas en todos los frentes — hay margen para el boxeo sin comprometer jueves (fuerza+HYROX). Si en tu box la sesión es muy intensa esa semana, avísame y ajusto el jueves.</div>
      ${sl('Sesión')}
      ${bl('wed','Boxeo','Tu sesión habitual de boxeo/kickboxing',[
        ex('hip9090','Calentamiento propio del box','Sigue el calentamiento que hagan en tu box','10-15 min',''),
      ])}
      <div class="note">No tengo el detalle técnico de tu sesión de boxeo (eso lo lleva tu entrenador/box, no yo) — solo controla que la intensidad general no te deje sin margen para el jueves.</div>
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua.'),
      nutriItem('14:00','Comida principal','Gestión de tu nutricionista.'),
      nutriItem('17:15','Pre-entreno','Algo ligero, carbohidrato rápido si la sesión es intensa.'),
      nutriItem('20:30','Cena','Normal, con proteína suficiente si la sesión fue exigente.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['¿Fuiste al box? (sí/no)','Intensidad percibida (1-10)','Sensación general']),
    alt:()=>`<div class="alt-intro"><strong>Si no vas al box esta semana</strong>Sustituye por movilidad y core, sin necesidad de nada más — es una sesión opcional.</div>
      ${bl('wed','En casa','Alternativa si no hay boxeo',[
        ex('thread','Movilidad torácica','Cat-cow + rotación cuadrupedia','2 rondas',''),
        ex('plancha','Plancha antirotación','Core','3×30 seg',''),
      ])}`
  },
  jueves:{eyebrow:'Jueves 27 agosto · Upper + HYROX',title:'UPPER <span>+ HYROX</span>',cls:'d-thu',
    pills:['~90 min','Superserie glúteo','Burpee BJ — sigue costando','Sled: mantener 150kg'],
    entreno:()=>`
      ${sl('Calentamiento — 10 min')}
      ${bl('act','Activación','Torácica + escápulas + glúteo',[
        ex('thread','Movilidad torácica','Cat-cow + rotación cuadrupedia','2 rondas',''),
        ex('band_hipthrust','Activación glúteo breve','Puente × 15','1 ronda',''),
      ])}
      ${sl('Fuerza — superserie de eficiencia (upper + glúteo)')}
      ${bl('thu','Fuerza','A1/A2 — combinan grupos no competitivos entre sí',[
        ex('bench','A1 · Press de banca','El sábado trabajaste 60kg — hoy RPE 7-8, sin buscar máximo','4×8',''),
        ex('hip_thrust','A2 · BB Hip Thrust','Referencia: 120-140kg trabajados recientemente · descanso tras A2: 2 min','4×10-12',''),
        ex('remo_db','B1 · DB Row de pie','Torso paralelo al suelo','3×10/10',''),
        ex('abduccion','B2 · Abducción de cadera','Descanso tras B2: 90 seg','3×15',''),
        ex('press_militar','C1 · Press Militar DB','Core activo','3×10',''),
      ])}
      ${sl('Estaciones HYROX — Burpee BJ prioritario, Sled mantenimiento')}
      ${bl('thu','HYROX','El sábado "costaron" los burpees — seguimos con foco en ritmo sostenible',[
        exw('burpee_bj','Burpee Broad Jump','Ritmo constante desde la primera repetición, no expl. inicial','4×15m','',''),
        ex('run_transicion','Carrera de transición','Sal ya trotando','300m',''),
        ex('sandbag_lunges','Sandbag Lunges','Sin dolor de rodilla el sábado — sigue progresando con confianza','3×20m',''),
        ex('sled_push','Sled Push (mantenimiento)','150kg fue cómodo el sábado — prueba a subir ligeramente si la técnica se mantiene','2×30m',''),
      ])}
      ${sl('Vuelta a la calma')}
      ${bl('act','Longevidad','Recuperación',[ex('hip9090','Foam roller completo','Cuádriceps, glúteo, isquios','6 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua + desayuno ligero si el horario lo pide.'),
      nutriItem('14:00','Comida principal','Sesión larga (~90 min) — que no sea excesivamente pesada.'),
      nutriItem('17:00-17:15','Pre-entreno','Plátano + dátiles o tostada pequeña con miel.'),
      nutriItem('~18:00','Durante','Agua constante durante los 90 min.'),
      nutriItem('19:30','Post-entreno','Batido + fruta, o yogur griego + avena.'),
      nutriItem('20:30','Cena','Normal, con proteína suficiente.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['Press banca (kg)','BB Hip Thrust (kg)','Burpee BJ (tiempo/sensación)','Sandbag Lunges (sensación)','Sled Push (kg)','Sensación general']),
    alt:()=>`<div class="alt-intro"><strong>Sin gimnasio ni sled</strong>Sustituye barra por clubbell+banda, sled/sandbag por mochila cargada.</div>
      ${bl('thu','En casa','Upper + glúteo sin gimnasio',[
        ex('clubbell_mill','Clubbell press / mill','Sustituye press banca y militar','4×8/lado',''),
        ex('band_hipthrust','Glute Bridge con banda','Sustituye Hip Thrust','4×15',''),
        ex('backpack_lunge','Lunge con mochila cargada','Sustituye Sandbag Lunges','3×10/10',''),
        ex('burpee_bj','Burpee Broad Jump','Igual que en gimnasio, no necesita equipo','4×15m',''),
      ])}`
  },
  viernes:{eyebrow:'Viernes 28 agosto · Carrera',title:'CARRERA <span>ECONOMÍA</span>',cls:'d-fri',
    pills:['~45 min','Strides + cadencia','Día después de fuerza — moderado','RPE 5-7'],
    entreno:()=>`
      <div class="note"><strong>Por qué hoy moderado:</strong> ayer exigiste tren superior + estaciones. Hoy priorizamos técnica y cadencia sobre volumen, no sumar más fatiga.</div>
      ${sl('Calentamiento — 10 min')}
      ${bl('act','Activación','Entrada progresiva',[ex('hip9090','Movilidad tobillo + cadera','Antes de correr','1 ronda','')])}
      ${sl('Carrera continua')}
      ${bl('fri','Cardio','Base aeróbica, mismo cue de cadencia que el martes',[ex('run_z2','Carrera continua Z2','Pasos cortos y rápidos, objetivo >150 spm','20-25 min','')])}
      ${sl('Economía de carrera')}
      ${bl('fri','Neuromuscular','Más volumen de strides que el martes',[ex('strides','Strides','Técnica limpia, recuperación completa','6×15-20 seg','')])}
      ${sl('Vuelta a la calma')}
      ${bl('act','Longevidad','Cierre',[ex('run_z2','Trote suave + estiramiento','Piernas, gemelos, cadera','5 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua.'),
      nutriItem('14:00','Comida principal','Gestión de tu nutricionista.'),
      nutriItem('17:15','Pre-entreno','Fruta 45 min antes.'),
      nutriItem('18:45','Post-entreno','Fruta + frutos secos, o yogur.'),
      nutriItem('20:30','Cena','Normal.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['Distancia total','Cadencia media (spm)','Sensación piernas (tras ayer)','Rodilla derecha']),
    alt:()=>`<div class="alt-intro"><strong>Ya es "en casa" por naturaleza</strong>Correr no depende del gimnasio.</div>
      ${bl('fri','En casa','Si no puedes salir a correr',[ex('clubbell_mill','Circuito cardio con peso corporal','En circuito continuo','5×3 min','')])}`
  },
  sabado:{eyebrow:'Sábado 29 agosto · Circuito HYROX',title:'CIRCUITO <span>HYROX</span>',cls:'d-sat',
    pills:['~70 min','Run → Estación → Run','Foco en transiciones','RPE 7-8'],
    entreno:()=>`
      <div class="note"><strong>Objetivo de hoy:</strong> no es fuerza máxima ni carrera máxima — es la transición entre ambas. Sales de cada estación y recuperas el ritmo de carrera lo antes posible, como en la prueba real.</div>
      ${sl('Calentamiento — 10 min')}
      ${bl('act','Activación','Preparación general',[ex('hip9090','Movilidad completa','Cadera, tobillo, torácica','1 ronda','')])}
      ${sl('Circuito — 3 rondas')}
      ${bl('sat','HYROX','Run 400m → Estación → Run 400m, repetir 3 veces con las 3 estaciones',[
        ex('run_transicion','Carrera','Ritmo constante, no explosivo','400m',''),
        exw('burpee_bj','Burpee Broad Jump','Ritmo sostenible, sigue siendo tu limitador','2×15m','',''),
        ex('run_transicion','Carrera','Sal ya trotando tras el burpee','400m',''),
        ex('sandbag_lunges','Sandbag Lunges','Sin dolor de rodilla — progresa con confianza','2×20m',''),
        ex('run_transicion','Carrera','Recupera el ritmo lo antes posible','400m',''),
        ex('sled_push','Sled Push','Referencia: 150kg cómodo la semana pasada','1×25m',''),
      ])}
      ${sl('Vuelta a la calma')}
      ${bl('act','Longevidad','Recuperación',[ex('hip9090','Foam roller completo','Piernas y glúteo','8 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua + desayuno ligero si el horario lo pide.'),
      nutriItem('14:00','Comida principal','Sesión exigente — que no sea copiosa.'),
      nutriItem('17:00-17:15','Pre-entreno','Plátano + dátiles.'),
      nutriItem('~18:00','Durante','Agua constante, sesión de intensidad mixta.'),
      nutriItem('19:00','Post-entreno','Batido + fruta.'),
      nutriItem('20:30','Cena','Normal, con proteína suficiente.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['Tiempo total del circuito','Burpee BJ (sensación)','Sandbag Lunges (sensación)','Sled Push (kg)','Sensación de las transiciones','Rodilla derecha']),
    alt:()=>`<div class="alt-intro"><strong>Sin gimnasio ni sled</strong>El circuito se mantiene igual, solo cambia el equipo del sled.</div>
      ${bl('sat','En casa','Circuito sin gimnasio',[
        ex('run_transicion','Carrera','Igual que en gimnasio','400m',''),
        ex('burpee_bj','Burpee Broad Jump','No necesita equipo','2×15m',''),
        ex('backpack_lunge','Lunge con mochila cargada','Sustituye Sandbag Lunges','2×20m',''),
      ])}`
  },
  domingo:{eyebrow:'Domingo 30 agosto · Recuperación',title:'RECUPERACIÓN <span>+ CIERRE</span>',cls:'d-sun',
    pills:['~35 min','Movilidad profunda','Trote opcional según sensaciones','Cierre de semana 2'],
    entreno:()=>`
      <div class="note"><strong>Cómo decidir si trotas hoy:</strong> el domingo pasado trotaste 47 min con muy buena cadencia (158 spm) — si las piernas están frescas tras el circuito de ayer, repite algo similar. Si notas fatiga acumulada, quédate solo con la movilidad.</div>
      ${sl('Movilidad profunda — 20 min')}
      ${bl('act','Movilidad','Rango articular',[
        ex('hip9090','Hip 90/90','5 respiraciones por posición','4/lado',''),
        ex('thread','Thread the Needle','Rota desde la dorsal','10/lado',''),
        ex('wgs','World&apos;s Greatest Stretch','Mayor transferencia atlética','5/lado',''),
      ])}
      ${sl('Trote opcional — solo si las piernas piden')}
      ${bl('sun','Opcional','Solo si sensaciones son buenas, como el domingo pasado',[ex('run_z2','Trote suave','Mantén el cue de cadencia si trotas','30-40 min','')])}
      ${sl('Cierre de semana')}
      ${bl('act','Recuperación','Descanso activo',[ex('hip9090','Respiración + piernas en la pared','Drenaje y recuperación venosa pasiva','8 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua.'),
      nutriItem('14:00','Comida principal','Gestión de tu nutricionista.'),
      nutriItem('Sesión','Sin pre/post-entreno específico','Movilidad y trote suave opcional no requieren nutrición dirigida.'),
      nutriItem('20:30','Cena','Normal. Comida tranquila antes de cerrar la semana.'),
    ]),
    marcas:()=>marksTable('Cierre de la semana',['Peso corporal (kg)','Sensación general de la semana (1-10)','Rodilla derecha','Codo derecho','Trotaste hoy (sí/no + km + cadencia)']),
    alt:()=>`<div class="alt-intro"><strong>Este día ya es 100% en casa</strong>Movilidad y trote opcional no dependen de ningún equipo.</div>`
  }
};

const CALENDAR=[
  {status:'done',month:'AGO',days:'21',name:'Test Sentadilla + Hip Thrust',desc:'90 kg sentadilla · 140 kg Hip Thrust — completado.',why:'Único RM que faltaba por confirmar. Hecho antes de entrar en el bloque de construcción de carrera.'},
  {status:'pending',month:'SEP',days:'8-13',name:'Test de carrera (5K o 10K)',desc:'Primer test de ritmo sostenido de este bloque.',why:'Antes de esto no hay suficiente volumen acumulado (arrancas de 5-7 km/semana) para que el dato sea fiable — necesitas ~3 semanas de base primero.'},
  {status:'pending',month:'SEP',days:'15-20',name:'Simulacro parcial HYROX #1',desc:'Varias estaciones + transiciones encadenadas, foco en Sandbag Lunges y Burpee BJ.',why:'Punto medio del bloque — mide si el trabajo de estaciones débiles está transfiriendo antes de virar a especificidad total.'},
  {status:'pending',month:'SEP',days:'22-27',name:'Re-test / estimación RM fuerza',desc:'Sentadilla, peso muerto, press banca — último check antes del giro a especificidad.',why:'A partir de aquí (~3 semanas pre-competición) el foco pasa a HYROX puro — es la última ventana útil para medir fuerza sin interferir con el taper.'},
  {status:'pending',month:'OCT',days:'6-11',name:'Simulacro parcial HYROX #2',desc:'Check final de ritmo, transiciones y estaciones a intensidad de carrera.',why:'~10 días antes de Valencia — último dato antes de reducir volumen. Ni tan cerca que comprometa el taper, ni tan lejos que no sirva de ajuste final.'},
];

const PRS=[
  {id:'squat',label:'Sentadilla',val:'90 kg',date:'21 ago 2026'},
  {id:'deadlift',label:'Peso muerto',val:'120 kg',date:'RM confirmado'},
  {id:'bench',label:'Press banca',val:'80 kg',date:'RM confirmado'},
  {id:'power_clean',label:'Power Clean',val:'55 kg',date:'RM confirmado'},
  {id:'pullups',label:'Dominadas',val:'4 reps',date:'RM confirmado'},
  {id:'hip_thrust',label:'Hip Thrust',val:'140 kg',date:'21 ago 2026'},
];