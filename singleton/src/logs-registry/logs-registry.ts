export class LogsRegistry {
  // eslint-disable-next-line
  private static instance: LogsRegistry
  public logs: string[] = []

  // eslint-disable-next-line
  private constructor() {}

  public static getInstance(): LogsRegistry {
    if (!LogsRegistry.instance) {
      LogsRegistry.instance = new LogsRegistry()
    }

    return LogsRegistry.instance
  }

  public register(message: string): void {
    const currentTime = new Date().toISOString()

    this.logs.push(`${currentTime} - ${message}`)
  }

  public list(): string[] {
    return this.logs
  }
}
