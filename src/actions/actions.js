export const RECIPES_LIST = 'RECIPES_LIST ';
export const RECIPES_LIST_ADD = 'RECIPES_LIST_ADD';

export const recipesList = () => ({
   type: RECIPES_LIST,
   data: [
      {
         id:1,
         title: 'Hello1'
      },
      {
         id:2,
         title: 'Hello2'
      }
   ]
});

export const recipesAdd = () => ({
   type: RECIPES_LIST_ADD,
   data: {
      id: Math.floor(Math.random() * 100 + 3),
      title: 'A newly added recipe'
   }
});

