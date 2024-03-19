import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Item {
  id: number;
  qtd: number;
  name: string;
}

interface State {
  items: Item[];
}

const INITIAL_STATE: State = {
  items: [
    {
      id: 1,
      name: "Hamburguer",
      qtd: 1,
    },
    {
      id: 2,
      name: "Coca Lata",
      qtd: 1,
    },
    {
      id: 3,
      name: "Batata Rustica",
      qtd: 1,
    },
  ],
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: INITIAL_STATE,
  reducers: {
    removeItem: (state, { payload }: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
    addItem: (state, { payload: item }: PayloadAction<Item>) => {
      state.items.push(item);
    },
  },
});

export default orderSlice.reducer; //state

export const { removeItem, addItem } = orderSlice.actions;
