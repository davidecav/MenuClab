const db =require("./connection")

class MysqlClass{

    constructor(pietanza,nome,ingredienti,prezzo){
        this.pietanza = pietanza;
        this.nome = nome;
        this.ingredienti=ingredienti;
        this.prezzo= prezzo;
    }
    async save(){
        /*
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth()+1;
        let dd = d.getDate();
        let createdate = `${yyyy} - ${mm} - ${dd}`;
        */
        let sqlinsertantipasti = `insert into ${pietanza} (nome,prezzo,ingredienti) values(
            ${this.nome},${this.prezzo},${this.ingredienti}
        )`
        
    const [inserimento,_]= await db.execute(sqlinsertantipasti)
    return inserimento
    }

    
    static findAll(tabella){

        return new Promise((resolve, reject) => {
            db.execute(`select * from ${tabella}`, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });

     
        
    })

}
}


module.exports= MysqlClass;