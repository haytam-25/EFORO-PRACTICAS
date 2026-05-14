package com.forotecnico.soporte_telefonico.service;

import com.forotecnico.soporte_telefonico.model.Usuario;
import com.forotecnico.soporte_telefonico.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Optional<Usuario> login(String email, String password) {
        return repository.findByEmail(email)
                .filter(u -> u.getPassword().equals(password));
    }

    public Usuario crear(Usuario usuario) {
        return repository.save(usuario);
    }

    public java.util.List<Usuario> obtenerTodos() {
        return repository.findAll();
    }
}