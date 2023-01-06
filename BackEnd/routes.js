const express = require('express') 
const routes = express.Router()
//route for select
routes.get("/:table",(req,res)=>{
    //res.send('Ahora si viene el select')
    req.getConnection((err,conn)=>{
        
        if (err) return res.send(err) // si existe un error retornarlo

        var ssql= 'SELECT * FROM ' + req.params.table
        conn.query(ssql,(err,rows)=>{
            if (err) return res.send(err)

            res.json(rows)
        })

    })
})

//route for insert
routes.post("/:table",(req,res)=>{
    //res.send('Ahora si viene el select')
    req.getConnection((err,conn)=>{
        
        if (err) return res.send(err) // si existe un error retornarlo

        var ssql='INSERT INTO ' + req.params.table +' SET ?'
        conn.query(ssql,[req.body],(err,rows)=>{
            if (err) return res.send(err)

            res.json('Add Ok!')
        })

    })
})

//route for delete
routes.delete("/:table/:field/:id",(req,res)=>{
    
    req.getConnection((err,conn)=>{
        
        if (err) return res.send(err) // si existe un error retornarlo

        var ssql= 'DELETE FROM '+ req.params.table +' WHERE '+req.params.field+' = ?'
        conn.query(ssql,[req.params.id],(err,rows)=>{
            if (err) return res.send(err)

            res.json('Delete Book!')
        })

    })
})

//route for update
routes.put("/:table/:field/:id",(req,res)=>{
    
    req.getConnection((err,conn)=>{
        
        if (err) return res.send(err) // si existe un error retornarlo

        var ssql= 'UPDATE '+ req.params.table +' set ? WHERE '+ req.params.field +' = ?'
        conn.query(ssql,[req.body,req.params.id],(err,rows)=>{
            if (err) return res.send(err)

            res.status(201).json('Book updated!')
        })

    })
})
module.exports=routes //exportar la variable que necesito