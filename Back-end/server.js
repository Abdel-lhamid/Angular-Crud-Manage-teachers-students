const { error } = require('console');
const http = require('http');
const app = require('./app')


const server = http.createServer(app)

const portValid = val=>{
    const port = parseInt(val,10)
    if(isNaN(port)){
        return val
    }
    if(port>=0){
        return port
    }
    return false
}
const port = portValid(process.env.PORT || 3000)
app.set('port', port)

const errorHandler = error =>{
    if (error.syscall !== 'listen'){
        throw error
    }
    const adress = server.address()
    const bind = typeof adress === 'string'? 'pipe'+adress:'port' + port;
    switch(error.code){
        case 'EACCES':
            console.error(bind + "privilege stuff")
            process.exit(1)
            break;
            default:
                throw error
    }

}

const listening = ()=>{
    const adress = server.address()
    const bind = typeof adress === 'string'? + 'pipe' + adress:'port' + port;
    console.log('listening on'+ bind)
}

server.on('error',errorHandler)
server.on('listening',listening)


server.listen(port)