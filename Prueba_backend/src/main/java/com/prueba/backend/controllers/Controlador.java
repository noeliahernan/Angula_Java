
package com.prueba.backend.controllers;

import java.util.List;

import com.prueba.backend.models.Usuario;
import com.prueba.backend.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/usuarios"})
public class Controlador {
    
    @Autowired
    UsuarioService service;
    
    @GetMapping
    public List<Usuario>listar(){
        return service.listar();
    }
    @PostMapping
    public Usuario agregar(@RequestBody Usuario p){

        return service.add(p);
    }
    @PostMapping(path = {"/login"})
    public Usuario usuarioLogin(@RequestBody Usuario u){

        return service.usuarioLogin(u.getUsuario(),u.getPassword());
    }
    @GetMapping(path = {"/{id}"})
    public Usuario listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Usuario editar(@RequestBody Usuario p, @PathVariable("id") int id){
        p.setId(id);
        return service.edit(p);
    }
    @DeleteMapping(path = {"/{id}"})
    public Usuario delete(@PathVariable("id") int  id){
        return service.delete(id);
    }
}
