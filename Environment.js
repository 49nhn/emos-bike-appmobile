const yourIP = 'Your Local IP Address etc 192.168.1.64'; // See the docs https://docs.abp.io/en/abp/latest/Getting-Started-React-Native?Tiered=No
const port = 44305;
const apiUrl = `http://${yourIP}:${port}`;

const ENV = {
  dev: {
    apiUrl,
    appUrl: `exp://${yourIP}:19000`,
    oAuthConfig: {
      issuer: apiUrl,
      clientId: 'Bike_Mobile',
      scope: 'offline_access Bike',
    },
    localization: {
      defaultResourceName: 'Bike',
    },
  },
  prod: {
    apiUrl,
    appUrl: `exp://${yourIP}:19000`,
    oAuthConfig: {
      issuer: 'http://localhost:44347',
      clientId: 'Bike_Mobile',
      scope: 'offline_access Bike',
    },
    localization: {
      defaultResourceName: 'Bike',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
