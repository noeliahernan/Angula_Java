
package com.prueba.backend.services;

import java.util.List;

import com.prueba.backend.dao.UsuarioRepositorio;
import com.prueba.backend.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImp implements UsuarioService {
    @Autowired
    private UsuarioRepositorio repositorio;
    
    @Override
    public List<Usuario> listar() {
        return repositorio.findAll();
    }

    @Override
    public Usuario listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Usuario add(Usuario p) {
        return repositorio.save(p);
    }

    @Override
    public Usuario edit(Usuario p) {
        return repositorio.save(p);
    }

    @Override
    public Usuario delete(int id) {
        Usuario p=repositorio.findOne(id);
        if(p!=null){
            repositorio.delete(p);
        }
       return p;
    }

    @Override
    public Usuario usuarioLogin(String usuario, String password) {
        return this.repositorio.findByUsuarioAndPassword(usuario,password);
    }


}
