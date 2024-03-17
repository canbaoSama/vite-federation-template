/// <reference types="vite/client" />
// vite-env.d.ts

// 声明 virtual:__federation__ 模块
declare module 'virtual:__federation__' {
    // 根据实际情况可能需要调整函数的返回类型和参数类型
    export function __federation_method_getRemote(
        remoteName: string,
        exposedModule: string
    ): Promise<any>;

    export function __federation_method_unwrapDefault(mod: any): any;
    export function __federation_method_setRemote(remoteName: string, options: { url: any, format: string, from: string }): any
}
