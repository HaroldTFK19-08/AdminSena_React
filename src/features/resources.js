/**
 * Catálogo de dominios del modelo relacional.
 * Registrar aquí cada recurso permite resolver llaves foráneas entre dominios.
 */
import { registerResources } from "../shared/resources/registry";

import { usuariosResource } from "./usuarios/usuarios.resource";
import { administradoresResource } from "./administradores/administradores.resource";
import { aspirantesResource } from "./aspirantes/aspirantes.resource";
import { instructoresResource } from "./instructores/instructores.resource";
import { aprendicesResource } from "./aprendices/aprendices.resource";
import { centrosResource } from "./centros/centros.resource";
import { areasResource } from "./areas/areas.resource";
import { programasResource } from "./programas/programas.resource";
import { competenciasResource } from "./competencias/competencias.resource";
import { competenciaInstructorResource } from "./competencias/competenciaInstructor.resource";
import { fichasResource } from "./fichas/fichas.resource";
import { fichaInstructorResource } from "./fichas/fichaInstructor.resource";
import { resultadosResource } from "./resultados/resultados.resource";
import { ambientesResource } from "./ambientes/ambientes.resource";
import { equiposResource } from "./equipos/equipos.resource";
import { asignacionesResource } from "./asignaciones/asignaciones.resource";
import { ofertasResource } from "./ofertas/ofertas.resource";
import { inscripcionesResource } from "./inscripciones/inscripciones.resource";
import { noticiasResource } from "./noticias/noticias.resource";

export const RESOURCES = [
    usuariosResource,
    administradoresResource,
    aspirantesResource,
    instructoresResource,
    aprendicesResource,
    centrosResource,
    areasResource,
    programasResource,
    competenciasResource,
    competenciaInstructorResource,
    fichasResource,
    fichaInstructorResource,
    resultadosResource,
    ambientesResource,
    equiposResource,
    asignacionesResource,
    ofertasResource,
    inscripcionesResource,
    noticiasResource,
];

registerResources(RESOURCES);
