/* eslint-disable header/header */

import type { EndpointOption } from './types.js';

export const firelily: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'Test',
    providers: {
      firelily: 'wss://testchain.firelily.net/ws'
    },
    text: 'TestChain',
    ui: {
      color: '#ebdc0c',
      identityIcon: 'substrate'
    }
  },
  {
    info: 'Dev',
    providers: {
      firelily: 'wss://devchain.firelily.net/ws'
    },
    text: 'DevChain',
    ui: {
      color: '#e88710',
      identityIcon: 'substrate'
    }
  }
];
