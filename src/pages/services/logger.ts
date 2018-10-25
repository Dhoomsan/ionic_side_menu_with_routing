import { Injectable } from '@angular/core';
/**
 * The possible log levels.
 */
export enum LogLevel {
    Error,
    Warning,
    Info,
    Debug,
  }
  @Injectable()
export class Logger {

  constructor() {}

  /**
   * Logs messages or objects  with the debug level.
   * Works the same as console.log().
   */
  public debug(...objects: any[]) {
    this.log(console.log, LogLevel.Debug, objects);
  }

  /**
   * Logs messages or objects  with the info level.
   * Works the same as console.info().
   */
  public info(...objects: any[]) {
    this.log(console.info, LogLevel.Info, objects);
  }

  /**
   * Logs messages or objects  with the warning level.
   * Works the same as console.warn().
   */
  public warn(...objects: any[]) {
    this.log(console.warn, LogLevel.Warning, objects);
  }

  /**
   * Logs messages or objects  with the error level.
   * Works the same as console.error().
   */
  public error(...objects: any[]) {
    this.log(console.error, LogLevel.Error, objects);
  }

  private log(func: Function, level: LogLevel, objects: any[]) {
    const env = (<any>window) || 'development';
    if (env !== 'production' || (env === 'production' && level === LogLevel.Error)) {
      func.apply(console, objects);
    }
  }

}
