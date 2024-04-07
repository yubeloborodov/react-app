import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import css from './index.module.scss';

import App from "./App";

render(
<BrowserRouter>
  <App/>
</BrowserRouter>,
document.getElementById('root'))
