import express from 'express';
import cors from 'cors';
import { UserRouter } from './routes/UserRoutes';
import { PORT } from './config';

const app = express();

app.use(express.json());


const corsOptions = {
    origin: [
        'http://localhost:3000',
    ],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use("/api/v1/auth/user", UserRouter);

app.get("/", (req, res) => {
    res.send(`CLI Playground's Server is up!!
        <br/>
        <a href='https://github.com/Shubhashish-Chakraborty/cli-playground'>Go Clone the PythonCLI and Enjoy</a>
    `)
})

app.listen(PORT, () => {
    console.log(`BACKEND IS HOSTED : http://localhost:${PORT}`)
});
