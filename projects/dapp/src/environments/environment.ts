// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apis: {
    nodes: 'https://testnodes.wavesnodes.com',
    rest: 'https://nodes-testnet.wavesnodes.com',
    // contractAddress: '3MvqnYLwBErxGtKzeEjgWgr2RXgniokicR2'
    contractAddress: '3N1eyWNffhxPCmYBWBdnWbhmAVAVjkTEqY5',
    geo: 'http://localhost:3000',
    googleMaps: 'AIzaSyACN_pRwBJA4Vqb3PMOCXTJCXnUtbeTXgU'
  },

  // Routing constants on page
  routing: {
    listing: 'listing',
    entity: 'entity/:entityId',
    application: '',
    about: 'about',
    applyGrant: 'apply-grant/:entityId',
    setting: 'settings',
    create: 'create',
    stylesheet: 'stylesheet'
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
