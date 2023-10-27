// export type UnitOfWork = {
//   sampleRepository: SampleRepository;
//   begin: () => void;
//   commit: () => Promise<unknown>;
// };

// export const makeUnitOfWork = async (dependencies: {
//   logger: Logger;
//   cacher: Cacher;
// }): Promise<UnitOfWork> => {
//   const { logger, cacher } = dependencies;

//   const mongoClient = await getDbClient();
//   const db = await makeDb();

//   const sharedDependencies = { db, logger, cacher };

//   const userRepository = makeSampleRepository(sharedDependencies);

//   const session = mongoClient.startSession();

//   return {
//     userRepository,
//     appRepository,
//     begin: () => session.startTransaction,
//     commit: async () => session.commitTransaction,
//   };
// };
