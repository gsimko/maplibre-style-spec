// Note: Do not inherit from Error. It breaks when transpiling to ES5.

export class ValidationError {
    message: string;
    identifier: string;
    line: number;

    constructor(key: string, value: any & {
        __line__: number;
    }, message: string, identifier?: string | null) {
        this.message = (key ? `${key}: ` : '') + message;
        if (identifier) this.identifier = identifier;

        if (value !== null && value !== undefined && value.__line__) {
            this.line = value.__line__;
        }
    }
}
