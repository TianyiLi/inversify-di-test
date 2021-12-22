export interface IServiceB {
  getString(): string
  getAString(): Promise<string>
  getAjaxString(): Promise<string>
}

export const IServiceBKey = 'ServiceB'
