import { container } from 'tsyringe';

import mailConfig from '@config/mail';
import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/Implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';
import SesMailProvider from './MailProvider/implementations/SesMailProvider';

import IMailTemplateProvider from './MailTampleteProvider/models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './MailTampleteProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>('StorageProvider',DiskStorageProvider);
container.registerSingleton<IMailTemplateProvider>('MailTemplateProvider',HandlebarsMailTemplateProvider);
container.registerInstance<IMailProvider>('MailProvider',
mailConfig.driver=='ethereal' ? container.resolve(EtherealMailProvider) : container.resolve(SesMailProvider),);
