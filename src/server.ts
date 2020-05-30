import 'dotenv/config';
import * as grpc from 'grpc';
import rippleAPI from './rippleapi/services';


const port: string | number = process.env.PORT || 50051;

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
  const server = new grpc.Server();
  server.addService(
    rippleAPI.service,
    rippleAPI.impl,
  );

  server.bindAsync(
    `0.0.0.0:${ port }`,
    grpc.ServerCredentials.createInsecure(),
    (error: Error | null, port: number) => {
      if (error != null) {
          return console.error(error);
      }
      console.log(`gRPC listening on ${ port }`);
    },
  );

  server.start();
};

startServer();
