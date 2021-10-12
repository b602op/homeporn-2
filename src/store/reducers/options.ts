type OptsType = {
  name: string,
  command: string,
  mainBranch: string,
  time: number,
}

const initialState: { options: OptsType[] } = {
  options: []
};

function changeOptions(state = initialState, action: any) {
  switch (action.type) {
    case "CHANGE_OPTIONS":
      console.log('hello')
      const { options } = state;

      return { ...state, options: [...options, action.payload] };

    default:
      return state;
  }
}

export { changeOptions };