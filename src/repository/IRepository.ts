interface IRepository<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<boolean>;
}