interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee'],
  tenantName: 'Supplier',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read tool information',
    'Create, read and edit rental',
    'Create and read review',
    'Read store information',
  ],
  ownerAbilities: [
    'Manage store information',
    'Manage tool information',
    'Manage supplier information',
    'Manage rental information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/609e2de5-2419-419e-906f-952a93374c25',
};
