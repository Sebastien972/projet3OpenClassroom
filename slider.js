class MySlider{

    constructor(){
        this.sld = document.querySelectorAll(".slide"); 
        this.sld1 = this.sld[0];
        this.container_sld = document.querySelector('.slider');
        this.sld2 = this.sld[1];
        this.sld3 = this.sld[2];
        this.sld4 = this.sld[3];
        this.index = 0;
        this.timer = 5000;
        this.navSlide = document.querySelectorAll('.butt_slide');
        this.btsld1 = this.navSlide[0];
        this.btsld2 = this.navSlide[1];
        this.btsld3 = this.navSlide[2];
        this.btsld4 = this.navSlide[3];
        this.buttDroite = document.getElementById('contain_arrow_right');
        this.buttgauche = document.getElementById('contain_arrow_left');
        this.buttPause = document.getElementById('butt_pause');
        
    }
    
 
    
    listenAll(){
        this.btsld1.addEventListener('click',()=> { this.Butt(0); this.reTime(); });            
        this.btsld2.addEventListener('click',()=> { this.Butt(1);  this.reTime(); });
        this.btsld3.addEventListener('click', ()=> { this.Butt(2);  this.reTime(); });    
        this.btsld4.addEventListener('click', ()=> { this.Butt(3);  this.reTime(); });
        this.buttPause.addEventListener('click', ()=> { this.playPause(); });
        this.buttDroite.addEventListener('click', ()=> { this.slideSuivante();  this.reTime(); });
        this.buttgauche.addEventListener('click', ()=> { this.slidePrecedente();  this.reTime(); }); 
        window.addEventListener("keydown", (e) => {
            if(e.code == "ArrowRight"){
                this.slideSuivante();  this.reTime(); 
            }else if(e.code == "ArrowLeft"){this.slidePrecedente(); this.reTime(); }
        })

            
            
    }

        
    start(){
        let that = this;
        this.intervalSlide = window.setInterval(function(){ that.slideSuivante()}, this.timer);  
        
    }
    
 
    
    slideSuivante() {
         this.sld[this.index].classList.remove('slide_visible');
         if(this.index == 3){
             this.index = -1;
         }
         this.sld[this.index+1].classList.add('slide_visible' );
         this.index = this.index +1;
         
    }
   

    Butt(NumberSlide) {
        this.sld[this.index].classList.remove('slide_visible');
        this.sld[NumberSlide].classList.add('slide_visible');
        this.index = NumberSlide;
        
    } 

    slidePrecedente() {
        this.sld[this.index].classList.remove('slide_visible');
        if(this.index == 0){
            this.index = 4;
        }
        this.sld[this.index-1].classList.add('slide_visible' );
        this.index = this.index -1;
        
    }
    
    reTime(){
        clearInterval(this.intervalSlide);
        if (this.buttPause.classList.contains('play')){
            this.start();
        }
    }

    playPause(){
        if(this.buttPause.classList.contains('play')){
            this.buttPause.classList.remove('play');
            clearInterval(this.intervalSlide);
            this.buttPause.classList.add('pause')
        }else{
            this.buttPause.classList.remove('pause');
            this.start();
            this.buttPause.classList.add('play');
        }
    }
    

    
}

            


