class AppVeloc{
    constructor(){
        this.mySlider = new MySlider
        this.myMap = new MyMap
        this.infosStation = new InfosStation
        this.positions=null
        this.stations= null

    }
    initApp(){   
        this.mySlider.start()
        this.mySlider.listenAll()
        this.myMap.initMap()
        this.initIfos().then((sttn)=>{
            for (let i = 0; i < sttn.length; i++) {
                this.positions = sttn[i].position
                this.stations = sttn[i]


                this.myMap.initMarqueurs(this.stations) 
            }
            
        })
        
        
    
    }
    initIfos(){
        return new Promise((resolve, reject)=>{
            this.infosStation.getInfos('https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=cf3d9479836a619cc61d548d13493467d16ee607').then((stations)=>{
                this.stations = JSON.parse(stations)
                
                resolve(this.stations)
            
            })
               
               
               
              
          
        })
    }
    
        
}

let appVeloc = new AppVeloc
appVeloc.initApp()
appVeloc.initIfos()



