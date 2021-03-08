import { Module } from '@nestjs/common';

import * as mongoose from 'mongoose';
import { environment } from '../../environments/environment';
import { DATABASE_CONNECTION_PROVIDE_KEY } from './database.provide';

const databaseConnectionProvider = {
  provide: DATABASE_CONNECTION_PROVIDE_KEY,
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect(environment.mongoDbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
};

@Module({
  providers: [databaseConnectionProvider],
  exports: [databaseConnectionProvider],
})
export class DatabaseModule {}
