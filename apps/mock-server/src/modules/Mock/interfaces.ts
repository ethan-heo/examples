export interface MockData<Options = unknown, Result = unknown> {
  readonly options: Options | undefined;
  set(...args: any[]): this;
  valueOf(): Result;
}
