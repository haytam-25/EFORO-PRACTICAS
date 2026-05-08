package com.forotecnico.soporte_telefonico.repository;

import com.forotecnico.soporte_telefonico.model.Incidencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncidenciaRepository extends JpaRepository<Incidencia, Long> {
}