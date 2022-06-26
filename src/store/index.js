import { createStore } from 'redux';

const mobilew = 1024;

const firstState = {
    page: 'home',
    photoId: 'photoH',
    photoA: '',
    id: 'descriptionH',
    nextId: 'PageH'



}


const pageReducer = (state = firstState, action) => {

    if (action.type === 'home') {
        switch (state.page) {
            case 'about':
                return {
                    page: 'home',
                    photoId: 'photoH',
                    photoA: window.screen.width > mobilew ? 'photoATH 2s' : '',
                    id: 'descriptionH',
                    nextId: 'PageH'

                }
            case 'project':
                return {
                    page: 'home',
                    photoId: 'photoH',
                    photoA: window.screen.width > mobilew ? 'photoPTH 2s' : '',
                    id: 'descriptionH',
                    nextId: 'PageH'
                }
            case 'edu':
                return {
                    page: 'home',
                    photoId: 'photoH',
                    photoA: window.screen.width > mobilew ? 'photoETH 2s' : '',
                    id: 'descriptionH',
                    nextId: 'PageH'
                }
            case 'contact':
                return {
                    page: 'home',
                    photoId: 'photoH',
                    photoA: window.screen.width > mobilew ? 'photoCTH 2s' : '',
                    id: 'descriptionH',
                    nextId: 'PageH'
                }


        }
    }


    if (action.type === 'about') {
        console.log('about animation')
        switch (state.page) {
            case 'home':
                return {
                    page: 'about',
                    photoId: 'photoA',
                    photoA: window.screen.width > mobilew ? 'photoHTA 2s' : '',
                    id: 'descriptionA',
                    nextId: 'PageA'

                };


            case 'project':
                return {
                    page: 'about',
                    photoId: 'photoA',
                    photoA: window.screen.width > mobilew ? 'photoPTA 2s' : '',
                    id: 'descriptionA',
                    nextId: 'PageA'
                }

            case 'edu':
                return {
                    page: 'about',
                    photoId: 'photoA',
                    photoA: window.screen.width > mobilew ? 'photoETA 2s' : '',
                    id: 'descriptionA',
                    nextId: 'PageA'
                }
            case 'contact':
                return {
                    page: 'about',
                    photoId: 'photoA',
                    photoA: window.screen.width > mobilew ? 'photoCTA 2s' : '',
                    id: 'descriptionA',
                    nextId: 'PageA'
                }
        }



    }

    if (action.type === 'project') {
        console.log('enter edu page');
        switch (state.page) {
            case 'home':
                return {
                    page: 'project',
                    photoId: 'photoP',
                    photoA: window.screen.width > mobilew ? 'photoHTP 2s' : '',
                    id: 'descriptionP',
                    nextId: 'PageP'

                }
            case 'about':
                return {
                    page: 'project',
                    photoId: 'photoP',
                    photoA: window.screen.width > mobilew ? 'photoATP 2s' : '',
                    id: 'descriptionP',
                    nextId: 'PageP'
                }
            case 'edu':
                return {
                    page: 'project',
                    photoId: 'photoP',
                    photoA: window.screen.width > mobilew ? 'photoETP 2s' : '',
                    id: 'descriptionP',
                    nextId: 'PageP'
                }
            case 'contact':
                return {
                    page: 'project',
                    photoId: 'photoP',
                    photoA: window.screen.width > mobilew ? 'photoCTP 2s' : '',
                    id: 'descriptionP',
                    nextId: 'PageP'
                }
        }



    }

    if (action.type === 'edu') {
        console.log('enter edu page');
        switch (state.page) {
            case 'home':
                return {
                    page: 'edu',
                    photoId: 'photoE',
                    photoA: window.screen.width > mobilew ? 'photoATE 2s' : '',
                    id: 'descriptionE',
                    nextId: 'PageE'

                }
            case 'about':
                return {
                    page: 'edu',
                    photoId: 'photoE',
                    photoA: window.screen.width > mobilew ? 'photoATE 2s' : '',
                    id: 'descriptionE',
                    nextId: 'PageE'
                }
            case 'project':
                return {
                    page: 'edu',
                    photoId: 'photoE',
                    photoA: window.screen.width > mobilew ? 'photoPTE 2s' : '',
                    id: 'descriptionE',
                    nextId: 'PageE'
                }
            case 'contact':
                return {
                    page: 'edu',
                    photoId: 'photoE',
                    photoA: window.screen.width > mobilew ? 'photoCTE 2s' : '',
                    id: 'descriptionE',
                    nextId: 'PageE'
                }
        }



    }


    if (action.type === 'contact') {
        console.log('enter edu page');
        switch (state.page) {
            case 'home':
                return {
                    page: 'contact',
                    photoId: 'photoC',
                    photoA: window.screen.width > mobilew ? 'photoHTC 2s' : '',
                    id: 'descriptionC',
                    nextId: 'PageC'

                }
            case 'about':
                return {
                    page: 'contact',
                    photoId: 'photoC',
                    photoA: window.screen.width > mobilew ? 'photoATC 2s' : '',
                    id: 'descriptionC',
                    nextId: 'PageC'

                }
            case 'project':
                return {
                    page: 'contact',
                    photoId: 'photoC',
                    photoA: window.screen.width > mobilew ? 'photoPTC 2s' : '',
                    id: 'descriptionC',
                    nextId: 'PageC'

                }
            case 'edu':
                return {
                    page: 'contact',
                    photoId: 'photoC',
                    photoA: window.screen.width > mobilew ? 'photoETC 2s' : '',
                    id: 'descriptionC',
                    nextId: 'PageC'

                }

        }



    }

    return state;

}


const store = createStore(pageReducer);

export default store;