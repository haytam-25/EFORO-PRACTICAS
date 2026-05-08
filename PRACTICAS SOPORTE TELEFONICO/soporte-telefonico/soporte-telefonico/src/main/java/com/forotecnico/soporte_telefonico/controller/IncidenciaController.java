package com.forotecnico.soporte_telefonico.controller;

import com.forotecnico.soporte_telefonico.model.Incidencia;
import com.forotecnico.soporte_telefonico.service.IncidenciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/incidencias")
@CrossOrigin(origins = "*")
public class IncidenciaController {

    @Autowired
    private IncidenciaService service;

    @GetMapping
    public List<Incidencia> obtenerTodas() {
        return service.obtenerTodas();
    }

    @PostMapping
    public Incidencia crear(@RequestBody Incidencia incidencia) {
        return service.guardar(incidencia);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}