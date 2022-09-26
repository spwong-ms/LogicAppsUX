import dataMapReducer from './DataMapSlice';
import modalReducer from './ModalSlice';
import notificationReducer from './NotificationSlice';
import panelReducer from './PanelSlice';
import schemaReducer from './SchemaSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    schema: schemaReducer,
    panel: panelReducer,
    modal: modalReducer,
    dataMap: dataMapReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
