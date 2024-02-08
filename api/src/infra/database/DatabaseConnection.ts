export interface DatabaseConnection {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  instance: any;
}
