export const environment = {
  production: true,

  apis: {
    nodes: 'https://testnodes.wavesnodes.com',
    rest: 'https://nodes-testnet.wavesnodes.com',
    contractAddress: '3N1eyWNffhxPCmYBWBdnWbhmAVAVjkTEqY5',
    geo: 'https://waves-challenge-backend.herokuapp.com/',
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
