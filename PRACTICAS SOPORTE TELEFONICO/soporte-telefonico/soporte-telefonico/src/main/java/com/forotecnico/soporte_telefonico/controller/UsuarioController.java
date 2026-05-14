package com.forotecnico.soporte_telefonico.controller;

import com.forotecnico.soporte_telefonico.model.Usuario;
import com.forotecnico.soporte_telefonico.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String email    = body.get("email");
        String password = body.get("password");

        return service.login(email, password)
                .map(u -> ResponseEntity.ok().body(Map.of(
                        "id",     u.getId(),
                        "nombre", u.getNombre(),
                        "email",  u.getEmail(),
                        "rol",    u.getRol()
                )))
                .orElse(ResponseEntity.status(401).build());
    }

    @PostMapping("/registro")
    public Usuario registrar(@RequestBody Usuario usuario) {
        return service.crear(usuario);
    }

    @GetMapping("/usuarios")
    public java.util.List<Usuario> obtenerTodos() {
        return service.obtenerTodos();
    }
}