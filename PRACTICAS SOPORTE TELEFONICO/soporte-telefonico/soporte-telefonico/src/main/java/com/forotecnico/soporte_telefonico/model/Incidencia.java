package com.forotecnico.soporte_telefonico.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "incidencias")
public class Incidencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String alumno;
    private String descripcion;
    private String atendidaPor;
    private String estado; // "PENDIENTE", "EN_CURSO", "RESUELTA"
    private String prioridad; // "ALTA", "MEDIA", "BAJA"
    private LocalDateTime fecha;
}