module.exports= reqFilter = (req,res,next) => {
    if(!req.query.age){
        res.send('Age is required');
    } 
    else if(req.query.age < 18){
        res.send('Age should be greater than 18');
    }
    else
    {
        next();
    }
}