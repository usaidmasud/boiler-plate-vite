import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface RootState {
  openModal: boolean;
  openModalSecondary: boolean;
  selectedKeys: string[];
  checkedKeys: string[];
  collapsed: boolean;
  openKeys: string[];
  authenticated: boolean;
  regionId: string;
}

const initialState: RootState = {
  openModal: false,
  openModalSecondary: false,
  selectedKeys: [],
  collapsed: false,
  openKeys: [],
  checkedKeys: [],
  authenticated: false,
  regionId: "",
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    toggleModalSecondary: (state, action: PayloadAction<boolean>) => {
      state.openModalSecondary = action.payload;
    },
    toggleSelectedKeys: (state, action: PayloadAction<string[]>) => {
      state.selectedKeys = action.payload;
    },
    toggleSetRegionId: (state, action: PayloadAction<string>) => {
      state.regionId = action.payload;
    },
    toggleCheckedKeys: (
      state,
      action: PayloadAction<{ key: string; checked: boolean }>,
    ) => {
      const { key, checked } = action.payload;
      if (checked) {
        state.checkedKeys = [...state.checkedKeys, key];
      } else {
        state.checkedKeys = state.checkedKeys.filter(
          (selectedKey) => selectedKey !== key,
        );
      }
    },
    toggleClearAll: (state) => {
      state.checkedKeys = [];
    },
    toggleCheckedBatchKeys: (
      state,
      action: PayloadAction<{ key: string; checked: boolean; keys?: string[] }>,
    ) => {
      const { key, keys, checked } = action.payload;
      if (checked) {
        state.checkedKeys = [...state.checkedKeys, key, ...keys!];
      } else {
        state.checkedKeys = state.checkedKeys.filter((selectedKey) =>
          keys!.includes(selectedKey),
        );
        state.checkedKeys = state.checkedKeys.filter(
          (selectedKey) => selectedKey !== key,
        );
      }
    },

    toggleOpenKeys: (state, action: PayloadAction<string[]>) => {
      state.openKeys = action.payload;
    },
    toggleCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleModal,
  toggleModalSecondary,
  toggleSelectedKeys,
  toggleCollapsed,
  toggleOpenKeys,
  toggleCheckedKeys,
  toggleCheckedBatchKeys,
  toggleClearAll,
  toggleSetRegionId,
} = rootSlice.actions;

export default rootSlice.reducer;
