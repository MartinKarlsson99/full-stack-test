package com.fullstack.bookmarkbackend.controller;

import com.fullstack.bookmarkbackend.model.Bookmark;
import com.fullstack.bookmarkbackend.service.UserService;
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

    @DeleteMapping("/deletebookmark")
    public ResponseEntity<Boolean> deleteBookmark(@RequestBody Bookmark bookmark)
    {
        boolean success = userService.deleteBookmark(bookmark);
        return new ResponseEntity<>(success, HttpStatus.NO_CONTENT);
    }

    @PutMapping("/edit")
    public ResponseEntity<Boolean> editBookmark(@RequestBody Bookmark bookmark)
    {
        boolean success = userService.updateBookmark(bookmark);
        return new ResponseEntity<>(success, HttpStatus.NO_CONTENT);
    }

}

