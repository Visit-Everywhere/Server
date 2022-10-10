/* 
* CODED BY CISAMU (2022)
* FOR VE CORP
* Web Server
*/

// Импортируем модуль require
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
try {
    // Модуль http для роботы с веб-сервером

    const http = require('http');
    
    // Метод create server в модуле http
    
    const server = http.createServer();
    
    // Событие request (запрос - ответ)
    
    server.on('request', (req, res) => {
        console.log(req.url);
        console.log(req.method);
        console.log(req.headers);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Test Msg');
    });
    
    server.listen(8080, () => console.log('Cервер работает'));
} catch (web_server_error) {
    console.error("Web Server error: " + web_server_error)
}

// Базовый код. Создан 10.10.2022