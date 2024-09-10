import {Bookmark} from "./misc.tsx";

export async function createBookmark(bookmark: Bookmark) {
    return await fetch('http://localhost:8080/createbookmark', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Allow-Credentials': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: bookmark.id,
            url: bookmark.url,
            name: bookmark.name,
            tags: bookmark.tags
        })
    })
}

export async function editBookmark(bookmark: Bookmark)
{
    return await fetch('http://localhost:8080/edit', {
        method: 'PUT',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Allow-Credentials': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookmark)
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

export async function deleteBookmark(id: number)
{
    return await fetch('http://localhost:8080/deletebookmark', {
        method: 'DELETE',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Allow-Credentials': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            url: '',
            name: '',
            tags: []
        })
    })
}

export function filterBookmarksByTags(bookmarks: Bookmark[], tags: string[]): Bookmark[] {
    let temp: Bookmark[] = [];

    for (const bookmark of bookmarks) {
        for (const tag of tags) {
            const regex = new RegExp(`\\b${tag}`, 'i');

            if (temp.indexOf(bookmark) === -1 && bookmark.tags.some(bTag => regex.test(bTag))) {
                temp.push(bookmark);
            }
        }
    }
    return temp;
}


