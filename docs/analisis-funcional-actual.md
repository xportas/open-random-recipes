# Análisis funcional actual — Open Random Recipes (AS-IS)

**Fecha del análisis:** 19 de noviembre de 2026.  
**Objeto:** entender el producto existente antes de decidir qué conservar, cambiar, eliminar, completar o investigar.  
**Cobertura inventariada:** 32 funcionalidades, 7 pantallas funcionales, 4 ventanas o paneles relevantes y 15 recorridos.

> Este documento no es una especificación de la futura aplicación. Describe el material actual, incluidas sus limitaciones y contradicciones. Ningún comportamiento descrito se convierte por ello en un requisito que deba conservarse.

## Cómo interpretar las evidencias

Se distinguen los siguientes grados de comprobación:

| Marca | Significado | Qué no demuestra |
|---|---|---|
| **DOC** | Objetivo o comportamiento declarado en la documentación del producto. | Que esté implementado o funcione. |
| **REV** | Comportamiento reconstruido siguiendo las acciones y sus consecuencias en el material revisado. | Que la interacción funcione en un navegador o en una instalación concreta. |
| **AIS** | Regla o acción ejercitada de forma aislada, en memoria, con datos del catálogo y, cuando se indica, situaciones de prueba. | Que funcione el recorrido completo, la presentación, los gestos, la conservación real o la conexión con una sesión real. |
| **CAP** | Elemento observado en las capturas incluidas en el proyecto. Son capturas anteriores, sin fecha de vigencia acreditada. | Que la aplicación actual siga mostrando exactamente esa presentación. |
| **INF** | Inferencia razonada, no hecho confirmado del producto. | Que exista una decisión de negocio detrás de ella. |
| **PEND** | Comprobación pendiente. | No significa que la funcionalidad esté rota. |

**No se ha realizado una exploración interactiva de esta aplicación en un navegador.** Se han efectuado 36 comprobaciones aisladas, detalladas en la sección 10. La navegación y la presentación actuales se han reconstruido, no certificado mediante uso directo.

En el inventario, **«Disponible y funcional — AIS» se limita a la regla o acción ejercitada en memoria**. No califica como probado el recorrido visual. Para controles o interacciones no ejercitados se utiliza «No verificable con el entorno disponible», aunque exista una entrada claramente identificada en la experiencia descrita.

Las referencias técnicas y la identificación exacta de la revisión se concentran al final, en el anexo. Se conserva el salto de numeración de la estructura solicitada: de la sección 2 a la 4.

### Índice de consulta

- [1. Resumen del producto](#1-resumen-del-producto)
- [2. Inventario de funcionalidades](#2-inventario-completo-de-funcionalidades)
- [4. Mapa de pantallas y navegación](#4-mapa-de-pantallas-y-navegación)
- [5. Desglose de pantallas y controles](#5-desglose-exhaustivo-de-cada-pantalla)
- [6. Recorridos de uso](#6-recorridos-principales-de-uso)
- [7. Reglas transversales](#7-reglas-y-comportamientos-transversales)
- [8. Hallazgos e incertidumbres](#8-funcionalidades-dudosas-incompletas-o-abandonadas)
- [9. Preguntas y decisiones pendientes](#9-decisiones-y-preguntas-para-la-futura-reconstrucción)
- [10. Cobertura y límites](#10-cobertura-y-límites-del-análisis)
- [Anexo de trazabilidad](#anexo-breve-de-trazabilidad-técnica)

## 1. Resumen del producto

### 1.1. Qué es y qué pretende resolver

Open Random Recipes es una aplicación web para consultar un recetario, proponer comidas para varios días y preparar una lista de la compra a partir de esas propuestas o de recetas concretas.

**Objetivos expresamente documentados — DOC:**

- Gestionar recetas, generar menús semanales aleatorios y obtener la lista de la compra.
- Organizar los ingredientes por secciones de supermercado.
- Ofrecer una experiencia sencilla y privada.
- Permitir ajustes de apariencia, idioma y días de entrenamiento.

La palabra «gestionar» debe interpretarse con cautela: **la experiencia actual permite consultar y marcar recetas como favoritas, pero no crearlas, editarlas o eliminarlas desde la aplicación**. La documentación describe su mantenimiento fuera de la experiencia de uso.

**Objetivo deducido — INF:** reducir la decisión cotidiana de qué cocinar y evitar elaborar manualmente una lista de ingredientes. El calendario de actividades parece intentar adaptar parte de la planificación al entrenamiento.

No se ha encontrado una definición formal del problema, una descripción validada del público objetivo ni una garantía nutricional. Los textos que hablan de criterios de nutricionista son declaraciones visibles, no una acreditación de que el menú cumpla todas esas normas.

### 1.2. Para quién sirve actualmente

- Hay una única puerta de acceso mediante contraseña, sin nombre de usuario.
- No se han identificado perfiles con permisos diferentes, altas de cuentas, administración desde la interfaz ni selección de una persona activa.
- Los ajustes contienen dos personas con nombres fijos: **Xabier** y **Maider**. Se puede indicar gimnasio y baloncesto para Xabier, y gimnasio para Maider.
- Estos nombres **no constituyen cuentas ni roles**. Son referencias de un calendario compartido dentro de la experiencia de ese navegador.

**INF:** la personalización sugiere un uso doméstico o personal concreto. No permite afirmar que el producto esté pensado exclusivamente para una pareja, una familia, deportistas o pacientes de un profesional.

### 1.3. Alcance funcional actual

La experiencia reconstruida incluye:

- Acceso por contraseña y sesión temporal.
- Inicio con accesos a planificación y recetario.
- Catálogo de **38 recetas** con búsqueda por nombre, filtros y favoritas.
- Detalle con ingredientes seleccionables, alternativas de ingredientes y preparación cuando existe.
- Menú desde el día actual, inicialmente de siete días, ampliable por semanas.
- Generación de un día, completado de días vacíos, sustitución y selección manual de comidas.
- Consulta de normas informativas y de actividades de entrenamiento.
- Copia del menú como texto.
- Lista de la compra generada desde el menú o ampliada desde recetas.
- Agrupación y acumulación de ingredientes, marcado de productos y copia de pendientes.
- Preferencia clara u oscura y conservación local de parte del trabajo.

**Capacidades expuestas pero no completas:** selección de idioma sin traducción y recuperación de contraseña sin una acción asociada.

### 1.4. Qué no ofrece la experiencia revisada

No se ha encontrado un recorrido de uso para:

- Crear, editar, importar, publicar o borrar recetas del catálogo.
- Cambiar el número de comensales o recalcular cantidades por ración.
- Introducir ingredientes de compra como texto libre, editar sus cantidades o borrar una sola fila de compra.
- Configurar alergias, intolerancias, dietas, calorías, objetivos nutricionales o presupuesto.
- Elegir una fecha inicial, gestionar menús históricos o guardar varias planificaciones con nombre.
- Sincronizar el trabajo entre dispositivos, compartir una lista colaborativa o recuperar datos mediante una cuenta.
- Comprar productos, enviarlos a un supermercado o efectuar pagos.
- Cerrar sesión, cambiar la contraseña o completar una recuperación de acceso desde la interfaz.
- Traducir realmente la interfaz a gallego o euskera.

Esta ausencia se refiere a la experiencia revisada, no a capacidades hipotéticas de una instalación externa.

## 2. Inventario completo de funcionalidades

### 2.1. Convenciones comunes

**Persona con acceso** significa cualquier persona que ha superado la contraseña común. No implica un rol adicional.

Salvo el acceso y la recuperación de contraseña, las entradas normales están dentro de una sesión. Las variantes de entrada directa se documentan en las secciones 4 y 5: no deben confundirse con pantallas distintas ni con recorridos completos.

La conservación compartida se describe una sola vez en **F-030**; las funcionalidades que modifican datos la referencian. Los datos y las preferencias no se han comprobado en un navegador real.

### F-001 — Acceso mediante contraseña y sesión

- **Qué permite y para quién:** entrar en la aplicación con la contraseña configurada; no identifica a una persona individual.
- **Acceso y condiciones:** P-001 al abrir la aplicación sin una sesión válida. Requiere que el acceso y la sesión estén correctamente configurados.
- **Información y comportamiento:** se introduce una contraseña obligatoria, oculta inicialmente; el icono del ojo alterna su visibilidad. «Entrar» inicia la comprobación.
- **Resultado:** si se acepta, el destino es el inicio P-002, no necesariamente la pantalla que se intentó abrir. La sesión tiene una duración prevista de 24 horas.
- **Reglas y alternativas:** durante la comprobación se deshabilitan el campo y el envío. Hay respuestas para contraseña vacía, incorrecta y falta de configuración de la contraseña. Una sesión válida evita volver a mostrar el acceso.
- **Límites:** no hay selección de cuenta, cierre de sesión ni renovación por actividad identificada. La caducidad no provoca necesariamente una salida mientras se cambia entre secciones ya abiertas.
- **Pantallas:** P-001 y, como condición de entrada, P-002 a P-007.
- **Estado y verificación:** **Condicionada por permisos, configuración o contexto.** REV y AIS, T-031 a T-034, con credenciales ficticias y destino de sesión simulado. PEND: acceso real, mensajes ante fallos inesperados y caducidad durante el uso.

### F-002 — Navegación general y apertura de ajustes

- **Qué permite y para quién:** una persona con acceso puede alternar inicio, recetas, menú y compra; también abrir ajustes y regresar a la sección anterior.
- **Acceso y condiciones:** barra inferior y control de ajustes de la cabecera de la experiencia principal.
- **Información y comportamiento:** cuatro iconos identifican las secciones. El control de ajustes se convierte en una cruz al abrir P-007; la sección anterior conserva su indicación en la barra.
- **Resultado:** cambia el contenido central. El logotipo no tiene navegación asociada.
- **Reglas y alternativas:** pulsar la sección actual no hace nada adicional. Los cambios normales de sección no proporcionan direcciones diferentes ni un historial de pestañas.
- **Límites:** salir del catálogo o del detalle puede perder filtros, búsqueda y selecciones transitorias. Recargar la entrada principal vuelve a inicio, aunque continúe el trabajo guardado mediante F-030.
- **Pantallas:** P-002 a P-007.
- **Estado y verificación:** **No verificable con el entorno disponible.** REV y CAP acreditan el diseño de navegación, no su funcionamiento actual por ratón, teclado o tacto.

### F-003 — Consulta del catálogo de recetas

- **Qué permite y para quién:** consultar las recetas incluidas; disponible para la persona con acceso, sin necesidad de generar un menú.
- **Acceso y condiciones:** «Explorar Recetas» en P-002 o icono de recetario de la barra.
- **Información y comportamiento:** presenta fotografía, nombre e ingredientes, con los opcionales diferenciados. Hay 38 recetas; los nombres se agrupan por inicial.
- **Resultado:** se obtiene una lista desde la que abrir el detalle, ampliar una foto o marcar favoritas.
- **Reglas y alternativas:** se ordenan las letras de los grupos, pero no se aplica una ordenación alfabética completa dentro de cada grupo. No hay paginación ni control para ordenar de otra manera.
- **Estados:** contempla espera por imágenes y ausencia de coincidencias; un fallo de fotografía cuenta como imagen terminada, sin una sustitución específica identificada.
- **Pantallas:** P-003; enlaza con P-004 y D-001.
- **Estado y verificación:** **No verificable con el entorno disponible.** REV, CAP y recuento completo del catálogo. PEND: carga real de las fotografías y comportamiento visual del indicador.

### F-004 — Búsqueda por nombre de receta

- **Qué permite y para quién:** localizar recetas por una parte de su nombre.
- **Acceso y condiciones:** campo «Buscar recetas...» de P-003; no requiere enviar un formulario.
- **Información y comportamiento:** el texto escrito filtra las recetas mientras se modifica y se combina con el filtro activo de F-005.
- **Resultado:** permanecen las recetas cuyo nombre contiene el texto; si no hay coincidencias, aparece «No se encontraron recetas».
- **Reglas y alternativas:** no distingue mayúsculas, pero sí acentos. No busca por ingredientes ni instrucciones. Los espacios añadidos al principio o al final no se eliminan del texto de comparación; una búsqueda de solo espacios no restringe resultados.
- **Salida:** al volver del detalle dentro del catálogo se mantiene la búsqueda; al abandonar la sección no se conserva como preferencia.
- **Pantallas:** P-003.
- **Estado y verificación:** **No verificable con el entorno disponible** como interacción. REV y reproducción aislada del criterio en T-017; no se ha escrito en el campo real.

### F-005 — Filtro por momento de comida o favoritas

- **Qué permite y para quién:** reducir el catálogo según cuándo se usa una receta o según las favoritas de la persona.
- **Acceso y condiciones:** opciones «Todas», «Desayuno», «Comida», «Cena», «Merienda» y «Favoritas» de P-003.
- **Información y comportamiento:** se elige una sola opción; inicialmente «Todas». Una receta puede pertenecer a varios momentos.
- **Resultado:** cambia la lista y la opción destacada. El texto de F-004 sigue aplicándose.
- **Reglas y alternativas:** «Favoritas» es una opción alternativa a los momentos; no existe una combinación específica de «favoritas de cena». No se aplican aquí las restricciones de calendario del menú.
- **Sin datos:** no tener favoritas o no tener coincidencias produce el mismo mensaje general de ausencia de recetas.
- **Pantallas:** P-003.
- **Estado y verificación:** **No verificable con el entorno disponible.** REV y CAP parcial; las capturas no muestran necesariamente todas las opciones actuales.

### F-006 — Marcar y desmarcar favoritas

- **Qué permite y para quién:** guardar una selección personal de recetas para encontrarlas con F-005.
- **Acceso y condiciones:** corazón de cada tarjeta en P-003.
- **Información y comportamiento:** cada pulsación alterna la pertenencia de esa receta a favoritas.
- **Resultado:** cambia el aspecto del corazón y, si está activo «Favoritas», cambia la lista. Se intenta conservar mediante F-030.
- **Reglas y alternativas:** marcar una favorita no abre su detalle. No hay una acción equivalente en el detalle ni una prioridad de estas recetas en la generación de menús.
- **Errores:** si no se puede conservar la selección, no se comunica un aviso específico.
- **Pantallas:** P-003.
- **Estado y verificación:** **No verificable con el entorno disponible.** REV y CAP del control; PEND: conservación y actualización visual reales.

### F-007 — Consultar el detalle y la preparación de una receta

- **Qué permite y para quién:** conocer ingredientes, porciones declaradas, preparación, momentos de uso y restricciones de una receta.
- **Acceso y condiciones:** nombre de la receta en P-003 o de una comida asignada en P-005. Es necesario que la receta siga existiendo en el catálogo.
- **Información y comportamiento:** muestra P-004 con fotografía, nombre, resumen, ingredientes, preparación e información adicional. Desde el menú intenta reflejar las opciones concretas asignadas a esa comida.
- **Resultado:** «Volver» regresa al origen interno. La selección de ingredientes se utiliza para F-009 y F-010, no para editar el catálogo o el menú.
- **Reglas y alternativas:** las instrucciones pueden aparecer como párrafo o pasos numerados. Sus números no son controles de progreso. Catorce recetas carecen de preparación y muestran «Instrucciones no disponibles».
- **Sin contexto:** una entrada directa al detalle sin receta solo muestra una invitación a seleccionar una, sin selector propio.
- **Pantallas:** P-004, desde P-003 o P-005.
- **Estado y verificación:** **Disponible, pero parcialmente implementada** en cuanto a la información ofrecida; interfaz PEND. REV, catálogo completo y AIS del tratamiento de instrucciones en T-036.

### F-008 — Ampliar fotografías

- **Qué permite y para quién:** ver una fotografía más grande sin abandonar la pantalla de origen.
- **Acceso y condiciones:** miniatura del catálogo o del menú. También hay una acción prevista en la fotografía del detalle, cuya posibilidad real de pulsación es dudosa.
- **Información y comportamiento:** recibe la imagen elegida y abre D-001 sobre el contenido.
- **Resultado:** la fotografía se adapta al espacio disponible. Pulsar fuera o usar Escape cierra la vista; pulsar la propia foto no la cierra.
- **Reglas y alternativas:** no se ha identificado una galería, navegación entre imágenes ni controles propios de aumento progresivo. No hay una cruz visible de cierre.
- **Límite específico:** la presentación del detalle podría interceptar la pulsación de su imagen; véase H-017.
- **Pantallas:** P-003, P-004 y P-005; D-001 compartida.
- **Estado y verificación:** **No verificable con el entorno disponible.** REV; PEND: apertura desde cada origen, cierre, animaciones y uso táctil.

### F-009 — Seleccionar ingredientes para añadirlos a la compra

- **Qué permite y para quién:** decidir qué ingredientes de una receta se añadirán a la lista sin generar un menú.
- **Acceso y condiciones:** sección «Ingredientes» de P-004.
- **Información y comportamiento:** se marcan ingredientes simples y se elige una alternativa por grupo. Los ingredientes opcionales se identifican como tales.
- **Valores iniciales:** desde el catálogo no hay una selección inicial general. Desde el menú se intenta reflejar lo resuelto para esa comida.
- **Resultado:** la selección queda preparada para F-010. No cambia la receta ni la comida del menú.
- **Reglas y alternativas:** se pueden dejar sin marcar ingredientes declarados necesarios. Una alternativa opcional puede desmarcarse pulsándola otra vez; una necesaria no se desmarca de ese modo después de seleccionarla. No se ajustan cantidades ni porciones.
- **Salida:** la selección no se conserva al salir del detalle; no hay aviso por cambios sin guardar.
- **Pantallas:** P-004.
- **Estado y verificación:** **No verificable con el entorno disponible.** REV; PEND: selección real, precarga desde el menú y comportamiento de los grupos opcionales.

### F-010 — Añadir ingredientes de una receta a la compra

- **Qué permite y para quién:** incorporar la selección de F-009 a una lista nueva o existente.
- **Acceso y condiciones:** «Anadir a la lista» en P-004; requiere alguna selección para producir un cambio.
- **Información y comportamiento:** utiliza los ingredientes marcados y sus cantidades originales. Añade los nuevos y acumula los que coinciden en nombre y sección.
- **Resultado:** cambia temporalmente a «Anadido a la lista». No abre P-006 automáticamente. Intenta conservar el resultado mediante F-030.
- **Reglas y alternativas:** pulsar sin selección no produce confirmación. Pulsar varias veces con una selección vuelve a añadir sus cantidades; no hay protección contra duplicación de la aportación.
- **Excepciones:** no aplica las mismas exclusiones que F-022. Si un producto coincidente estaba tachado, sigue tachado después de recibir más cantidad.
- **Pantallas:** P-004; resultado consultable en P-006.
- **Estado y verificación:** **Disponible y funcional — AIS** para incorporación y acumulación; interfaz PEND. REV, T-023 y T-024.

### F-011 — Generar un menú inicial de siete días

- **Qué permite y para quién:** obtener propuestas de desayuno, comida, merienda y cena para siete días.
- **Acceso y condiciones:** «Generar Menu Semanal» en P-005 cuando no existe menú.
- **Información y comportamiento:** utiliza el catálogo y los días de gimnasio de Xabier; no solicita fecha, dieta, presupuesto, comensales ni una selección de favoritas.
- **Resultado:** crea siete días desde el día actual, no desde el lunes. Resuelve alternativas de ingredientes y decide aleatoriamente la inclusión de los opcionales.
- **Reglas y alternativas:** aplica las reglas reconstruidas en 7.3, con relajación de algunas restricciones. Si no hay candidato admisible, puede dejar un hueco sin asignar.
- **Conservación:** F-030. No se genera la compra automáticamente.
- **Pantallas:** P-005; detalle en P-004.
- **Estado y verificación:** **Disponible y funcional — AIS** para la generación. REV, T-001, T-003 a T-006, T-010, T-012 y T-015; presentación y recorrido completo PEND.

### F-012 — Generar únicamente un día vacío

- **Qué permite y para quién:** empezar o ampliar parcialmente la planificación sin generar todos los días.
- **Acceso y condiciones:** «Generar este día» en una tarjeta de día todavía no generado de P-005.
- **Información y comportamiento:** se selecciona el día mediante su tarjeta. No se cambian sus fechas ni se piden más datos.
- **Resultado:** propone hasta cuatro comidas en ese día. Si era la primera acción de planificación, los otros seis días continúan vacíos.
- **Reglas y alternativas:** se tienen en cuenta las comidas de los días vecinos y la actividad pertinente. Se considera éxito si consigue asignar al menos una comida, no necesariamente las cuatro.
- **Error:** si no consigue asignar ninguna, mantiene el menú anterior y solicita mostrar un aviso de falta de recetas compatibles.
- **Pantallas:** P-005.
- **Estado y verificación:** **Disponible y funcional — AIS** para creación del día y respuesta de falta de candidatos. REV, T-015 y T-022; botón y aviso PEND.

### F-013 — Completar días sin ninguna comida

- **Qué permite y para quién:** rellenar los días que siguen completamente vacíos conservando los que ya tienen alguna propuesta.
- **Acceso y condiciones:** botón principal «Completar semana» cuando existen días con alguna comida y otros sin ninguna. Si se han vaciado todos los días de un menú existente, la misma operación se presenta como «Regenerar Menu».
- **Información y comportamiento:** no solicita datos nuevos. Puede actuar sobre más de una semana.
- **Resultado:** conserva los días considerados generados y propone comidas para los restantes.
- **Regla decisiva:** **un día con una sola comida ya cuenta como generado**. No completa sus otros huecos. La expresión «Completar semana» no equivale a rellenar todas las comidas ausentes.
- **Alternativas:** para un hueco de un día parcialmente ocupado se usan F-016 o F-017. No hay un resumen de qué huecos han quedado sin resolver.
- **Pantallas:** P-005.
- **Estado y verificación:** **Disponible y funcional — AIS**, con el alcance limitado descrito. REV, T-008 y T-021. La adecuación de la etiqueta necesita validación, no se da por requisito.

### F-014 — Regenerar la planificación

- **Qué permite y para quién:** sustituir una planificación cuyos días cuentan todos como generados.
- **Acceso y condiciones:** «Regenerar Menu» en P-005.
- **Información y comportamiento:** utiliza de nuevo el catálogo y la configuración pertinente, sin pedir confirmación.
- **Resultado:** sustituye lo anterior por **siete días desde la fecha actual**. Si había varias semanas, no mantiene su número.
- **Reglas y alternativas:** los huecos individuales no impiden este modo si todos los días tienen alguna comida. Si hay días enteramente vacíos, el mismo botón puede actuar como F-013 en vez de regenerar.
- **Efectos relacionados:** no actualiza ni vacía automáticamente la compra existente. Conservación según F-030; no hay deshacer identificado.
- **Pantallas:** P-005.
- **Estado y verificación:** **Disponible y funcional — AIS** para sustitución, incluido el paso de catorce a siete días. REV, T-019 y T-020; interacción PEND.

### F-015 — Añadir una semana

- **Qué permite y para quién:** ampliar la planificación siete días más.
- **Acceso y condiciones:** iconos de calendario con añadido en la cabecera y después de las semanas cuando existe menú.
- **Información y comportamiento:** se pulsa cualquiera de los dos controles equivalentes; no solicita cuántas semanas añadir ni una fecha.
- **Resultado:** mantiene los días existentes y añade siete consecutivos después del último guardado.
- **Reglas y alternativas:** los dos controles realizan la misma acción. No se ha identificado un máximo funcional explícito ni la eliminación de una sola semana.
- **Efectos relacionados:** no amplía automáticamente la compra. F-030 conserva el menú ampliado.
- **Pantallas:** P-005.
- **Estado y verificación:** **Disponible y funcional — AIS** para la ampliación. REV, T-002 y T-019; presentación de muchas semanas y límites prácticos PEND.

### F-016 — Proponer otra receta para una comida o rellenar su hueco

- **Qué permite y para quién:** sustituir una comida asignada o intentar rellenar una comida sin receta.
- **Acceso y condiciones:** «Otra» entre las acciones de una comida; icono de recarga de un hueco; recarga de un día previamente vaciado.
- **Información y comportamiento:** identifica día y momento; aplica las reglas de generación pertinentes.
- **Resultado:** cambia la comida y sus ingredientes resueltos, o mantiene lo anterior si no consigue candidato.
- **Reglas y alternativas:** intenta evitar la receta actual, pero no existe una garantía absoluta de resultado distinto en la regla de escasez ensayada con un catálogo reducido. La selección manual estricta puede ofrecer menos opciones que esta propuesta aleatoria.
- **Error:** solicita un aviso de falta de recetas compatibles. No actualiza la compra.
- **Pantallas:** P-005.
- **Estado y verificación:** **Disponible y funcional — AIS** para sustitución y respuesta sin candidatos. REV, T-007 y T-009; gestos y notificación PEND. El caso de repetición no se ha acreditado con las 38 recetas actuales.

### F-017 — Elegir una receta y personalizar sus ingredientes en el menú

- **Qué permite y para quién:** reemplazar o rellenar una comida con una receta elegida explícitamente.
- **Acceso y condiciones:** «Elegir» de una comida o icono de lista de un hueco; abre D-003 en P-005.
- **Información y comportamiento:** inicialmente ofrece recetas del momento que cumplen el criterio estricto. Se puede desactivar «Solo las que cumplen las normas». Si la receta permite opciones o ingredientes opcionales, se abre un segundo paso.
- **Valores iniciales:** el filtro de cumplimiento está activado; en personalización se preselecciona la primera alternativa de cada grupo y se incluyen los opcionales.
- **Resultado:** una receta sin personalización se aplica al pulsarla; una configurable requiere «Añadir al menú». Sustituye solo esa comida y cierra el panel.
- **Reglas y alternativas:** desactivar el filtro mantiene el momento de comida, pero permite saltarse restricciones de calendario, repetición y gimnasio. No hay búsqueda en este panel ni advertencia posterior por la excepción.
- **Cancelación:** cerrar antes de aplicar no cambia el menú; las selecciones no se guardan como borrador. No se modifica el catálogo ni se actualiza la compra.
- **Pantallas:** P-005, D-003 con dos pasos.
- **Estado y verificación:** **No verificable con el entorno disponible** como recorrido de selección. REV; AIS de las listas y aplicación de elecciones en T-003, T-007, T-010 y T-016.

### F-018 — Quitar una comida o las comidas de un día

- **Qué permite y para quién:** dejar huecos sin receta conservando las fechas.
- **Acceso y condiciones:** «Quitar» en las acciones de una comida; papelera de un día que contiene comidas.
- **Información y comportamiento:** elimina la asignación individual o todas las asignaciones existentes de ese día.
- **Resultado:** quedan huecos con acciones para elegir o regenerar. Un día vaciado de este modo conserva sus cuatro posiciones.
- **Reglas y alternativas:** no hay confirmación ni deshacer. Quitar todo un día no equivale a eliminar ese día del calendario.
- **Efectos relacionados:** la compra existente no se reduce; conservación mediante F-030.
- **Pantallas:** P-005.
- **Estado y verificación:** **Disponible y funcional — AIS** para retirada y conservación del resto. REV, T-009 y T-021; acciones táctiles y retirada múltiple desde el control visual PEND.

### F-019 — Vaciar todo el menú

- **Qué permite y para quién:** retirar la planificación guardada y volver al estado inicial.
- **Acceso y condiciones:** papelera de la cabecera de P-005 cuando existe menú.
- **Información y comportamiento:** no pide datos ni confirmación.
- **Resultado:** desaparece el menú guardado y vuelven a mostrarse siete días de referencia desde la fecha actual, sin comidas.
- **Reglas y alternativas:** no conserva un historial ni ofrece deshacer. No elimina la lista de la compra ni las actividades.
- **Conservación:** elimina el menú del trabajo que intenta conservar F-030.
- **Pantallas:** P-005.
- **Estado y verificación:** **Disponible y funcional — AIS** para vaciado e independencia respecto de la compra. REV, T-022 y T-026; control visual PEND.

### F-020 — Consultar las normas informativas de generación

- **Qué permite y para quién:** leer las normas presentadas sobre descanso, gimnasio y baloncesto.
- **Acceso y condiciones:** «Ver normas de generacion», incluso sin menú.
- **Información y comportamiento:** abre D-002 con tres bloques informativos y una atribución a criterios de nutricionista.
- **Resultado:** únicamente muestra información. No configura ni activa reglas.
- **Reglas y alternativas:** cierre mediante cruz o fondo. No se ha identificado cierre por Escape ni por arrastre.
- **Límite:** las afirmaciones de esa ayuda no equivalen a las reglas realmente utilizadas; véanse 7.3 y H-003.
- **Pantallas:** P-005 y D-002.
- **Estado y verificación:** **No verificable con el entorno disponible** como apertura de panel. REV del contenido; el cumplimiento de todo lo anunciado **no está confirmado y presenta contradicciones**.

### F-021 — Copiar el menú como texto

- **Qué permite y para quién:** obtener texto para pegarlo posteriormente fuera de la aplicación.
- **Acceso y condiciones:** «Copiar Menú» cuando existe planificación; requiere que el entorno permita copiar.
- **Información y comportamiento:** prepara el periodo, fechas, días, momentos asignados, nombres e ingredientes resueltos.
- **Resultado:** si la copia se acepta, cambia temporalmente a «Menú Copiado».
- **Reglas y alternativas:** incluye todas las semanas; omite las comidas vacías. No incluye cantidades, porciones ni pasos de preparación. No envía ni comparte nada automáticamente.
- **Error:** si la copia falla, no muestra una explicación específica.
- **Pantallas:** P-005.
- **Estado y verificación:** **Condicionada por permisos, configuración o contexto.** REV y AIS del texto en T-035. Copia real y pegado PEND.

### F-022 — Generar la compra desde el menú

- **Qué permite y para quién:** obtener una lista de ingredientes de todas las comidas planificadas.
- **Acceso y condiciones:** «Generar Lista de la Compra» cuando existe menú, aunque sea parcial.
- **Información y comportamiento:** reúne los ingredientes ya resueltos; acumula por nombre y sección. Omite agua y determinados extras genéricos.
- **Resultado:** **sustituye la lista anterior y reinicia sus marcas**. El botón muestra temporalmente «Lista Generada», pero no abre la compra.
- **Reglas y alternativas:** utiliza cantidades originales, sin ajustar por comensales ni porciones. Incluye todas las semanas. Una generación posterior no conserva aportaciones ajenas al menú.
- **Errores y límites:** no pide confirmación de sustitución ni comprueba mediante un aviso la conservación real. No mantiene una relación de actualización automática posterior.
- **Pantallas:** acción en P-005; resultado en P-006.
- **Estado y verificación:** **Disponible y funcional — AIS** para extracción, acumulación y sustitución. REV, T-011 a T-013 y T-025; botón, aviso y conservación real PEND.

### F-023 — Consultar la compra agrupada y sus cantidades

- **Qué permite y para quién:** revisar los productos pendientes o tachados de la lista actual.
- **Acceso y condiciones:** icono de cesta; no necesita que siga existiendo un menú.
- **Información y comportamiento:** muestra secciones de supermercado por orden alfabético y sus productos con cantidad cuando se conoce.
- **Resultado:** una única lista reúne aportaciones del menú y de recetas hasta la siguiente sustitución o vaciado.
- **Reglas y alternativas:** conserva unidades diferentes sin convertirlas. Una parte de cantidad desconocida puede expresarse con «+» o «+ extra». No hay edición de filas, ordenación elegible, buscador, filtros o paginación.
- **Sin datos:** ilustra una cesta vacía y ofrece ir a menú o recetas. Tener todos los productos tachados no es una lista vacía.
- **Pantallas:** P-006.
- **Estado y verificación:** **Disponible y funcional — AIS** para agrupación y cálculo de etiquetas; presentación PEND. REV, CAP y T-011 a T-014.

### F-024 — Marcar y desmarcar productos de compra

- **Qué permite y para quién:** distinguir lo que ya se tiene o se ha comprado.
- **Acceso y condiciones:** casilla o fila de cada producto de P-006.
- **Información y comportamiento:** alterna la marca de ese producto.
- **Resultado:** el producto permanece en su sección, pero aparece tachado y atenuado; F-025 deja de incluirlo mientras esté marcado.
- **Reglas y alternativas:** se puede desmarcar. No se elimina, reordena ni mueve a una sección completada. No hay acción para marcar todos.
- **Conservación:** F-030 intenta guardar las marcas. F-022 las reinicia; añadir más cantidad mediante F-010 no las reinicia.
- **Pantallas:** P-006.
- **Estado y verificación:** **Disponible y funcional — AIS** para alternancia y sus efectos; aspecto PEND. REV, CAP, T-014, T-024 y T-025.

### F-025 — Copiar los productos pendientes

- **Qué permite y para quién:** preparar un texto de compra excluyendo lo tachado.
- **Acceso y condiciones:** «Copiar Lista» cuando hay al menos un producto; requiere permiso o disponibilidad de copia.
- **Información y comportamiento:** agrupa los pendientes por sección e incluye las cantidades conocidas.
- **Resultado:** tras una copia aceptada muestra «Copiado» durante aproximadamente dos segundos.
- **Reglas y alternativas:** con todos los productos tachados prepara un texto vacío, aunque el botón sigue presente. No ofrece copiar también los tachados.
- **Error:** no se ha identificado un mensaje específico ni una alternativa manual si la copia es rechazada.
- **Pantallas:** P-006.
- **Estado y verificación:** **Condicionada por permisos, configuración o contexto.** REV y AIS de contenido y exclusiones, T-014. Portapapeles real y error visual PEND.

### F-026 — Vaciar la lista de la compra

- **Qué permite y para quién:** empezar de nuevo con una lista sin productos.
- **Acceso y condiciones:** «Vaciar Lista» cuando la lista contiene filas.
- **Información y comportamiento:** no pide selección ni confirmación.
- **Resultado:** muestra el estado «Tu lista está vacía».
- **Reglas y alternativas:** no hay deshacer ni recuperación desde la interfaz. No vacía el menú: se puede volver a generar la compra desde él.
- **Conservación:** F-030 deja de conservar esa lista.
- **Pantallas:** P-006.
- **Estado y verificación:** **Disponible y funcional — AIS** para vaciado independiente. REV, T-026; control visual PEND.

### F-027 — Consultar la ayuda de la compra

- **Qué permite y para quién:** comprender el significado de tachar y el alcance de copiar.
- **Acceso y condiciones:** «Como funciona la lista», con o sin productos.
- **Información y comportamiento:** abre D-004 con dos consejos: tachar lo que ya se tiene y copiar solo lo pendiente.
- **Resultado:** no modifica productos ni marcas.
- **Reglas y alternativas:** cierre por cruz o fondo; no se ha identificado cierre por Escape o por arrastre. No explica la sustitución de lista de F-022.
- **Pantallas:** P-006 y D-004.
- **Estado y verificación:** **No verificable con el entorno disponible** como interacción. REV del contenido; T-014 respalda la regla de copia que explica.

### F-028 — Configurar entrenamientos y consultar sus indicadores

- **Qué permite y para quién:** indicar los días semanales de las tres actividades previstas para las dos personas nombradas.
- **Acceso y condiciones:** «Entrenamiento» en P-007; indicadores de actividad en cada día de P-005.
- **Información y comportamiento:** cada actividad ofrece lunes a domingo como selección independiente; inicialmente no hay días marcados.
- **Resultado:** actualiza el calendario de actividades y los indicadores del menú; intenta conservarlo mediante F-030.
- **Reglas y alternativas:** se puede marcar cualquier combinación. No se cambian personas, nombres o tipos de actividad. No se impide gimnasio y baloncesto el mismo día.
- **Límite:** solo el gimnasio de Xabier interviene en la generación revisada, restringiendo meriendas. Los cambios de actividad no rehacen automáticamente comidas ya asignadas.
- **Pantallas:** P-007 y P-005.
- **Estado y verificación:** **Disponible, pero parcialmente implementada** respecto del alcance anunciado. REV y AIS de configuración e información utilizada, T-004 y T-029; indicadores visuales PEND.

### F-029 — Cambiar apariencia clara u oscura

- **Qué permite y para quién:** elegir uno de los dos modos de apariencia.
- **Acceso y condiciones:** «Apariencia» en P-007.
- **Información y comportamiento:** «Claro» u «Oscuro»; el valor inicial previsto es claro, salvo preferencia guardada.
- **Resultado:** aplica la preferencia al conjunto de la experiencia e intenta conservarla con F-030.
- **Reglas y alternativas:** no hay elección automática según el dispositivo ni botón de guardar. El acceso también puede recibir una preferencia anterior.
- **Límites:** no se ha comprobado contraste, legibilidad ni consistencia de todas las pantallas en oscuro.
- **Pantallas:** P-007; efecto transversal.
- **Estado y verificación:** **No verificable con el entorno disponible** en su aspecto real. REV y AIS de preferencia con presentación simulada, T-030.

### F-030 — Conservar trabajo y preferencias en el navegador

- **Qué permite y para quién:** volver a encontrar menú, compra, marcas, favoritas, actividades y tema en el mismo navegador cuando su conservación está permitida.
- **Acceso y condiciones:** comportamiento automático de las funcionalidades relacionadas; no hay pantalla de guardado.
- **Información y comportamiento:** intenta conservar cada cambio sin solicitar «Guardar».
- **Resultado:** el trabajo puede seguir disponible al regresar, independientemente de que la sesión de acceso haya caducado.
- **Reglas y alternativas:** no está vinculado a una cuenta individual ni hay sincronización identificada entre dispositivos o pestañas ya abiertas. Borrar datos del navegador puede eliminarlo.
- **No conservado:** sección abierta, búsqueda y filtro del catálogo, receta abierta, selecciones transitorias del detalle o selector, idioma elegido y avisos temporales.
- **Errores:** muchos problemas de conservación se silencian; algunos datos ilegibles vuelven a un estado inicial. No hay garantía de recuperación de cualquier dato parcialmente dañado.
- **Pantallas:** transversal a P-002 a P-007.
- **Estado y verificación:** **Condicionada por permisos, configuración o contexto.** REV y AIS con conservación simulada, T-027 y T-028. Persistencia real entre visitas, navegadores o pestañas PEND.

### 2.2. Entradas visibles que no constituyen capacidades completas

Las dos entradas siguientes se incluyen para cerrar el inventario, pero **no se presentan como traducción o recuperación operativas**.

### F-031 — Selector de idioma sin traducción

- **Utilidad aparente y personas:** ofrecer otro idioma a cualquier persona con acceso.
- **Acceso y condiciones:** «Idioma» en P-007; opciones «Castellano», «Galego» y «Euskara».
- **Información y comportamiento real reconstruido:** selecciona y destaca una opción. El valor inicial es castellano.
- **Resultado y límites:** no cambia textos, recetas ni formatos. La selección no se conserva al abandonar y volver a abrir ajustes.
- **Reglas y alternativas:** no hay traducciones aplicadas, confirmación o mensaje que advierta de esta limitación.
- **Pantallas:** P-007.
- **Estado y verificación:** **Disponible, pero parcialmente implementada** como selector; **la traducción no es una capacidad acreditada**. REV; interacción PEND. Hallazgo H-002.

### F-032 — «¿Olvidaste tu contraseña?» sin recorrido de recuperación

- **Utilidad aparente y personas:** ayudar a quien no conoce la contraseña a recuperar el acceso.
- **Acceso y condiciones:** botón bajo el formulario de P-001; no requiere sesión.
- **Información y comportamiento encontrado:** no solicita información ni tiene una acción o destino asociados.
- **Resultado y límites:** no se ha encontrado formulario de recuperación, envío, instrucciones posteriores o cambio de contraseña.
- **Alternativas:** ninguna dentro de la experiencia revisada. Se desconoce si existe un procedimiento externo.
- **Pantallas:** P-001.
- **Estado y verificación:** **Visible, pero sin efecto observable**, clasificación por ausencia de acción asociada en la revisión; no se ha ensayado el clic. REV, PEND; hallazgo H-001.

## 4. Mapa de pantallas y navegación

### 4.1. Inventario de pantallas

Se cuentan **siete pantallas funcionales**, no cada dirección o estado. El contenedor de navegación no es una octava pantalla.

| ID | Pantalla y propósito | Entrada normal | Condición y salidas |
|---|---|---|---|
| P-001 | Acceso: superar la contraseña común. | Abrir la aplicación sin sesión válida. | Sin sesión; éxito a P-002. Recuperación F-032 sin continuación. |
| P-002 | Inicio: elegir planificación o recetario. | Entrada principal después del acceso; icono de casa. | Con acceso; tarjetas a P-005 o P-003; barra a otras secciones; ajustes P-007. |
| P-003 | Recetario: explorar, buscar, filtrar y marcar favoritas. | Inicio o icono de recetario. | Con acceso; nombre a P-004; fotografía a D-001; navegación general. |
| P-004 | Detalle: consultar receta y seleccionar ingredientes para compra. | Nombre de receta en P-003 o P-005. | Con receta seleccionada; «Volver» al origen; posible D-001; navegación general si procede del contenedor principal. |
| P-005 | Menú: planificar días y comidas. | Inicio, barra o acceso desde compra vacía. | Con acceso; P-004, D-001, D-002 y D-003; navegación general. |
| P-006 | Compra: revisar, tachar, copiar o vaciar productos. | Barra; no se abre automáticamente al generar o añadir. | Con acceso; D-004; si está vacía, accesos a P-005 o P-003. |
| P-007 | Ajustes: actividades, apariencia e idioma aparente. | Control de ajustes de la cabecera. | Con acceso; cruz vuelve a la sección anterior; barra permite cambiar de sección. |

### 4.2. Ventanas y pasos que no son pantallas independientes

| ID | Dentro de | Experiencia | Entradas y salidas |
|---|---|---|---|
| D-001 | P-003, P-005 y acción prevista en P-004. | Fotografía ampliada sobre el contenido. | Se abre al pulsar fotografía; cierra por fondo o Escape. Acceso desde P-004 pendiente por posible interferencia visual. |
| D-002 | P-005. | Panel de normas de generación. | Enlace informativo; cierre por cruz o fondo. |
| D-003 | P-005. | Selector de recetas; segundo paso de personalización cuando corresponde. | «Elegir»; aplicación inmediata para recetas no configurables; confirmación para las configurables; volver al listado o cerrar sin aplicar. |
| D-004 | P-006. | Panel de ayuda de compra. | Enlace informativo; cierre por cruz o fondo. |

La carga, los huecos de comidas, la ausencia de resultados, las confirmaciones breves y las secciones semanales son **estados o partes de pantalla**, no pantallas nuevas.

### 4.3. Esquema general

```text
Abrir la aplicación
├─ Sin sesión válida → P-001 Acceso
│  ├─ Contraseña aceptada → P-002 Inicio
│  └─ Recuperación aparente → sin continuación identificada
└─ Con sesión válida → P-002 Inicio
   ├─ Planificar / icono de calendario → P-005 Menú
   │  ├─ Nombre de comida → P-004 Detalle → Volver al menú
   │  ├─ Fotografía → D-001
   │  ├─ Normas → D-002
   │  ├─ Elegir → D-003 listado → personalización si procede
   │  └─ Generar compra → cambia los productos, permanece en menú
   ├─ Explorar / icono de recetario → P-003 Recetas
   │  ├─ Nombre → P-004 Detalle → Volver al catálogo
   │  └─ Fotografía → D-001
   ├─ Icono de cesta → P-006 Compra
   │  ├─ Ayuda → D-004
   │  └─ Vacía → accesos a menú o recetas
   └─ Control de ajustes → P-007 Ajustes
      └─ Cruz → sección anterior

En las secciones principales:
barra inferior ↔ Inicio / Recetas / Menú / Compra
```

### 4.4. Direcciones directas y accesos descontextualizados

La experiencia principal se abre en `/`; sus cambios internos no cambian esa dirección. También existen entradas independientes, sin enlaces directos equivalentes desde la navegación normal:

| Dirección visible | Pantalla equivalente | Diferencia de experiencia reconstruida — REV, no ejecutada |
|---|---|---|
| `/login` | P-001. | Con sesión válida se prevé retorno a `/`. |
| `/home` | P-002. | Sin cabecera ni barra general; las tarjetas carecen del mecanismo necesario para cambiar de sección y pueden fallar al pulsarlas. |
| `/recipes-list` | P-003. | Catálogo y detalle interno, pero sin navegación general para continuar a menú, compra o ajustes. |
| `/recipe-detail` | P-004 sin contexto. | Solo «Selecciona una receta para ver los detalles»; no recibe una receta por la dirección ni ofrece selector o vuelta propios. |
| `/menu` | P-005. | Funciones de menú sin navegación general. Generar compra no proporciona una salida visible hacia ella. |
| `/shopping-list` | P-006. | Sin navegación general. Si está vacía, sus botones de menú y recetas no tienen efecto de navegación asociado en este contexto. |
| `/settings` | P-007. | Ajustes sin cabecera general ni cruz de retorno propia. |

Todas estas entradas están previstas bajo el mismo control de acceso. La existencia de una dirección independiente **no implica una pantalla abandonada**, pero sí una variante incompleta de navegación que necesita comprobación en ejecución.

### 4.5. Entradas y salidas generales

- La vuelta del detalle a su origen es una acción interna específica.
- Cambiar entre secciones no equivale a usar «Atrás» del navegador.
- Recargar `/` lleva al inicio, no a la sección que estaba abierta.
- No hay una salida de sesión visible.
- No se ha encontrado un enlace a una pantalla de administración, creación de recetas o gestión de personas.
- Las cuatro ventanas se cierran sobre su origen; no crean una entrada propia de navegación compartible.

## 5. Desglose exhaustivo de cada pantalla

Las estructuras siguientes son **REV**, apoyadas por **CAP** cuando existen capturas. No constituyen una inspección visual de la versión ejecutándose. Las diferencias de tamaño descritas son las previstas en la presentación revisada, no mediciones en dispositivos reales.

### 5.0. Elementos compartidos de la experiencia principal

Aparecen al entrar por `/` y permanecen al alternar P-002 a P-007, incluido el detalle abierto desde esas secciones. No forman parte de P-001 ni de las entradas independientes descritas en 4.4.

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| Logotipo superior | Imagen informativa | Identifica el producto; no tiene acción asociada. | Experiencia principal. | Ninguno. | F-002 |
| Icono de ajustes, similar a deslizadores | Botón | Abre los ajustes. | Fuera de P-007. | P-007. | F-002 |
| Cruz que sustituye a ajustes | Botón | Cierra ajustes volviendo a la sección anterior. | En P-007. | Sección anterior, no necesariamente el estado transitorio exacto. | F-002 |
| Casa | Botón inferior | Selecciona inicio. | Experiencia principal. | P-002. | F-002 |
| Icono de recetario o cubiertos | Botón inferior | Selecciona recetas. | Experiencia principal. | P-003. | F-002 |
| Calendario | Botón inferior | Selecciona menú. | Experiencia principal. | P-005. | F-002 |
| Cesta | Botón inferior | Selecciona compra. | Experiencia principal. | P-006. | F-002 |
| Fondo destacado bajo un icono | Indicador | Identifica la sección; en ajustes mantiene la sección anterior. | Con una sección seleccionada. | No es un control independiente. | F-002 |

No hay menú de persona, selector de cuenta, salida de sesión ni etiquetas de texto visibles junto a los cuatro iconos inferiores. La barra permanece fijada en la zona inferior tanto en la presentación móvil como en la de escritorio.

La navegación no consulta si hay cambios transitorios antes de salir. La conservación de datos de F-030 no incluye todo lo que la persona estaba viendo o seleccionando.

#### D-001 — Fotografía ampliada compartida

El visor es una ventana superpuesta, no una pantalla de receta ni una galería.

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| Fotografía ampliada | Imagen | Muestra la misma foto adaptada al espacio disponible. Pulsarla no cierra el visor. | Al abrir desde un origen compatible. | Permanece en D-001. | F-008 |
| Fondo oscurecido fuera de la imagen | Área de cierre | Cierra la vista ampliada. | Visor abierto. | Pantalla de origen. | F-008 |
| Tecla Escape | Acción de teclado | Cierra el visor. | Visor abierto. | Pantalla de origen. | F-008 |

No hay campo, envío, cruz, botón de guardar, navegación entre fotos o aumento progresivo propios. Se prevé impedir que el contenido de fondo se desplace mientras está abierto y adaptar la imagen al tamaño de ventana. No se ha identificado un estado específico de carga o error dentro del visor. Su apertura desde el detalle continúa pendiente por H-017; todos sus cierres y su presentación son REV, no prueba en navegador.

### 5.1. P-001 — Acceso

#### Identificación y propósito

Permite introducir la contraseña común. Se llega al abrir una entrada protegida sin sesión válida. No muestra la navegación general.

#### Estructura visible, de arriba abajo

1. Logotipo.
2. Mensaje «Bienvenido de nuevo».
3. Explicación «Introduce tu contraseña para acceder».
4. Campo de contraseña con candado y control de visibilidad.
5. Mensaje de error, cuando se recibe uno.
6. Botón de entrada.
7. Botón de recuperación aparente.

#### Elementos e interacciones

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| Logotipo y bienvenida | Información | Identifican el producto y el acceso. | Siempre. | Sin acción. | F-001 |
| Candado | Icono decorativo | Sugiere que se introduce una contraseña. | Junto al campo. | Sin acción. | F-001 |
| «Contraseña» | Campo obligatorio | Recibe la contraseña. | Deshabilitado mientras se comprueba. | Se utiliza al enviar. | F-001 |
| Ojo / ojo tachado | Botón | Alterna entre contraseña oculta y visible. | Junto al campo; no se deshabilita expresamente durante la comprobación. | Cambia la visualización del mismo valor. | F-001 |
| Mensaje bajo el campo | Aviso | Informa de contraseña incorrecta, vacía o configuración insuficiente cuando se devuelve ese error. | Tras la respuesta correspondiente. | Permite volver a intentarlo; no hay un cierre propio. | F-001 |
| «Entrar» y flecha | Envío | Comprueba la contraseña. | Fuera de una comprobación pendiente. | P-002 si se acepta. | F-001 |
| «Verificando...» | Estado del envío | Comunica que la comprobación está pendiente. | Mientras se comprueba. | Campo y envío deshabilitados. | F-001 |
| «¿Olvidaste tu contraseña?» | Botón sin acción identificada | Sugiere recuperación, pero no la inicia en el material revisado. | Siempre. | Ninguno encontrado. | F-032 |

#### Formulario de acceso

- **Dato solicitado:** contraseña; único campo y obligatorio.
- **Valor inicial:** vacío y oculto.
- **Restricciones:** no se ha encontrado longitud mínima, máxima o formato adicional. No se eliminan espacios como parte de una normalización prevista.
- **Cuándo se envía:** pulsando «Entrar»; el campo está sujeto al requisito de no estar vacío del formulario.
- **Éxito:** vuelve al inicio y sustituye la entrada de acceso en la navegación prevista. No recupera el destino protegido original.
- **Fallo previsto:** «Introduce una contraseña», «Contraseña incorrecta» o «Error de configuración del servidor», según el caso.
- **Fallo no resuelto:** la falta de configuración de sesión puede interrumpir la operación sin uno de esos mensajes amables; no se conoce la presentación real del error.
- **Cancelar o salir:** no hay cancelación propia ni advertencia de cambios. Mostrar u ocultar la contraseña no la envía.

#### Estados y variantes

- Inicial, comprobando, rechazo y éxito están previstos; T-031 a T-034 ejercitan sus reglas, no el formulario real.
- Con sesión válida, no se prevé permanencia en esta pantalla.
- No hay registro, acceso por correo ni recuperación completa.
- El diseño centra el acceso en ambos tamaños; no se ha comprobado teclado virtual, autocompletado, foco o lectores de pantalla. El botón del ojo queda fuera de la secuencia normal del tabulador en la presentación prevista.

### 5.2. P-002 — Inicio

#### Identificación y propósito

Es el punto de partida habitual tras acceder. Su función es orientar hacia planificación o exploración, no mostrar un resumen del trabajo existente.

#### Estructura visible

Tras la cabecera compartida aparecen dos tarjetas fotográficas:

1. «Organizacion», «Planificar Menu Semanal» y «Organiza tu semana, come mejor».
2. «Inspiracion», «Explorar Recetas» y «Descubre nuevos sabores de temporada».

La barra de navegación general permanece abajo.

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| Tarjeta «Planificar Menu Semanal» | Área interactiva | Abre la sección de planificación. | Inicio de la experiencia principal. | P-005. No genera un menú por sí sola. | F-002, F-011 |
| Icono de calendario con añadido de esa tarjeta | Parte de la tarjeta | Refuerza su destino, no es una segunda acción. | Siempre. | El mismo destino. | F-002 |
| Tarjeta «Explorar Recetas» | Área interactiva | Abre el catálogo. | Inicio de la experiencia principal. | P-003. | F-002, F-003 |
| Lupa de esa tarjeta | Parte de la tarjeta | Refuerza exploración; no abre un buscador diferente. | Siempre. | El mismo destino. | F-002 |
| Fotografías y textos de ambas tarjetas | Contenido | Presentan los dos objetivos de entrada. | Siempre. | No abren el visor fotográfico de F-008. | F-002 |

#### Formularios y estados

No hay formulario, estado vacío, resumen de menú, datos de actividad ni mensajes de carga específicos. El texto sobre sabores de temporada no corresponde a un filtro estacional identificado.

En móvil las tarjetas se apilan; en escritorio se prevén dos columnas. La entrada independiente equivalente carece del contexto de navegación, según 4.4.

### 5.3. P-003 — Catálogo de recetas

#### Identificación y propósito

Permite explorar las 38 recetas, localizar una por nombre y acceder a su información. Se abre desde inicio o desde la barra.

#### Estructura visible

1. Cabecera compartida.
2. Fila horizontal de filtros.
3. Campo de búsqueda con lupa.
4. Grupos por letra inicial.
5. Tarjetas de receta con fotografía, nombre, ingredientes y corazón.
6. Barra inferior compartida.

Si se abre una receta, el contenido del catálogo se sustituye por P-004, con una vuelta interna. La fotografía abre D-001 sin sustituir el catálogo.

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Todas» | Filtro | Retira el filtro por momento o favoritas. | Siempre; selección inicial. | Catálogo compatible con la búsqueda. | F-005 |
| «Desayuno», «Comida», «Cena», «Merienda» | Filtros alternativos | Dejan recetas del momento elegido. | Siempre. | Lista filtrada; solo uno activo. | F-005 |
| «Favoritas» | Filtro alternativo | Deja las recetas marcadas. | Siempre, aunque no haya ninguna. | Lista reducida o mensaje vacío. | F-005, F-006 |
| Fila de filtros | Desplazamiento horizontal | Permite alcanzar opciones que no caben. | Cuando lo exige el ancho. | Otras opciones de la misma fila, sin nueva pantalla. | F-005 |
| Lupa junto al buscador | Icono informativo | Identifica el campo como búsqueda. | Siempre. | No tiene envío propio. | F-004 |
| «Buscar recetas...» | Campo de texto | Aplica la búsqueda al escribir. | Siempre fuera de una posible superposición de carga. | Actualiza resultados. | F-004 |
| Letra inicial de grupo | Encabezado | Agrupa recetas por inicial. | Si el grupo tiene resultados. | No se pliega ni filtra al pulsarla. | F-003 |
| Miniatura circular | Área interactiva | Abre la foto ampliada. | Cada receta. | D-001; no abre el detalle. | F-008 |
| Nombre de receta | Texto interactivo | Selecciona la receta para consultarla. | Cada receta. | P-004. | F-007 |
| Ingredientes en etiquetas | Información | Muestra ingredientes o categorías; diferencia opcionales. | Según los ingredientes de la receta. | No se filtra ni selecciona desde aquí. | F-003 |
| Corazón | Botón | Alterna favorita. | Cada receta. | Cambia el corazón y la selección guardada. | F-006 |
| Fondo o resto de la tarjeta | Presentación | Agrupa la receta; no tiene una apertura general asignada. | Siempre. | Solo los elementos indicados tienen acción. | F-003 |
| «No se encontraron recetas» | Estado vacío | No hay coincidencias de filtro y búsqueda. | Cero resultados. | Se resuelve cambiando esos criterios. | F-004, F-005 |
| Superposición de carga con sartén y «Loading» | Indicador de espera | Espera las fotografías del catálogo. | Mientras no se consideran terminadas. | Desaparece al completar su recuento. | F-003 |

#### Búsqueda y filtros

No constituyen un formulario de envío: no hay «Buscar», «Aplicar», «Cancelar» o botón para limpiar. Se empieza con texto vacío y «Todas».

La búsqueda no tiene restricciones de formato. Para limpiar se borra el texto manualmente; para retirar el filtro se pulsa «Todas». «Volver» desde el detalle conserva ambos en esa visita al catálogo. Abandonar la sección los reinicia.

#### Estados y variantes

- **Con datos:** tarjetas agrupadas; una, dos o tres columnas según el ancho previsto.
- **Sin datos:** mensaje único, también cuando no hay favoritas.
- **Carga:** se cuenta tanto la carga correcta como el fallo de cada imagen. No hay un tiempo máximo o reintento expresos; una imagen que no finalice podría prolongar la espera.
- **Error de imagen:** no se identifica una fotografía alternativa específica. Los archivos asociados a las 38 recetas están presentes, lo que no prueba su carga en el navegador.
- **Sin sesión:** se aplica F-001 antes de entrar; no hay un estado de permiso por receta.
- No hay carga de más resultados, ordenación elegible, categorías dietéticas, detalle de cantidades en las tarjetas o edición de recetas.

### 5.4. P-004 — Detalle de receta

#### Identificación y propósito

Consulta una receta seleccionada desde P-003 o P-005 y permite preparar una aportación a la compra. El origen importa para la selección inicial de ingredientes.

#### Estructura visible

1. «Volver», si existe un origen interno.
2. Fotografía grande con nombre y un resumen de la preparación cuando hay texto.
3. Bloque «Ingredientes», con porciones declaradas.
4. Ingredientes simples y grupos de alternativas.
5. «Anadir a la lista».
6. «Preparacion», como párrafo, pasos o mensaje de ausencia.
7. Bloques de «Momento» y «Restricción» o «Disponible / Sin restricciones».

En la presentación móvil los bloques se apilan. En escritorio, los ingredientes quedan a un lado y la preparación e información adicional al otro.

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Volver» y flecha | Botón | Cierra este detalle interno. | Si se ha abierto desde catálogo o menú. | Origen correspondiente. | F-007 |
| Fotografía principal | Imagen con acción prevista | Debería ampliar la foto; puede existir una interferencia de la presentación. | Con receta. | D-001, pendiente de comprobar desde aquí. | F-008 |
| Nombre y resumen sobre la foto | Información | Identifican la receta; el resumen procede de su preparación. | Resumen solo si hay texto. | Sin acción propia. | F-007 |
| «Ingredientes» e icono | Encabezado informativo | Introduce la selección para compra. | Con receta. | Sin acción. | F-009 |
| «1 Porcion», «2 Porciones» o «4 Porciones» | Información | Indica las porciones declaradas de esa receta. | Según la receta. | No permite cambiar cantidad o comensales. | F-007 |
| Ingrediente simple y casilla | Selección múltiple | Decide si se añadirá ese ingrediente a la compra. | Cada ingrediente sin alternativas. | Cambia la selección transitoria. | F-009 |
| Cantidad junto al ingrediente simple | Información | Muestra la cantidad y unidad conocidas. | Si se dispone de cantidad. | No es editable. | F-009 |
| Nombre de grupo y alternativas | Selección única por grupo | Permite elegir un ingrediente alternativo. | Cuando hay opciones. | Una alternativa seleccionada por grupo. | F-009 |
| «Opcional» | Etiqueta | Distingue ingredientes o grupos opcionales. | Cuando la receta lo declara. | No exige incluirlos. | F-009 |
| «Anadir a la lista» | Botón | Incorpora la selección actual a la compra. | Permanece habilitado aunque no haya selección. | F-010; no navega a compra. | F-010 |
| «Anadido a la lista» y marca | Confirmación temporal | Comunica que se ha solicitado la incorporación. | Si había ingredientes seleccionados; unos 2,5 segundos. | Vuelve a la etiqueta anterior. | F-010 |
| «Preparacion» | Encabezado y contenido | Muestra las instrucciones disponibles. | Con receta. | Consulta, no ejecución guiada. | F-007 |
| Números de los pasos | Información | Orden de preparación; el primero tiene énfasis visual. | Cuando se separan varios pasos. | No se marcan ni avanzan al pulsarlos. | F-007 |
| «Instrucciones no disponibles» | Estado de contenido incompleto | La receta no aporta preparación utilizable. | Catorce recetas del catálogo actual. | No hay acción para completarla. | F-007 |
| «Momento» | Información | Desayuno, comida, merienda o cena admitidos por la receta. | Con receta. | No filtra ni cambia el menú. | F-007 |
| «Restricción» | Información | Etiquetas de fin de semana o cena entre semana. | Recetas con restricciones. | No bloquea la consulta o la compra. | F-007 |
| «Disponible / Sin restricciones» | Información alternativa | No hay restricciones de calendario declaradas. | Recetas sin restricciones. | No significa disponibilidad de ingredientes o garantía dietética. | F-007 |

#### Selección de ingredientes para la compra

- **Datos:** casillas de ingredientes y alternativas por grupo; no hay cantidades editables.
- **Inicialización desde catálogo:** selección vacía, incluso para ingredientes necesarios.
- **Inicialización desde menú:** intenta marcar lo incluido en esa comida y reconocer sus alternativas concretas.
- **Obligatoriedad:** las etiquetas de ingrediente necesario no son una validación obligatoria del envío. Se puede añadir solo parte de la receta.
- **Grupos:** una alternativa por grupo; los grupos opcionales permiten deselección. En este panel las alternativas no presentan el mismo desglose de cantidad que las filas simples.
- **Envío:** no se bloquea el botón sin selección; en ese caso no hay cambio ni confirmación.
- **Éxito:** incorpora a compra y confirma brevemente; mantiene abierta la receta y la selección.
- **Fallo:** no hay un aviso específico para conservación no disponible. Las reglas de acumulación y sus excepciones están en F-010.
- **Salir:** «Volver» o cambiar de sección descarta las selecciones transitorias sin confirmación. Cerrar ajustes no restaura necesariamente este detalle.

**Advertencia de alcance:** modificar estas casillas no personaliza la comida del menú. Ese objetivo corresponde a D-003 y F-017.

#### Estados y variantes

- Con receta y con o sin instrucciones.
- Sin receta, en entrada independiente: solo invitación a seleccionar, sin herramienta para hacerlo.
- No hay carga propia de información, error recuperable de receta, paso de cocina activo, temporizador, editor o control de raciones.
- Si el menú conserva una referencia a una receta que ya no está en el catálogo, el intento de abrirla no encuentra un detalle que mostrar; no se ha identificado aviso específico.

### 5.5. P-005 — Menú

#### Identificación y propósito

Es la pantalla principal de planificación. Se abre desde inicio, la barra o la compra vacía. No necesita una compra previa ni preferencias de entrenamiento.

#### Estructura visible

1. «Menú semanal».
2. «Ver normas de generacion».
3. Botón principal de generar, completar o regenerar.
4. Acciones de añadir semana y vaciar cuando hay menú.
5. Semanas y tarjetas de días. Con varias semanas aparecen «Semana 1», «Semana 2», etc., con sus intervalos.
6. Cada día muestra nombre, fecha y actividades, y después comidas o estado vacío.
7. Segundo acceso a añadir semana.
8. Botones para generar la compra y copiar el menú si existe planificación.
9. Avisos temporales cuando no se encuentra una propuesta para una operación individual.

En móvil se prevé una columna de días; en tamaños mayores, varias columnas. Las semanas siguen apareciendo unas después de otras, sin pestañas de semana.

#### Cabecera, calendario y acciones generales

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Menú semanal» | Título | Identifica la planificación, aunque abarque varias semanas. | Siempre. | Sin acción. | F-011, F-015 |
| «Ver normas de generacion» | Botón informativo | Abre las normas mostradas por el producto. | Con o sin menú. | D-002. | F-020 |
| «Generar Menu Semanal» | Botón principal | Crea siete días desde hoy. | Sin menú guardado. | Asignaciones de comidas. | F-011 |
| «Completar semana» | Variante del botón principal | Rellena días enteramente vacíos. | Hay días generados y otros sin ninguna comida. | Mantiene días con al menos una comida. | F-013 |
| «Regenerar Menu» | Variante del botón principal | Sustituye por siete días nuevos si todos cuentan como generados. Si se han vaciado todos, completa los días existentes pese a la etiqueta. | Menú existente sin el estado mixto que muestra «Completar semana». | Sustitución de F-014 o completado de F-013, sin confirmación. | F-013, F-014 |
| Calendario con añadido en cabecera | Botón con título «Añadir semana» | Añade siete días consecutivos. | Con menú. | Más días al final. | F-015 |
| Papelera de cabecera | Botón con título «Vaciar menu» | Vacía la planificación completa. | Con menú. | Estado inicial, sin tocar compra. | F-019 |
| «Semana n» e intervalo | Información | Separa bloques de siete días. | Más de una semana. | No es pestaña ni filtro. | F-015 |
| Nombre y fecha de un día | Información | Sitúan sus comidas en el calendario. | Cada día. | No permiten editar fecha ni abrir otro calendario. | F-011, F-012 |
| Insignias de gimnasio o baloncesto | Indicadores | Representan actividades y persona; su texto de ayuda identifica la asociación. | Días marcados para esas actividades. | No abren ajustes ni garantizan adaptación de todas las comidas. | F-028 |
| Calendario con añadido después de los días | Segundo botón equivalente | Misma ampliación que el botón de cabecera. | Con menú. | Añade otra semana. | F-015 |
| «Generar Lista de la Compra» | Botón | Sustituye la compra por los ingredientes del menú. | Existe planificación, también parcial. | Permanece en P-005. | F-022 |
| «Lista Generada» | Confirmación temporal | Informa de la generación solicitada. | Unos 2,5 segundos tras pulsar. | Vuelve al texto normal. | F-022 |
| «Copiar Menú» | Botón | Solicita copiar el texto de toda la planificación. | Existe planificación. | Portapapeles si está disponible. | F-021 |
| «Menú Copiado» | Confirmación temporal | Informa de copia aceptada. | Unos 2,5 segundos. | Vuelve al texto normal. | F-021 |
| «No hay recetas disponibles que cumplan las restricciones» | Aviso temporal | No se pudo resolver una generación individual. | Fallo de generación de día o sustitución individual. | Desaparece por sí solo, aproximadamente a los tres segundos. | F-012, F-016 |

#### Tarjetas de día y comidas

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Genera un menu para empezar» y símbolo de añadido | Estado de día vacío | Aún no se ha generado ese día. | Día sin conjunto de comidas. | El símbolo no tiene una acción independiente. | F-012 |
| «Generar este día» | Botón | Propone solo las comidas de ese día. | En la tarjeta inicial de día vacío. | Día generado o aviso de falta de candidatas. | F-012 |
| Papelera en la cabecera de un día | Botón | Quita todas sus comidas presentes. | Si conserva alguna comida. | Huecos sin receta, mismas fechas. | F-018 |
| Recarga en cabecera de un día vaciado | Botón | Intenta reponer sus posiciones de comida. | Día con posiciones, pero sin ninguna receta. | Propuestas individuales para el día. | F-016 |
| «Desayuno», «Comida», «Merienda», «Cena» | Etiquetas | Identifican el momento. | En comidas y huecos existentes. | Sin acción propia. | F-011 |
| Foto de comida | Área interactiva | Abre su foto. Si no hay foto se prevé un símbolo de restaurante. | Comida asignada. | D-001; no abre la receta por sí misma. | F-008 |
| Nombre de comida | Texto interactivo | Busca su receta en el catálogo para consultarla. | Comida asignada. | P-004 si se encuentra. | F-007 |
| Etiquetas de ingredientes de comida | Información | Muestran las elecciones ya resueltas, distinguiendo opcionales incluidos. | Comida asignada. | No editan ingredientes al pulsarlas. | F-011, F-017 |
| Deslizar una comida hacia la izquierda | Gesto táctil | Descubre sus acciones. | Comida asignada. | «Elegir», «Otra» y «Quitar». | F-016, F-017, F-018 |
| Pasar el ratón por una comida | Acción de puntero | Descubre las mismas acciones; al salir se ocultan. | Uso con ratón. | Acciones laterales. | F-016, F-017, F-018 |
| «Elegir» | Acción contextual | Abre elección manual. | Acciones de comida descubiertas. | D-003. | F-017 |
| «Otra» | Acción contextual | Intenta otra asignación aleatoria. | Acciones de comida descubiertas. | Sustitución o aviso. | F-016 |
| «Quitar» | Acción contextual | Deja vacía esa comida. | Acciones de comida descubiertas. | Hueco sin receta. | F-018 |
| Pulsar la cubierta de una comida desplazada | Interacción móvil | Cierra las acciones, no abre el detalle en esa pulsación. | Presentación móvil con acciones abiertas. | Comida vuelve a su posición. | F-016, F-017, F-018 |
| «Sin receta asignada» | Estado de hueco | No hay receta para ese momento. | Posición vacía. | No constituye un error por sí mismo. | F-016, F-017 |
| Icono de lista en el hueco | Botón «Elegir receta» | Permite asignación manual. | Posición vacía. | D-003. | F-017 |
| Icono de recarga en el hueco | Botón «Regenerar» | Intenta asignación aleatoria. | Posición vacía. | Receta o aviso. | F-016 |

No se ha identificado una forma alternativa claramente preparada para descubrir todas las acciones laterales solo con teclado. Esto requiere prueba de accesibilidad; no se ha comprobado que resulte imposible utilizarlas.

#### D-002 — Normas de generación

Panel inferior sobre fondo oscurecido, con asa visual, título, subtítulo, cruz y tres bloques:

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Normas de generación» y atribución a criterios de nutricionista | Información | Presenta las normas como guía de generación. | Panel abierto. | No acredita su cumplimiento ni procedencia profesional. | F-020 |
| «Días de descanso» | Información | Afirma acompañamiento de verduras y orientación digestiva. | Panel abierto. | Sin configuración. | F-020 |
| «Días de gimnasio» | Información | Afirma carbohidratos densos en comidas principales y merienda alta en proteínas. | Panel abierto. | Sin configuración. | F-020 |
| «Días de baloncesto» | Información | Afirma una cena con carbohidratos ligeros y merienda basada en fruta. | Panel abierto. | Sin configuración. | F-020 |
| Cruz o fondo exterior | Cierre | Cierra sin cambiar menú o preferencias. | Panel abierto. | P-005. | F-020 |
| Asa superior | Decoración | Sugiere un panel deslizante; no se ha encontrado un gesto propio de arrastre. | Panel abierto. | No tiene acción identificada. | F-020 |

La zona de contenido puede desplazarse. Se prevé impedir el desplazamiento del fondo. No se ha identificado Escape, devolución de foco o confirmación.

#### D-003 — Selector manual, paso de listado

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Elegir desayuno/comida/merienda/cena» y día | Encabezado | Identifica la posición que se va a modificar. | Al abrir. | Sin acción. | F-017 |
| «Solo las que cumplen las normas» | Interruptor | Alterna criterio estricto o catálogo del momento sin esas restricciones. | Activado inicialmente. | Cambia las recetas ofrecidas. | F-017 |
| «n de m recetas disponibles» / «m recetas disponibles» | Información | Expresa el tamaño de la selección frente al total del momento. | Según el interruptor. | No representa garantía de toda la ayuda nutricional. | F-017 |
| Fila con foto, nombre y resumen de ingredientes | Botón de selección | Elige esa receta, no abre su detalle de consulta. | Cada candidata, por orden alfabético. | Aplicación inmediata o paso de personalización. | F-017 |
| Icono de ajustes de una fila | Indicador | La receta tiene ingredientes personalizables. | Recetas con opciones u opcionales. | Es parte de la fila, no otra acción. | F-017 |
| Flecha de cada fila | Indicador | Refuerza que se puede elegir. | Cada candidata. | Misma acción que la fila. | F-017 |
| Mensaje de falta de recetas compatibles | Estado vacío | No hay candidatas estrictas; sugiere desactivar el interruptor. | Lista estricta vacía. | No realiza el cambio automáticamente. | F-017 |
| Mensaje de falta de recetas del momento | Estado vacío | El conjunto completo del momento está vacío. | Sin candidatas en modo completo. | No hay otra continuación salvo cerrar. | F-017 |
| Cruz o fondo exterior | Cierre | Cancela la elección. | Paso de listado abierto. | P-005 sin cambios. | F-017 |

No hay buscador, filtro de favoritas, paginación o visor de fotografía dentro de este listado. La receta actual queda excluida del criterio estricto.

#### D-003 — Paso de personalización y formulario

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| Nombre y «Personaliza los ingredientes» | Información | Presenta la receta pendiente de aplicar. | Solo si tiene opciones u opcionales. | Aún no modifica la comida. | F-017 |
| Flecha de vuelta | Botón | Regresa a las candidatas. | Paso de personalización. | Descarta esta aplicación pendiente. | F-017 |
| Ingrediente necesario sin alternativas | Información con marca | Se incluirá; no es una casilla editable. | Cuando corresponde. | Se mantiene. | F-017 |
| Alternativas de ingrediente necesario | Selección única | Escoge una opción del grupo. | Si hay alternativas. | Modifica la elección pendiente. | F-017 |
| Casilla y etiqueta «Opcional» | Selección | Incluye o excluye ese ingrediente. | Ingredientes opcionales. | Cambia la elección pendiente. | F-017 |
| Alternativas de un grupo opcional | Selección única | Escoge la opción si el grupo está incluido. | Mientras el opcional permanece marcado. | Cambia la elección pendiente. | F-017 |
| Cantidades y unidades | Información | Muestran las cantidades originales cuando existen. | Según la receta. | No se pueden editar. | F-017 |
| «Añadir al menú» | Confirmación | Aplica la receta y estas elecciones a la posición seleccionada. | Paso de personalización; sin otra validación pendiente prevista. | Cierra el panel. | F-017 |
| Fondo exterior | Cierre | Sale sin aplicar. | Paso de personalización. | Menú sin esa modificación. | F-017 |

- **Iniciales:** primera alternativa de cada grupo y todos los opcionales incluidos.
- **Obligatorios:** los ingredientes necesarios se mantienen; los grupos necesarios parten de una opción válida.
- **Opcionales:** se pueden excluir; si tienen varias alternativas, estas se ocultan al excluirlos.
- **Envío correcto:** reemplaza la comida, no añade una segunda comida al mismo momento.
- **Error:** no se ha identificado un mensaje específico de fallo al aplicar; el entorno visual no se ha probado.
- **Cancelación:** flecha o fondo no aplican cambios; no hay borrador ni advertencia. En este paso no aparece la misma cruz del listado.

#### Estados y variantes de la pantalla de menú

- **Sin menú:** siete tarjetas de referencia desde hoy, sin generación previa.
- **Parcial por días:** algunos generados y otros sin comidas; el botón permite completado de días.
- **Parcial por comidas:** huecos en días con alguna asignación; no se consideran necesariamente pendientes para el botón principal.
- **Con datos:** una o varias semanas, comidas y acciones.
- **Día vaciado:** conserva posiciones para elegir o regenerar, distinto de un día inicialmente no generado.
- **Todos los días vaciados sin vaciar el menú:** sigue existiendo la planificación. El botón dice «Regenerar Menu», pero rellena esos días conservando fechas y número de semanas, como se comprobó en la variante de T-021.
- **Sin candidatos:** huecos posibles; aviso en operaciones individuales. No hay garantía de que una generación completa informe de cada hueco.
- **Éxito:** cambios del menú y confirmaciones breves de copia o compra.
- **Carga:** no hay un estado específico de progreso de generación identificado.
- **Deshabilitación:** no se bloquean expresamente generar compra, regenerar o ampliar durante una confirmación breve; repetirlos vuelve a realizar la acción.
- **Sin permisos o sin sesión:** se aplica el control general F-001; no hay autorización distinta por acción.
- **Fechas guardadas:** no se ha encontrado un traslado automático del menú al día actual al regresar otro día.

### 5.6. P-006 — Lista de la compra

#### Identificación y propósito

Permite utilizar la lista actual, proceda del menú, de recetas o de ambos. Se llega por la barra. Generar desde el menú y añadir desde una receta no navegan automáticamente a ella.

#### Estructura visible

1. Cabecera general.
2. «Lista de la Compra».
3. «Como funciona la lista».
4. Estado vacío o secciones de productos.
5. Con productos, acciones de copiar y vaciar.
6. Barra de navegación.

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Como funciona la lista» | Botón informativo | Abre la explicación de marcas y copia. | Con o sin productos. | D-004. | F-027 |
| Ilustración de cesta y cocinero | Imagen informativa | Refuerza ausencia de productos. | Lista vacía. | No tiene acción. | F-023 |
| «Tu lista está vacía» y explicación | Estado vacío | Invita a generar menú o explorar recetas para añadir productos. | No hay filas. | No genera nada automáticamente. | F-023 |
| «Generar menú» | Navegación | Abre la planificación; no ejecuta su generación. | Lista vacía en la experiencia principal. | P-005. | F-002, F-011 |
| «Ver recetas» | Navegación | Abre el recetario. | Lista vacía en la experiencia principal. | P-003. | F-002, F-003 |
| Nombre de sección de supermercado | Encabezado | Agrupa productos por sección. | Secciones con productos. | No es plegable ni seleccionable. | F-023 |
| Casilla y fila de producto | Selección | Alterna pendiente/tachado. | Cada producto. | Marca visible; la fila no desaparece. | F-024 |
| Nombre y cantidad entre paréntesis | Información | Identifica qué comprar y cuánto se conoce. | Cantidad solo si está disponible. | No abre una receta ni permite edición. | F-023 |
| «Copiar Lista» | Botón | Copia solo pendientes. | Existe al menos una fila, aunque todas estén tachadas. | Portapapeles si está disponible. | F-025 |
| «Copiado» | Confirmación temporal | La solicitud de copia se ha completado. | Unos dos segundos tras aceptarse. | Vuelve a «Copiar Lista». | F-025 |
| «Vaciar Lista» | Botón | Retira todas las filas, sin confirmación. | Existe al menos una fila. | Estado vacío. | F-026 |

#### D-004 — Ayuda de compra

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Cómo funciona la lista» | Encabezado | Identifica la ayuda. | Panel abierto. | Sin acción. | F-027 |
| «Tacha lo que ya tengas» | Consejo | Las marcas sirven también para productos disponibles en casa. | Panel abierto. | No modifica ninguna marca. | F-027 |
| «Al copiar, solo lo pendiente» | Consejo | Explica que no se incluyen productos tachados. | Panel abierto. | No copia por sí mismo. | F-027, F-025 |
| Cruz o fondo exterior | Cierre | Cierra la ayuda. | Panel abierto. | P-006 sin cambios. | F-027 |
| Asa superior | Decoración | Identifica visualmente el panel inferior. | Panel abierto. | No hay arrastre asociado encontrado. | F-027 |

Se prevé desplazamiento interior si es necesario y bloqueo del fondo, como en D-002. No se ha identificado Escape.

#### Formularios, estados y variantes

- Las casillas son la única entrada de datos en la lista: no hay alta libre, edición de nombres o cantidades ni eliminación de una fila individual.
- Las marcas se aplican al instante y no tienen envío ni cancelación.
- Marcar todo no produce una pantalla de finalización: se siguen viendo las filas y las dos acciones.
- Copiar con todo tachado prepara texto vacío; no está deshabilitado.
- No hay carga, contador de pendientes, progreso de compra o error de conservación visibles identificados.
- La lectura de algunos datos guardados ilegibles desemboca en lista vacía, sin explicar la recuperación.
- Se prevé una columna centrada también en escritorio; los botones pueden colocarse en una fila cuando hay espacio.
- La variante independiente sin productos conserva botones que no proporcionan navegación efectiva, según 4.4.

### 5.7. P-007 — Ajustes

#### Identificación y propósito

Reúne actividades de entrenamiento y preferencias de presentación. Se abre desde la cabecera. No es una cuenta de usuario ni una pantalla de administración.

#### Estructura visible

1. Título «Ajustes».
2. «Entrenamiento».
3. Xabier: «Gimnasio» y «Baloncesto», cada uno con siete días.
4. Maider: «Gimnasio», con siete días.
5. «Apariencia»: claro y oscuro.
6. «Idioma»: castellano, gallego y euskera.

| Elemento o etiqueta visible | Tipo | Qué hace o comunica | Cuándo aparece o se habilita | Resultado o destino | Funcionalidad relacionada |
|---|---|---|---|---|---|
| «Xabier» y «Maider» | Información fija | Identifican a quién se atribuyen actividades. | Siempre. | No se editan ni seleccionan como cuenta. | F-028 |
| «Gimnasio» y «Baloncesto» con iconos | Encabezados de actividad | Identifican los tres calendarios disponibles. | Siempre. | No añaden o eliminan actividades. | F-028 |
| «L M X J V S D» en cada calendario | 21 botones de alternancia | Marcan o desmarcan días independientemente. El texto de ayuda da el día completo. | Siempre; inicialmente ninguno marcado. | Preferencia aplicada sin envío; indicadores en menú. | F-028 |
| Resaltado de un día | Estado de selección | Ese día pertenece a la actividad de esa persona. | Al estar marcado. | No indica por sí solo qué recetas cambiarán. | F-028 |
| «Claro» y sol | Selección de apariencia | Aplica modo claro. | Siempre. | Apariencia general y preferencia. | F-029 |
| «Oscuro» y luna | Selección de apariencia | Aplica modo oscuro. | Siempre. | Apariencia general y preferencia. | F-029 |
| Resaltado del modo | Indicador | Modo seleccionado. | Siempre uno previsto. | Sin acción independiente. | F-029 |
| «Castellano», «Galego», «Euskara» y distintivos «ES», «GL», «EU» | Selección local | Cambia el resaltado del idioma, no los textos. | Siempre; castellano inicial. | Misma pantalla en castellano. | F-031 |
| Cruz de cabecera compartida | Cierre de sección | Vuelve a la sección anterior. | Entrada desde la experiencia principal. | No cancela actividad o apariencia ya aplicadas. | F-002 |

#### Formularios y aplicación de preferencias

- No hay un formulario de envío único, campos de texto, «Guardar», «Aplicar» o «Cancelar».
- Actividades y apariencia se aplican inmediatamente e intentan conservarse.
- No existen límites de días seleccionados, exclusión entre actividades o validación de un mínimo de entrenamiento.
- Los días de una actividad no se copian automáticamente a otra persona.
- Cambiar actividades no recalcula lo ya asignado en el menú.
- Cerrar ajustes no revierte actividades o tema. La selección aparente de idioma sí se reinicia al volver a entrar.
- No hay aviso de conservación fallida ni comprobación de traducción disponible.

#### Estados y variantes

- Inicialmente ninguna actividad; tema claro salvo preferencia anterior; idioma aparente castellano.
- Las selecciones de actividad y tema se destacan.
- No hay estados de éxito, carga o error propios previstos para estos ajustes.
- No se han encontrado diferencias funcionales expresas entre móvil y escritorio; la composición sigue siendo vertical.
- Sin sesión se aplica F-001. No hay permisos distintos para modificar las actividades de una u otra persona.

## 6. Recorridos principales de uso

Todos los recorridos siguientes están **reconstruidos — REV**, no ejecutados de extremo a extremo. Las referencias AIS acreditan únicamente las reglas aisladas indicadas.

### R-001 — Acceder o regresar después de caducar la sesión

- **Objetivo y partida:** entrar en la aplicación; se dispone de la contraseña y de una instalación configurada.
- **Secuencia:** 1) abrir la aplicación; 2) si no hay sesión válida, ver P-001; 3) escribir la contraseña, opcionalmente mostrarla; 4) pulsar «Entrar»; 5) esperar con campo y envío deshabilitados; 6) si se acepta, llegar a P-002.
- **Resultado:** acceso al producto; los datos conservados en ese navegador pueden seguir disponibles en sus secciones.
- **Alternativas y errores:** contraseña vacía o incorrecta permite reintentar. Falta de configuración de acceso muestra un error previsto; la falta de configuración de sesión no tiene una respuesta amable completa. Con sesión válida se omite el formulario.
- **Caducidad:** la sesión prevista dura 24 horas; una nueva entrada protegida vuelve a exigir acceso. Cambiar de sección dentro de una vista ya abierta puede no detectarlo. No se recupera automáticamente el destino inicial.
- **Bloqueo:** desconocer la contraseña lleva a R-015; no hay salida de sesión visible.
- **Referencias:** P-001, P-002; F-001, F-030 y F-032; T-031 a T-034.

### R-002 — Encontrar una receta y guardarla como favorita

- **Objetivo y partida:** consultar una receta del catálogo, con acceso a la experiencia principal.
- **Secuencia:** 1) entrar en recetas; 2) elegir un momento o mantener «Todas»; 3) escribir parte del nombre; 4) revisar coincidencias; 5) pulsar el corazón si se quiere marcar; 6) pulsar el nombre para abrir P-004; 7) consultar preparación y volver.
- **Resultado:** información consultada y, si se ha marcado, favorita disponible mediante su filtro.
- **Alternativas:** pulsar la fotografía abre D-001, no el detalle. En D-001 se puede cerrar por fondo o Escape. «Favoritas» sustituye al filtro de momento.
- **Errores y salida:** sin coincidencias se cambia filtro o texto. Una búsqueda sin tildes puede no localizar nombres con ellas. Volver del detalle conserva los criterios; salir a otra sección los pierde. Una receta puede carecer de instrucciones.
- **Referencias:** P-003, P-004 y D-001; F-002 a F-008, F-030; T-017 y T-036.

### R-003 — Crear o ampliar compra desde una receta, sin menú

- **Objetivo y partida:** comprar ingredientes de una receta concreta; no hace falta planificación.
- **Secuencia:** 1) abrir una receta del catálogo; 2) marcar los ingredientes deseados y elegir alternativas; 3) pulsar «Anadir a la lista»; 4) observar la confirmación prevista sin cambio de pantalla; 5) abrir compra mediante la cesta; 6) revisar los productos y cantidades.
- **Resultado:** productos nuevos o cantidades acumuladas en la lista.
- **Alternativas y cancelación:** se puede elegir solo parte de los ingredientes. Sin selección, pulsar no produce confirmación. Volver antes de añadir descarta la selección.
- **Riesgos y límites:** pulsar de nuevo añade otra aportación. Un producto que ya estaba tachado sigue tachado aunque reciba cantidad. Agua y extras genéricos pueden entrar por este camino. No hay ajuste de porciones.
- **Bloqueo contextual:** desde una entrada independiente sin barra no hay un acceso general preparado a la compra.
- **Referencias:** P-003, P-004, P-006; F-007, F-009, F-010, F-023, F-030; T-023 y T-024.

### R-004 — Obtener un menú inicial

- **Objetivo y partida:** recibir propuestas para los próximos siete días; todavía no hay menú.
- **Secuencia:** 1) abrir menú; 2) opcionalmente consultar normas; 3) si se desean actividades, abrir ajustes, seleccionarlas y regresar; 4) pulsar «Generar Menu Semanal»; 5) revisar los días, momentos e ingredientes; 6) pulsar nombres para consultar recetas y volver.
- **Resultado:** siete días consecutivos desde la fecha actual, con hasta cuatro comidas por día.
- **Alternativas:** generar solo un día corresponde a R-005. El catálogo de candidatas y las restricciones pueden dejar huecos. Las elecciones de ingredientes opcionales son aleatorias.
- **Límites:** no se eligen comensales, fecha inicial, dieta o un objetivo nutricional. Consultar normas no configura reglas. Tener actividades visibles no garantiza que todas afecten a las propuestas.
- **Continuación:** copiar menú mediante R-009 o generar compra mediante R-010; ninguna ocurre automáticamente.
- **Referencias:** P-002, P-005, P-007, P-004 y D-002; F-011, F-020, F-028, F-030; T-001, T-003 a T-006, T-010 y T-015.

### R-005 — Planificar un día y completar los restantes

- **Objetivo y partida:** empezar con una sola jornada, sin menú previo.
- **Secuencia:** 1) abrir P-005; 2) elegir una tarjeta vacía; 3) pulsar «Generar este día»; 4) revisar sus propuestas mientras otros seis días quedan vacíos; 5) pulsar «Completar semana» para rellenar los días sin ninguna comida.
- **Resultado:** se conserva el día ya generado y se proponen los restantes.
- **Alternativas y errores:** si no hay candidatas para ninguna comida del día, no se conserva ese intento y se solicita un aviso. Si se consigue una sola comida, el día ya puede contar como generado.
- **Punto incompleto:** completar no rellena los huecos de un día que conserve otra comida. Esos huecos requieren «Regenerar» individual o selección manual. La misma regla se aplica a varias semanas.
- **Referencias:** P-005; F-012, F-013, F-016 y F-017; T-008, T-015, T-021 y T-022.

### R-006 — Cambiar o quitar una comida

- **Objetivo y partida:** ajustar una comida de un menú existente.
- **Secuencia:** 1) localizarla; 2) descubrir acciones deslizando a la izquierda o pasando el ratón; 3) pulsar «Otra» para una nueva propuesta; o 4) pulsar «Quitar»; 5) desde el hueco, elegir o regenerar si se quiere recuperarla.
- **Resultado:** cambia solo la asignación elegida o queda su posición vacía.
- **Alternativas:** la papelera del día retira todas sus comidas; la recarga de un día ya vaciado intenta reponerlas.
- **Errores y cancelación:** al no conseguir candidato se mantiene lo anterior y se solicita aviso. Cerrar las acciones sin pulsarlas no cambia la comida. El caso de escasez ensayado con catálogo reducido no garantiza una receta distinta.
- **Límites:** no hay confirmación o deshacer de retirada. La lista de la compra no se actualiza. Un hueco individual no convierte necesariamente el botón general en «Completar semana».
- **Referencias:** P-005; F-016 a F-018; T-007, T-009 y T-020.

### R-007 — Elegir manualmente una receta y sus ingredientes

- **Objetivo y partida:** asignar una receta concreta a una posición de un menú existente.
- **Secuencia:** 1) pulsar «Elegir» o el icono de lista del hueco; 2) revisar las candidatas estrictas; 3) opcionalmente desactivar «Solo las que cumplen las normas»; 4) pulsar una receta; 5) si es configurable, modificar alternativas u opcionales y confirmar «Añadir al menú».
- **Resultado:** receta aplicada a esa posición; panel cerrado. No cambia el catálogo ni la compra.
- **Alternativas:** una receta no configurable se aplica inmediatamente al pulsarla. La receta actual no está entre las candidatas estrictas; puede aparecer en el conjunto completo de su momento.
- **Cancelación:** cruz o fondo desde el listado; fondo o vuelta al listado desde personalización, antes de aplicar. No hay confirmación de descarte.
- **Bloqueos y excepciones:** sin candidatas estrictas se puede consultar el conjunto completo; si este también está vacío solo queda cerrar. Desactivar el criterio permite asignaciones contrarias a las restricciones sin advertencia posterior.
- **Referencias:** P-005 y D-003; F-017; T-003, T-007, T-010 y T-016.

### R-008 — Ampliar la planificación a varias semanas

- **Objetivo y partida:** disponer de más de siete días; existe un menú.
- **Secuencia:** 1) pulsar uno de los dos calendarios de añadido; 2) revisar la semana incorporada después del último día; 3) repetir si se necesita; 4) ajustar comidas individuales o copiar/generar compra de todo el conjunto.
- **Resultado:** varias semanas consecutivas, sin cambio de las anteriores al añadir.
- **Alternativas:** si hay días completamente vacíos, el botón de completado puede conservar la extensión y rellenarlos.
- **Punto crítico:** pulsar «Regenerar Menu» cuando todos los días cuentan como generados sustituye el conjunto por siete días desde hoy. No hay confirmación previa ni recuperación de las semanas anteriores.
- **Límites:** no existe eliminación de una semana concreta, máximo explícito o elección de fecha inicial. La compra anterior no se amplía por esta acción.
- **Referencias:** P-005; F-013, F-014, F-015, F-021 y F-022; T-002, T-019 y T-021.

### R-009 — Llevarse el menú como texto

- **Objetivo y partida:** obtener el menú para pegarlo fuera de la aplicación; existe planificación.
- **Secuencia:** 1) pulsar «Copiar Menú»; 2) si el entorno lo permite, ver «Menú Copiado»; 3) pegar por medios ajenos a la aplicación.
- **Resultado:** texto con fechas, días, comidas e ingredientes de todas las semanas.
- **Alternativas:** también puede copiarse un menú parcial; no se incluyen los huecos como comidas pendientes.
- **Errores y límites:** no hay envío ni publicación automática. No incluye cantidades o preparación. Si la copia se rechaza, el botón no presenta una explicación o un procedimiento alternativo.
- **Verificación:** solo se comprobó el contenido preparado, no la copia ni el pegado.
- **Referencias:** P-005; F-021; T-035.

### R-010 — Preparar la compra a partir del menú

- **Objetivo y partida:** reunir ingredientes de la planificación; puede existir ya una compra.
- **Secuencia:** 1) revisar el menú; 2) pulsar «Generar Lista de la Compra»; 3) ver la confirmación prevista; 4) abrir la cesta; 5) revisar secciones, cantidades y productos.
- **Resultado:** nueva lista de los ingredientes resueltos de todas las semanas y días presentes, aunque el menú sea parcial.
- **Consecuencia importante:** sustituye la lista anterior, incluidas aportaciones desde recetas, y reinicia las marcas. No pregunta antes.
- **Alternativas:** después se pueden incorporar más ingredientes mediante R-003.
- **Desajuste posterior:** cambiar, quitar o añadir comidas no mantiene sincronizada esta lista. Volver a generarla recoge el nuevo menú, pero vuelve a sustituir aportaciones y marcas.
- **Límites:** omite agua y extras genéricos; no ajusta cantidades por porciones o personas y puede contener cantidades desconocidas.
- **Referencias:** P-005 y P-006; F-022, F-023 y F-030; T-011 a T-013 y T-025.

### R-011 — Revisar compra, tachar lo disponible y copiar pendientes

- **Objetivo y partida:** disponer de una lista útil para comprar; existen productos.
- **Secuencia:** 1) abrir compra; 2) opcionalmente consultar su ayuda; 3) marcar lo que ya se tiene o se ha comprado; 4) pulsar «Copiar Lista»; 5) pegar fuera de la aplicación si la copia se acepta.
- **Resultado:** filas tachadas en la aplicación y texto solo de pendientes.
- **Alternativas:** desmarcar recupera un pendiente. Marcar todo mantiene la lista visible; copiar entonces prepara texto vacío y puede mostrar igualmente la confirmación.
- **Errores y límites:** no hay copia alternativa o mensaje específico ante rechazo. No se editan cantidades ni se borra un producto individual. Añadir luego más cantidad a una fila tachada la deja tachada.
- **Conservación:** se intenta conservar las marcas; generar nuevamente desde el menú las reinicia.
- **Referencias:** P-006 y D-004; F-023 a F-025, F-027 y F-030; T-014, T-024 y T-025.

### R-012 — Reiniciar menú o compra sin confundirlos

- **Objetivo y partida:** retirar una de las dos áreas de trabajo; hay datos en alguna de ellas.
- **Secuencia de menú:** 1) abrir P-005; 2) pulsar su papelera general; 3) volver al estado inicial sin menú; 4) comprobar que la compra anterior sigue siendo una lista independiente.
- **Secuencia de compra:** 1) abrir P-006; 2) pulsar «Vaciar Lista»; 3) ver la cesta vacía; 4) si el menú sigue disponible, poder generar otra lista.
- **Resultado:** vaciado del área elegida, no una limpieza total del producto.
- **Alternativas y riesgos:** no hay confirmación ni deshacer. Preferencias, actividades y favoritas no se vacían por estos controles. Si se conserva una compra antigua tras vaciar menú, no aparece un aviso de que haya perdido ese contexto.
- **Referencias:** P-005 y P-006; F-019, F-026 y F-030; T-026.

### R-013 — Ajustar actividades y apariencia

- **Objetivo y partida:** personalizar las preferencias disponibles, dentro de la experiencia principal.
- **Secuencia:** 1) abrir ajustes; 2) marcar días de las actividades; 3) elegir claro u oscuro; 4) opcionalmente seleccionar un idioma; 5) cerrar con la cruz o cambiar de sección; 6) regresar al menú para ver indicadores o generar nuevas propuestas.
- **Resultado:** actividades y tema se intentan conservar sin «Guardar». La adaptación de nuevas propuestas se limita a la regla real descrita en F-028.
- **Alternativas y límites:** cerrar no cancela estas preferencias. No se rehacen las comidas existentes. No se modifican nombres ni actividades.
- **Recorrido incompleto:** seleccionar gallego o euskera no traduce; al reabrir ajustes vuelve a castellano.
- **Referencias:** P-007 y P-005; F-002, F-028 a F-031; T-004, T-029 y T-030.

### R-014 — Volver al trabajo mediante recarga, dirección guardada o navegación del navegador

- **Objetivo y partida:** retomar una sección o receta consultada anteriormente.
- **Secuencia normal:** 1) abrir `/`; 2) volver a superar acceso si corresponde; 3) llegar a inicio; 4) elegir la sección; 5) recuperar allí el trabajo que se haya podido conservar.
- **Resultado:** se puede recuperar contenido conservado, no necesariamente la pantalla, búsqueda o selección anterior.
- **Alternativas y bloqueos:** no hay una dirección de la receta seleccionada en la experiencia principal. Guardar una dirección independiente puede abrir una pantalla sin cabecera ni barra, un detalle sin receta o accesos sin continuación, según 4.4.
- **Historial:** «Atrás» del navegador no se gestiona como una vuelta entre las secciones internas. No se ha probado su resultado en navegadores concretos.
- **Referencias:** P-001 a P-007 según entrada; F-001, F-002, F-007 y F-030; REV, sin verificación interactiva.

### R-015 — Intentar recuperar la contraseña

- **Objetivo y partida:** entrar sin conocer la contraseña; P-001.
- **Secuencia aparente:** 1) localizar «¿Olvidaste tu contraseña?»; 2) pulsarlo.
- **Resultado encontrado:** no existe una acción o destino asociado en el material revisado.
- **Bloqueo:** no hay datos que introducir, envío que completar, instrucciones de contacto o establecimiento de una contraseña nueva.
- **Alternativas:** se desconoce si existe ayuda externa. No se inventa un procedimiento de recuperación.
- **Referencias:** P-001; F-032 y F-001; REV, clic PEND.

## 7. Reglas y comportamientos transversales

### 7.1. Identificación, sesión y permisos

- La contraseña es común: no hay identificación individual o separación funcional entre personas.
- Xabier y Maider no son roles ni usuarios seleccionables.
- El control de acceso previsto protege las entradas de las pantallas; una entrada sin sesión válida conduce al acceso.
- La duración prevista de sesión es 24 horas, no un plazo declarado de inactividad.
- No se ha encontrado renovación automática por actividad, salida visible o aviso anticipado de caducidad.
- Como los cambios normales de sección no son nuevas entradas independientes, no se puede afirmar que la caducidad cierre inmediatamente una experiencia ya abierta.
- Caducar la sesión no elimina por sí mismo el trabajo conservado en ese navegador.
- No se ha realizado una auditoría de seguridad ni comprobado el aislamiento de una instalación real.

### 7.2. Conservación de datos y preferencias

| Información | Conservación prevista | Límites percibidos |
|---|---|---|
| Menú, comidas y elecciones resueltas | Mismo navegador, mediante F-030. | No hay versiones, historial o recuperación. Regenerar y vaciar sustituyen o retiran el trabajo. |
| Compra, cantidades y marcas | Mismo navegador. | Generar desde menú sustituye todo; vaciar elimina toda la lista. |
| Favoritas | Mismo navegador. | No están asociadas a una identidad individual o dispositivo distinto. |
| Actividades de las dos personas | Mismo navegador. | No rehacen el menú existente. |
| Apariencia | Mismo navegador. | Aplicación visual real no verificada. |
| Idioma seleccionado | No se conserva. | Tampoco traduce. |
| Sección, receta abierta, búsqueda y filtro | No se conservan como estado de retorno entre visitas. | Una vuelta interna del detalle al catálogo sí mantiene sus criterios mientras siga abierta esa sección. |
| Selecciones del detalle o del selector antes de aplicar | No se conservan. | Salir no avisa ni guarda un borrador. |
| Confirmaciones y avisos | Temporales. | Sin historial de notificaciones. |

No hay un guardado explícito, aviso general de «sin guardar» o herramienta de copia de seguridad y restauración. La conservación puede fallar silenciosamente. No se ha identificado actualización automática entre pestañas ya abiertas; una visita nueva puede leer el último trabajo conservado.

### 7.3. Reglas reales reconstruidas de planificación

**Generar significa elegir recetas existentes, no crear recetas nuevas.** No se ha encontrado una generación de contenido culinario nuevo.

1. **Periodo:** siete días desde el día de generación; las ampliaciones continúan después del último día guardado. No existe control de fecha inicial.
2. **Momentos:** desayuno, comida, merienda y cena; una receta solo pertenece a los momentos declarados para ella.
3. **Fin de semana:** sábado y domingo. Las recetas declaradas solo de fin de semana se excluyen entre semana en la generación normal.
4. **Restricción combinada:** la receta de pescado blanco que anuncia fin de semana y cena se admite en cena entre semana y en comida o cena de fin de semana. Las dos etiquetas no se comportan como dos prohibiciones acumuladas.
5. **Familias de platos principales:** se evita que comida y cena sean ambas de carne, ambas de pescado o ambas de la categoría restante. Esta última regla también puede excluir dos platos vegetales o de huevos el mismo día; no es un modo vegetariano.
6. **Repeticiones:** se intenta evitar repetir recetas en el mismo día y, para las comidas principales, en días vecinos. También se intenta no repetir un mismo subtipo de carne o pescado en días consecutivos cuando la clasificación de la receta lo permite.
7. **Relajación:** algunas de esas restricciones de repetición se dejan de aplicar si no quedan candidatas. Se deja de tener en cuenta primero parte de la compatibilidad con el día siguiente, después la repetición de recetas del anterior y finalmente la repetición de subtipos. La regla de familia del mismo día permanece en la generación normal.
8. **Gimnasio:** solo se consultan los días de gimnasio de Xabier, y su efecto específico consiste en limitar la merienda a las dos recetas señaladas para gimnasio. No se calcula una cantidad de proteína.
9. **Otras actividades:** el gimnasio de Maider y el baloncesto de Xabier producen información de calendario, pero no intervienen en la selección revisada.
10. **Ingredientes:** una generación automática escoge alternativas al azar y puede incluir o excluir opcionales. La elección manual usa las alternativas seleccionadas y la inclusión indicada.
11. **Completado:** conservar cualquier comida hace que el día cuente como generado. Completar días no equivale a completar todos sus huecos. Si un menú existente tiene todos los días vaciados, se rellenan conservando fechas y extensión aunque el botón diga «Regenerar Menu».
12. **Excepción manual:** desactivar el criterio estricto permite elegir cualquier receta del momento, aunque contradiga las demás restricciones.
13. **Sin validación retroactiva:** cambiar manualmente una comida o modificar actividades no provoca una revisión general ni un aviso de incompatibilidad de todo el menú.
14. **Sin reglas acreditadas para:** cuota semanal de legumbres, variedad nutricional garantizada, reparto por persona, calorías, cantidades por comensal, fruta de temporada concreta o priorización de favoritas.

Estas son reglas del estado analizado, **no recomendaciones nutricionales ni reglas aprobadas para reconstrucción**. La clasificación de algunas recetas impide incluso aplicar uniformemente las restricciones existentes; H-005 lo detalla.

### 7.4. Reglas de ingredientes y compra

- La lista puede recibir una generación completa desde menú o aportaciones incrementales desde recetas; no son operaciones equivalentes.
- Coincidir en nombre y sección permite acumular; se ignoran diferencias de mayúsculas y espacios exteriores, pero no se unifican sinónimos, acentos o secciones distintas.
- Las secciones se presentan alfabéticamente. Dentro de cada una no hay una ordenación seleccionable; se conserva el orden de incorporación resultante.
- Se suman cantidades que comparten la misma unidad escrita. No se convierten gramos a kilogramos, unidades a gramos ni nombres equivalentes de unidad.
- Si hay varias unidades, se muestran separadas mediante «+». Si además faltan cantidades se indica «+ extra»; con una sola unidad conocida puede aparecer una expresión como «3+ ud».
- Una cantidad enteramente desconocida puede no mostrar ninguna cifra. No se calcula por el número de veces que aparece un ingrediente.
- Las cantidades mostradas pueden redondearse a dos decimales.
- Preparaciones como cocido o frito no distinguen filas de compra con el mismo nombre y sección. En la compra tampoco se muestra esa distinción.
- Un texto compuesto, por ejemplo varias especias reunidas en un nombre, sigue siendo un producto conjunto; no se convierte automáticamente en varias filas.
- La generación desde menú omite agua y «Ingredientes extra a elegir». Añadir desde detalle no aplica esa misma exclusión.
- Se respetan las cantidades originales de cada receta; las porciones declaradas no ajustan la compra.
- Modificar o vaciar el menú no modifica la compra hasta una nueva generación explícita.
- Añadir cantidad a un producto tachado no lo devuelve a pendiente.

### 7.5. Confirmaciones y acciones sensibles

No se ha encontrado confirmación previa para:

- Quitar una comida.
- Quitar las comidas de un día.
- Vaciar el menú.
- Regenerar el menú completo, incluida la reducción de varias semanas a una.
- Sustituir la compra al generarla desde menú.
- Vaciar la compra.

Tampoco hay deshacer o recuperación visibles. Esta ausencia es un hallazgo que debe validarse; **no una instrucción para conservarla**.

### 7.6. Validaciones, avisos y errores

- El acceso valida que exista contraseña y comunica determinados rechazos.
- El detalle permite una aportación parcial de ingredientes, sin exigir todos los necesarios.
- El selector de menú evita selecciones vacías de alternativas necesarias mediante sus valores iniciales; no solicita cantidades.
- Los avisos de falta de candidatas se limitan a determinadas operaciones individuales del menú.
- Añadir ingredientes, generar compra y copiar muestran confirmaciones breves, no comprobaciones visibles de que los datos sobrevivan a cerrar el navegador.
- Las confirmaciones suelen durar entre dos y dos segundos y medio; el aviso de falta de candidatas, aproximadamente tres segundos.
- No se han encontrado notificaciones persistentes, centro de avisos o reintento general.
- La copia del menú silencia el rechazo; la de compra no presenta un mensaje específico preparado. El resultado visual de esos errores no se ha probado.
- La conservación no disponible o agotada se silencia en las acciones revisadas. Algunos datos ilegibles se descartan y vuelven a vacío; no se cubre de forma acreditada cualquier daño parcial.

### 7.7. Idiomas, formatos, unidades y presentación

- La interfaz y las recetas actuales están en castellano, con algunas etiquetas sin tilde y el indicador de carga en inglés.
- La documentación en otros idiomas no acredita una interfaz traducida.
- Las fechas de pantalla usan día y mes abreviado en castellano; el texto copiado del menú añade el año o intervalo de años.
- La planificación se apoya en la fecha y hora locales del entorno de uso. No hay zona horaria configurable o cambio de semana escogible.
- Las cantidades combinan unidades del catálogo: «ud», «g», «ml», «cucharada», «taza», «tarrina» y «paquete», además de cantidades sin unidad.
- No se ha encontrado conversión a un sistema de medidas alternativo. Las cantidades decimales pueden mostrarse con punto.
- Las etiquetas e iconos de ingredientes no equivalen a etiquetas de alérgenos o valores nutricionales.
- Hay cambios de distribución por ancho de pantalla, pero no recorridos de producto diferentes por dispositivo.
- No hay una garantía de funcionamiento sin conexión. Algunos recursos visuales se obtienen de servicios externos.

### 7.8. Navegación, interacción y accesibilidad

- Las áreas principales se alternan sin una dirección propia en la experiencia normal.
- El detalle tiene una vuelta explícita; los paneles se cierran sobre el origen.
- Solo el visor de imágenes tiene Escape identificado. Las asas de los paneles son visuales, no gestos de cierre acreditados.
- Parte de las acciones de menú se descubren por deslizamiento o ratón, y algunos accesos se presentan como textos o áreas pulsables en vez de controles expresamente preparados para teclado.
- Varios botones solo muestran iconos. No se ha probado que sus nombres sean comprensibles con tecnología de apoyo.
- No se ha realizado una auditoría de foco, contraste, lectores de pantalla, teclado o gestos en dispositivos reales.

## 8. Funcionalidades dudosas, incompletas o abandonadas

Los hallazgos siguientes están separados de las capacidades confirmadas en pruebas aisladas. Un problema de información, una sospecha de interacción o una entrada descontextualizada **no se presenta como una funcionalidad adicional operativa**.

| ID | Qué se ha encontrado y evidencia | Efecto o riesgo para la experiencia | Qué falta confirmar |
|---|---|---|---|
| **H-001** | Recuperación sin acción asociada. REV de F-032, P-001. | Promete una salida a quien desconoce la contraseña, pero el recorrido termina allí. | Clic real y existencia de un procedimiento externo. |
| **H-002** | Idiomas que solo cambian selección local. REV de F-031, P-007. | La interfaz sigue en castellano y la elección se pierde al volver. | Interacción real y si estas opciones eran intención futura o pantalla incompleta. |
| **H-003** | Las normas anuncian adaptación amplia por descanso, gimnasio y baloncesto. Solo el gimnasio de Xabier interviene en meriendas. REV y T-004/T-029. | La persona puede confiar en un cumplimiento nutricional que no está acreditado. | Procedencia de las normas, alcance realmente deseado y validación profesional si se pretende sostener esa atribución. |
| **H-004** | Las etiquetas de restricción de la receta de pescado blanco no expresan con claridad la alternativa entre cena laboral y fin de semana. REV y T-003. | «Solo fin de semana» puede interpretarse como una prohibición que el menú no aplica en cenas laborales. | Sentido de negocio de ambas etiquetas y texto que se considera correcto. |
| **H-005** | «Brócoli Vigués + 2º Plato» no queda reconocido como plato de carne para la regla de familia. Otras recetas de carne/pescado no distinguen subtipo. REV y T-006. | Puede admitirse otra carne el mismo día, o no aplicarse la variedad de subtipos en días vecinos. | Clasificación válida de cada receta y de sus alternativas; no se presupone que la regla actual deba conservarse. |
| **H-006** | «Legumbres solo un día a la semana» aparece en dos preparaciones, pero no limita propuestas. T-018 obtuvo una semana con lentejas en tres días. | Una nota de receta puede confundirse con una norma global cumplida. | Si es una norma intencional, una recomendación personal o un texto que debe retirarse. |
| **H-007** | Catorce recetas no tienen instrucciones y otras cinco solo indican cocinar al gusto según ingredientes. REV del catálogo y T-036. | El recetario sirve parcialmente como guía de ingredientes, pero no siempre como receta ejecutable. | Si el contenido es deliberadamente abierto o está por completar. No se ha identificado como demostración. |
| **H-008** | Solo 41 de 198 apariciones de ingredientes tienen cantidad. Hay recetas de 1, 2 y 4 porciones, sin ajuste de compra. Recuento y T-012. | Una lista generada no constituye una lista cuantificada para un número conocido de personas. | A qué personas o raciones corresponde cada receta y qué cantidades son utilizables. |
| **H-009** | Preparaciones y listas de ingredientes no siempre coinciden: la tostada verde sugiere huevo opcional que no aparece entre sus ingredientes; otros textos mencionan acompañamientos no representados o miel opcional declarada como necesaria. REV del catálogo. | Lo necesario para cocinar puede no llegar a la compra o quedar incluido con una obligatoriedad distinta. | Revisión culinaria del contenido y qué fuente debe prevalecer. |
| **H-010** | «Completar semana» deja huecos de días parcialmente ocupados; «Regenerar Menu» puede reducir catorce días a siete o rellenar los días conservados si todos estaban vaciados. T-008/T-019/T-020/T-021. | Una misma etiqueta cubre resultados distintos; posible pérdida de planificación sin confirmación. | Intención de completado y regeneración, y si esas consecuencias son aceptadas. |
| **H-011** | La propuesta aleatoria puede relajar reglas que el selector estricto mantiene. Con un catálogo reducido de prueba, «Otra» pudo devolver la misma receta. REV y T-007. | Distintas acciones de sustitución no prometen el mismo nivel de cumplimiento o variedad. | Frecuencia real de escasez con las 38 recetas y significado esperado de «Otra». |
| **H-012** | Generar compra reemplaza; añadir desde detalle acumula. Las exclusiones y las marcas tampoco se tratan igual. T-023/T-024/T-025. | Aportaciones desaparecen al generar, agua o extras pueden entrar por otra vía y nuevas cantidades pueden quedar ocultas entre productos tachados. | Qué diferencias son intencionales y cómo debe interpretarlas la persona. |
| **H-013** | La selección de ingredientes del detalle solo prepara compra; no modifica la comida de origen. REV de F-009/F-010 frente a F-017. | Desde una receta abierta en el menú puede parecer una edición de ese menú sin serlo. Repetir «Anadir» vuelve a acumular. | Qué propósito se esperaba para esa selección y si se distingue suficientemente del selector de menú. |
| **H-014** | La compra no se sincroniza con cambios de menú y ambos se vacían independientemente. T-025/T-026. | Puede quedar una lista antigua sin advertencia después de modificar o vaciar la planificación. | Si la compra debe entenderse como una captura independiente o como una representación del menú; no se decide aquí. |
| **H-015** | Hay direcciones independientes sin la navegación normal; inicio puede fallar, compra vacía no navega y detalle no recibe receta. REV y comprobación documental del alcance de esas entradas. | Accesos guardados o manuales pueden llevar a callejones sin salida. | Respuesta real de cada dirección en una instalación configurada. No se califican como pantallas muertas. |
| **H-016** | Las secciones no conservan un destino propio ni todo su estado; abrir ajustes o recargar puede perder el punto de consulta. REV de F-002/F-030. | El trabajo guardado puede existir aunque se pierdan búsqueda, detalle o selección en curso. | Comportamiento real del historial y si la experiencia es la pretendida. |
| **H-017** | La foto del detalle tiene una acción de ampliación prevista, pero otros elementos visuales ocupan su superficie. REV de P-004. | Posible impedimento para abrir D-001 desde ese origen. **Sospecha, no fallo observado.** | Pulsación por ratón y tacto en una pantalla ejecutándose. |
| **H-018** | La conservación fallida no se comunica y ciertos datos ilegibles se sustituyen por vacío. T-027/T-028; REV de otras lecturas. | Cambios aparentemente aceptados pueden no reaparecer; no hay explicación o recuperación general. | Comportamiento con restricciones reales del navegador, datos antiguos y daños parciales de distintas clases. |
| **H-019** | La copia no tiene un error comprensible preparado; la lista puede copiar texto vacío con todo tachado. REV y T-014/T-035. | Ausencia de explicación cuando no se puede copiar o confirmación de una copia sin productos. | Permisos, entornos sin copia y resultado real de sus fallos. |
| **H-020** | Las retiradas, sustituciones y vaciados no solicitan confirmación ni ofrecen deshacer. REV de sus controles y acciones. | Se puede perder trabajo con una pulsación o sustituirlo sin advertir su alcance. | Si se trata de una decisión deliberada; ninguna prueba aislada legitima conservar esta ausencia. |
| **H-021** | Acciones laterales por gesto/ratón, áreas pulsables sin preparación explícita para teclado y botones solo de icono. REV. | Puede dificultar descubrimiento y accesibilidad. | Auditoría real con teclado, tacto, foco, lector de pantalla y anchos pequeños. |
| **H-022** | La presentación documental de producto privado no explica el alcance local del trabajo ni el uso de recursos visuales externos. DOC/REV. | «Privado» puede interpretarse como una garantía de confidencialidad, aislamiento u operación sin conexión no comprobada. | Significado del compromiso, instalación real y requisitos de privacidad; no se concluye una filtración de datos. |
| **H-023** | La espera del catálogo depende de la terminación de imágenes, sin límite o reintento específico encontrado. REV. | Posible espera prolongada si alguna no finaliza; no se ha observado con el catálogo actual. | Redes lentas, fallos reales y recuperación del indicador. |
| **H-024** | Hay posibilidades de apoyo sin controles de uso, como preparar fechas distintas o incluir tachados en un texto. REV, sin entrada de interfaz. | No son capacidades disponibles para la persona; no deben convertirse en requisitos por encontrarse en el material revisado. | Si respondían a pruebas, compatibilidad o intención no terminada. |
| **H-025** | Las capturas son anteriores y no incluyen todas las acciones o estados actuales, por ejemplo generación individual y selección manual. CAP frente a REV. | No pueden utilizarse como evidencia de que hoy funcionan los recorridos o como inventario suficiente. | Fecha y versión a la que corresponden. |

### 8.1. Recetas sin preparación

El catálogo actual carece de instrucciones para:

1. Bowl de Pescado con Aguacate y Huevo.
2. Brócoli Vigués + 2º Plato.
3. Puré de calabaza + 2º Plato.
4. Puré de brócoli + 2º Plato.
5. Guisantes con jamón + 2º Plato.
6. Kéfir con frutos secos.
7. Batido de proteína con crema de cacahuete.
8. Batido de proteína con plátano y cacao.
9. Crackers integrales con jamón serrano.
10. Bowl de quinoa con verduras y huevo.
11. Pescado con ensalada de aguacate.
12. Ensalada de pollo con quinoa y aguacate.
13. Fajitas de pollo con pimientos.
14. Pizza de masa de huevo.

Las cuatro recetas aleatorias de carne o pescado y «Hamburguesas de potro» tienen una instrucción genérica de cocinar al gusto. No se las considera equivalentes a una preparación detallada, pero tampoco se presupone que sean datos falsos.

### 8.2. Duplicidades y abandono: qué se puede afirmar

- «Revuelto de espinacas» y «Revuelto de espinacas + 2º Plato» comparten parte del contenido y fotografía, pero tienen momentos y composición diferentes. Son variantes consultables; **no se demuestra una duplicidad accidental**.
- Las dos entradas «Añadir semana» son controles repetidos de F-015, no dos funcionalidades.
- El detalle y el selector manual permiten elegir ingredientes con propósitos distintos. La similitud de controles no significa que realicen la misma operación.
- No se ha encontrado una pantalla funcional adicional, inequívocamente abandonada y sin ninguna entrada, que deba sumarse a las siete inventariadas.
- Todas las recetas actuales tienen al menos un momento de comida y son candidatas a mostrarse en el catálogo general. No se ha localizado un catálogo de demostración alternativo conectado a la experiencia.
- La revisión de las relaciones de uso no ha encontrado piezas auxiliares completas sin relación identificable con las pantallas. Esto **no demuestra ausencia de fragmentos sin uso** y no permite declarar muerto todo lo que no aparezca en la navegación.
- Las direcciones independientes y las posibilidades no expuestas de H-015/H-024 requieren investigación, no una decisión automática de conservar o eliminar.

## 9. Decisiones y preguntas para la futura reconstrucción

Las prioridades ordenan la validación del producto, no una implementación. Las categorías indican **qué decisión está pendiente**, no cuál se recomienda tomar.

### 9.1. Prioridad P0 — Aclaraciones que condicionan el producto

| ID | Pregunta que requiere respuesta | Funcionalidades o pantallas afectadas | Decisión pendiente |
|---|---|---|---|
| Q-001 | ¿El producto corresponde al uso concreto de Xabier y Maider o esos nombres son una personalización circunstancial? ¿Quién es la persona destinataria real de cada menú? | F-001, F-011, F-028; P-005 y P-007. | **Investigar; conservar, cambiar o eliminar** el alcance personal fijo. No se presuponen cuentas o roles nuevos. |
| Q-002 | ¿Qué reglas nutricionales son intencionales y cuáles son solo textos aspiracionales? ¿Se puede mantener de forma acreditada la atribución a criterios de nutricionista? | F-011 a F-017, F-020, F-028; H-003 a H-006. | **Investigar; conservar, cambiar, eliminar o completar** reglas y afirmaciones. |
| Q-003 | ¿Para cuántas personas se planifica y cómo deben interpretarse recetas de una, dos o cuatro porciones? ¿Qué cantidades del catálogo son válidas y cuáles faltan? | F-007, F-009 a F-011, F-017, F-022 y F-023; H-008/H-009. | **Investigar, cambiar o completar** el significado de porciones y cantidades; no se presupone un cálculo nuevo. |
| Q-004 | ¿Qué expectativa de permanencia y separación del trabajo existe al compartir navegador, cambiar de dispositivo o caducar la sesión? ¿Es correcto el alcance local actual? | F-001, F-006, F-028 a F-030; P-001 a P-007. | **Conservar, cambiar o completar** el compromiso de conservación e identidad. |
| Q-005 | ¿Qué debe conservarse al completar, regenerar, añadir semanas o generar compra? ¿Son aceptadas la reducción a siete días, la sustitución de compra y la ausencia de confirmaciones? | F-013 a F-015, F-018, F-019, F-022 y F-026; H-010/H-012/H-020. | **Conservar o cambiar**, y decidir si corresponde **completar** los recorridos de protección del trabajo. |
| Q-006 | ¿Qué instalación representa el producto vigente y cómo se validarán en ella los recorridos principales sin afectar datos reales? | Todas; especialmente P-001 y P-005/P-006. | **Investigar** funcionamiento real antes de considerar este análisis una validación de uso. |

### 9.2. Prioridad P1 — Semántica de los recorridos y alcance

| ID | Pregunta que requiere respuesta | Funcionalidades o pantallas afectadas | Decisión pendiente |
|---|---|---|---|
| Q-007 | ¿Qué recetas se consideran suficientemente completas? ¿Se mantienen las recetas abiertas «al gusto», las variantes parecidas y los ingredientes genéricos? | F-003, F-007 y F-017; P-003/P-004; H-007/H-009. | **Conservar, completar, cambiar o eliminar** contenido, tras validación. |
| Q-008 | ¿Qué restricciones deben ser obligatorias y cuáles pueden relajarse? ¿Debe una elección manual poder saltárselas sin advertencia? ¿Qué debe significar «Otra»? | F-011, F-012, F-016, F-017 y F-020; H-004/H-005/H-011. | **Investigar, conservar o cambiar** las reglas y sus excepciones. |
| Q-009 | ¿Qué significa «semana» para este producto y qué debería ocurrir al volver días después a un menú antiguo? ¿Se acepta el periodo móvil de siete días actual? | F-011 a F-015 y F-030; P-005. | **Conservar o cambiar** el significado de fechas y periodo, sin asumir nuevas pantallas. |
| Q-010 | ¿La compra se entiende como captura independiente o como derivación del menú? ¿Qué ocurre con productos añadidos desde recetas y con cantidades nuevas de algo tachado? | F-010, F-022 a F-026; P-004 a P-006; H-012/H-014. | **Conservar, cambiar o completar** la relación entre ambas áreas. |
| Q-011 | ¿La selección de ingredientes del detalle debe servir únicamente para compra? ¿Se mantiene la diferencia con la personalización del menú y cómo se valida su comprensión? | F-009, F-010 y F-017; P-004, D-003; H-013. | **Conservar, cambiar o eliminar** duplicidades percibidas; **investigar** intención. |
| Q-012 | ¿Cuál es el procedimiento de acceso y recuperación realmente aceptado? ¿Se mantiene una contraseña común? ¿Qué debe ocurrir al caducar durante el uso? | F-001 y F-032; P-001; H-001. | **Conservar, cambiar, completar o eliminar** entradas que hoy prometen más de lo que hacen. |
| Q-013 | ¿Se conserva el alcance actual de favoritas como atajo de consulta, sin influencia en la planificación? | F-005, F-006 y F-011; P-003/P-005. | **Conservar, cambiar o eliminar** ese alcance, sin atribuirle una función actual que no tiene. |
| Q-014 | ¿Qué personas y actividades deben representarse y qué influencia real debe tener cada una? ¿Es intencional que solo una afecte a las meriendas? | F-028, F-011 a F-017; P-005/P-007; H-003. | **Conservar, cambiar, completar o eliminar** personalizaciones y efectos. |
| Q-015 | ¿Qué idiomas forman parte del producto validado? ¿Se completan las opciones de idioma o se retiran las que hoy no traducen? | F-031; P-007; H-002. | **Completar, cambiar o eliminar** la promesa, o **conservar** solo el alcance que se apruebe. |
| Q-016 | ¿Qué se espera de recargar, usar «Atrás» o abrir una dirección guardada? ¿Las entradas independientes forman parte del producto soportado? | F-002, F-007 y F-030; P-002 a P-007; H-015/H-016. | **Investigar; conservar, cambiar, completar o eliminar** esas variantes de acceso. |

### 9.3. Prioridad P2 — Contrato de uso y calidad funcional

| ID | Pregunta que requiere respuesta | Funcionalidades o pantallas afectadas | Decisión pendiente |
|---|---|---|---|
| Q-017 | ¿Es correcto que el menú copiado no incluya cantidades y que copiar una compra completamente tachada produzca texto vacío? ¿Qué se debe comunicar si copiar falla? | F-021 y F-025; P-005/P-006; H-019. | **Conservar, cambiar o completar** contenido y respuestas de copia. |
| Q-018 | ¿Se considera suficiente el cambio de apariencia actual y qué estados de carga, conservación fallida o contenido incompleto deben validarse? | F-003, F-007, F-029 y F-030; H-007/H-018/H-023. | **Investigar, conservar, cambiar o completar** los estados existentes. |
| Q-019 | ¿Qué condiciones de uso por móvil, ratón, teclado y tecnología de apoyo debe cumplir el producto validado? | F-002, F-008, F-016 a F-018; P-001 a P-007; H-017/H-021. | **Investigar** accesibilidad real y decidir qué **conservar, cambiar o completar**. |
| Q-020 | ¿Qué significa exactamente el compromiso de privacidad y qué afirmaciones pueden sostenerse con evidencia del uso real? | F-001 y F-030; H-022. | **Investigar; conservar, cambiar, eliminar o completar** las afirmaciones y su alcance. |

**Paso posterior, fuera de este análisis:** validar estas respuestas y clasificar el producto que se desea conservar, cambiar y eliminar. Esa versión funcional validada —no una reproducción automática de las reglas y errores aquí encontrados— debe preceder a las especificaciones de reconstrucción.

## 10. Cobertura y límites del análisis

### 10.1. Qué se ha revisado

- Las entradas de pantalla, la navegación general y las variantes de dirección independiente.
- Todos los controles y bloques de presentación identificados en las siete pantallas y cuatro ventanas relevantes.
- Las acciones de acceso, sesión y respuestas previstas de error.
- Búsqueda, filtros, favoritas, detalle, selección de ingredientes y preparación.
- Generación de días, completado, regeneración, ampliación, retirada, elección manual e información de entrenamiento.
- Generación y ampliación de compra, cantidades, marcas, vaciado y preparación de textos para copiar.
- Conservación de datos, apariencia, actividades e idioma aparente.
- El catálogo completo y sus fotografías asociadas.
- Las tres versiones lingüísticas de la documentación de presentación y las siete capturas incluidas.
- Las relaciones de uso del material auxiliar y las búsquedas de posibles acciones sin terminar. No apareció otra pantalla funcional que hubiera que añadir al inventario.

### 10.2. Datos actuales revisados

| Dato | Recuento o resultado |
|---|---|
| Recetas | 38, sin identificadores duplicados en el catálogo revisado. |
| Aptas para desayuno | 9. |
| Aptas para comida | 14. |
| Aptas para merienda | 5. |
| Aptas para cena | 15. |
| Aptas para más de un momento | Hay solapamientos; los cuatro recuentos anteriores no deben sumarse como recetas diferentes. |
| Recetas de merienda señaladas para gimnasio | 2. |
| Porciones declaradas | 1, 2 o 4. |
| Recetas sin preparación | 14, enumeradas en 8.1. |
| Apariciones de ingredientes en recetas | 198; no son 198 productos distintos. |
| Apariciones con cantidad | 41; las otras 157 no aportan cantidad. |
| Apariciones opcionales | 23. |
| Grupos con alternativas | 44. |
| Secciones de compra declaradas | 16; se muestran según los productos presentes. |
| Fotografías asociadas | No faltan los archivos de fotografía referidos por las recetas; esto no equivale a comprobar su carga visual. |

Estos recuentos caracterizan el material actual, no garantizan calidad culinaria o nutricional.

### 10.3. Qué se ha podido probar directamente y qué no

**Comprobaciones propias realizadas:**

- Lectura de las capturas entregadas, tratadas solo como evidencia de su contenido histórico.
- Recuento y revisión del catálogo completo.
- Ejercicio aislado de generación, selección de candidatas, ingredientes, acumulaciones, retirada, conservación simulada, textos de copia y respuestas de acceso con información ficticia.
- Comprobación de que el servicio local encontrado en el puerto habitual pertenecía a otro proyecto; se descartó como evidencia de esta aplicación.

**No se ha probado directamente la interfaz de esta aplicación.** No se identificó una instancia de este proyecto disponible para la exploración ni se dispuso de configuración real de acceso. No se alteró la configuración, no se arrancó una compilación que creara archivos adicionales y no se utilizaron datos de una instalación ajena.

Las 36 comprobaciones siguientes finalizaron con los resultados descritos. Confirmar una anomalía en una prueba significa confirmar ese comportamiento aislado, **no aprobarlo como requisito**.

| Prueba | Alcance comprobado en memoria | Resultado relevante |
|---|---|---|
| T-001 | Periodo inicial con el catálogo actual. | Siete días consecutivos y cuatro posiciones por día, desde la fecha de partida. |
| T-002 | Añadir una semana. | Siete días posteriores, conservando los anteriores. |
| T-003 | Restricciones combinadas de la receta de pescado blanco. | Cena laboral admitida, comida laboral excluida, comida de sábado admitida. |
| T-004 | Meriendas de gimnasio. | Las dos candidatas señaladas para gimnasio. |
| T-005 | Categoría restante en comida y cena. | Dos platos de esa categoría quedan excluidos el mismo día en la generación normal. |
| T-006 | Clasificación de «Brócoli Vigués + 2º Plato». | Admite otra carne porque no se reconoce como carne para esa restricción. |
| T-007 | Escasez con catálogo reducido de prueba. | Lista estricta sin alternativa, pero sustitución aleatoria capaz de repetir la receta. |
| T-008 | Completado de un menú con un día parcialmente ocupado. | Conserva sus huecos y genera los días enteramente vacíos. |
| T-009 | Quitar y reponer una comida. | Hueco individual y sustitución posterior sin retirar el resto del menú. |
| T-010 | Resolución de ingredientes opcionales. | Inclusión/exclusión automática posible; exclusión manual respetada. |
| T-011 | Suma de cantidades con unidades diferentes y parte desconocida, usando datos de prueba. | Etiqueta combinada, sin conversión de unidades. |
| T-012 | Extracción desde receta de cuatro porciones y productos excluidos. | Cantidades originales; agua y extra genérico excluidos desde menú. |
| T-013 | Ingrediente del mismo nombre con preparaciones distintas, usando datos de prueba. | Una fila acumulada sin distinción de preparación. |
| T-014 | Texto de compra y marcas, usando datos de prueba. | Solo pendientes; secciones ordenadas; texto vacío si todo está tachado. |
| T-015 | Catálogo sin candidatas, construido para la prueba. | Semana con huecos; generación de un día informa de falta de éxito. No demuestra escasez real de las 38 recetas. |
| T-016 | Candidatas del momento sin criterio estricto. | Incluye recetas restringidas por calendario. |
| T-017 | Reproducción aislada del criterio leído de búsqueda, no interacción con el campo. | No distingue mayúsculas; sí acentos y espacios exteriores. |
| T-018 | Generación repetida con el catálogo actual. | Se obtuvo una semana con lentejas en tres días: la nota semanal no es una restricción aplicada. |
| T-019 | Regeneración después de ampliar a catorce días. | Sustitución por siete días. |
| T-020 | Regeneración con un hueco en un día que conserva comidas. | Sigue tratándose como menú generado; regeneración completa. |
| T-021 | Completado en catorce días con un día vaciado; variante con todos los días vaciados. | Mantiene los otros días cuando existen y conserva fechas y extensión incluso si todos estaban vacíos. |
| T-022 | Generar solo un día desde el estado sin menú. | Un día generado y otros seis vacíos. |
| T-023 | Aportación directa de agua y extra genérico, equivalente a una selección desde detalle. | Ambos se incorporan por esa vía. |
| T-024 | Aportación a un producto ya tachado. | Suma cantidad y mantiene la marca. |
| T-025 | Generar compra después de aportaciones y marcas. | Sustituye productos y reinicia marcas; cambiar luego el menú no actualiza la lista. |
| T-026 | Vaciados de menú y compra. | Independientes entre sí. |
| T-027 | Lectura de una compra ilegible de prueba. | Devuelve lista vacía y descarta el valor ilegible simulado. |
| T-028 | Rechazo simulado de conservación. | Las acciones siguen cambiando el trabajo en memoria, sin garantizar su conservación. |
| T-029 | Calendarios de actividades. | Las tres actividades producen información; solo un calendario de gimnasio alimenta generación. |
| T-030 | Preferencia de apariencia y presentación simulada. | Preferencia actualizada; no demuestra el aspecto en una pantalla real. |
| T-031 | Contraseña vacía y configuración de contraseña ausente, en entorno ficticio. | Respuestas específicas previstas. |
| T-032 | Contraseñas ficticias correcta e incorrecta y destino de sesión simulado. | Rechazo/aceptación; duración prevista de 24 horas, sin crear sesión real. |
| T-033 | Sesión ficticia válida, alterada y caducada. | Aceptación de la válida y rechazo de las otras. |
| T-034 | Acceso ficticio sin configuración de sesión. | Interrupción sin una respuesta amable preparada para el formulario. |
| T-035 | Preparación de texto del menú. | Incluye ingredientes, no cantidades ni preparación; no usa el portapapeles real. |
| T-036 | Tratamiento del texto de preparación. | Ausencia detectada; las recetas de ejemplo se separan en sus pasos numerados. |

### 10.4. Matriz de funcionalidades, pantallas y recorridos

En esta matriz, la presencia de una referencia significa **cobertura del análisis**, no ejecución del recorrido.

| Funcionalidad | Pantallas o ventanas | Recorridos | Evidencia principal |
|---|---|---|---|
| F-001 | P-001; acceso a las demás. | R-001, R-014, R-015. | REV; T-031 a T-034. |
| F-002 | P-002 a P-007. | R-002, R-003, R-004, R-013, R-014. | REV, CAP. |
| F-003 | P-003. | R-002, R-003. | REV, CAP, catálogo. |
| F-004 | P-003. | R-002. | REV; T-017 con el alcance limitado indicado. |
| F-005 | P-003. | R-002. | REV, CAP parcial. |
| F-006 | P-003. | R-002. | REV, CAP del control. |
| F-007 | P-004 desde P-003/P-005. | R-002, R-003, R-004, R-014. | REV, catálogo; T-036. |
| F-008 | P-003, P-004, P-005; D-001. | R-002. | REV; apertura desde detalle pendiente. |
| F-009 | P-004. | R-003. | REV. |
| F-010 | P-004; resultado en P-006. | R-003. | REV; T-023/T-024. |
| F-011 | P-005. | R-004. | REV; T-001, T-003 a T-006, T-010/T-015. |
| F-012 | P-005. | R-005. | REV; T-015/T-022. |
| F-013 | P-005. | R-005, R-008. | REV; T-008/T-021. |
| F-014 | P-005. | R-008. | REV; T-019/T-020. |
| F-015 | P-005. | R-008. | REV; T-002/T-019. |
| F-016 | P-005. | R-005, R-006. | REV; T-007/T-009. |
| F-017 | P-005; D-003. | R-005, R-006, R-007. | REV; T-003/T-007/T-010/T-016. |
| F-018 | P-005. | R-006. | REV; T-009/T-021. |
| F-019 | P-005. | R-012. | REV; T-022/T-026. |
| F-020 | P-005; D-002. | R-004. | REV de ayuda; contraste T-004/T-029. |
| F-021 | P-005. | R-008, R-009. | REV; T-035. |
| F-022 | P-005; resultado en P-006. | R-008, R-010. | REV; T-011 a T-013, T-025. |
| F-023 | P-006. | R-003, R-010, R-011. | REV, CAP; T-011 a T-014. |
| F-024 | P-006. | R-011. | REV, CAP; T-014/T-024/T-025. |
| F-025 | P-006. | R-011. | REV; T-014. |
| F-026 | P-006. | R-012. | REV; T-026. |
| F-027 | P-006; D-004. | R-011. | REV de ayuda; contraste T-014. |
| F-028 | P-007 y P-005. | R-004, R-013. | REV; T-004/T-029. |
| F-029 | P-007; efecto transversal. | R-013. | REV; T-030 con presentación simulada. |
| F-030 | P-002 a P-007; continuidad tras P-001. | R-001, R-003, R-010 a R-014. | REV; T-027/T-028, conservación simulada. |
| F-031 | P-007. | R-013. | REV; traducción no acreditada. |
| F-032 | P-001. | R-015. | REV; recorrido sin continuación. |

### 10.5. Qué sigue pendiente y por qué

1. **Recorridos completos reales:** no hay una ejecución interactiva del producto que contraste todas las acciones con sus resultados visibles.
2. **Acceso y caducidad en instalación:** no se ha iniciado una sesión real ni se han observado redirecciones o errores reales de acceso.
3. **Entrada por cada dirección:** su alcance se reconstruyó; falta contrastar disponibilidad, posibles fallos y salidas en una instalación configurada.
4. **Ratón, tacto y teclado:** gestos laterales, cierre de paneles, foco, pulsación de la imagen del detalle, historial y comportamiento del teclado virtual.
5. **Conservación auténtica:** recargar, cerrar y reabrir el navegador, usar varias pestañas, restricciones de conservación, límite de espacio y datos antiguos.
6. **Copia real:** permisos concedidos o denegados, ausencia de capacidad de copia y pegado posterior.
7. **Red y presentación:** imágenes lentas o fallidas, recursos visuales externos no disponibles, diferencias entre navegadores y modo oscuro completo.
8. **Datos dañados parcialmente:** se ensayaron casos concretos, no todas las formas de información guardada incompatible.
9. **Límites prácticos:** muchas semanas, listas grandes, rendimiento, uso prolongado, cambios de fecha durante una visita y accesibilidad formal.
10. **Validación de negocio:** público real, contenido culinario, origen de las normas y consecuencias nutricionales no pueden deducirse con certeza del producto.
11. **Servicios o procedimientos externos:** no se acredita si existe una recuperación manual de contraseña, mantenimiento operativo o configuración distinta fuera del proyecto revisado.

No se han realizado compras, envíos, publicaciones ni eliminaciones sobre datos reales. Los vaciados y sustituciones de las comprobaciones se efectuaron exclusivamente sobre datos en memoria. **El único archivo del proyecto creado o actualizado para esta entrega es este documento.**

### 10.6. Comprobación de calidad de la entrega

- Las siete pantallas están descritas; las direcciones alternativas figuran como variantes y pendientes, no como pantallas adicionales.
- Las cuatro ventanas y el segundo paso del selector tienen controles, salidas y cancelaciones descritos.
- Los controles encontrados tienen comportamiento explicado o incertidumbre expresa.
- Las funcionalidades compartidas se referencian por su identificador; los dos accesos a añadir semana no duplican funcionalidad.
- Los quince recorridos incluyen condiciones, resultado, alternativas y bloqueos.
- Las afirmaciones documentales, la lectura, las capturas históricas, las pruebas aisladas y las dudas están diferenciadas.
- Las entradas de idioma y recuperación no se presentan como capacidades completas.
- Los problemas actuales y los casos de prueba artificiales no se han convertido en requisitos futuros.
- No se ha diseñado arquitectura, seleccionado tecnología ni elaborado un plan de implementación.

## Anexo breve de trazabilidad técnica

Este anexo es prescindible para comprender el producto. Agrupa las referencias que justifican el análisis sin trasladar detalles de implementación al cuerpo funcional.

**Revisión de partida:** `f799f0d94201bdd4356ad4070260862f2c34ffc8`. El repositorio estaba sin cambios antes de crear este documento.

| Zona o hallazgo | Referencias principales |
|---|---|
| Objetivos declarados y guía | `README.es.md:5-9,87-159`; `README.md`; `README.pt.md`. |
| Contenedor, cambios de sección y retorno de ajustes | `app/page.js:12-37`; `components/header.js:3-32`; `components/navbar.js:5-80`. |
| Acceso y recuperación sin acción | `app/login/page.js:8-17,43-102`; `app/login/actions.js:6-27`. |
| Sesión y protección de entradas | `lib/auth.js:3-4,16-72`; `proxy.js:4-24`; `.env.example`. |
| Inicio | `app/home/page.js:3-58`. |
| Catálogo, búsqueda, favoritas y grupos | `app/recipes-list/page.js:13-150`; presentación en `app/recipes-list/components`, especialmente `app/recipes-list/components/RecipeCard.js:9-46` y `app/recipes-list/components/MealTypeFilter.js:2-9`. |
| Carga de fotografías | `hooks/useImagesLoading.js:3-21`; `components/Loader.js`; `components/Loader.css`. |
| Detalle y preparación | `app/recipe-detail/page.js:10-49`; `app/recipe-detail/components/RecipeSteps.js:1-87`; `app/recipe-detail/components/RecipeMeta.js:3-45`. |
| Selección para compra | `app/recipe-detail/components/IngredientsPanel.js:7-111`; `app/recipe-detail/components/IngredientItem.js`; `app/recipe-detail/components/IngredientSubgroup.js:15-35`. |
| Posible interferencia al pulsar imagen del detalle | `app/recipe-detail/components/RecipeHero.js:3-18`. La acción está en la imagen y hay una superposición completa; no se ensayó en navegador. |
| Fechas, elegibilidad, familias y relajación | `lib/menuGenerator.js:58-86,93-174,236-348`. El valor `meat` del catálogo no se trata igual que `meet`; los valores genéricos tampoco determinan subtipo. |
| Ingredientes resueltos, generación y ampliación | `lib/menuGenerator.js:180-234,350-503`. |
| Completado, regeneración, conservación y vaciado | `hooks/useWeeklyMenu.js:29-59,78-159`; `app/menu/page.js:20-59,74-196`. |
| Acciones de día, hueco y gestos | `app/menu/components/DayCard.js`; `app/menu/components/EmptyDayCard.js`; `app/menu/components/EmptyMealSlot.js`; `app/menu/components/SwipeableMealItem.js:18-135`; `app/menu/components/MealItem.js`. |
| Selector manual de dos pasos | `app/menu/components/RecipePickerModal.js:13-89,109-251,282-352`. |
| Normas anunciadas frente a entrenamiento usado | `app/menu/components/NutritionRulesModal.js:5-24`; `hooks/useWeeklyMenu.js:75-76`; `hooks/useTrainingSchedule.js:76-99`; `app/menu/components/TrainingBadges.js`. |
| Copia de menú y generación de compra | `app/menu/components/CopyMenuButton.js:24-78`; `app/menu/components/GenerateShoppingListButton.js:10-34`; `app/menu/components/MenuHeader.js`; `app/menu/components/AddWeekButton.js`. |
| Acumulaciones, exclusiones, cantidades y texto de compra | `lib/ingredients.js:26-65`; `lib/shoppingList.js:64-113`; `hooks/useShoppingList.js:57-171`. |
| Pantalla, ayuda y acciones de compra | `app/shopping-list/page.js`; presentación en `app/shopping-list/components`, incluidos `app/shopping-list/components/EmptyShoppingList.js:25-38` y `app/shopping-list/components/ShoppingListActions.js:8-33`. |
| Ajustes, idioma y tema | `app/settings/page.js:7-19,53-56,82-214`; `hooks/useTheme.js:27-55`; `hooks/useTrainingSchedule.js`. |
| Visor, avisos y presentación común | `components/ImageModal.js`; `components/Toast.js`; `components/IngredientList.js`; `app/layout.js`; `app/globals.css`. |
| Recuentos, contenido incompleto y clasificaciones | `data/recipes.json`, revisado completo; recursos asociados en `public/recipes`. |
| Capturas históricas | Las siete imágenes de `docs/screenshots`, todas examinadas; no hay una fecha de vigencia acreditada. |

**Método de las comprobaciones aisladas:** se leyó el material original y se ejecutaron sus reglas en procesos temporales, sin escribir archivos de prueba. Las dependencias de conservación, presentación, sesión y actualización de vistas se sustituyeron solo en memoria por equivalentes controlados. No se ejercitó el ciclo real de React, la navegación de Next.js, un DOM de navegador, cookies reales ni el portapapeles. T-017 reprodujo el criterio de búsqueda leído en vez de ejecutar el campo original. Dos comparaciones iniciales afectadas por la representación de tildes de la terminal se repitieron con entradas inequívocas antes de cerrar su resultado.

**Alcance estático revisado:** 53 archivos de aplicación y apoyo dentro de `app`, `components`, `hooks` y `lib`, además de `proxy.js` y la configuración y documentación pertinentes. La revisión de importaciones locales no encontró referencias sin resolver ni archivos auxiliares completos sin referencia; ese resultado no es una prueba de ausencia de código muerto.

**Comprobación documental de las direcciones independientes:** documentación oficial de la convención de páginas de Next.js, <https://nextjs.org/docs/app/api-reference/file-conventions/page>. Se usó para interpretar la exposición de las entradas y sus datos de acceso, no como comprobación de ejecución de este proyecto.
