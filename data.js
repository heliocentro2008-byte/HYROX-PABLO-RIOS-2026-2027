/* ============================================================
   DATA.JS — CONTENIDO DE LA SEMANA
   Este es el ÚNICO archivo que cambia cada semana.
   Sustitúyelo entero en GitHub por el nuevo cada vez que
   Claude te entregue una semana nueva. No toques index.html,
   manifest.json ni sw.js — esos no cambian.

   Semana actual: 20-24 agosto 2026 (reinicio, parcial)
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
  jueves:{eyebrow:'Jueves 20 agosto · Lower + Test',title:'LOWER <span>+ TEST</span>',cls:'d-thu',
    pills:['~90 min','Test 1RM sentadilla: 90 kg ✓','RPE variable','Rodilla: sin restricción'],
    entreno:()=>`
      <div class="alert"><strong>Resultado del test — 90 kg</strong>Registrado como tu nuevo PR de sentadilla. Ya no hay ninguna marca de fuerza pendiente de testear.</div>
      ${sl('Calentamiento — 10 min')}
      ${bl('act','Activación','Preparación articular',[
        ex('hip9090','Movilidad cadera + tobillo','Hip circle × 10/lado + dorsiflexión tobillo × 10','1 ronda',''),
        exw('squat','Sentadilla con pausa (peso corporal)','3 seg abajo · activa el patrón antes de la barra','2×8','','Sin cargas todavía'),
      ])}
      ${sl('Test 1RM Sentadilla — completado')}
      ${bl('thu','Test','Resultado final: 90 kg',[
        ordRow(1,'Barra vacía','8 reps técnica'),
        ordRow(2,'Carga ligera','5 reps · RPE 5'),
        ordRow(3,'Carga media','3 reps · RPE 7'),
        ordRow(4,'Carga alta','1 rep · RPE 8'),
        '<div class="ord-row" style="background:var(--thu-light)"><div class="ord-num" style="background:var(--thu)">✓</div><div class="ord-desc"><strong>90 kg — nuevo PR registrado</strong></div><div class="ord-data"></div></div>',
      ])}
      ${sl('Cadena posterior + Glúteo')}
      ${bl('thu','Fuerza','Volumen moderado — CNS ya exigido por el test',[
        ex('hip_thrust','BB Hip Thrust','Pausa 2 seg arriba · glúteo apretado · 140 kg registrados hoy','3×10-12',''),
        ex('rdl','Romanian Deadlift ligero','Bisagra de cadera limpia · carga conservadora hoy','3×10',''),
        ex('plancha','Plancha antirotación','Cadera y hombros alineados','3×30 seg',''),
      ])}
      ${sl('Vuelta a la calma')}
      ${bl('act','Longevidad','Recuperación',[ex('hip9090','Foam roller cuádriceps + glúteo','2 min por pierna','6 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua + un poco de sal si sudas mucho. Nada pesado — tu digestión es lenta.'),
      nutriItem('14:00','Comida principal','La gestiona tu nutricionista. Hoy con test de fuerza, prioriza que no sea copiosa 4h antes del esfuerzo.'),
      nutriItem('17:15-17:30','Pre-entreno (antes del test)','Algo ligero y rápido de digerir: plátano o unos dátiles.'),
      nutriItem('~18:00','Durante','Agua a sorbos entre series.'),
      nutriItem('18:30-19:00','Post-entreno','Proteína + carbohidrato: yogur con fruta o batido con plátano.'),
      nutriItem('20:30','Cena','Ligera, sin prisas — proteína + verdura.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['Sentadilla — 1RM final ✓ 90 kg','BB Hip Thrust ✓ 140 kg','Romanian Deadlift','Sensación general del día','Rodilla derecha']),
    alt:()=>`<div class="alt-intro"><strong>Ya completado en gimnasio</strong>Esta sesión ya se realizó con equipo real. Referencia por si otro jueves no tienes gimnasio disponible:</div>
      ${bl('thu','En casa','Lower + glúteo sin gimnasio',[
        ex('band_hipthrust','Glute Bridge con banda','Banda por encima de rodilla · empuje hacia fuera','4×15',''),
        ex('backpack_lunge','Bulgarian/Reverse Lunge peso corporal','Añade mochila con peso si tienes','3×10/10',''),
        ex('clubbell_mill','Clubbell Swing','Si tienes espacio y técnica cómoda','3×8/lado',''),
        ex('plancha','Plancha antirotación','Igual que en gimnasio','3×30 seg',''),
      ])}`
  },
  viernes:{eyebrow:'Viernes 21 agosto · Carrera',title:'CARRERA <span>Z2</span>',cls:'d-fri',
    pills:['~45 min','Ritmo conversacional','Construcción de volumen','Día después del test — moderado'],
    entreno:()=>`
      <div class="note"><strong>Por qué hoy es suave:</strong> ayer exigiste al máximo el tren inferior con el test (90 kg). Hoy construimos volumen aeróbico, no velocidad.</div>
      ${sl('Calentamiento — 10 min')}
      ${bl('act','Activación','Entrada progresiva',[ex('hip9090','Movilidad tobillo + cadera','Antes de empezar a correr','1 ronda','')])}
      ${sl('Carrera continua')}
      ${bl('fri','Cardio','Base aeróbica',[ex('run_z2','Carrera continua Z2','Ritmo conversacional, sin mirar el reloj obsesivamente','25-30 min','')])}
      ${sl('Economía de carrera')}
      ${bl('fri','Neuromuscular','Progresiones cortas',[ex('strides','Strides','4-6 repeticiones · recuperación completa caminando','4-6×15-20 seg','')])}
      ${sl('Vuelta a la calma')}
      ${bl('act','Longevidad','Cierre',[ex('run_z2','Trote suave + estiramiento','Piernas, gemelos, cadera','5 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua. Sin nada pesado.'),
      nutriItem('14:00','Comida principal','Gestión de tu nutricionista.'),
      nutriItem('17:15','Pre-entreno','Fruta (plátano o manzana) 45 min antes.'),
      nutriItem('~18:00','Durante','Agua si la sesión se alarga.'),
      nutriItem('18:45','Post-entreno','Fruta + puñado de frutos secos, o yogur.'),
      nutriItem('20:30','Cena','Normal, sin ajustes especiales.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['Distancia total','Ritmo medio','Sensación piernas (tras test)','Rodilla derecha']),
    alt:()=>`<div class="alt-intro"><strong>Esta sesión ya es "en casa" por naturaleza</strong>Correr no depende del gimnasio.</div>
      ${bl('fri','En casa','Si no puedes salir a correr',[ex('clubbell_mill','Circuito cardio con clubbell + peso corporal','Jumping jacks, mountain climbers, clubbell swings en circuito','6×3 min','')])}`
  },
  sabado:{eyebrow:'Sábado 22 agosto · Upper + HYROX',title:'UPPER <span>+ HYROX</span>',cls:'d-sat',
    pills:['~90 min','Superserie glúteo','Sandbag + Burpee BJ','2ª sesión de fuerza semana'],
    entreno:()=>`
      ${sl('Calentamiento — 10 min')}
      ${bl('act','Activación','Torácica + escápulas + glúteo',[
        ex('thread','Movilidad torácica','Cat-cow + rotación cuadrupedia','2 rondas',''),
        ex('band_hipthrust','Activación glúteo breve','Puente × 15','1 ronda',''),
      ])}
      ${sl('Fuerza — superserie de eficiencia (upper + glúteo)')}
      ${bl('sat','Fuerza','A1/A2 — combinan grupos no competitivos entre sí',[
        ex('bench','A1 · Press de banca','Escápulas juntas · baja controlado 2 seg','4×8',''),
        ex('hip_thrust','A2 · BB Hip Thrust','Pausa 2 seg arriba · descanso tras A2: 2 min','4×10-12',''),
        ex('remo_db','B1 · DB Row de pie','Torso paralelo al suelo','3×10/10',''),
        ex('abduccion','B2 · Abducción de cadera','Sin rebote · descanso tras B2: 90 seg','3×15',''),
        ex('press_militar','C1 · Press Militar DB','Core activo, sin arquear espalda','3×10',''),
        ex('curl','C2 · DB Biceps Curl','Descanso tras C2: 75 seg','3×12',''),
      ])}
      ${sl('Estaciones HYROX — limitadores + mantenimiento')}
      ${bl('sat','HYROX','Sandbag Lunges y Burpee BJ son tu prioridad — Sled es mantenimiento',[
        exw('sandbag_lunges','Sandbag Lunges','Zancada controlada · torso recto · rodilla no sobrepasa la puntera','3×20m','',''),
        ex('run_transicion','Carrera de transición','Sal ya trotando tras el sandbag','300m',''),
        ex('burpee_bj','Burpee Broad Jump','Ritmo constante, no expl. inicial','3×15m',''),
        ex('run_transicion','Carrera de transición','Recupera el ritmo de carrera rápido','300m',''),
        ex('sled_push','Sled Push (mantenimiento)','Tu mejor estación — no descuides la técnica','2×30m',''),
      ])}
      ${sl('Vuelta a la calma')}
      ${bl('act','Longevidad','Recuperación',[ex('hip9090','Foam roller completo','Cuádriceps, glúteo, isquios','6 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua + desayuno ligero si el horario lo pide.'),
      nutriItem('14:00','Comida principal','Sesión larga (~90 min) e intensa — que no sea excesivamente pesada.'),
      nutriItem('17:00-17:15','Pre-entreno','Plátano + dátiles o tostada pequeña con miel.'),
      nutriItem('~18:00','Durante','Agua constante, sesión de 90 min.'),
      nutriItem('19:30','Post-entreno','Batido + fruta, o yogur griego + avena.'),
      nutriItem('20:30','Cena','Normal, con proteína suficiente.'),
    ]),
    marcas:()=>marksTable('Registro de hoy',['Press banca (kg)','BB Hip Thrust (kg)','Sandbag Lunges (tiempo/sensación)','Burpee BJ (tiempo/sensación)','Sled Push (sensación)','Sensación general']),
    alt:()=>`<div class="alt-intro"><strong>Sin gimnasio ni sled</strong>Sustituye la barra por clubbell + banda y el sled/sandbag por mochila cargada. El Burpee Broad Jump no necesita nada.</div>
      ${bl('sat','En casa','Upper + glúteo sin gimnasio',[
        ex('clubbell_mill','Clubbell press / mill','Sustituye press banca y militar','4×8/lado',''),
        ex('band_hipthrust','Glute Bridge con banda','Sustituye Hip Thrust con barra','4×15',''),
        ex('backpack_lunge','Lunge con mochila cargada','Sustituye Sandbag Lunges','3×10/10',''),
        ex('burpee_bj','Burpee Broad Jump','Igual que en gimnasio, no necesita equipo','3×15m',''),
      ])}`
  },
  domingo:{eyebrow:'Domingo 23 agosto · Recuperación',title:'RECUPERACIÓN <span>+</span>',cls:'d-sun',
    pills:['~35 min','Movilidad profunda','Trote opcional según sensaciones','Cierre de la semana de reinicio'],
    entreno:()=>`
      <div class="note"><strong>Cómo decidir si trotas hoy:</strong> si al despertar notas las piernas frescas y sin fatiga residual del test o de las estaciones de ayer, puedes sumar un trote suave de 15-20 min. Si notas piernas cargadas, quédate solo con la movilidad.</div>
      ${sl('Movilidad profunda — 20 min')}
      ${bl('act','Movilidad','Rango articular',[
        ex('hip9090','Hip 90/90','5 respiraciones por posición','4/lado',''),
        ex('thread','Thread the Needle','Rota desde la dorsal','10/lado',''),
        ex('wgs','World\'s Greatest Stretch','La de mayor transferencia atlética','5/lado',''),
      ])}
      ${sl('Trote opcional — solo si las piernas piden')}
      ${bl('sun','Opcional','Solo si sensaciones son buenas',[ex('run_z2','Trote muy suave','Nada de ritmo objetivo, pura sensación','15-20 min','')])}
      ${sl('Cierre de semana')}
      ${bl('act','Recuperación','Descanso activo',[ex('hip9090','Respiración + piernas en la pared','Drenaje y recuperación venosa pasiva','8 min','')])}
    `,
    nutricion:()=>nutriTrack([
      nutriItem('06:25','Al levantarte','Agua. Día de baja intensidad, sin ajustes especiales.'),
      nutriItem('14:00','Comida principal','Gestión de tu nutricionista.'),
      nutriItem('Sesión','Sin pre/post-entreno específico','Movilidad y trote suave opcional no requieren nutrición dirigida.'),
      nutriItem('20:30','Cena','Normal. Comida tranquila antes de cerrar la semana.'),
    ]),
    marcas:()=>marksTable('Cierre de la semana',['Peso corporal (kg)','Sensación general de la semana (1-10)','Rodilla derecha','Codo derecho','Trotaste hoy (sí/no + km)']),
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