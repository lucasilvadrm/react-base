/* eslint-disable no-console */
import * as types from '../types';

const initialState = {
  botao_clicado: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS:
      console.log('Sucesso!');
      return { ...state, botao_clicado: !state.botao_clicado };
    case types.BOTAO_CLICADO_FAILURE:
      console.log('Deu erro!');
      return state;
    case types.BOTAO_CLICADO_REQUEST:
      console.log('Estou fazendo a requisição');
      return state;
    default:
      return state;
  }
};

export default reducer;
