import dotenv from "dotenv"
import ConnectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})


ConnectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`)
    })
})
.catch((err)=>{
    console.log('Mongo DB failed ERROR:',err);
})