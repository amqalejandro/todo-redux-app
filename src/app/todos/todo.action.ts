import { createAction, props } from '@ngrx/store';

export const crear= createAction(
    '[TODO] Crea Todo',
    props<{texto:string}>()
    );

    export const toggle= createAction(
        '[TODO] Toggle Todo',
        props<{id:number}>()
    );    

    export const editar= createAction(
        '[TODO] edita Todo',
        props<{id:number, texto: string}>()
    );    

    export const borrar= createAction(
        '[TODO] borrar Todo',
        props<{id:number}>()
    );    

    export const toogleAll= createAction(
        '[TODO] toogleAll Todo',
        props<{completado:boolean}>()
    ); 

    export const borrarCompletados = createAction('[Filtro] borrar completado');
