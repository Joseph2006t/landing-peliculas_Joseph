import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js'

const app= express();
const __dirname= dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res)=>res.render('index'))

app.use(router)
app.listen(3000)
console.log('Server is running on port 3000')