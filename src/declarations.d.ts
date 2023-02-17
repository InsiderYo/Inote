import 'react-redux';
import store from './store';

declare global {
  type State = ReturnType<typeof store.getState>;
  type Action<T extends any = any> = {
    type: string;
    payload?: T;
  };
}

declare module 'react-redux' {
  export function useSelector<TSelected = unknown>(
    selector: (
      state: State,
      equalityFn?: (left: TSelected, right: TSelected) => boolean
    ) => TSelected
  ): TSelected;
}
