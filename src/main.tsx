import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.tsx'
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
  inputsCustomizations
} from './theme/shared-theme/customizations';
import AppTheme from './theme/shared-theme/AppTheme.tsx';
const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
  ...inputsCustomizations
};
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTheme themeComponents={xThemeComponents}>
    <App />
    </AppTheme>
  </StrictMode>,
)
