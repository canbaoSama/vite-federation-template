/// <reference types="vite/client" />
// vite-env.d.ts

// 声明 remote-ui 下的模块
declare module 'remote-ui/hello-world' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module 'remote-ui/i-button' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}