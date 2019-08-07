export const INITIAL_FETCH = 'INITIAL_FETCH';

export function getInitialFeatch(){
    return {
        type: INITIAL_FETCH,
        payload: {name: 'Rodrigo Pereira'}
    }
}