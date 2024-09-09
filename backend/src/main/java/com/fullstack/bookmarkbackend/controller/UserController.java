package com.fullstack.bookmarkbackend.controller;

import com.fullstack.bookmarkbackend.model.BookMark;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/")
public class UserController {

    @GetMapping("/hello")
    public BookMark getMessage() {
        return new BookMark("hej.se", "good website", new ArrayList<>());
    }

    @GetMapping("/hi")
    public String getOtherMessage() {
        return "Hi!";
    }

}

