import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

(async () => {
    try {
        const db = await mongoose.connect(`${config.MONGO_DATABASE}`);
        console.log('database connection established to: ', db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();
