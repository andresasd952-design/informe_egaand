# Tipificación de Delitos Informáticos: Caso Capcom

Para entender la gravedad del ataque de ransomware perpetrado por el grupo Ragnar Locker contra Capcom (2020) desde una perspectiva jurídica chilena, es necesario desglosar el incidente técnico y tipificarlo según los artículos de la **Ley N° 21.459**. 

A continuación, se detalla cómo el actuar de los cibercriminales vulneró la legislación y afectó los pilares fundamentales de la seguridad de la información (Tríada CIA).

## 1. Acceso Ilícito (Artículo 2)
* **El Incidente Técnico:** Los atacantes lograron traspasar los firewalls y las medidas de seguridad perimetral de la red corporativa de Capcom, obteniendo acceso a servidores internos sin autorización.
* **Tipificación Legal:** La ley sanciona a quien, superando barreras técnicas o controles de acceso, ingrese a un sistema informático. Este es el delito inicial que permite todo el ataque posterior.
* **Impacto en la Tríada CIA:** Al acceder a directorios privados y bases de datos, se quebrantó directamente el pilar de la **Confidencialidad**.

## 2. Ataque a la Integridad de los Datos (Artículo 4)
* **El Incidente Técnico:** Una vez dentro, los hackers desplegaron el payload del ransomware, el cual aplicó un cifrado fuerte (encriptación) de forma masiva sobre los archivos, códigos fuente de videojuegos y bases de datos de la empresa, dejándolos totalmente ilegibles para sus dueños.
* **Tipificación Legal:** El Artículo 4 penaliza explícitamente a quien altere, dañe o suprima datos informáticos. El cifrado no autorizado encaja a la perfección en esta definición, ya que altera el formato original de los datos.
* **Impacto en la Tríada CIA:** Representa una destrucción de la **Integridad** (los datos fueron modificados por un tercero) y de la **Disponibilidad** (Capcom ya no podía acceder a su propia información).

## 3. Ataque a la Integridad del Sistema Informático (Artículo 5)
* **El Incidente Técnico:** El malware no solo afectó archivos aislados, sino que paralizó por completo la infraestructura de TI (Tecnologías de la Información) de la compañía, obligando a Capcom a apagar temporalmente sus redes de correo electrónico interno y servidores de desarrollo para evitar que el virus se propagara a otras sucursales.
* **Tipificación Legal:** Sanciona la obstaculización o entorpecimiento del funcionamiento normal de un sistema informático. Los atacantes detuvieron la operatividad del negocio.
* **Impacto en la Tríada CIA:** Pérdida crítica del pilar de **Disponibilidad**.

## 4. Receptación de Datos Informáticos (Artículo 6) y Extorsión
* **El Incidente Técnico:** Previo a cifrar los equipos, Ragnar Locker exfiltró (robó) 1 TB de datos, incluyendo información financiera corporativa y datos personales de más de 390.000 personas. Posteriormente, amenazaron con publicar esta información en la *Dark Web* si no se pagaba un rescate millonario en criptomonedas.
* **Tipificación Legal:** Aunque el chantaje o extorsión se persigue bajo el Código Penal tradicional, el Artículo 6 de la Ley 21.459 refuerza la persecución al castigar a quienes comercialicen, transfieran o adquieran datos informáticos obtenidos de manera ilícita (los datos exfiltrados).

## Nota Técnica: La Estrategia de "Doble Extorsión"
Es importante destacar en este análisis que el grupo Ragnar Locker utilizó una técnica moderna conocida como **Doble Extorsión**. No solo secuestraron la disponibilidad de los sistemas mediante el cifrado (Ransomware tradicional), sino que también amenazaron con la pérdida de confidencialidad al amenazar con publicar los datos exfiltrados. 

Esta táctica busca ejercer la máxima presión posible: incluso si Capcom lograba restaurar sus sistemas usando sus respaldos (Backups), el riesgo de la filtración masiva seguía latente, lo que desencadenaría de todas formas una crisis de responsabilidad frente a la normativa de protección de datos personales (equivalente a nuestra Ley 19.628).