# Registro de Prompts: Ingeniería y Generación de Contenido

A continuación se documentan los prompts de alto nivel diseñados para estructurar y generar el análisis técnico y legal del incidente de Capcom. Se aplicaron técnicas de asignación de rol, delimitación de contexto y estructuración de salida para obtener respuestas con rigor académico y alineadas a la normativa chilena.

## Prompt 1: Análisis Legal y Tipificación de Delitos
> **Rol:** Actúa como un auditor experto en ciberseguridad y legislación informática aplicable en Chile.
> **Contexto:** Necesito analizar el ataque de ransomware sufrido por Capcom en 2020 (Ragnar Locker) desde una perspectiva jurídica e ingenieril.
> **Tarea:** Redacta un documento detallando cómo las acciones de los atacantes se tipifican bajo los artículos de la Ley N° 21.459 (Delitos Informáticos). Además, explica cómo la exfiltración de información vulnera la Ley N° 19.628 (Protección de la Vida Privada).
> **Formato:** Utiliza un tono académico, formal y técnico, estructurado con encabezados de fácil lectura.

## Prompt 2: Matriz de Análisis y Tríada CIA
> **Rol:** Analista de Seguridad de la Información (Blue Team).
> **Tarea:** Elabora un cuadro comparativo en formato Markdown que relacione el avance lateral del ataque a Capcom con la normativa legal y los principios de seguridad.
> **Estructura requerida:** La tabla debe contener 3 columnas: 1) Fase del ataque (Vulneración, Exfiltración, Despliegue de Ransomware, Caída, Extorsión), 2) Tipificación exacta según la Ley N° 21.459, y 3) El impacto directo en la Tríada CIA (Confidencialidad, Integridad, Disponibilidad) y el deber de custodia.

## Prompt 3: Responsabilidades Corporativas y Fallas de Control
> **Rol:** Consultor de Cumplimiento Normativo y Estándares ISO 27001.
> **Contexto:** Evaluación de la responsabilidad por omisión de la empresa víctima ante la brecha de seguridad.
> **Tarea:** Explica el incumplimiento del deber de custodia por parte de Capcom frente a los datos de sus usuarios y trabajadores. Luego, desarrolla un análisis de al menos 3 fallas críticas de control interno que facilitaron el ataque, enfocándote en: falta de segmentación de red, deficiencias en el monitoreo de eventos (SIEM/MFA) y la ausencia de un Plan de Recuperación ante Desastres (DRP) con respaldos inmutables.

## Prompt 4: Clasificación de Datos Exfiltrados
> **Tarea:** Analiza el terabyte de datos expuestos en el incidente de Capcom.
> **Instrucciones:** Clasifica la información comprometida en tres categorías principales (Datos de Empleados, Datos de Clientes y Datos Corporativos/Financieros). Describe brevemente el riesgo asociado a cada categoría y concluye con una evaluación técnica sobre el valor estratégico de esta información consolidada en los mercados de la Dark Web para la ejecución de ataques de ingeniería social.