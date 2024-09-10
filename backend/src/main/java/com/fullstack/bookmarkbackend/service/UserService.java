package com.fullstack.bookmarkbackend.service;

import com.fullstack.bookmarkbackend.model.Bookmark;
import com.fullstack.bookmarkbackend.model.Session;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService {

    private Session session;

    public UserService(Session session)
    {
        this.session = session;
    }

    public UserService()
    {
        this.session = new Session();
    }

    public ArrayList<Bookmark> getUserBookmarks()
    {
        return session.getBookmarks();
    }

    public Bookmark addBookmark(Bookmark bookmark)
    {
        return session.addBookmark(bookmark);
    }

    public Bookmark getBookmarkById(int id)
    {
        for (Bookmark bookmark : getUserBookmarks())
        {
            if (bookmark.getId() == id)
            {
                return bookmark;
            }
        }
        return null;
    }

    public boolean updateBookmark(Bookmark alteredBookmark)
    {
        ArrayList<Bookmark> bookmarks = getUserBookmarks();
        Bookmark oldBookmark = getBookmarkById(alteredBookmark.getId());

        boolean success = bookmarks.remove(oldBookmark);
        if (success) {
            bookmarks.add(alteredBookmark);
            session.setBookmarks(bookmarks);
            return true;
        }
        return false;
    }

    public Bookmark createBookmark(int id, String url, String name, ArrayList<String> tags)
    {
        return new Bookmark(id, url, name, tags);
    }

    public boolean deleteBookmark(Bookmark bookmark)
    {
        return session.removeBookmark(bookmark.getId());
    }

}
