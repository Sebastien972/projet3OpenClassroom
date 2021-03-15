class InfosStation{
    constructor(){
        this.stations = []
        this.urlJCDCaux = 'https://api.jcdecaux.com/vls/v1/stations?contract=creteil&apiKey=cf3d9479836a619cc61d548d13493467d16ee607'
        this.positions = []
         
       
    }



    getInfos(url){
        return new Promise((resolve, reject)=>{
            var xhr = new XMLHttpRequest()
            xhr.addEventListener("load", function() {
            	if (this.status >= 200 && this.status < 300) {
               		resolve(xhr.responseText)
            	}else{reject(xhr)}
            })
            xhr.open('GET', url, true)
            xhr.send()
            
        })

    }

   

   




    


}



    



