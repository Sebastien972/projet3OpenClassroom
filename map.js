class MyMap{
    constructor(){
        this.marqueurs= []
        this.marcker=null
        this.bounds = new google.maps.LatLngBounds()
        this.nameStation = document.getElementById('info-station')
        this.adresseStation = document.getElementById('info-adresse')
        this.nbrVeloDispo = document.getElementById('info-velo')

    }

    initMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 2 })
       
    }

    initMarqueurs(station){
        this.marcker = new google.maps.Marker({
                map: this.map,
                position: station.position
            })
        this.marqueurs.push(station.position)
        this.bounds.extend(station.position)
        this.map.fitBounds(this.bounds)


        this.marcker.addListener('click', (e)=>{
            let cEvent = new CustomEvent(e, {detail: station})
            document.dispatchEvent(cEvent)
            this.nameStation.innerHTML = cEvent.detail.name
            this.adresseStation.innerHTML = cEvent.detail.address
            this.nbrVeloDispo.innerHTML = cEvent.detail.available_bikes
            this.map.setZoom(10);
            this.map.setCenter(cEvent.detail.position)
            

            this.map.addListener('center_changed', ()=> {
                window.setTimeout(()=> {
                this.map.panTo(station.position);
                }, 3000);
            });
    
            
            var markerCluster = new MarkerClusterer(this.map, this.marker,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        })
    }


    



}
