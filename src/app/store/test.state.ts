import { Action, State, StateContext } from "@ngxs/store";
import { AddValue, RemoveValue } from "./test.actions";
import { StateModel } from "./test.model";

@State<StateModel>({
    name: 'test',
    defaults: {
        values: [],
    }
})

export class TestState {
    @Action(AddValue)
    addValue(ctx: StateContext<StateModel>, action: AddValue): void {
        const state = ctx.getState();
        if(!state.values.includes(action.value)) {
            ctx.patchState({values: [...state.values, action.value]})
        }
    }

    @Action(RemoveValue)
    removeValue(ctx: StateContext<StateModel>, action: RemoveValue): void {
        const state = ctx.getState();
        ctx.patchState({values: [...state.values.filter(item => item !== action.value)]})
    }
}
