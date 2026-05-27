# Registro de Prompts: Ingeniería y Generación de Contenido

A continuación se documentan los prompts de alto nivel diseñados para estructurar y generar el análisis técnico y legal del incidente de Capcom. Se aplicaron técnicas de asignación de rol, delimitación de contexto y estructuración de salida para obtener respuestas con rigor académico y alineadas a la normativa chilena.

## Prompt 1: Recopilación de Inteligencia y Cronología (OSINT)
> **Rol:** Investigador de Inteligencia de Amenazas (Threat Intelligence).
> **Contexto:** Fase inicial de levantamiento de información para un reporte técnico sobre el ataque a Capcom en noviembre de 2020.
> **Tarea:** Realiza una búsqueda exhaustiva en fuentes públicas y comunicados oficiales para reconstruir la línea de tiempo (Kill Chain) del ataque de Ragnar Locker. 
> **Instrucciones:** Identifica el vector de acceso inicial exacto (tipo de dispositivo vulnerado), las fechas clave de la intrusión y el volumen de datos comprometidos, entregando los resultados en una lista cronológica clara.

## Prompt 2: Análisis Legal y Tipificación de Delitos
> **Rol:** Actúa como un auditor experto en ciberseguridad y legislación informática aplicable en Chile.
> **Contexto:** Necesito analizar el ataque de ransomware sufrido por Capcom en 2020 (Ragnar Locker) desde una perspectiva jurídica e ingenieril.
> **Tarea:** Redacta un documento detallando cómo las acciones de los atacantes se tipifican bajo los artículos de la Ley N° 21.459 (Delitos Informáticos). Además, explica cómo la exfiltración de información vulnera la Ley N° 19.628 (Protección de la Vida Privada).
> **Formato:** Utiliza un tono académico, formal y técnico, estructurado con encabezados de fácil lectura.

## Prompt 3: Matriz de Análisis y Tríada CIA
> **Rol:** Analista de Seguridad de la Información (Blue Team).
> **Tarea:** Elabora un cuadro comparativo en formato Markdown que relacione el avance lateral del ataque a Capcom con la normativa legal y los principios de seguridad.
> **Estructura requerida:** La tabla debe contener 3 columnas: 1) Fase del ataque (Vulneración, Exfiltración, Despliegue de Ransomware, Caída, Extorsión), 2) Tipificación exacta según la Ley N° 21.459, y 3) El impacto directo en la Tríada CIA (Confidencialidad, Integridad, Disponibilidad) y el deber de custodia.

## Prompt 4: Responsabilidades Corporativas y Fallas de Control
> **Rol:** Consultor de Cumplimiento Normativo y Estándares ISO 27001.
> **Contexto:** Evaluación de la responsabilidad por omisión de la empresa víctima ante la brecha de seguridad.
> **Tarea:** Explica el incumplimiento del deber de custodia por parte de Capcom frente a los datos de sus usuarios y trabajadores. Luego, desarrolla un análisis de al menos 3 fallas críticas de control interno que facilitaron el ataque, enfocándote en: falta de segmentación de red, deficiencias en el monitoreo de eventos (SIEM/MFA) y la ausencia de un Plan de Recuperación ante Desastres (DRP) con respaldos inmutables.

## Prompt 5: Clasificación de Datos Exfiltrados
> **Tarea:** Analiza el terabyte de datos expuestos en el incidente de Capcom.
> **Instrucciones:** Clasifica la información comprometida en tres categorías principales (Datos de Empleados, Datos de Clientes y Datos Corporativos/Financieros). Describe brevemente el riesgo asociado a cada categoría y concluye con una evaluación técnica sobre el valor estratégico de esta información consolidada en los mercados de la Dark Web para la ejecución de ataques de ingeniería social.

## Prompt 6: Aplicación del Convenio de Budapest
> **Rol:** Especialista en Derecho Internacional y Ciberseguridad.
> **Contexto:** Capcom es una corporación con sede en Japón, vulnerada por ciberdelincuentes transnacionales, con afectación a usuarios a nivel global.
> **Tarea:** Explica cómo el Convenio de Budapest facilita la cooperación internacional en la investigación de este tipo de ciberataques transfronterizos. Detalla los mecanismos de asistencia mutua, la preservación rápida de datos informáticos almacenados y la importancia de la homologación de delitos entre los países firmantes para perseguir a grupos como Ragnar Locker.

## Prompt 7: Evaluación de la Respuesta a Incidentes (IRP)
> **Rol:** Arquitecto de Ciberseguridad y Auditor Forense.
> **Tarea:** Basado en la respuesta de Capcom al descubrir el cifrado de sus servidores, evalúa críticamente su nivel de preparación y respuesta.
> **Instrucciones:** Identifica las deficiencias evidentes en sus fases de contención y erradicación. Sugiere tres medidas correctivas inmediatas de contención que debieron aplicarse (por ejemplo, automatización de aislamiento de endpoints) para haber mitigado la propagación del ransomware en su red.

## Prompt 8: Análisis de la Extorsión y Políticas de Pago
> **Rol:** Analista de Inteligencia de Amenazas (Cyber Threat Intelligence).
> **Contexto:** El grupo Ragnar Locker exigió un rescate millonario bajo el modelo de "Doble Extorsión" (cifrado más amenaza de publicación).
> **Tarea:** Analiza las implicancias técnicas, éticas y legales de ceder ante el chantaje de ransomware. Describe por qué pagar el rescate no garantiza la recuperación íntegra de los datos, cómo este acto financia y fomenta la industria del cibercrimen (Ransomware-as-a-Service), y qué recomiendan los principales marcos regulatorios internacionales al respecto.

## Prompt 9: Conclusiones Estratégicas y Recomendaciones
> **Rol:** Chief Information Security Officer (CISO).
> **Tarea:** Redacta las conclusiones ejecutivas finales del caso Capcom.
> **Formato:** Inicia con un resumen de las lecciones aprendidas más críticas. Luego, propón un plan de acción estratégico de alto nivel que Capcom debió implementar tras el ataque, mencionando obligatoriamente: adopción de arquitectura Zero Trust, modernización de accesos remotos (eliminación de VPN obsoletas a favor de ZTNA) y la implementación de políticas de respaldo inmutables bajo la regla 3-2-1.