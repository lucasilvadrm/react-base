const initialState = {
  botao_clicado: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO':
      return { ...state, botao_clicado: !state.botao_clicado };
    default:
      return state;
  }
};

export default reducer;
