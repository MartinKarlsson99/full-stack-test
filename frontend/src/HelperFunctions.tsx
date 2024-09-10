
export async function createBookmark(url:string, name:string, tags: string[]) {
    return await fetch('http://localhost:8080/createbookmark', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Allow-Credentials': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 1,
            url: url,
            name: name,
            tags: tags
        })
    })
}


export async function getBookmarks()
{
    return await fetch('http://localhost:8080/bookmarks', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Allow-Credentials': '*'
        }
    })
}