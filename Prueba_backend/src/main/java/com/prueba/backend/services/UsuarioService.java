
package com.prueba.backend.services;

import com.prueba.backend.models.Usuario;

import java.util.List;

public interface UsuarioService {
    List<Usuario>listar();
    Usuario listarId(int id);
    Usuario add(Usuario p);
    Usuario edit(Usuario p);
    Usuario delete(int id);
    Usuario usuarioLogin(String usuario, String password);
}
