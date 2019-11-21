
package com.prueba.backend.dao;


import java.util.List;

import com.prueba.backend.models.Usuario;
import org.springframework.data.repository.Repository;

public interface UsuarioRepositorio extends Repository<Usuario, Integer>{
    List<Usuario>findAll();
    Usuario findOne(int id);
    Usuario findByUsuarioAndPassword(String usuario, String password);
    Usuario save(Usuario p);
    void delete(Usuario p);
}
