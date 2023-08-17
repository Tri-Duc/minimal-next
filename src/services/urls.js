export default function urls() {
    const root = 'https://jsonplaceholder.typicode.com'
    const rootedu = 'http://hoangan.edu.test'


    const user = {
        list: root + '/users',
        detail: root + '/users/{id}'
    }

    const curriculum = {
        list : rootedu + '/api/curriculum'

    }

    return {
        root, rootedu,
        user,
        curriculum,
    }
}