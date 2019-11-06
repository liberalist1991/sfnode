import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './containers';

async function render(ctx, data) {
    const content = renderToString(<App />);
    return {
        ssr_content: content,
        ssr_state: {}
    };
}

export default render;
