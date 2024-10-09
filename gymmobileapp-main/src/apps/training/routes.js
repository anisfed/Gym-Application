import trainingIndex from "@/apps/training/pages/trainingIndex.vue";
import listExercice from "@/apps/training/pages/exercices/listeExercices/listExercice.vue";


const trainingRoutes = [
    {
        path: 'training',
        component: trainingIndex,
        name: 'trainingIndex',
    },
    {
        path: '/training/listexercices/:muscleName',
        component: listExercice,
        name: 'listExercice',
        props: true
    }
]

export default trainingRoutes;