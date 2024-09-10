package com.fullstack.bookmarkbackend.model;

import java.util.ArrayList;

public class Bookmark {
    private int id;
    private String url;
    private String name;
    private ArrayList<String> tags;

    public Bookmark(int id, String url, String name, ArrayList<String> tags)
    {
        this.id = id;
        this.url = url;
        this.name = name;
        this.tags = tags;
    }

    public Bookmark()
    {
        this.id = 0;
        this.url = "";
        this.name = "";
        this.tags = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getTags() {
        return tags;
    }

    public void setTags(ArrayList<String> tags) {
        this.tags = tags;
    }

    public void addTag(String tag)
    {
        this.tags.add(tag);
    }

    public boolean removeTag(String tag)
    {
        return this.tags.remove(tag);
    }
}
