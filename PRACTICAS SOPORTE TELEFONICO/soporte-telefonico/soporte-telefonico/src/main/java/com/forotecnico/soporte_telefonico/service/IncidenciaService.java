package com.forotecnico.soporte_telefonico.service;

import com.forotecnico.soporte_telefonico.model.Incidencia;
import com.forotecnico.soporte_telefonico.repository.IncidenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncidenciaService {

    @Autowired
    private IncidenciaRepository repository;

    public List<Incidencia> obtenerTodas() {
        return repository.findAll();
    }

    public Incidencia guardar(Incidencia incidencia) {
        return repository.save(incidencia);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }
    
    public Incidencia actualizar(Long id, Incidencia nueva) {
    Incidencia existente = repository.findById(id)
        .orElseThrow(() -> new RuntimeException("Incidencia no encontrada"));
    existente.setAlumno(nueva.getAlumno());
    existente.setDescripcion(nueva.getDescripcion());
    existente.setAtendidaPor(nueva.getAtendidaPor());
    existente.setEstado(nueva.getEstado());
    existente.setPrioridad(nueva.getPrioridad());
    return repository.save(existente);
}
}