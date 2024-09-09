package com.fullstack.bookmarkbackend.controller;

import com.fullstack.bookmarkbackend.model.Bookmark;
import com.fullstack.bookmarkbackend.service.UserService;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/")
public class UserController {

    private UserService userService;

    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    public UserController()
    {
        this.userService = new UserService();
    }

    @GetMapping("/bookmarks")
    public ArrayList<Bookmark> getBookMarks()
    {
        return userService.getUserBookmarks();
    }

    @GetMapping("/bookmark")
    public Bookmark getBookmarkById(@RequestParam int id)
    {
        return userService.getBookmarkById(id);
    }

    @PostMapping("/createbookmark")
    public ResponseEntity<Bookmark> addBookmark(@RequestBody Bookmark bookmark)
    {
        Bookmark addedBookmark = userService.addBookmark(bookmark);
        if (addedBookmark != null)
        {
            return new ResponseEntity<>(addedBookmark, HttpStatus.CREATED);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping
    public ResponseEntity<Bookmark> deleteBookmark(@RequestBody Bookmark bookmark)
    {
        Bookmark deletedBookmark = userService.deleteBookmark(bookmark);
        return new ResponseEntity<>(deletedBookmark, HttpStatus.NO_CONTENT);
    }

}

