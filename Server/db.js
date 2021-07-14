import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/BlogDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true }, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded....');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
})

export default mongoose;