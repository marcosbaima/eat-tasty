import { container } from 'tsyringe';

import mailConfig from '@config/mail';
import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/Implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>('StorageProvider',DiskStorageProvider);

