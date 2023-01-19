
Vue.component("antipasti",
{template:`

<div class="menuelement"><h3 @click="mostraantipasti">antipasti</h3>
<span v-if="antipastoattivo">
    
    <div v-for="antipasto in antipasti">
        <span>{{antipasto.nome}}</span><span> - {{antipasto.prezzo}}</span><div></div>
        <span><h6>{{antipasto.ingredienti}}</h6></span><div> - - - - </div>
        
        </div>
    </span>
    <div> - - - - - - - - - - - - - - - - </div>
</div>
    `,

data(){
    return{

    
    antipastoattivo:false,
  

 
    
    antipasti:[
        {
            nome:"antipasto della casa",
            ingredienti: "pomodorini, assaggi di formaggio locale, olive",
            prezzo:5.6
        },
        {
            nome:"antipasto della casa 2",
            ingredienti: "pomodorini, assaggi di formaggio locale, olive, scacce",
            prezzo:5.5
        },
    

    ],    
    
    cart :0,
    
    }
},
methods:{
    
    addtocart:function(){  
        this.cart+=1
    },
 
    mostraantipasti(){
        this.antipastoattivo=!this.antipastoattivo
    }
    
},
computed:{

}
})
Vue.component("primi",{
    props:{
        
    },
    
    template:`
    <div class="menuelement"><h3 @click="mostraprimi">primi</h3>
<span v-if="primoattivo">
                    
<div v-for="primo in primi":key = primi.nome>
    <span>{{primo.nome}}</span><span> - {{primo.prezzo}}</span><div>  </div>
    <span><h6>{{primo.ingredienti}}</h6></span>
    <div> - - - - </div>
    
</div>
</span>
<div> - - - - - - - - - - - - - - - - </div>
</div>`,

data(){
    return{

   
    primoattivo:false,


  

    primi:[
        {
            nome:"pasta al pomodoro",
            ingredienti: "pasta, pomodoro",
            prezzo:5.5
        },
        {
            nome:"pasta alla parmigiana",
            ingredienti: "pasta, pomodoro, melanzane, ricotta salata",
            prezzo:5.5
        },
        {
            nome:"pasta alle vongole",
            ingredienti: "pasta, olio, vongole, aglio, prezzemolo",
            prezzo:5.5
        }
        
    ],

    
    
    cart :0,
    
    }
},
methods:{
    
    addtocart:function(){  
        this.cart+=1
    },
 
    mostraprimi(){
        this.primoattivo=!this.primoattivo
    }
    
},
computed:{

}


})
Vue.component("secondi",{template:`   
<div class="menuelement"><h3 @click="mostrasecondi">secondi</h3>
<span v-if="secondoattivo">
                
<div v-for="secondo in secondi">
    <span>{{secondo.nome}}</span><span> - {{secondo.prezzo}}</span><div><div>
    <span><h6>{{secondo.ingredienti}}</h6></span><div> - - - - </div>
    
</div>
</span>
<div> - - - - - - - - - - - - - - - - </div>
</div>
`,

data(){
    return{

    
    secondoattivo:false,
  

    secondi:[
        {
            nome:"tagliata",
            ingredienti: "manzo, olio, origano, aglio",
            prezzo:5.5
        },
        {
            nome:"tartare di tonno",
            ingredienti: "tonno, olio, boh",
            prezzo:5.5
        },
        {
            nome:"arrosto misto",
            ingredienti: "salsiccia, braciola di pollo",
            prezzo:5.5
        },
        {
            nome:"arrosto misto2",
            ingredienti: "altra salsiccia, braciola di pollo",
            prezzo:5.5
        }

    ],      
    
 
    
    cart :0,
    
    }
},
methods:{
    
    addtocart:function(){  
        this.cart+=1
    },
 
    mostrasecondi(){
        this.secondoattivo=!this.secondoattivo
    }
    
},
computed:{

}

},)
Vue.component("contorni",
{template:`<div class="menuelement"><h3 @click="mostracontorni">contorni</h3>
<span v-if="contorniattivo">
    
    <div v-for="contorno in contorni">
        <span>{{contorno.nome}}</span><span> - {{contorno.prezzo}}</span><div></div>
        <span><h6>{{contorno.ingredienti}}</h6></span><div> - - - - </div>
        
        </div>
    </span>
    <div> - - - - - - - - - - - - - - - - </div>
</div>
    `,

data(){
    return{

    
    contorniattivo:false,
  

    contorni:[
        {
            nome:"patatine",
            ingredienti: "patate sbucciate e fritte in olio di semi",
            prezzo:5.5
        },
        {
            nome:"insalata",
            ingredienti: "insalata, olio, aceto",
            prezzo:5.5
        },
        {
            nome:"caponata",
            ingredienti: "melanzana, zucchine, patate, capperi, olio, carote",
            prezzo:5.5
        }

    ],
    
  
    
    cart :0,
    
    }
},
methods:{
    
    addtocart:function(){  
        this.cart+=1
    },
 
    mostracontorni(){
        this.contorniattivo=!this.contorniattivo
    }
    
},
computed:{

}
})
Vue.component("bevande",{
    props:{
        
    },
    
    template:`  
    <div class="menuelement"><h3 @click="mostrabevande">bevande</h3> 
<span v-if="bevandeattivo">
                    
<div v-for="bevanda in bevande">
    <span>{{bevanda.nome}}</span><span> - {{bevanda.prezzo}}</span><div></div>
    <span><h6>{{bevanda.ingredienti}}</h6></span><div> - - - - </div>
    
</div>
</span>
<div> - - - - - - - - - - - - - - - - </div>
</div>`,

data(){
    return{

   
    bevandeattivo:false,

    bevande:[
        {
            nome:"coca cola",
            ingredienti: "acqua, dolcificante",
            prezzo:5.5
        },
        {
            nome:"acqua",
            ingredienti: "acqua",
            prezzo:5.5
        },
        {
            nome:"birra",
            ingredienti: "acqua, luppolo e amore",
            prezzo:5.5
        },
        {
            nome:"birra2",
            ingredienti: "acqua e varie belle cose",
            prezzo:5.5
        },
        {
            nome:"birra3",
            ingredienti: "pasta, olio, vongole, aglio, prezzemolo, ah no... birra",
            prezzo:5.5
        }

    ],       

    cart :0,
    
    }
},
methods:{
    
    addtocart:function(){  
        this.cart+=1
    },
 
   mostrabevande: function(){
    this.bevandeattivo=!this.bevandeattivo
   }
    
},
computed:{

}


})
Vue.component("dolci",{template:`   
<div class="menuelement">
    <h3 @click="cambiadolce">dolce</h3>
<span v-if="dolceattivo">
                
<div v-for="dolce in dolci">
    <span>{{dolce.nome}}</span><span> - {{dolce.prezzo}}</span><div></div>
    <span><h6>{{dolce.ingredienti}}</h6></span><div> - - - - </div>
    
</div>
</span>

<div> - - - - - - - - - - - - - - - - </div>
</div>

`,

data(){
    return{

    
    dolceattivo:false,
  
    dolci:[
        {
            nome:"pasta al pomodoro",
            ingredienti: "pasta, pomodoro",
            prezzo:10
        },
        {
            nome:"pasta alla parmigiana",
            ingredienti: "pasta, pomodoro, melanzane, ricotta salata",
            prezzo:10.5
        },
        {
            nome:"pasta alle vongole",
            ingredienti: "pasta, olio, vongole, aglio, prezzemolo",
            prezzo:10
        }

    ],
  
 

    }
},
methods:{
    
    cambiadolce:function(){  
        this.dolceattivo=!this.dolceattivo
    },
 
    
},
computed:{

}

},)



var prod = new Vue({
    
    el: "#app",
    data:{
      

        cart:0
     
    },
   
}

)

