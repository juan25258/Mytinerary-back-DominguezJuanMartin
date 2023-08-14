

const getClients = (req, res)=> {
    
        res.json({
             clients: [
            {
                 name: "Juan",
                 lastname: "Messi",
                 age: "36"
            },
            {
                name: "Martin",
                lastname: "Messi",
                age: "40"
            }     
        ]
    })
 
 }
 
 
 
 const getClient = (req, res)=> {

  const {id} = req.params

    res.json(
        {
            name: "Martin",
            lastname: "Messi",
            age: "40",
            paramId: id
        }
    )
 }

 module.exports = {
    getClients, 
    getClient
}