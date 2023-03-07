export class AddValue {
    static readonly type = '[AppComponent] AddValue';
    constructor(public value: string){}
}

export class RemoveValue {
    static readonly type = '[AppComponent] RemoveValue';
    constructor(public value: string){}
}

