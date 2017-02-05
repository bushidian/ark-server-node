class HomeController {
    
     constructor(route){

         route.get('/ping', this.ping.bind(this));

     }

     ping(req, res){
         var dt = new Date();
         
         var str = 'Host:Ark-Node,Time:' + dt.getFullYear() + '-'
                 + (dt.getMonth() + 1) + '-' + dt.getDate() + '  ' 
                 + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
         res.json(str);
     }

}

module.exports = HomeController;