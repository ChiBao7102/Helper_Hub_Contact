import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
app.get('/',(req: Request, res: Response, next: NextFunction) => {
    res.send("Base route co cai not");
});
app.listen(3000,() => {
    console.log("Server listening on port 3000");
});