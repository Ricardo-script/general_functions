import React, { useReducer } from 'react';

const [, forceUpdate] = useReducer(x => x + 1, 0);

//uso:
forceUpdate();