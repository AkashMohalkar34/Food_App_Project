const mongoose = require('mongoose');
const mongoURI = 'mongodb://akashmohalkar34:7721846618@cluster0-shard-00-00.logwj.mongodb.net:27017,cluster0-shard-00-01.logwj.mongodb.net:27017,cluster0-shard-00-02.logwj.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-2meg8c-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
mongoose.set('strictQuery', false);

const mongoDB = async() => {
   await mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true} ,async(err, res) => {
        if (err) {
            console.log("error :" ,err);
        } else {
            console.log("conneted ");
            // const fetched_data = await mongoose.connection.db.collection("users");
            const fetched_data = await mongoose.connection.db.collection("food_items");

            // console.log(fetched_data);
            fetched_data.find({}).toArray( async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("foodCategory");

                // console.log(foodCategory);
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                });


                // if (err) console.log(err);
                // else {
                //     global.food_items = data;
                //     console.log(global.food_items);
                // }
                })
         }
     });
    

}

module.exports = mongoDB;
