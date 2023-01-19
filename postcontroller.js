const MysqlClass = require("./MysqlClass");


exports.getAllPosts = async(req,res,next)=>{
    try{
        const posts = await MysqlClass.findAll("antipasti")
        //console.log(posts[0])

        return posts
      }
    catch(error){
        console.log(error)
        next(error);
    }
}

exports.inserisciSql = async(req,res,next)=>{
    try{
        let{pietanza,nome,ingredienti,prezzo}= req.body;
    let nuovoinserimento = new MysqlClass(pietanza,nome,ingredienti,prezzo)
    nuovoinserimento =await nuovoinserimento.save()

    }catch(error){
        console.log(error)
        next(error);
    }
}

