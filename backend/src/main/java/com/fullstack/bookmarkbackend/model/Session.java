package com.fullstack.bookmarkbackend.model;

import java.util.ArrayList;

public class Session {
    private ArrayList<Bookmark> bookmarks;

    public Session() {
        bookmarks = new ArrayList<>();
    }

    public ArrayList<Bookmark> getBookmarks() {
        return bookmarks;
    }

    public void setBookmarks(ArrayList<Bookmark> bookmarks) {
        this.bookmarks = bookmarks;
    }

    //TODO: Fix a better ID-system
    private boolean isIdUnique(int id)
    {
        for (Bookmark bookmark : bookmarks)
        {
            if (bookmark.getId() == id) return false;
        }
        return true;
    }

    private int createUniqueId()
    {
        int max = 0;
        for (Bookmark bookmark : bookmarks)
        {
            if (bookmark.getId() > max) max = bookmark.getId();
        }
        return max + 1;
    }

    public Bookmark addBookmark(Bookmark bookmark) {

        bookmark.setId(createUniqueId());
        bookmarks.add(bookmark);
        return bookmark;
    }

    public boolean removeBookmark(int id) {
        return bookmarks.removeIf(bookmark -> bookmark.getId() == id);
    }




}
