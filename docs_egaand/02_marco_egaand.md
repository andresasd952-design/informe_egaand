# Marco Normativo, Regulatorio y Estándares de la Industria

Para analizar un incidente internacional de la magnitud del caso Capcom (2020) bajo una perspectiva técnica y jurídica aplicable en Chile, es necesario cruzar la legislación nacional vigente, los tratados internacionales suscritos por el país y los marcos de ciberseguridad que dictan las buenas prácticas de la industria.

## 1. Legislación Nacional (Chile)

### Ley N° 21.459: Ley de Delitos Informáticos
Promulgada para modernizar la persecución penal en el ciberespacio, esta ley es la herramienta principal para tipificar el actuar del grupo Ragnar Locker. En este caso aplican específicamente:
* **Artículo 2 (Acceso ilícito):** Sanciona el ingreso no autorizado a un sistema informático, vulnerando las medidas de seguridad y control de acceso de la red corporativa de la empresa.
* **Artículo 4 (Ataque a la integridad de los datos informáticos):** Tipifica el cifrado no autorizado de la información. Al introducir el ransomware, los atacantes alteraron y restringieron el acceso a los datos originales de la compañía.
* **Artículo 6 (Receptación de datos informáticos):** Penaliza a quienes adquieran o comercialicen los datos obtenidos del ataque, algo crucial dado que se exfiltró 1 TB de información confidencial para extorsión.

### Ley N° 19.628: Sobre Protección de la Vida Privada
Dado que el incidente expuso datos de más de 390.000 personas, esta ley regula el tratamiento de esa información. Destaca la obligación de custodia y el deber de secreto:
* Las empresas tienen la responsabilidad legal de garantizar la seguridad de los bancos de datos que administran, debiendo implementar controles técnicos para evitar accesos no autorizados, filtraciones o pérdida de confidencialidad de sus usuarios y empleados.

## 2. Tratados Internacionales

### El Convenio de Budapest (Convenio sobre la Ciberdelincuencia)
Al ser un ataque perpetrado por un grupo transnacional contra una empresa multinacional, la persecución de los cibercriminales no puede limitarse a un solo país. Chile, al estar suscrito a este convenio, cuenta con un marco legal estandarizado que facilita la cooperación internacional, la extradición y la asistencia mutua entre agencias de ciberseguridad y fiscalías de distintos países para rastrear las billeteras de criptomonedas y servidores usados por Ragnar Locker.

## 3. Marcos y Estándares Técnicos de Referencia

Desde el punto de vista de la ingeniería y la auditoría, la responsabilidad de una empresa no solo se mide por las leyes, sino por su adherencia a los estándares globales de seguridad de la información:

* **ISO/IEC 27001:** Norma internacional que define los requisitos para un Sistema de Gestión de Seguridad de la Información (SGSI). El análisis de este caso evidencia fallas en los controles de gestión de riesgos y protección contra *malware* exigidos por esta norma.
* **Controles CIS (Center for Internet Security):** Las prácticas recomendadas para defender sistemas contra ataques comunes. En el caso de un ransomware, se evidencia una brecha en los controles de protección de datos, recuperación de incidentes y capacitación del factor humano.