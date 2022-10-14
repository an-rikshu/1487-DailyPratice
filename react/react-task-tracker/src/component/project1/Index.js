import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '.APP';
import reportwebVitals from '.reportWebVitals';

const root = ReactDOM.createRoot
(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
reportwebVitals();


export default Index;