# Responsabilidades Corporativas y Fallas de Control Interno

En el análisis del caso Capcom (2020), la responsabilidad penal recae sobre Ragnar Locker bajo los delitos tipificados en la Ley N° 21.459. Sin embargo, desde una perspectiva de auditoría de sistemas, la empresa posee una responsabilidad por omisión ante la vulneración de su infraestructura.

## 1. Incumplimiento del Deber de Custodia (Ley N° 19.628)
La legislación exige a los responsables de registros de datos cuidar de ellos con la debida diligencia. Al sufrir una exfiltración que expuso datos de aproximadamente 390.000 personas, Capcom infringió su obligación de garantizar la confidencialidad, exponiéndose a demandas civiles severas.

## 2. Ausencia de Controles Técnicos (Estándares ISO 27001 y CIS)
El éxito del ataque evidenció negligencias críticas en la seguridad perimetral e interna de la compañía:
* **Falta de Segmentación de Red:** El malware logró propagarse desde los servidores iniciales hasta los entornos de desarrollo sin encontrar barreras internas efectivas (VLANs restrictivas o firewalls internos).
* **Control de Accesos Deficiente:** La vulneración no fue detectada a tiempo, demostrando fallas en la monitorización de eventos (sistemas SIEM) y una posible ausencia de Autenticación Multifactor (MFA) estricta.
* **Continuidad del Negocio (BCP/DRP):** La paralización total indica que la empresa no contaba con un Plan de Recuperación ante Desastres (DRP) robusto con respaldos inmutables, lo que los dejó a merced de la extorsión para recuperar la operatividad (Disponibilidad).